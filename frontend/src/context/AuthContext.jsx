import { createContext, useContext, useState } from "react";

// ✅ Creamos el contexto de autenticación
const AuthContext = createContext();

// ✅ Creamos el Provider que envolverá nuestra App
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null;
    });

    // ✅ Función para iniciar sesión
    const login = async (username, password) => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) throw new Error("Invalid credentials");

            const data = await response.json();
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    };

    // ✅ Función para cerrar sesión
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 🔥 Aquí es donde exportamos useAuth correctamente
export const useAuth = () => {
    return useContext(AuthContext);
};