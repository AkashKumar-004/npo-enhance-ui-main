import React, { useEffect, useState } from "react";
import { deletedvol, getvolsec } from "../api/Api";

const VolunteerRequests = () => {
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "123-456-7890",
      description: "Eager to help with educational programs.",
      role: "Volunteer Teacher",
      experience: "2 years in teaching",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "987-654-3210",
      description: "Interested in assisting with medical camps.",
      role: "Health Camp Volunteer",
      experience: "1 year in healthcare",
    },
  ]);
  const provider = async () => {
    try {
      const { data } = await getvolsec();
      setVolunteers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    provider();
  }, []);
  const handleAccept = async(volunteer) => {
    // Simulate sending an email
    console.log(`Sending acceptance email to: ${volunteer.email}`);
    // Here you would integrate with an email service
    alert(`Accepted volunteer request for ${volunteer.name}`);
    try{
      await deletedvol(volunteer._id)
    }
    catch(error)
    {
      console.log(error)
    }
  };

  const handleDelete = async(volunteer) => {
    // Simulate sending an email
    console.log(`Sending rejection email to: ${volunteer.email}`);
    // Here you would integrate with an email service
    alert(`Rejected volunteer request for ${volunteer.name}`);
    try{
      await deletedvol(volunteer._id)
    }
    catch(error)
    {
      console.log(error)
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Volunteer Requests</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="flex flex-wrap gap-6">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0"
            >
              {/* Volunteer Information */}
              <h3 className="text-center text-lg font-semibold">{volunteer.name}</h3>
              <p className="text-center text-sm text-gray-600 mb-2">
                <strong>Contact:</strong> {volunteer.contact}
              </p>
              <p className="text-center text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {volunteer.email}
              </p>
              <p className="text-center text-sm text-gray-600 mb-2">
                <strong>Description:</strong> {volunteer.description}
              </p>
              <p className="text-center text-sm text-gray-600 mb-2">
                <strong>Role:</strong> {volunteer.role}
              </p>
              <p className="text-center text-sm text-gray-600 mb-4">
                <strong>Experience:</strong> {volunteer.experience}
              </p>

              {/* Accept and Delete Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleAccept(volunteer)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDelete(volunteer)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerRequests;
