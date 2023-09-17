import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import "./dashboard.css";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div className="flex bg-[#F2F8FF]">
      <div
        className={`w-[280px] px-[49px] border shadow-xl bg-white absolute lg:static 
        -left-[100vw] duration-1000
        ${open ? "left-0 z-[99] top-20 h-full" : "top-20"}`}
      >
        <Sidebar />
      </div>
      <div className="w-full  ">
        <Header open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
