import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteerLogin = () => {
    const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const isAuthenticated = true; // Replace this with actual authentication logic

    if (isAuthenticated) {
      console.log("User Login Form Submitted");
      navigate("/volunteernav"); // Redirect to AdminNav component
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Volunteer Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerLogin;
