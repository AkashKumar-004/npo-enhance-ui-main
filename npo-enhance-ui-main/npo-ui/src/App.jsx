import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./adminpages/Dashboard"; // New Dashboard component
import Users from "./adminpages/Users";
import Services from "./adminpages/Services";
import Donations from "./adminpages/Donations";
import Events from "./adminpages/Events";
import VolunteerSection from "./adminpages/Volunteersection";
import Notifications from "./adminpages/Notifications";

import LoginPage from "./loginpages/Login";
import UserLogin from "./loginpages/Userlogin";
import VolunteerLogin from "./loginpages/Volunteerlogin";
import AdminLogin from "./loginpages/Adminlogin";
import Adminnav from "./components/Adminnav";
import Volunteernavbar from "./components/Volunteernav";
import Usernavbar from "./components/Usernav";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/volunteer" element={<VolunteerLogin />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* User and Volunteer Navigation */}
        <Route path="/volunteernav" element={<Volunteernavbar />} />
        <Route path="/usernav" element={<Usernavbar />} />

        {/* Admin Navigation with Nested Routes */}
        <Route path="/adminnav" element={<Adminnav />}>
          <Route index element={<Dashboard />} /> {/* Default child route */}
          <Route path="users" element={<Users />} />
          <Route path="services" element={<Services />} />
          <Route path="donations" element={<Donations />} />
          <Route path="events" element={<Events />} />
          <Route path="v_section" element={<VolunteerSection />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
