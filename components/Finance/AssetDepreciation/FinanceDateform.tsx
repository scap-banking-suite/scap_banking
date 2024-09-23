"use client";
import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import React from "react";

type Props = {
  startDate?: boolean;
  endDate?: boolean;
};

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

export const FinanceDateform = ({ startDate, endDate }: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <section className="bg-white rounded-[30px] py-3 px-5 w-full">
      <form
        className={`grid ${
          startDate && endDate ? "grid-cols-3" : "grid-cols-2"
        }  items-center gap-6 w-full`}
      >
        {startDate && (
          <CustomDatePicker
            name="startDate"
            control={control}
            label="Start Date"
            rules={{ required: true }}
            variant="basic"
          />
        )}
        {endDate && (
          <CustomDatePicker
            name="endDate "
            control={control}
            label="End Date "
            rules={{ required: true }}
            variant="basic"
          />
        )}
        <div className="w-[143px] mt-4">
          <CustomButton
            variant="primary"
            label="Spool Report"
            className="rounded-[20px] w-full text-sm h-[40px] font-[300]"
          />
        </div>
      </form>
    </section>
  );
};
