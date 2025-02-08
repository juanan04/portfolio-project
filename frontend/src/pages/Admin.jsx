import { useContext, useState } from "react"; // Agregar useState aquí
import AuthContext from "../context/AuthContext";
import Login from "../components/admin/Login";
import ProjectsAdmin from "../components/admin/ProjectsAdmin";
import CertificatesAdmin from "../components/admin/CertificatesAdmin";
import ExperienceAdmin from "../components/admin/ExperienceAdmin";

function Admin() {
    const { user, logout } = useContext(AuthContext);
    const [section, setSection] = useState("projects"); // Aquí usamos useState

    if (!user) {
        return <Login />;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Admin Panel</h1>
            <button onClick={logout}>Logout</button>

            <nav>
                <button onClick={() => setSection("projects")}>Projects</button>
                <button onClick={() => setSection("certificates")}>Certificates</button>
                <button onClick={() => setSection("experience")}>Experience</button>
            </nav>

            <div>
                {section === "projects" && <ProjectsAdmin />}
                {section === "certificates" && <CertificatesAdmin />}
                {section === "experience" && <ExperienceAdmin />}
            </div>
        </div>
    );
}

export default Admin;