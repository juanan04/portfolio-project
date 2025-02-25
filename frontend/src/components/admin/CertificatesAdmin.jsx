import { useState, useEffect } from "react";
import "./CertificatesAdmin.css"; // Asegúrate de crear este archivo CSS
import { getHeaders } from "../../utils/api";

function CertificatesAdmin() {
    const [certificates, setCertificates] = useState([]);
    const [newCertificate, setNewCertificate] = useState({
        title: "",
        issuer: "",
        dateObtained: "",
        imageUrl: ""
    });
    const API_URL = "http://localhost:8080/api/certificates";

    console.log(getHeaders());

    useEffect(() => {
        fetch(API_URL, { headers: getHeaders() })
            .then((res) => res.json())
            .then((data) => setCertificates(data))
            .catch((error) => console.error("Error loading certificates:", error));
    }, []);

    const handleAddCertificate = async () => {
        if (!newCertificate.title || !newCertificate.issuer) return;
        const response = await fetch(API_URL, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(newCertificate),
        });
        if (response.ok) {
            const addedCertificate = await response.json();
            setCertificates([...certificates, addedCertificate]);
            setNewCertificate({ title: "", issuer: "", dateObtained: "", imageUrl: "" });
        }
    };

    const handleDeleteCertificate = async (id) => {
        await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: getHeaders() });
        setCertificates(certificates.filter((cert) => cert.id !== id));
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Manage Certificates</h2>
            <div className="certificates-grid">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card">
                        <div className="certificate-header">
                            <h3>{cert.title}</h3>
                            <button className="delete-btn" onClick={() => handleDeleteCertificate(cert.id)}>✖</button>
                        </div>
                        <p><strong>Issued by:</strong> {cert.issuer}</p>
                        <p><strong>Obtained:</strong> {cert.dateObtained}</p>
                        <p><a href={cert.imageUrl} target="_blank" rel="noopener noreferrer">View Credential</a></p>
                    </div>
                ))}
            </div>
            <div className="add-certificate-form">
                <h3>Add New Certificate</h3>
                <input type="text" placeholder="Certificate Title" value={newCertificate.title} onChange={(e) => setNewCertificate({ ...newCertificate, title: e.target.value })} />
                <input type="text" placeholder="Issuing Organization" value={newCertificate.issuer} onChange={(e) => setNewCertificate({ ...newCertificate, issuer: e.target.value })} />
                <input type="date" placeholder="Date Obtained" value={newCertificate.dateObtained} onChange={(e) => setNewCertificate({ ...newCertificate, dateObtained: e.target.value })} />
                <input type="text" placeholder="Image Url" value={newCertificate.imageUrl} onChange={(e) => setNewCertificate({ ...newCertificate, imageUrl: e.target.value })} />
                <button className="add-btn" onClick={handleAddCertificate}>➕ Add Certificate</button>
            </div>
        </div>
    );
}

export default CertificatesAdmin;