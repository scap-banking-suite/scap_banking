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

export const FixedDepositForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <section className=" rounded-[30px] py-5 ">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
          <ControlledInput
            name="Account No"
            control={control}
            placeholder=""
            type="text"
            label="Account No"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder=""
            type="text"
            label="CustomerID"
            rules={{ required: true }}
            variant="primary"
          />

          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder=""
            type="text"
            label="Customer Name"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          <ControlledInput
            name="Account Title"
            control={control}
            placeholder=""
            type="text"
            label="Account Title"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder=""
            type="text"
            label="Booking Date"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder=""
            type="number"
            label="Amount"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
          <ControlledInput
            name="Interest Rate"
            control={control}
            placeholder=""
            type="text"
            label="Interest Rate"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={referal}
            placeholder="Select Referal"
            label="interest Payment"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <ControlledInput
            name="Tenure"
            control={control}
            placeholder=""
            type="text"
            label="Tenure"
            rules={{ required: true }}
            variant="primary"
          />
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          <CustomSelect
            options={referal}
            placeholder="Select Category"
            label="Category"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <CustomSelect
            options={referal}
            placeholder="Select Officer"
            label="Account Officer"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <CustomSelect
            options={referal}
            placeholder="Select Authorizer"
            label="Authorizer"
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
