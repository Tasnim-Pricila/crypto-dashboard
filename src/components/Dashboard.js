import React from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F2F8FF]">
      <div
        id="sidebar"
        className="w-[300px] px-[49px] border shadow-xl bg-white"
      >
        <Sidebar />
      </div>
      <div id="rightside" className="w-full  ">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
