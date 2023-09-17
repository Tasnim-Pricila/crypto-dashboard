import React from "react";
import AssestsDoughnut from "../Chart/AssestsDoughnut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Assests = () => {
  return (
    <div className="basis-1/7 bg-white rounded-[15px] px-[29px] py-[21px]">
      <p className="font-semibold text-[20px]">Assets</p>
      <div className="w-[240px] flex justify-center">
        <AssestsDoughnut />
      </div>
      <div className="grid grid-cols-4 justify-items-center mt-4">
        <div className="bg-[#0060ff1a] px-[7px] py-[2px] rounded-[5px] inline  text-[10px]">
          <FontAwesomeIcon
            icon={faSquare}
            className="bg-[#3380FF] text-[#3380FF]"
          />
          <span className="text-[#2F80ED] pl-1">BTC</span>
        </div>
        <div className="bg-[#0060ff1a] px-[7px] py-[2px] rounded-[5px] inline  text-[10px]">
          <FontAwesomeIcon
            icon={faSquare}
            className="bg-[#B1D3FF] text-[#B1D3FF]"
          />
          <span className="text-[#2F80ED] pl-1">ETH</span>
        </div>
        <div className="bg-[#0060ff1a] px-[7px] py-[2px] rounded-[5px] inline  text-[10px]">
          <FontAwesomeIcon
            icon={faSquare}
            className="bg-[#00C4DF] text-[#00C4DF]"
          />
          <span className="text-[#2F80ED] pl-1">ADA</span>
        </div>
        <div className="bg-[#0060ff1a] px-[7px] py-[2px] rounded-[5px] inline  text-[10px]">
          <FontAwesomeIcon
            icon={faSquare}
            className="bg-[#155AB6] text-[#155AB6]"
          />
          <span className="text-[#2F80ED] pl-1">Others</span>
        </div>
      </div>
    </div>
  );
};

export default Assests;
