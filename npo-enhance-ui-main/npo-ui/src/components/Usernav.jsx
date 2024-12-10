import React from "react";
import { Outlet } from "react-router-dom";

const UserNav = () => {
  return (
    <div>
      <p>Hello User</p>
      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default UserNav;
