import Navbar from "../components/Navbar";
import profile from "../assets/images/profile.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    const email = "ja.aragon23@gmail.com";
    const phone = "+34 608 98 32 46";

    return (
        <div className="min-h-screen bg-[#1F1F1F] text-[#EAEAEA] flex flex-col">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#EAEAEA] to-transparent rounded-full blur-3xl opacity-10"></div>
            <Navbar />
            <div className="flex items-center justify-center">
                <div className="mt-20 p-8 bg-[#2E2E2E] rounded-2xl shadow-lg border-2 border-[#EAEAEA] w-[40em] flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                    {/* Imagen de perfil */}
                    <img src={profile} alt="Juan Antonio" className="w-48 rounded-lg" />

                    {/* Texto de contacto */}
                    <div className="flex-1">
                        <p className="text-gray-300 text-sm">
                            ¿Tienes un proyecto en mente o simplemente quieres conectar? Estoy disponible para colaboraciones, oportunidades laborales o simplemente charlar sobre tecnología y desarrollo web. ¡No dudes en enviarme un mensaje!
                        </p>

                        {/* Correo */}
                        <div className="flex items-center mt-4 space-x-2">
                            <FaEnvelope className="text-gray-400" />
                            <a href={`mailto:${email}`} className="text-gray-300 hover:text-[#EAEAEA] transition">{email}</a>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-center mt-2 space-x-2">
                            <FaPhone className="text-gray-400" />
                            <span>{phone}</span>
                        </div>

                        {/* Botón Contact Me */}
                        <div className="mt-4 flex justify-end">
                            <a
                                href={`mailto:${email}?subject=Contacto%20desde%20tu%20portafolio`}
                                className="bg-[#00A3FF] text-[#EAEAEA] px-4 py-2 rounded-lg hover:bg-[#0088CC] transition"
                            >
                                Contact Me!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
