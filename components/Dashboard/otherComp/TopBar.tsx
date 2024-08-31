import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import React from "react";

const TopBar = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <button className="text-btnprimary rounded-[100px] font-semibold h-[37px] w-[100px] flex justify-center items-center border border-btnprimary bg-btnprimary bg-opacity-10">
          Bank X
        </button>
        <p className="text-sm font-semibold text-black">Overview</p>
      </div>
      <div>
        <CustomDatePicker />
      </div>
    </div>
  );
};

export default TopBar;
