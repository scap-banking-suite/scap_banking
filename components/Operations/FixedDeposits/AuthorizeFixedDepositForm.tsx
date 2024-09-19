"use client";
import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import React from "react";

type Props = {};

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "password",
    errorMessage: "Enter password",
    isRequired: true,
  },
];

export const AuthorizeFixedDepositForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <section className="bg-white rounded-[30px] py-3 px-5">
      <form className="grid grid-cols-3 items-center gap-6">
        <CustomDatePicker
          name="startDate"
          control={control}
          label="Start Date"
          rules={{ required: true }}
          variant="basic"
        />
        <CustomDatePicker
          name="endDate "
          control={control}
          label="End Date "
          rules={{ required: true }}
          variant="basic"
        />
        <div className="w-[143px] mt-4">
          <CustomButton
            variant="primary"
            label='Spool Report'
            className="rounded-[20px] w-full text-sm h-[40px] font-[300]"
          />
        </div>
      </form>
    </section>
  );
};
