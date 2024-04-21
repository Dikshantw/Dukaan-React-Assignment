import { FaChevronRight, FaRegCircleQuestion } from "react-icons/fa6";

interface Prop {
  title: string;
  amount: string;
  orders: string;
}

const AmountCard = ({ title, amount, orders }: Prop) => {
  return (
    <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
      <h5 className="flex gap-3 items-center text-[#4D4D4D]">
        {title} <FaRegCircleQuestion />
      </h5>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-medium">₹{amount}</p>
        {orders && (
          <a className="flex items-center hover:cursor-pointer font-medium text-base underline text-[#146EB4]">
            {orders} Orders <FaChevronRight className="text-lg" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AmountCard;
