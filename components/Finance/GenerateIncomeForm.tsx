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

export const GenerateIncomeForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <section className=" rounded-[30px] ">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-5">
          <CustomSelect
            options={referal}
            placeholder="Select Entity"
            label="Entity"
            name="referal"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
          <CustomSelect
            options={referal}
            placeholder="Select type"
            label=" Type"
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
          <CustomDatePicker
            name="purchased"
            control={control}
            label="To"
            rules={{ required: true }}
            variant="basic"
          />
        </div>

        <CustomButton
          variant="primary"
          label="Generate Report"
          className="w-full rounded-lg mt-6 py-3 h-[60px]"
        />
      </form>
    </section>
  );
};