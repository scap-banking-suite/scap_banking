import React, { useState } from "react";
import { CustomButton } from "../clickable/CustomButton";
import { CustomSelect } from "../controlInputs/CustomSelect";

type Option = {
  value: string;
  label: string;
};

type Props = {
  className?: string;
  options?: Option[];
  selectedStatus?: string;
  setSelectedStatus?: (value: string) => void;
};
const SelectAccInput = ({
  className,
  options = [],
  selectedStatus = "",
  setSelectedStatus,
}: Props) => {
  return (
    <CustomSelect
    name="status"
      dropdownChoice={true}
      options={options}
      value={selectedStatus}
      onChange={(value) => setSelectedStatus?.(value)}
      placeholder="Notification type"
      className={`bg-white flex justify-between items-center h-[60px] text-[#B3B7BD] rounded-[40px] py-3 focus: px-4 ${className}`}
    />
  );
};

export default SelectAccInput;
