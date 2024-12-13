import React, { useEffect, useState } from "react";
import { getdonation, getuser } from "../api/Api";

const DashboardPage = () => {
  const [donations, setDonations] = useState([]);
  const [user, setUsers] = useState([]);

  const provider = async () => {
    try {
      const { data: donationsData } = await getdonation();
      const { data: userData } = await getuser();
      setDonations(donationsData || []); // Fallback to an empty array
      setUsers(userData || []); // Fallback to an empty array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    provider();
  }, []);

  const volunteers = Array.isArray(user) ? user.filter((u) => u.role === "Volunteer") : [];
  const todayDonations = Array.isArray(donations) ? donations : [];
  const totalVolunteers = volunteers.length;
  const totalFunds = todayDonations.reduce((acc, donation) => acc + donation.amount, 0);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Flex Container for Total Volunteers and Total Funds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total Volunteers Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Volunteers</h2>
            <div className="text-3xl font-bold text-blue-600">{totalVolunteers}</div>
          </div>

          {/* Total Funds Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Funds</h2>
            <div className="text-3xl font-bold text-green-600">${totalFunds}</div>
          </div>
        </div>

        {/* Today's Donations Box */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Today's Donations</h2>
          {todayDonations.length === 0 ? (
            <p className="text-center text-gray-500">No donations today.</p>
          ) : (
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Amount</th>
                  <th className="border p-2">Service</th>
                </tr>
              </thead>
              <tbody>
                {todayDonations.map((donation) => (
                  <tr key={donation.id} className="bg-white hover:bg-gray-100">
                    <td className="border p-2">{donation.name}</td>
                    <td className="border p-2">${donation.amount}</td>
                    <td className="border p-2">{donation.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
