const SkillCircle = ({ skill, percentage }) => {
    return (
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <div className="relative w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-700 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-blue-500 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        strokeDasharray="251.2"
                        strokeDashoffset={(1 - percentage / 100) * 251.2}
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                    {percentage}%
                </span>
            </div>
            <p className="mt-2 text-white">{skill}</p>
        </div>
    );
};

export default SkillCircle;
