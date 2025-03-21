import PropTypes from "prop-types";

const ExperienceCard = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Cerrar el popup al hacer clic fuera
    >
      <div
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Evita que el popup se cierre al hacer clic dentro
      >
        {/* Botón para cerrar el popup */}
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Nombre de la empresa o institución */}
        <h3 className="text-xl font-bold text-white">
          {experience.company_or_school}
        </h3>
        <p className="text-gray-400 text-sm">{experience.role}</p>

        {/* Periodo de tiempo */}
        <p className="text-gray-400 text-sm mt-1">
          {experience.start_date} - {experience.end_date || "Present"}
        </p>

        {/* Descripción */}
        <p className="text-gray-300 mt-3">{experience.description}</p>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company_or_school: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ExperienceCard;
