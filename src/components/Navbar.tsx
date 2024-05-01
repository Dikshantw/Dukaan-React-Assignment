import { FaChevronDown } from "react-icons/fa6";
import nishyanImage from "../assets/nishyan.png";
import { sidebarLists } from "./data/sidebarList";
const Navbar = () => {
  return (
    <aside className="flex flex-col items-center justify-between w-full px-3 py-4 gap-6 bg-[#1e2640]">
      <div className="flex flex-col items-center text-[#ffffff] gap-6">
        <div className="flex gap-3 justify-center items-center">
          <div className=" w-[39px] h-[39px] py-[3px]">
            <img src={nishyanImage} alt="nishyan" className="rounded" />
          </div>
          <div className="flex flex-col gap-1 w-[108px] justify-center">
            <h3 className="font-medium text-[15px] leading-[22px]">Nishyan</h3>
            <p className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]">
              Visit Store
            </p>
          </div>
          <FaChevronDown className="w-[20px] h-[20px]" />
        </div>
        <div className="w-full flex-col justify-start gap-4">
          {sidebarLists.map((item) => (
            <div
              key={item.name}
              className={`${
                item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
              } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px]`}
            >
              <div className="relative w-[18px] h-[18px]">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="object-contain object-center"
                />
              </div>
              <p className="text-[14px] font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00312 1.79727C2.42636 1.79727 1.80313 2.35527 1.80313 3.24727V16.7473C1.80313 17.6393 2.42636 18.1973 3.00312 18.1973H21.0031C21.5799 18.1973 22.2031 17.6393 22.2031 16.7473V13.8473H17.0032C14.8769 13.8473 13.1532 12.1236 13.1532 9.99727C13.1532 7.87097 14.8769 6.14727 17.0032 6.14727H22.2031V3.24727C22.2031 2.35527 21.5799 1.79727 21.0031 1.79727H3.00312ZM23.8031 6.14727V3.24727C23.8031 1.65398 22.6355 0.197266 21.0031 0.197266H3.00312C1.37075 0.197266 0.203125 1.65398 0.203125 3.24727V16.7473C0.203125 18.3405 1.37075 19.7973 3.00312 19.7973H21.0031C22.6355 19.7973 23.8031 18.3405 23.8031 16.7473V13.8473H23.8532V6.14727H23.8031ZM16.0032 9.94727C16.0032 9.47783 16.3837 9.09727 16.8532 9.09727H18.1532C18.6226 9.09727 19.0032 9.47783 19.0032 9.94727C19.0032 10.4167 18.6226 10.7973 18.1532 10.7973H16.8532C16.3837 10.7973 16.0032 10.4167 16.0032 9.94727ZM14.8532 9.99727C14.8532 8.80986 15.8158 7.84727 17.0032 7.84727H22.1532V12.1473H17.0032C15.8158 12.1473 14.8532 11.1847 14.8532 9.99727Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col text-white gap-[2px]">
            <h3 className="text-[13px] text-[#FFFFFF] font-light">
              Available Credits
            </h3>
            <h6 className="text-base font-medium">224.10</h6>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
