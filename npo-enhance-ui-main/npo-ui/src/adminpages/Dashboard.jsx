import React, { useState } from "react";

const DashboardPage = () => {
  // Static data for this example
  const [donations, setDonations] = useState([
    {
      id: 1,
      name: "John Doe",
      amount: 100,
      service: "Education Program",
      date: "2024-12-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      amount: 200,
      service: "Health Camp",
      date: "2024-12-10",
    },
    {
      id: 3,
      name: "Michael Brown",
      amount: 50,
      service: "Food Distribution",
      date: "2024-12-09",
    },
  ]);

  const volunteers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Brown" },
  ];

  // Filter today's donations
  const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
  const todayDonations = donations.filter((donation) => donation.date === today);

  // Total volunteers
  const totalVolunteers = volunteers.length;

  // Total funds (sum of today's donations)
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
                    <td className="border p-2">{donation.service}</td>
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
