import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-700 via-sky-700 to-blue-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to the NPO Portal</h1>
        <p className="text-center mb-8">Select your login type:</p>
        <div className="space-y-4">
          <button
            onClick={() => navigate("/user")}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            User Login
          </button>
          <button
            onClick={() => navigate("/volunteer")}
            className="w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Volunteer Login
          </button>
          <button
            onClick={() => navigate("/admin")}
            className="w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
