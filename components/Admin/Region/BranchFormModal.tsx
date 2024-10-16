"use client";
import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, X } from "lucide-react";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { AuthUser } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";

const verification = [
  { value: "passport", label: "International Passport" },
  { value: "license", label: "Driver's License" },
  { value: "nin", label: "NIN" },
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
    name: "password",
    type: "password",
    errorMessage: "Enter password",
    isRequired: true,
  },
];

type Props = {};

export const BranchFormModal = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <>
      <SheetContent side="adjusted" className="">
        <h1 className="text-2xl font-medium text-darkBlue mb-4">
          Add Branches
        </h1>
        <div className="flex justify-end mb-7">
          <SheetPrimitive.Close className="  ">
            <div className="text-[#001F56] flex items-center gap-2.5">
              <span className=" font-semibold text-base">Back to Region</span>
              <ChevronLeft className="h-5 w-5 font-semibold " />
            </div>
          </SheetPrimitive.Close>
        </div>
        <form className="w-full flex flex-col gap-5">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
            <ControlledInput
              name="customerID"
              control={control}
              placeholder="Enter branch name"
              type="text"
              label="Branch Name"
              rules={{ required: true }}
              variant="primary"
            />

            <ControlledInput
              name="code"
              control={control}
              placeholder="Enter Branch code"
              type="text"
              label="Branch Code"
              rules={{ required: true }}
              variant="primary"
            />

            <ControlledInput
              name="address"
              control={control}
              placeholder="Enter Branch Address"
              type="text"
              label="Branch Address"
              rules={{ required: true }}
              variant="primary"
            />
            <ControlledInput
              name="region"
              control={control}
              placeholder="Enter Branch name"
              type="text"
              label="Branch Region"
              rules={{ required: true }}
              variant="primary"
            />
            <ControlledInput
              name="state"
              control={control}
              placeholder="Enter Branch State"
              type="text"
              label="Branch State"
              rules={{ required: true }}
              variant="primary"
            />
            <ControlledInput
              name="manager"
              control={control}
              placeholder="Enter Branch Manager"
              type="text"
              label="Branch Manager"
              rules={{ required: true }}
              variant="primary"
            />
            <CustomSelect
              options={verification}
              control={control}
              rules={{ required: true }}
              placeholder="Select Status"
              label="Branch Status"
              name="status"
              dropdownChoice
            />

            <ControlledInput
              name="gl"
              control={control}
              placeholder="Branch GL Number"
              type="text"
              label="Enter Branch GL Number"
              rules={{ required: true }}
              variant="primary"
            />
          </div>

          <CustomButton
            variant="primary"
            label="Add Branch"
            type="submit"
            className="w-[265px] bg-[#E7EEFA] text-darkBlue hover:text-darkBlue hover:bg-[#E7EEFA]/50 rounded-lg mt-2.5 py-3"
          />
        </form>
      </SheetContent>
    </>
  );
};
