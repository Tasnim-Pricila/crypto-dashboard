import React from "react";

import Cards from "../UI/Cards";
import Bitcoin from "../UI/Bitcoin";
import Markets from "../UI/Markets";
import Assests from "../UI/Assests";
import Convert from "../UI/Convert";
import History from "../UI/History";

const MainLayout = () => {
  return (
    <>
      <Cards />
      <div className="flex mt-[26px] gap-[20px] flex-col lg:flex-row">
        <Bitcoin />
        <Markets />
      </div>
      <div className="flex mt-[26px] gap-[20px] flex-col lg:flex-row">
        <Assests />
        <Convert />
        <History />
      </div>
    </>
  );
};

export default MainLayout;
