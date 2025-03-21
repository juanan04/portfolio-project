// import AboutIntro from "../components/AboutIntro";
// import Skills from "../components/Skills";
// import ExperienceTimeline from "../components/ExperienceTimeline";
// import Certificates from "../components/Certificates";
import Navbar from "../components/Navbar";
import imgProfile from "../assets/images/me_tank.jpg";
import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";

// const About = () => {
//     const [experiences, setExperiences] = useState([]);
//     const [certificates, setCertificates] = useState([]);

//     useEffect(() => {
//         fetch("http:localhost:8080/api/experiences")
//             .then((res) => res.json())
//             .then((data) => setExperiences(data))
//             .catch((error) => console.error("Error loading experiences: ", error));

//         fetch("http://localhost:8080/api/certificates")
//             .then((res) => res.json())
//             .then((data) => setCertificates(data))
//             .catch((error) => console.error("Error loading certificates: ", error))
//     }, []);

const About = () => {
  // Simulación de datos de habilidades
  const skills = [
    { name: "Java", percentage: 58, color: "#FF4500" }, // Naranja rojizo
    { name: "JavaScript", percentage: 75, color: "#FFD700" }, // Amarillo
    { name: "React", percentage: 80, color: "#61DAFB" }, // Azul React
    { name: "Tailwind", percentage: 70, color: "#38BDF8" }, // Azul Tailwind
  ];

  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error loading experiences: ", error));

    fetch("http://localhost:8080/api/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((error) => console.error("Error loading certificates: ", error));
  }, []);

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-[#EAEAEA] flex flex-col bg-[radial-gradient(circle,_#2F2F2F_10%,_transparent_60%)]">
      <Navbar />
      {/* Sección de presentación */}
      <div className="container p-10 mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Imagen del perfil */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="bg-gray-700 h-64 w-64 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src={imgProfile}
              alt="2024 photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sección de texto */}
        <div className="w-full md:w-2/3 text-center md:text-left p-6">
          <h2 className="text-3xl font-bold text-[#EAEAEA]">Who I Am?</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Hola! Soy Juan Antonio, un apasionado de la tecnología y el
            desarrollo web. Me encanta construir aplicaciones que no solo
            funcionen bien, sino que también ofrezcan experiencias fluidas e
            intuitivas para los usuarios. Siempre estoy explorando nuevas
            tecnologías y aprendiendo sobre inteligencia artificial y
            ciberseguridad para llevar mis proyectos al siguiente nivel.
          </p>
        </div>
      </div>

      {/* Sección de Skills */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold text-[#EAEAEA]">SKILLS</h2>
        <div className="flex justify-center gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#2E2E2E] p-6 rounded-lg text-center shadow-md w-40"
            >
              <div className="relative w-24 h-24 mx-auto">
                <svg className="absolute w-full h-full">
                  {/* Círculo de fondo */}
                  <circle
                    className="text-gray-800 stroke-current"
                    strokeWidth="5"
                    fill="transparent"
                    r="35"
                    cx="50%"
                    cy="50%"
                  />
                  {/* Círculo de progreso */}
                  <circle
                    className="stroke-current transition-all duration-500"
                    stroke={skill.color} // Color dinámico
                    strokeWidth="5"
                    strokeDasharray="220"
                    strokeDashoffset={220 - (220 * skill.percentage) / 100}
                    fill="transparent"
                    r="35"
                    cx="50%"
                    cy="50%"
                  />
                </svg>
                <span className="text-xl font-semibold text-[#EAEAEA] absolute inset-0 flex items-center justify-center">
                  {skill.percentage}%
                </span>
              </div>
              <p className="mt-2 text-[#EAEAEA]">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="my-10 relative">
        <h2 className="text-3xl font-bold text-left pl-40 mb-8">EXPERIENCE</h2>
        <div className="relative flex justify-center items-center">
          {/* Línea central del timeline */}
          <div className="absolute w-3/4 h-1 bg-gray-600"></div>

          {/* Mapeo de experiencias */}
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative cursor-pointer text-center"
              onClick={() => setSelectedExperience(exp)}
            >
              {/* Línea vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-8 bg-gray-600"></div>

              {/* Contenedor de la experiencia */}
              <div className="bg-gray-800 text-white p-3 px-4 rounded-md text-sm mt-8 shadow-md hover:bg-gray-700 transition duration-300">
                <p className="font-bold">{exp.role}</p>
                <p className="text-xs text-gray-400">
                  {exp.start_date} - {exp.end_date || "Present"}
                </p>
              </div>
            </div>
          ))}

          <ExperienceCard
            experience={selectedExperience}
            onClose={() => selectedExperience(null)}
          />
        </div>
      </section>

      {/* Sección de Certificados */}
      <section className="my-15">
        <h2 className="text-3xl font-bold text-center">Certificates</h2>
        <div className="flex justify-center my-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 p-2 rounded-md text-white focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-800 p-5 rounded-lg w-60">
              <div className="bg-gray-600 h-40 rounded-md"></div>
              <h3 className="mt-3 font-bold">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.provider}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
