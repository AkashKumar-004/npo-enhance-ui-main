import React, { useEffect, useState } from "react";
import { getdonation } from "../api/Api";

const DonationPage = () => {
  const [donations, setDonations] = useState([]);

  const provider = async () => {
    try {
      const { data } = await getdonation();
      setDonations(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    provider();
  }, []);

  const totalFunds = donations.reduce((total, donation) => total + donation.amount, 0);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Donation Page</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        {/* Total Funds */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold">Total Funds Raised</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">${totalFunds}</p>
        </div>

        {/* Donation History Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Donation History</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Contact</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Services</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id} className="bg-white hover:bg-gray-100">
                  <td className="border p-2">{donation.name}</td>
                  <td className="border p-2">{donation.contact}</td>
                  <td className="border p-2">{donation.email}</td>
                  <td className="border p-2">${donation.amount}</td>
                  <td className="border p-2">{donation.services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
