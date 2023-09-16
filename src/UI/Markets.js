import React from "react";

const Markets = () => {
  const data = [
    {
      column1: "BTCUSDT",
      column2: "Bitcoin",
      column3: "$23,495",
      column4: "+23.4%",
    },
    {
      column1: "AXSUSDT",
      column2: "Axie Infinity",
      column3: "$15.9",
      column4: "-7.8%",
    },
    {
      column1: "ETHUSDT",
      column2: "Ethereum",
      column3: "$15,978",
      column4: "-0.3%",
    },
    {
      column1: "SOLUSDT",
      column2: "Solana",
      column3: "$495 ",
      column4: "+11.1%",
    },
    {
      column1: "BNBUSDT",
      column2: "Binance ",
      column3: "$267",
      column4: "+6.7%",
    },
    {
      column1: "ADAUSDT",
      column2: "Cardano  ",
      column3: "$0.49",
      column4: "-1.4%",
    },
  ];
  return (
    <div className="basis-1/3 bg-white rounded-[15px] px-[20px] py-[21px]">
      <div className="flex justify-between items-center">
        <div>
          <small className="font-semibold text-[20px]">Markets</small>
        </div>
        <div>
          <small className="bg-[#F2F8FF] text-[10px] text-[#0060FF] px-[12px] py-[4px] font-semibold rounded-[7px]">
            All
          </small>
        </div>
        <div>
          <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
            Metaverse
          </small>
        </div>
        <div>
          <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
            Gaming
          </small>
        </div>
        <div>
          <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
            Defi
          </small>
        </div>
        <div>
          <small className="bg-[#F8F8F9] text-[10px] text-[#000000] px-[12px] py-[4px] font-semibold rounded-[7px]">
            NFT
          </small>
        </div>
      </div>
      <div className="mt-[29px]">
        <table className="w-full">
          <tbody>
            {data.map((d) => (
              <tr className="w-full h-[34px] mb-[15px]">
                <td className="text-[12px] font-semibold">{d.column1}</td>
                <td className="text-[12px] font-semibold text-[#5E6E78]">
                  {d.column2}
                </td>
                <td className="text-[12px] font-medium text-right">
                  {d.column3}
                </td>
                <td className={`text-[10px] font-semibold text-right`}>
                  <span
                    className={`rounded-[60px] ${
                      d.column4.startsWith("+")
                        ? "text-[#219653] px-[8px] py-[3px] bg-[#21965333]"
                        : "text-[#EB5757] px-[8px] py-[3px] bg-[#EB575733] "
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
      <div className="text-right mt-[15px]">
        <button className="text-[10px] font-semibold text-[#00000066] bg-[#bbbaba1a] px-[10px] py-[2px] rounded-[7px]">View All</button>
      </div>
    </div>
  );
};

export default Markets;
