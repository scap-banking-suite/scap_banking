import React, { useState } from "react";
import { CustomButton } from "../clickable/CustomButton";
import { CustomSelect } from "../controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { AuthUser } from "../api/type";
import { Field } from "@/schemas/dynamicSchema";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "referal",
    type: "text",
    errorMessage: "Select a reference",
    isRequired: true,
  },
  {
    name: "account_type",
    type: "text",
    errorMessage: "Enter Type",
    isRequired: true,
  },
  {
    name: "account_status",
    type: "text",
    errorMessage: "Enter Status",
    isRequired: true,
  },
];

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

  const { control, handleSubmit, formState, getValues } =
  useDynamicForm<AuthUser>(fields, {});

  return (
    <CustomSelect
      name="status"
      dropdownChoice={true}
      options={options}
      control={control}
      rules={{ required: true }}
      placeholder="Notification type"
      className={`bg-white flex justify-between items-center h-[60px] text-[#B3B7BD] rounded-[40px] py-3 focus: px-4 ${className}`}
    />
  );
};

export default SelectAccInput;
