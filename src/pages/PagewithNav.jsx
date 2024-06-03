import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const PagewithNav = ({ navlogo }) => {
  console.log();
  return (
    <div>
      {/* NAVBAR */}
      <Navbar navlogo={navlogo} />
      <Outlet />
    </div>
  );
};

export default PagewithNav;
