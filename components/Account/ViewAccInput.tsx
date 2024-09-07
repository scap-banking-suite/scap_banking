import React from "react";
import { CustomButton } from "../clickable/CustomButton";

type Props = {
  type: string;
  placeholder: string;
  className?: string;
};
const ViewAccInput = ({ type, placeholder, className }: Props) => {
  return (
    <div
      className={`bg-white flex justify-between items-center h-[60px] rounded-[40px] py-3 px-4 ${className}`}
    >
      <input
        type={type}
        className="outline-none bg-transparent placeholder:text-[#B3B7BD] text-sm w-[80%]"
        placeholder={placeholder}
      />
      <div className="w-[152px]">
        <CustomButton
          variant="primary"
          label=" View Account"
          className="rounded-[20px] w-full text-sm h-[40px] font-[300]"
        />
      </div>
    </div>
  );
};

export default ViewAccInput;
