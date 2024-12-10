import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBox, FaClipboardList, FaCalendarAlt, FaCogs, FaBell } from "react-icons/fa";

const Adminnav = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-slate-700 via-sky-700 to-blue-900 text-white p-4">
        <div className="text-2xl font-semibold mb-8">Admin Dashboard</div>
        <div className="space-y-4">
          {/* Dashboard Link */}
          <Link to="" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaTachometerAlt size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="users" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaUsers size={20} />
            <span>Users</span>
          </Link>
          <Link to="services" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaBox size={20} />
            <span>Services</span>
          </Link>
          <Link to="donations" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaClipboardList size={20} />
            <span>Donations</span>
          </Link>
          <Link to="events" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaCalendarAlt size={20} />
            <span>Events</span>
          </Link>
          <Link to="v_section" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaCogs size={20} />
            <span>Volunteer Section</span>
          </Link>
          <Link to="notifications" className="flex items-center space-x-3 hover:bg-blue-800 p-2 rounded">
            <FaBell size={20} />
            <span>Notifications</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50 overflow-auto">
        <Outlet /> {/* This will render the child components based on the selected route */}
      </div>
    </div>
  );
};

export default Adminnav;
