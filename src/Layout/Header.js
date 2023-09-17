import React from "react";
import MainLayout from "./MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisV,
  faNavicon,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/images/avatar.png";

const Header = ({ open, setOpen }) => {
  return (
    <>
      <div
        className="h-[98px] border-b-1 flex items-center bg-white md:px-[39px] px-[20px]"
      >
        <FontAwesomeIcon
          icon={faNavicon}
          className="lg:hidden pr-4"
          onClick={() => setOpen(!open)}
        />
        <div className="flex justify-between w-full items-center">
          <div className="relative rounded-full">
            <input
              type="text"
              className="border border-[#C4CACD] w-40 sm:w-[500px]  lg:w-[626px] h-[50px] px-[20px] lg:px-[40px] rounded-full"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faSearch}
                className="pr-[16px] text-[#C4CACD]"
              ></FontAwesomeIcon>
            </div>
          </div>
          {/* For large device  */}
          <div className="hidden lg:flex items-center gap-[29px]">
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
          {/* For small device  */}
          <div className="block lg:hidden dropdown dropdown-hover dropdown-bottom dropdown-end">
            <label tabIndex={0}>
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10 sm:w-12">
                  <img src={avatar} alt="" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="px-6">
                <div>
                  <p className="font-semibold">Andy Warhol</p>
                  <p className="text-[11px]">andywarhol@mail.com</p>
                </div>
                <p className="mt-2 font-semibold">
                  <FontAwesomeIcon icon={faBell} /> Notifications
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:p-[20px] p-2">
        <MainLayout />
      </div>
    </>
  );
};

export default Header;
