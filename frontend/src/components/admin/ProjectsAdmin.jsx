import { useState, useEffect } from "react";

function ProjectsAdmin() {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: "", description: "", technologies: "" });
    const API_URL = "http://localhost:8080/api/projects";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    const handleAddProject = async () => {
        if (!newProject.title) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProject),
        });
        if (response.ok) {
            const addedProject = await response.json();
            setProjects([...projects, addedProject]);
            setNewProject({ title: "", description: "", technologies: "" });
        }
    };

    const handleDeleteProject = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setProjects(projects.filter((p) => p.id !== id));
    };

    return (
        <div>
            <h2>Manage Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.title} - {project.technologies}
                        <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h3>Add Project</h3>
            <input
                type="text"
                placeholder="Title"
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Technologies"
                value={newProject.technologies}
                onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
            />
            <button onClick={handleAddProject}>Add</button>
        </div>
    );
}

export default ProjectsAdmin;