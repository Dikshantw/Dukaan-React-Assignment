import {
  FaChevronDown,
  FaChevronRight,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import AmountCard from "./AmountCard";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { orderList } from "./data/orderList";

const Dashboard = () => {
  return (
    <main
      // top-24
      // left-64
      className="
    w-full
    flex
    flex-col
    gap-8
    p-8
    "
    >
      {/* frame 399945 */}
      <div className="flex flex-col gap-6 ">
        <div className="flex justify-between item-center ">
          <h5 className="font-medium text-xl text-[#1a181e]">Overview</h5>
          <button className="flex items-center gap-7 px-[14px] py-[6px] border rounded bg-[#ffffff] border-[#d9d9d9] text-[#4d4d4d]">
            This Month <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-5 flex-wrap">
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
      {/* removed w-full h-[508px] from down */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col  gap-6">
          <h5 className="text-xl font-medium text-[#1a181e]">
            Transcations | This Month
          </h5>
          <div className="flex gap-3">
            <button className="rounded-[40px] bg-[#e6e6e6] px-4 py-[6px] gap-[10px] text-[#808080]">
              Payouts (22)
            </button>
            <button className="rounded-[40px] bg-[#146eb4] px-4 py-[6px] gap-[10px] text-[#ffffff]">
              Refunds (6)
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-[8px] px-3 pt-3 pb-2 gap-3 bg-[#ffffff] shadow-sm h-fit">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
              <IoSearch className="text-lg" />
              <input
                type="text"
                placeholder="Order ID or transactions ID"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                Sort{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <FiDownload className="text-xl" />
              </button>
            </div>
          </div>
          <div>
            <table className="min-w-full">
              <colgroup>
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="text-[#4D4D4D]">
                <tr className="bg-[#F2F2F2]">
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                    Order ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Refund Date
                  </th>
                  <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider rounded-r">
                    Order Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-[#E6E6E6]">
                {orderList.map((row, index) => (
                  <tr className="text-sm relative" key={index}>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                      {row.orderId}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-[6px] text-[#1A181E]">
                      <span
                        className={`${
                          row.status === "Successful"
                            ? "bg-green-500"
                            : "bg-[#999999]"
                        } w-[10px] h-[10px] rounded-full`}
                      ></span>
                      {row.status}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.transactionId}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.refundDate}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                      {row.orderAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
