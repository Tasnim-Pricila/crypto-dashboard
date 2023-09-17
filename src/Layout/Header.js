import React from "react";
import MainLayout from "./MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <>
      <div
        id="header"
        className="h-[98px] border-b-1 flex items-center bg-white px-[39px]"
      >
        <div className="flex justify-between w-full items-center">
          <div className="relative rounded-full">
            <input
              type="text"
              className="border border-[#C4CACD] w-[626px] h-[50px] px-[40px] rounded-full"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faSearch}
                className="pr-[16px] text-[#C4CACD]"
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="flex items-center gap-[29px]">
            <div className="indicator">
              {/* <span className="indicator-item badge badge-secondary"></span>  */}
              <FontAwesomeIcon
                icon={faBell}
                className="text-[25px] text-blue-400"
              />
            </div>
            <div className="flex items-center gap-2 bg-[#F2F8FF] px-[16px] py-[6px] rounded-[9px]">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img src={avatar} alt="" />
                </div>
              </div>
              <div>
                <p className="font-semibold">Andy Warhol</p>
                <p className="text-[11px]">andywarhol@mail.com</p>
              </div>
              <div className="ml-[40px]">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px]">
        <MainLayout />
      </div>
    </>
  );
};

export default Header;
