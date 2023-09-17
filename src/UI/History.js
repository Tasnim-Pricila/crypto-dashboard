import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const History = () => {
  const data = [
    {
      column1: "Deposit",
      column2: "+$23,738",
      column3: "11:34 PM",
      column4: "pending",
    },
    {
      column1: "SANDUSDT",
      column2: "-$576",
      column3: "06:01 AM",
      column4: "done",
    },
    {
      column1: "DOGEUSDT",
      column2: "+$3500",
      column3: "02:10 AM",
      column4: "done",
    },
    {
      column1: "FTMUSDT",
      column2: "+$791",
      column3: "06:45 PM",
      column4: "done",
    },
  ];
  return (
    <div className="lg:basis-3/7 bg-white rounded-[15px] px-[29px] py-[21px]">
      <div className="flex justify-between items-center">
        <div>
          <small className="font-semibold text-[20px] text-[#000000]">
            History
          </small>
        </div>
        <div>
          <button className="text-[10px] font-semibold text-[#00000066] border border-[#0000002a] px-[10px] py-[5px] rounded-[7px]">
            View All
          </button>
        </div>
      </div>
      <div className="mt-[18px] overflow-x-auto">
        <table className="w-full table-xs">
          <tbody>
            {data.map((d, i) => (
              <tr className="w-full h-[64px] mt-[26px]">
                <td>
                  {(i + 1) % 2 !== 0 ? (
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-[#219653] bg-[#21965333] px-[8px] py-[5px] rounded-full"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-[#EB5757] bg-[#EB575733] px-[8px] py-[5px] rounded-full"
                    />
                  )}
                </td>
                <td className="text-[12px] font-semibold">{d.column1}</td>
                <td className="text-[12px] font-semibold text-[#5E6E78]">
                  <span
                    className={`rounded-[60px] ${
                      d.column2.startsWith("+")
                        ? "text-[#219653]"
                        : "text-[#EB5757]"
                    }`}
                  >
                    {" "}
                    {d.column2}
                  </span>
                </td>
                <td className="text-[12px] font-medium text-right">
                  {d.column3}
                </td>
                <td className={`text-[10px] font-semibold text-right`}>
                  <span
                    className={`rounded-[6px] ${
                      d.column4 === "done"
                        ? "text-[#219653] px-[8px] py-[3px] bg-[#21965333]"
                        : "text-[#F2994A] px-[8px] py-[3px] bg-[#F2C94C33]"
                    }`}
                  >
                    {" "}
                    {d.column4}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
