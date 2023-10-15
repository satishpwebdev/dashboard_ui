import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Cards from "./Cards";
import Graphs from "./Charts";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex  bg-[#eef3f7] h-screen w-full overflow-hidden font-arone">
        <Sidebar></Sidebar>
        <div className="flex-1 overflow-auto px-10">
          {/* <Topbar></Topbar>
          <Cards></Cards>
          <Graphs></Graphs> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
