export const getHeaders = () => {
    return {
        "Content-Type": "application/json",
        "X-API-KEY": import.meta.env.VITE_API_KEY,
    };
};