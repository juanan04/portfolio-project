import { useState } from "react";
import CertificateCard from "./CertificateCard";

const certificates = [
    { id: 1, name: "React Developer", issuer: "Udemy" },
    { id: 2, name: "Spring Boot", issuer: "Coursera" },
];

const Certificates = () => {
    const [search, setSearch] = useState("");

    const filteredCerts = certificates.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="certificates">
            <input
                type="text"
                placeholder="Buscar certificado..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 rounded bg-gray-800 text-white"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
                {filteredCerts.map((cert) => (
                    <CertificateCard key={cert.id} certificate={cert} />
                ))}
            </div>
        </section>
    );
};

export default Certificates;
