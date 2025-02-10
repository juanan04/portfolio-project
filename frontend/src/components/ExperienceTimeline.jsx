import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
        id: 1,
        title: "Help Desk",
        company: "Tech Support",
        period: "2022",
        description: "Resolviendo problemas técnicos y asistencia a usuarios.",
    },
    {
        id: 2,
        title: "Junior Developer",
        company: "Software Inc.",
        period: "2024",
        description: "Desarrollo de aplicaciones web con React y Spring Boot.",
    },
];

const ExperienceTimeline = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <section className="experience">
            <div className="flex justify-center gap-8">
                {experiences.map((exp) => (
                    <button
                        key={exp.id}
                        onClick={() => setSelectedJob(exp)}
                        className="text-white hover:text-blue-400"
                    >
                        {exp.title} ({exp.period})
                    </button>
                ))}
            </div>
            {selectedJob && <ExperienceCard job={selectedJob} />}
        </section>
    );
};

export default ExperienceTimeline;
