import logo from "../assets/images/Logo.png";
import bluTrade from "../assets/images/BlueTrade..png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faArrowRightFromBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";
import dashboard from "../assets/images/dashboard.png";
import market from "../assets/images/market.png";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div>
      <div className="cursor-pointer">
        <div id="full-logo" className="flex pt-[41px]">
          <div className="flex items-center">
            <img src={logo} alt="" width="72px" height="30px" />
          </div>
          <div className="flex items-center">
            <img src={bluTrade} alt="" width="126px" height="32px" />
          </div>
        </div>
      </div>
      <div className="mt-[77px]">
        <ul className="flex flex-col gap-[35px] items-center">
          <li>
            <span className="bg-[#D5E6FB] px-[29px] py-[11px] rounded-[9px] text-[17px] font-medium text-[#0060FF] flex items-center">
              <div>
                <img src={dashboard} alt="" className="pr-2" />
              </div>
              Dashboard
            </span>
          </li>

          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium flex items-center">
              <div>
                <img src={market} alt="" className="pr-2" />
              </div>
              Markets
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium flex items-center">
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                className="text-[15px] pr-2"
              />
              Transaction
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium flex items-center">
              <div>
                <img src={profile} alt="" className="pr-2" />
              </div>
              Profile
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              <FontAwesomeIcon icon={faGear} className="text-[15px] pr-1" />{" "}
              Setting
            </span>
          </li>
        </ul>
        <div className="my-[50px]">
          <hr />
        </div>
        <ul className="flex flex-col gap-[35px] items-center">
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="text-[15px] pr-1"
              />{" "}
              Help
            </span>
          </li>

          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="text-[15px] pr-1"
              />{" "}
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
