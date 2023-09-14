import wallet from "../assets/images/Icon - Wallet.png";
import btc from "../assets/images/Icon - BTC.png";
import eth from "../assets/images/Icon - ETH.png";
import sql from "../assets/images/Icon - SOL.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BitcoinLineChart from "../Chart/BitcoinLineChart";
import EtherumLineChart from "../Chart/EtherumLineChart";
import SolanaLineChart from "../Chart/SolanaLineChart";
Chart.register(CategoryScale);

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-[25px]">
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex gap-[16px] items-center">
          <div>
            <img src={wallet} alt="" />
          </div>
          <p className="font-semibold">Estimated Balance</p>
        </div>
        <div className="mt-[18px]">
          <p className="text-[30px] font-semibold">$123,987</p>
        </div>
        <div className="text-[12px] flex justify-between mt-[16px]">
          <p className="font-medium text-[#626D7D]">Monthly Profit</p>
          <p className="px-[8px] text-[#219653] font-medium">+$2560.78</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +14.67%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex justify-between">
          <div className="basis-1/3">
            <div className="flex gap-[16px] items-center">
              <div className="w-[44px]">
                <img src={btc} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">BTCUSDT</p>
                <p className="text-[12px]">Bitcoin</p>
              </div>
            </div>
            <div className="mt-[18px]">
              <p className="text-[20px] font-semibold">$23,738</p>
            </div>
          </div>
          <div className="self-end basis-2/3">
            <div className="h-[50px]">
              <BitcoinLineChart />
            </div>
          </div>
        </div>
        <div className="text-[12px] flex justify-between mt-[16px]">
          <p className="font-medium text-[#626D7D]">PNL Daily</p>
          <p className="px-[8px] text-[#EB5757] font-medium">-$16.78</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +14.67%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex justify-between">
          <div className="basis-1/3">
            <div className="flex gap-[16px] items-center">
              <div className="w-[44px]">
                <img src={eth} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">ETHUSDT</p>
                <p className="text-[12px]">Ethereum</p>
              </div>
            </div>
            <div className="mt-[18px]">
              <p className="text-[20px] font-semibold">$23,738</p>
            </div>
          </div>
          <div className="self-end basis-2/3">
            <div className="h-[50px]">
              <EtherumLineChart />
            </div>
          </div>
        </div>
        <div className="text-[12px] flex justify-between mt-[16px]">
          <p className="font-medium text-[#626D7D]">PNL Daily</p>
          <p className="px-[8px] text-[#219653] font-medium">+$189.91</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +24.68%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex justify-between">
          <div className="basis-1/3">
            <div className="flex gap-[16px] items-center">
              <div className="w-[44px]">
                <img src={sql} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">SOLUSDT</p>
                <p className="text-[12px]">Solana</p>
              </div>
            </div>
            <div className="mt-[18px]">
              <p className="text-[20px] font-semibold">$23,738</p>
            </div>
          </div>
          <div className="self-end basis-2/3">
            <div className="h-[50px]">
              <SolanaLineChart />
            </div>
          </div>
        </div>
        <div className="text-[12px] flex justify-between mt-[16px]">
          <p className="font-medium text-[#626D7D]">PNL Daily</p>
          <p className="px-[8px] text-[#219653] font-medium">+$556.14</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +64.11%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
