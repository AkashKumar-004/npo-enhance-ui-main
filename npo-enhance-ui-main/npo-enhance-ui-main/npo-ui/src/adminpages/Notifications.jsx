import React, { useEffect, useState } from "react";
import { getdonation, getnotifi } from "../api/Api";

const NotificationPage = () => {
  const [donations, setDonations] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const provider = async () => {
    try {
      const { data: data1 } = await getdonation();
      const { data } = await getnotifi();
      setDonations(data1 || []);
      setNotifications(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    provider();
  }, []);

  const handleSendRegards = (donation) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      `A thank you message has been sent to ${donation.name} for their donation of $${donation.amount} for the ${donation.service}.`,
    ]);

    const subject = `Thank You for Your Donation!`;
    const body = `Dear ${donation.name},\n\nThank you for your generous donation of $${donation.amount} to the ${donation.service}. Your support is invaluable!\n\nBest Regards,\nThe Team`;
    const mailtoLink = `mailto:${donation.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <div className="flex-grow p-4">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Amount</th>
                  <th className="border p-2">Service</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {donations && donations.length > 0 ? (
                  donations.map((donation) => (
                    <tr key={donation.id} className="bg-white hover:bg-gray-100">
                      <td className="border p-2">{donation.name}</td>
                      <td className="border p-2">${donation.amount}</td>
                      <td className="border p-2">{donation.service}</td>
                      <td className="border p-2">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                          onClick={() => handleSendRegards(donation)}
                        >
                          Send Regards
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="border p-2 text-center">
                      No donations available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Notifications</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {notifications.length === 0 ? (
              <p>No new notifications.</p>
            ) : (
              <ul className="space-y-2">
                {notifications.map((notification, index) => (
                  <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm text-gray-700">
                    {notification}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
