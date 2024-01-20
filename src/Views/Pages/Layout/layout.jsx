import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/sidebar";

import "./layout.css";

function Layout({ auth }) {
  return (
    <div className="container">
      {auth.loggedIn && <Sidebar />}
      <Outlet />
    </div>
  );
}

export default Layout;
