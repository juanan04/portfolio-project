import { useState, useEffect } from "react";
import "./ProjectsAdmin.css"; // Asegúrate de crear este archivo CSS

function ProjectsAdmin() {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        technologies: [],
        repositoryUrl: "",
        liveDemoUrl: ""
    });
    const API_URL = "http://localhost:8080/api/projects";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    const handleAddProject = async () => {
        if (!newProject.title || !newProject.description) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProject),
        });
        if (response.ok) {
            const addedProject = await response.json();
            setProjects([...projects, addedProject]);
            setNewProject({ title: "", description: "", technologies: "", repositoryUrl: "", liveDemoUrl: "" });
        }
    };

    const handleDeleteProject = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setProjects(projects.filter((proj) => proj.id !== id));
    };

    const handleTechKeyPress = (e) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            setNewProject({
                ...newProject,
                technologies: [...newProject.technologies, e.target.value.trim()]
            });
            e.target.value = ""; // Limpiar el input después de agregar
        }
    };

    const removeTechnology = (tech) => {
        setNewProject({
            ...newProject,
            technologies: newProject.technologies.filter(t => t !== tech)
        });
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Manage Projects</h2>
            <div className="projects-grid">
                {projects.map((proj) => (
                    <div key={proj.id} className="project-card">
                        <div className="project-header">
                            <h3>{proj.title}</h3>
                            <button className="delete-btn" onClick={() => handleDeleteProject(proj.id)}>✖</button>
                        </div>
                        <p>{proj.description}</p>
                        <p><strong>Technologies:</strong> {proj.technologies}</p>
                        <div className="project-links">
                            {proj.repositoryUrl && <a href={proj.repositoryUrl} target="_blank" rel="noopener noreferrer">🔗 Repository</a>}
                            {proj.liveDemoUrl && <a href={proj.liveDemoUrl} target="_blank" rel="noopener noreferrer">🚀 Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="add-project-form">
                <h3>Add New Project</h3>
                <input type="text" placeholder="Title" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
                <textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}></textarea>
                <div className="tech-container">
                    <input type="text" placeholder="Add a technology and press Enter" onKeyDown={handleTechKeyPress} />
                    <div className="tech-tags">
                        {newProject.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                                {tech} <button onClick={() => removeTechnology(tech)}>✖</button>
                            </span>
                        ))}
                    </div>
                </div>

                <input type="text" placeholder="Repository URL" value={newProject.repositoryUrl} onChange={(e) => setNewProject({ ...newProject, repositoryUrl: e.target.value })} />
                <input type="text" placeholder="Live Demo URL" value={newProject.liveDemoUrl} onChange={(e) => setNewProject({ ...newProject, liveDemoUrl: e.target.value })} />
                <button className="add-btn" onClick={handleAddProject}>➕ Add Project</button>
            </div>
        </div>
    );
}

export default ProjectsAdmin;