import { ArrowriseIcon } from "@/icons/svgComp/StatIcon";
import clsx from "clsx";
import React from "react";

interface StatProps {
  className?: string;
  index?: number;
  percent: string;
  amount: string;
  title: string;
  type: string;
  onClick?: () => void;
}

const StatCard = ({
  className,
  percent,
  amount,
  title,
  type,
  index,
  onClick,
}: StatProps) => {
  return (
    <section
      onClick={onClick}
      //   className={`h-[96px] w-[270px] px-5 py-5 cursor-pointer rounded-2xl shadow-md ${
      //     index === 0 ? "ml-0" : "-ml-48"
      //   } ${index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"} ${
      //     type === "open"
      //       ? "bg-[#FFFAE5]"
      //       : type === "deposit"
      //       ? "bg-[#F4CB05]"
      //       : "bg-[#D7E5FF]"
      //   }`}
      className={clsx(
        "h-[96px] bg-[#D7E5FF] rounded-2xl w-[270px]  px-5 py-5 cursor-pointer",
        className,
        index !== undefined ? `z-${30 - index * 10}` : "",
        index === 0 ? "ml-0" : "-ml-8",
        type === "open"
          ? "bg-[#FFFAE5]"
          : type === "deposit"
          ? "bg-[#F4CB05]"
          : type === "user"
          ? "bg-[#020E23] text-white"
          : ""
      )}
    >
      <p className="mb-3 text-xs font-normal">{title}</p>
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">{amount}</h4>
        <div className="flex items-center gap-1">
          <h6 className="text-xs font-normal">
            {/* <span>+</span> */}
            {percent}%
          </h6>
          <ArrowriseIcon />
        </div>
      </div>
    </section>
  );
};

export default StatCard;
