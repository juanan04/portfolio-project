import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaProjectDiagram, FaCertificate, FaBriefcase, FaSignOutAlt } from "react-icons/fa";
import ProjectsAdmin from "../components/admin/ProjectsAdmin";
import CertificatesAdmin from "../components/admin/CertificatesAdmin";
import ExperienceAdmin from "../components/admin/ExperienceAdmin";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate()
    const [selectedSection, setSelectedSection] = useState(null);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate])

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Admin Panel</h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                </button>
            </div>

            {/* Menú de administración */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div
                    className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setSelectedSection("projects")}
                >
                    <FaProjectDiagram className="text-4xl mx-auto mb-2" />
                    <h2 className="text-xl font-semibold mb-2">Manage Projects</h2>
                </div>

                <div
                    className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setSelectedSection("certificates")}
                >
                    <FaCertificate className="text-4xl mx-auto mb-2" />
                    <h2 className="text-xl font-semibold mb-2">Manage Certificates</h2>
                </div>

                <div
                    className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setSelectedSection("experience")}
                >
                    <FaBriefcase className="text-4xl mx-auto mb-2" />
                    <h2 className="text-xl font-semibold mb-2">Manage Experience</h2>
                </div>
            </div>

            {/* Renderiza el componente seleccionado */}
            <div className="mt-8">
                {selectedSection === "projects" && <ProjectsAdmin />}
                {selectedSection === "certificates" && <CertificatesAdmin />}
                {selectedSection === "experience" && <ExperienceAdmin />}
            </div>
        </div>
    );
};

export default Admin;
