"use client";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { LockKeyIcon } from "@/icons/svgComp/LockKeyIcon";
import { MessageIcon } from "@/icons/svgComp/MessageIcon";
import { PersonIcon } from "@/icons/svgComp/PersonIcon";
import { Field } from "@/schemas/dynamicSchema";
import React from "react";

type Props = {};

const fields: Field[] = [
  {
    name: "status",
    type: "text",
    isRequired: true,
  },
  {
    name: "type",
    type: "text",
    isRequired: true,
  },
  {
    name: "userId",
    type: "text",
    isRequired: true,
  },
  {
    name: "companyId",
    type: "text",
    isRequired: true,
  },

  {
    name: "title",
    type: "text",
    errorMessage: "job title is required",
    isRequired: true,
  },
  {
    name: "date",
    type: "date",
    errorMessage: "Date must be selected",
    isRequired: true,
  },

  {
    name: "startTime",
    type: "time",
    errorMessage: "Start Time must be selected",
    isRequired: true,
  },
  {
    name: "endTime",
    type: "time",
    errorMessage: "End Time must be selected",
    isRequired: true,
  },
  {
    name: "description",
    type: "string",
  },
];

const Form = (props: Props) => {
  const { control, handleSubmit, formState } = useDynamicForm(fields, {});
  const { isValid } = formState;

  return (
    <div className="w-9/12 mx-auto my-16 flex flex-col ">
      <ControlledInput
        name="email"
        control={control}
        placeholder="Enter your email"
        type="email"
        label="Activity"
        rules={{ required: true }}
        icon={<MessageIcon />}
        variant="primary"
      />
      <ControlledInput
        name="password"
        control={control}
        placeholder="6+ Characters, 1 Capital letter"
        type="password"
        label="Activity"
        rules={{ required: true }}
        icon={<LockKeyIcon />}
        variant="primary"
      />

      <CustomButton variant="primary" label="Generate Statement" className="mx-auto rounded-lg"/>
    </div>
  );
};

export default Form;
