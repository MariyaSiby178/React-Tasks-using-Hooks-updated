import React from "react";
// import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

export const Layout = () => {
  return (
    <div>
      <SideBar/>
      <Outlet />
    </div>
  );
};
