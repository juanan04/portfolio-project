import SkillCircle from "./SkillCircle";

const Skills = () => {
    const skills = [
        { skill: "JavaScript", percentage: 85 },
        { skill: "React", percentage: 80 },
        { skill: "Spring Boot", percentage: 75 },
        { skill: "Docker", percentage: 70 },
    ];

    return (
        <section className="skills flex flex-wrap justify-center gap-6">
            {skills.map((s, index) => (
                <SkillCircle key={index} skill={s.skill} percentage={s.percentage} />
            ))}
        </section>
    );
};

export default Skills;
