import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Convert = () => {
  return (
    <div className="lg:basis-2/7 bg-white rounded-[15px] px-[29px] py-[21px]">
      <p className="font-semibold text-[20px]">Convert</p>
      <div className="flex rounded-md overflow-hidden w-full mt-[16px]">
        <div className="relative w-full">
          <input
            type="number"
            placeholder="100"
            className="w-full bg-gray-200 rounded-[7px] placeholder:text-[#626D7D] placeholder:text-[12px] px-[17px] py-[13px]"
          />
          <div className="absolute inset-y-0 right-2 border top-[20%]">
            <button className="bg-[#2196532a] text-[#219653] px-3 font-semibold py-2 text-[10px] rounded-[7px]">
              USDT
              <FontAwesomeIcon icon={faCaretDown} className="text-black pl-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex rounded-md overflow-hidden w-full mt-[21px]">
        <div className="relative w-full">
          <input
            type="number"
            placeholder="0.0043"
            className="w-full bg-gray-200 rounded-[7px] placeholder:text-[#626D7D] placeholder:text-[12px] px-[17px] py-[13px]"
          />
          <div className="absolute inset-y-0 right-2 border top-[20%]">
            <button className="bg-[#FF7C042a] text-[#FF7C04] px-3 font-semibold py-2 text-[10px] rounded-[7px]">
              BTC
              <FontAwesomeIcon icon={faCaretDown} className="text-black pl-2" />
            </button>
          </div>
        </div>
      </div>
      <button className="bg-[#3380FF] text-white w-full rounded-[7px] mt-[14px] py-[15px] text-[14px]">
        Convert Now
      </button>
      <p className="text-[8px] mt-[12px]">
        The ultimate price and output is determined by the amount of tokens in
        the pool at the time of your swap.
      </p>
    </div>
  );
};

export default Convert;
