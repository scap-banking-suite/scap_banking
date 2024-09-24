"use client";
import React from "react";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { Field } from "@/schemas/dynamicSchema";
import { AuthUser } from "@/components/api/type";
import useDynamicForm from "@/hooks/useDynamicForm";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomTextArea } from "@/components/controlInputs/CustomTextArea";

type Props = {};

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

const referal = [
  { value: "dayo", label: "Adedayo Sully" },
  { value: "ibrahim", label: "Abiodun Ibrahim" },
];

export const PrepaymentForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});
  return (
    <section className=" rounded-[30px] ">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-5">
          <CustomSelect
            options={referal}
            placeholder="Select Entity"
            label="Asset Type"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />

          <CustomDatePicker
            name="purchased"
            control={control}
            label="From"
            rules={{ required: true }}
            variant="basic"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Cost Price"
            type="text"
            label="Amount"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <CustomTextArea
          name="Description"
          control={control}
          placeholder="Enter Description"
          label="Description"
          rules={{ required: true }}
          variant="primary"
        />

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-5">
          <CustomSelect
            options={referal}
            placeholder="Select Duration"
            label="Duration in Months"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />

          <CustomSelect
            options={referal}
            placeholder="Select Debit"
            label="Debit Account"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <CustomSelect
            options={referal}
            placeholder="Select Credit"
            label="Credit Account"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
        </div>

        <CustomButton
          variant="primary"
          label="Save details"
          className="w-full rounded-lg mt-6 py-3 h-[60px]"
        />
      </form>
    </section>
  );
};
