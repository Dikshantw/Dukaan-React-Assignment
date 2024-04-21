import {
  FaChevronDown,
  FaChevronRight,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import AmountCard from "./AmountCard";

const Dashboard = () => {
  return (
    <main
      className="
    w-[1152px]
    h-[754px]
    top-24
    left-64
    gap-8
    m-8
    
    
    "
    >
      {/* frame 399945 */}
      <div className="flex flex-col justify-between w-full h-[214px] mb-8 ">
        <div className="flex justify-between item-center ">
          <h5 className="font-medium text-xl text-[#1a181e]">Overview</h5>
          <button className="flex items-center gap-7 px-[14px] py-[6px] border rounded bg-[#ffffff] border-[#d9d9d9] text-[#4d4d4d]">
            This Month <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-5">
          <div className="flex-grow rounded-[8px] bg-[#146eb4] text-white">
            <div className="flex flex-col gap-4 p-5 ">
              <h5 className="flex items-center gap-3">
                Next Payout <FaRegCircleQuestion />
              </h5>
              <div className="flex justify-between items-center">
                <p className="font-medium text-3xl">₹2,312.23</p>
                <p className="flex items-center font-medium text-base hover:cursor-pointer underline">
                  23 orders <FaChevronRight />
                </p>
              </div>
            </div>
            <div className="flex justify-between px-6 py-2 rounded-[8px] text-[#f2f2f2] bg-[#0e4f82]">
              <p>Next payout date:</p>
              <p>Today,04:00PM</p>
            </div>
          </div>
          {/* <AmountCard 
            title="Next Payout" 
            amount="2,312.23" 
            orders="23" /> */}
          <AmountCard title="Amount Pending" amount="92,312.20" orders="13" />
          <AmountCard
            title="Amount Processed"
            amount="23,92,312.19"
            orders=""
          />
        </div>
      </div>
      <div className="w-full h-[508px] bg-slate-500"></div>
    </main>
  );
};

export default Dashboard;
