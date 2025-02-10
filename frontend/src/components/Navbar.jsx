import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/JA_logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {

    const location = useLocation();

    // Función que verifica si estamos en la página actual
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-[#1F1F1F] text-white p-4 px-10 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-20" />
                </Link>
            </div>

            <div className="md:flex space-x-12">
                {/* Links de navegación */}
                {/* Links */}
                <ul className="flex space-x-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Projects", path: "/projects" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" },
                    ].map((link) => (
                        <li key={link.path} className="relative">
                            <Link
                                to={link.path}
                                className={`text-lg font-medium transition-colors duration-300 ${isActive(link.path) ? "text-[#00A3FF]" : "text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                            {/* Barra animada debajo del link activo */}
                            {isActive(link.path) && (
                                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#00A3FF] transition-all duration-300"></span>
                            )}
                        </li>
                    ))}
                </ul>

                <pre>|</pre>

                {/* Iconos */}
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/23juanan/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-[#00A3FF] transition duration-300" />
                    </a>
                    <a href="https://github.com/juanan04" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-[#00A3FF] transition duration-300" />
                    </a>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;

