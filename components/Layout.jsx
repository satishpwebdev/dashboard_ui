import React from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row bg-gray-200 h-screen w-screen overflow-hidden font-arone">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
