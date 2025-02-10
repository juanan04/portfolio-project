const CertificateCard = ({ certificate }) => {
    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <h3 className="text-white">{certificate.name}</h3>
            <p className="text-gray-400">{certificate.issuer}</p>
            <button className="mt-2 text-blue-400 hover:underline">
                Ver más
            </button>
        </div>
    );
};

export default CertificateCard;
