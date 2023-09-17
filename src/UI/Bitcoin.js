import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CanvasChart from "../Chart/CanvasChart";
import "../Chart/CanvasChart.css"

const Bitcoin = () => {
  return (
    <div className="basis-2/3 bg-white rounded-[15px] px-[43px] py-[35px]">
      <div className="flex justify-between">
        <div className="py-[14px] flex justify-between items-center">
          <div>
            <p className="font-semibold text-[20px] ">BTCUSDT</p>
            <p className="text-[13px]">Bitcoin</p>
          </div>
          <div className="ml-[86px]">
            <p className="font-semibold text-[20px] ">$23,738</p>
            <p className="px-[8px] py-1 bg-[#21965333] rounded-[60px] text-[#219653] text-[10px] font-semibold inline-block">
              +23.6%
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-[20px] text-black ml-4"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div>
              <small className="bg-[#F2F8FF] text-[10px] text-[#0060FF] px-[12px] py-[4px] font-semibold rounded-[7px]">
                1H
              </small>
            </div>
            <div>
              <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
                3H
              </small>
            </div>
            <div>
              <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
                5H
              </small>
            </div>
            <div>
              <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
                1D
              </small>
            </div>
            <div>
              <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
                1W
              </small>
            </div>
            <div>
              <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
                1M
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="candlestick-chart mt-4">
        <CanvasChart/>
      </div>
    </div>
  );
};

export default Bitcoin;
