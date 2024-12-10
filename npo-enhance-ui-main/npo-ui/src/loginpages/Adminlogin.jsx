import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { FaLock, FaUser } from "react-icons/fa";

const Adminlogin = () => {
  const navigate = useNavigate();  // Get the navigate function
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Example login logic
    if (username === "admin" && password === "admin123") {
      console.log("User Login Form Submitted");
      navigate("/adminnav"); // Redirect to the admin dashboard page
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <div className="flex items-center border-b border-gray-300">
              <FaUser size={20} className="text-gray-500" />
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-2 pl-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <div className="flex items-center border-b border-gray-300">
              <FaLock size={20} className="text-gray-500" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 pl-2 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
