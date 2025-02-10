import AboutIntro from "../components/AboutIntro";
import Skills from "../components/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Certificates from "../components/Certificates";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div className="min-h-screen bg-[#1F1F1F] text-[#EAEAEA] flex flex-col">
            <Navbar />
            <div className="about-container p-6">
                <AboutIntro />
                <h2 className="text-white text-2xl mt-6">Skills</h2>
                <Skills />
                <h2 className="text-white text-2xl mt-6">Experience</h2>
                <ExperienceTimeline />
                <h2 className="text-white text-2xl mt-6">Certificates</h2>
                <Certificates />
            </div>
        </div>
    );
};

export default About;
