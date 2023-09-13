import wallet from "../assets/images/Icon - Wallet.png";
import btc from "../assets/images/Icon - BTC.png";
import eth from "../assets/images/Icon - ETH.png";
import sql from "../assets/images/Icon - SOL.png";

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
        <div className="text-[12px] flex gap-[10px] mt-[16px]">
          <p className="font-medium">Monthly Profit</p>
          <p className="px-[8px] text-[#219653] font-medium">+$2560.78</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +14.67%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex gap-[16px] items-center">
          <div>
            <img src={btc} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">BTCUSDT</p>
            <p className="text-[12px]">Bitcoin</p>
          </div>
        </div>
        <div className="mt-[18px]">
          <p className="text-[30px] font-semibold">$23,738</p>
        </div>
        <div className="text-[12px] flex gap-[10px] mt-[16px]">
          <p className="font-medium">PNL Daily</p>
          <p className="px-[8px] text-[#EB5757] font-medium">-$16.78</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +14.67%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex gap-[16px] items-center">
          <div>
            <img src={eth} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">ETHUSDT</p>
            <p className="text-[12px]">Ethereum</p>
          </div>
        </div>
        <div className="mt-[18px]">
          <p className="text-[30px] font-semibold">$23,738</p>
        </div>
        <div className="text-[12px] flex gap-[10px] mt-[16px]">
          <p className="font-medium">PNL Daily</p>
          <p className="px-[8px] text-[#219653] font-medium">+$189.91</p>
          <p className="px-[8px] bg-[#21965333] rounded-[60px] text-[#219653] font-semibold">
            +24.68%
          </p>
        </div>
      </div>
      <div className="bg-white rounded-[12px] p-[20px]">
        <div className="flex gap-[16px] items-center">
          <div>
            <img src={sql} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">SOLUSDT</p>
            <p className="text-[12px]">Solana</p>
          </div>
        </div>
        <div className="mt-[18px]">
          <p className="text-[30px] font-semibold">$23,738</p>
        </div>
        <div className="text-[12px] flex gap-[10px] mt-[16px]">
          <p className="font-medium">PNL Daily</p>
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