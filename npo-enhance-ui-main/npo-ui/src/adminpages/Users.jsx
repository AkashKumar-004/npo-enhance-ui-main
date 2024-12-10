import React, { useState } from "react";

const UsersPage = () => {
  // State for storing users data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "123-456-7890", // Added contact field
      profilePicture: "https://via.placeholder.com/100", // For Volunteers only
      role: "Volunteer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "987-654-3210", // Added contact field
      profilePicture: "https://via.placeholder.com/100", // For Volunteers only
      role: "Volunteer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      contact: "555-666-7777", // Added contact field
      profilePicture: "", // No picture for regular users
      role: "User",
      status: "Active",
    },
  ]);

  // Separate users into "Volunteers" and "Users"
  const volunteers = users.filter((user) => user.role === "Volunteer");
  const regularUsers = users.filter((user) => user.role === "User");

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Users Management</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Volunteers Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Volunteers</h2>
          <div className="flex overflow-x-scroll space-x-6">
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0"
              >
                <img
                  src={volunteer.profilePicture}
                  alt={volunteer.name}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-center text-lg font-semibold">{volunteer.name}</h3>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Email:</strong> {volunteer.email}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Contact:</strong> {volunteer.contact} {/* Contact field */}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Role:</strong> {volunteer.role}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Status:</strong> {volunteer.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Users Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          <div className="flex overflow-x-scroll space-x-6">
            {regularUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0"
              >
                {/* No profile picture for regular users */}
                <h3 className="text-center text-lg font-semibold">{user.name}</h3>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Contact:</strong> {user.contact} {/* Contact field */}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Role:</strong> {user.role}
                </p>
                <p className="text-center text-sm text-gray-600 mb-2">
                  <strong>Status:</strong> {user.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
