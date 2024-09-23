"use client";
import useDynamicForm from "@/hooks/useDynamicForm";
import React from "react";
import { AuthUser } from "../api/type";
import { Field } from "@/schemas/dynamicSchema";
import { CustomSelect } from "../controlInputs/CustomSelect";
import ControlledInput from "../controlInputs/ControlledInput";
import { CustomDatePicker } from "../controlInputs/CustomDatePicker";
import { CustomButton } from "../clickable/CustomButton";
import { CustomTextArea } from "../controlInputs/CustomTextArea";

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

export const TotalCostFundForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <section className=" rounded-[30px] py-5 ">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
          <CustomSelect
            options={referal}
            placeholder="Select type"
            label="Asset Type"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <CustomDatePicker
            name="purchased"
            control={control}
            label="Date Purchased"
            rules={{ required: true }}
            variant="basic"
          />

          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Cost Price"
            type="text"
            label="Cost Price"
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

        <CustomButton
          variant="primary"
          label="Add Subscriber"
          className="w-full rounded-lg mt-6 py-3 h-[60px]"
        />
      </form>
    </section>
  );
};
