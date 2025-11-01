import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 text-center px-4">
      <h1 className="text-9xl font-extrabold text-blue-500 tracking-widest">
        404
      </h1>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
