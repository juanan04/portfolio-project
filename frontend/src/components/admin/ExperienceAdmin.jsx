import { useState, useEffect } from "react";

function ExperienceAdmin() {
    const [experience, setExperience] = useState([]);
    const [newExperience, setNewExperience] = useState({ company: "", startDate: "", endDate: "" });
    const API_URL = "http://localhost:8080/api/experience";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setExperience(data))
            .catch((error) => console.error("Error loading experience:", error));
    }, []);

    const handleAddExperience = async () => {
        if (!newExperience.company) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExperience),
        });
        if (response.ok) {
            const addedExp = await response.json();
            setExperience([...experience, addedExp]);
            setNewExperience({ company: "", startDate: "", endDate: "" });
        }
    };

    const handleDeleteExperience = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setExperience(experience.filter((exp) => exp.id !== id));
    };

    return (
        <div>
            <h2>Manage Experience</h2>
            <ul>
                {experience.map((exp) => (
                    <li key={exp.id}>
                        {exp.company} ({exp.startDate} - {exp.endDate})
                        <button onClick={() => handleDeleteExperience(exp.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h3>Add Experience</h3>
            <input
                type="text"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            />
            <input
                type="date"
                value={newExperience.startDate}
                onChange={(e) => setNewExperience({ ...newExperience, startDate: e.target.value })}
            />
            <input
                type="date"
                value={newExperience.endDate}
                onChange={(e) => setNewExperience({ ...newExperience, endDate: e.target.value })}
            />
            <button onClick={handleAddExperience}>Add</button>
        </div>
    );
}

export default ExperienceAdmin;
