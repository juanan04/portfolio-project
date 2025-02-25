import { useState, useEffect } from "react";
import "./ExperienceAdmin.css";
import { getHeaders } from "../../utils/api";

function ExperienceAdmin() {
    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        companyOrSchool: "",
        role: "",
        startDate: "",
        endDate: "",
        description: ""
    });
    const API_URL = "http://localhost:8080/api/experiences";

    useEffect(() => {
        fetch(API_URL, { headers: getHeaders() })
            .then((res) => res.json())
            .then((data) => setExperiences(data))
            .catch((error) => console.error("Error loading experiences:", error));
    }, []);

    const handleAddExperience = async () => {
        if (!newExperience.companyOrSchool || !newExperience.role) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(newExperience),
        });
        if (response.ok) {
            const addedExperience = await response.json();
            setExperiences([...experiences, addedExperience]);
            setNewExperience({ companyOrSchool: "", role: "", startDate: "", endDate: "", description: "" });
        }
    };

    const handleDeleteExperience = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: getHeaders() });
        setExperiences(experiences.filter((exp) => exp.id !== id));
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Manage Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        <div className="experience-header">
                            <h3>{exp.role} at {exp.companyOrSchool}</h3>
                            <button className="delete-btn" onClick={() => handleDeleteExperience(exp.id)}>✖</button>
                        </div>
                        <p><strong>Period:</strong> {exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
            <div className="add-experience-form">
                <h3>Add New Experience</h3>
                <input type="text" placeholder="Company or School" value={newExperience.companyOrSchool} onChange={(e) => setNewExperience({ ...newExperience, companyOrSchool: e.target.value })} />
                <input type="text" placeholder="Position" value={newExperience.role} onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })} />
                <input type="date" placeholder="Start Date" value={newExperience.startDate} onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })} />
                <input type="date" placeholder="End Date" value={newExperience.endDate} onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })} />
                <textarea placeholder="Description" value={newExperience.description} onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}></textarea>
                <button className="add-btn" onClick={handleAddExperience}>➕ Add Experience</button>
            </div>
        </div>
    );
}

export default ExperienceAdmin;