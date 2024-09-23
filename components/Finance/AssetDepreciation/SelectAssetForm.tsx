"use client";
import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
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

export const SelectAssetForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  const asset = [
    { value: "dayo", label: "Adedayo Sully" },
    { value: "ibrahim", label: "Abiodun Ibrahim" },
  ];

  return (
    <section className="bg-white rounded-[30px] py-3 px-5  w-8/12">
      <form className="flex items-center gap-6">
        <div className="w-[215px]">
          <CustomSelect
            options={asset}
            placeholder="Select"
            label="Select asset type"
            name="asset"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
        </div>
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
