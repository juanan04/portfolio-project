import { useState, useEffect } from "react";
import "./CertificatesAdmin.css"; // Asegúrate de crear este archivo CSS

function CertificatesAdmin() {
    const [certificates, setCertificates] = useState([]);
    const [newCertificate, setNewCertificate] = useState({
        name: "",
        issuingOrganization: "",
        issueDate: "",
        expirationDate: "",
        credentialId: "",
        credentialUrl: ""
    });
    const API_URL = "http://localhost:8080/api/certificates";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setCertificates(data))
            .catch((error) => console.error("Error loading certificates:", error));
    }, []);

    const handleAddCertificate = async () => {
        if (!newCertificate.name || !newCertificate.issuingOrganization) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCertificate),
        });
        if (response.ok) {
            const addedCertificate = await response.json();
            setCertificates([...certificates, addedCertificate]);
            setNewCertificate({ name: "", issuingOrganization: "", issueDate: "", expirationDate: "", credentialId: "", credentialUrl: "" });
        }
    };

    const handleDeleteCertificate = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        setCertificates(certificates.filter((cert) => cert.id !== id));
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Manage Certificates</h2>
            <div className="certificates-grid">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card">
                        <div className="certificate-header">
                            <h3>{cert.name}</h3>
                            <button className="delete-btn" onClick={() => handleDeleteCertificate(cert.id)}>✖</button>
                        </div>
                        <p><strong>Issued by:</strong> {cert.issuingOrganization}</p>
                        <p><strong>Issued:</strong> {cert.issueDate} - <strong>Expires:</strong> {cert.expirationDate}</p>
                        <p><a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">View Credential</a></p>
                    </div>
                ))}
            </div>
            <div className="add-certificate-form">
                <h3>Add New Certificate</h3>
                <input type="text" placeholder="Certificate Name" value={newCertificate.name} onChange={(e) => setNewCertificate({ ...newCertificate, name: e.target.value })} />
                <input type="text" placeholder="Issuing Organization" value={newCertificate.issuingOrganization} onChange={(e) => setNewCertificate({ ...newCertificate, issuingOrganization: e.target.value })} />
                <input type="date" placeholder="Issue Date" value={newCertificate.issueDate} onChange={(e) => setNewCertificate({ ...newCertificate, issueDate: e.target.value })} />
                <input type="date" placeholder="Expiration Date" value={newCertificate.expirationDate} onChange={(e) => setNewCertificate({ ...newCertificate, expirationDate: e.target.value })} />
                <input type="text" placeholder="Credential ID" value={newCertificate.credentialId} onChange={(e) => setNewCertificate({ ...newCertificate, credentialId: e.target.value })} />
                <input type="text" placeholder="Credential URL" value={newCertificate.credentialUrl} onChange={(e) => setNewCertificate({ ...newCertificate, credentialUrl: e.target.value })} />
                <button className="add-btn" onClick={handleAddCertificate}>➕ Add Certificate</button>
            </div>
        </div>
    );
}

export default CertificatesAdmin;