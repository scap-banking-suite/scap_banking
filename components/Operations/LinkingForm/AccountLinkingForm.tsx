"use client";
import React, { useState } from "react";
import { CustomFileUpload } from "@/components/controlInputs/CustomFileUpload";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { AuthUser } from "@/components/api/type";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomButton } from "@/components/clickable/CustomButton";

const referal = [
  { value: "dayo", label: "Adedayo Sully" },
  { value: "ibrahim", label: "Abiodun Ibrahim" },
];

const accountType = [
  { value: "Nigeria", label: "Nigeria" },
  { value: "Manager", label: "Manager" },
  { value: "Admin", label: "Admin" },
];

const accountStatus = [
  { value: "PND", label: "PND" },
  { value: "CFM", label: "CFM" },
];

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

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

type Props = {};

export const AccountLinkingForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});
  
  return (
    <section className=" rounded-[30px] py-5 ">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="PC Number"
            type="text"
            label="PC Number"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Account Number"
            type="number"
            label="Account Number"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Account Name"
            type="text"
            label="Account Name"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          <CustomSelect
            options={accountType}
            placeholder="Select Type"
            label="Account Type"
            name="account_type"
            dropdownChoice
            control={control}
          />
          <ControlledInput
            name="odLimit"
            control={control}
            placeholder="OD Limit"
            type="text"
            label="OD Limit"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={accountStatus}
            placeholder="Select Status"
            label="Account Status"
            name="account_status"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          <ControlledInput
            name="amount"
            control={control}
            placeholder="Enter Amount"
            type="text"
            label="Minimum Balance"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={referal}
            placeholder="Select Referal"
            label="Referrer"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
        </div>
      
        <CustomButton
          variant="primary"
          label="Save Details"
          className="w-full rounded-lg mt-6 py-3 h-[60px]"
        />
      </form>
    </section>
  );
};
