import React from "react";
import { Outlet } from "react-router-dom";

const VolunteerNav = () => {
  return (
    <div>
      <p>Hello Volunteer</p>
      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default VolunteerNav;
