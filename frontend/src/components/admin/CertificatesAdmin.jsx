import { useState, useEffect } from "react";

function CertificatesAdmin() {
    const [certificates, setCertificates] = useState([]);
    const [newCertificate, setNewCertificate] = useState({ title: "", issuer: "", date: "" });
    const API_URL = "http://localhost:8080/api/certificates";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setCertificates(data))
            .catch((error) => console.error("Error loading certificates:", error));
    }, []);

    const handleAddCertificate = async () => {
        if (!newCertificate.title) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCertificate),
        });
        if (response.ok) {
            const addedCert = await response.json();
            setCertificates([...certificates, addedCert]);
            setNewCertificate({ title: "", issuer: "", date: "" });
        }
    };

    const handleDeleteCertificate = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setCertificates(certificates.filter((c) => c.id !== id));
    };

    return (
        <div>
            <h2>Manage Certificates</h2>
            <ul>
                {certificates.map((cert) => (
                    <li key={cert.id}>
                        {cert.title} - {cert.issuer}
                        <button onClick={() => handleDeleteCertificate(cert.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h3>Add Certificate</h3>
            <input
                type="text"
                placeholder="Title"
                value={newCertificate.title}
                onChange={(e) => setNewCertificate({ ...newCertificate, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Issuer"
                value={newCertificate.issuer}
                onChange={(e) => setNewCertificate({ ...newCertificate, issuer: e.target.value })}
            />
            <button onClick={handleAddCertificate}>Add</button>
        </div>
    );
}

export default CertificatesAdmin;
