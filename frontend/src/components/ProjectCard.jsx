import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="bg-[#1F1F1F] border border-gray-600 rounded-lg shadow-lg overflow-hidden w-[350px]">
      <div className="bg-gray-200 h-40 flex items-center justify-center">
        <img
          src={`/projects/${image}`}
          alt={title}
          className="object-contain h-full w-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="text-gray-300 text-sm mt-2">{description}</p>

        <a
          href={liveLink || githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center bg-[#9B51E0] text-white py-2 rounded-lg hover:bg-[#7e3fbf] transition"
        >
          Go!
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};

export default ProjectCard;
