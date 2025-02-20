import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    const { login, error } = useAuth();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const success = await login(credentials.username, credentials.password);
        setLoading(false);

        if (success) {
            navigate("/admin");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl text-white font-semibold text-center mb-4">Admin Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                        <div className="flex items-center border rounded bg-gray-800 p-2">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                        <div className="flex items-center border rounded bg-gray-800 p-2">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition flex items-center justify-center"
                    >
                        {loading ? (
                            <span className="loader animate-spin border-4 border-white border-t-transparent rounded-full w-5 h-5"></span>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
