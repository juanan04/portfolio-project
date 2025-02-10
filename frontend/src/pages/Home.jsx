import Navbar from "../components/Navbar";
import profile from "../assets/images/profile.png";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#1F1F1F] text-white flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <div className="flex flex-col lg:flex-row items-center justify-around flex-1 px-8 lg:px-24">
                {/* Sección de texto */}
                <div className="text-center lg:text-left space-y-5 max-w-lg">
                    <h3 className="text-[#00FFFF] font-semibold text-lg tracking-wider">
                        HI, I'M JUAN ANTONIO
                    </h3>
                    <h1 className="text-5xl font-bold leading-tight">
                        I'M A WEB DEVELOPER
                    </h1>
                    <p className="text-[#EAEAEA] text-lg">
                        Desarrollador Full-Stack apasionado por la tecnología y la creación
                        de experiencias digitales intuitivas y eficientes.
                    </p>
                    <button className="mt-4 px-6 py-3 text-lg font-semibold rounded-lg border border-white hover:bg-[#00A3FF] hover:border-[#00A3FF] transition-all duration-300 cursor-pointer">
                        VIEW MY PROJECTS
                    </button>
                </div>

                {/* Sección de imagen con degradado */}
                <div className="relative">
                    {/* Degradado circular detrás */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EAEAEA] to-transparent rounded-full w-120 h-120 lg:w-120 lg:h-120 mx-20  blur-3xl opacity-10"></div>

                    {/* Imagen */}
                    <img
                        src={profile}
                        alt="Juan Antonio"
                    />
                </div>

            </div>
        </div>
    );
};

export default Home;
