import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Petición al backend
        fetch("http://localhost:8080/api/projects")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching projects: ", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-[#1F1F1F] text-[#EAEAEA] flex flex-col">
            <Navbar />
            <div className="min-h-screen bg-[#1F1F1F] text-white flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-16">PROJECTS</h1>

                {/* Mostrar mensaje si aún está cargando */}
                {loading ? (
                    <p className="mt-8 text-gray-400">Cargando proyectos...</p>
                ) : projects.length === 0 ? (
                    <p className="mt-8 text-gray-400 italic">
                        "Los grandes proyectos no se construyen de la noche a la mañana"
                    </p>
                ) : (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
