const ExperienceCard = ({ job }) => {
    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-gray-400">{job.period}</p>
            <p className="mt-2">{job.description}</p>
        </div>
    );
};

export default ExperienceCard;
