import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import React from "react";


type props ={
  title?: string
}
const TopBar = ({title}: props) => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <button className="text-btnprimary rounded-[100px] font-semibold h-[37px] w-[100px] flex justify-center items-center border border-btnprimary bg-btnprimary bg-opacity-10">
          Bank X
        </button>
        <p className="text-sm font-semibold text-black">{title}</p>
      </div>
      <div>
        <CustomDatePicker name="" />
      </div>
    </div>
  );
};

export default TopBar;
