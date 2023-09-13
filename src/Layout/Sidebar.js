import logo from "../assets/images/Logo.png";
import bluTrade from "../assets/images/BlueTrade..png";

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
            <span className="bg-[#D5E6FB] px-[29px] py-[11px] rounded-[9px] text-[17px] font-medium text-[#0060FF]">
              {" "}
              Dashboard
            </span>
          </li>

          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              Markets
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              Transaction
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              Profile
            </span>
          </li>
          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
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
              Help
            </span>
          </li>

          <li>
            <span className="px-[29px] py-[11px] text-[17px] font-medium">
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
