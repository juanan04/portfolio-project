import profile from "../assets/images/me_tank.jpg";

const AboutIntro = () => {
    return (
        <section className="about-intro flex flex-col md:flex-row items-center gap-8">
            <img
                src={profile}
                alt="Juan Antonio"
                className="w-48 h-48 md:w-60 md:h-60 rounded-lg object-cover shadow-lg"
            />
            <p className="text-lg text-gray-300 max-w-2xl">
                Soy un desarrollador Full-Stack apasionado por la tecnología y la
                creación de experiencias digitales intuitivas y eficientes. Siempre
                estoy en busca de nuevos desafíos y aprendizaje continuo.
            </p>
        </section>
    );
};

export default AboutIntro;
