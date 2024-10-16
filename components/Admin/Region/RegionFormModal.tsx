"use client";
import React from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
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

export const RegionFormModal = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});

  return (
    <>
      <SheetContent side="adjusted" className="">
        <h1 className="text-2xl font-medium text-darkBlue mb-4">Add Region</h1>
        <div className="flex justify-end mb-7">
          <SheetPrimitive.Close className="  ">
            <div className="text-[#0B0F19] flex items-center gap-2.5">
              <span className=" font-semibold text-base">Close</span>
              <X className="h-5 w-5 font-semibold " />
            </div>
          </SheetPrimitive.Close>
        </div>
        <form className="w-full flex flex-col gap-5">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
            <ControlledInput
              name="customerID"
              control={control}
              placeholder="Enter region name"
              type="text"
              label="Region Name"
              rules={{ required: true }}
              variant="primary"
            />
            <CustomSelect
              options={verification}
              control={control}
              rules={{ required: true }}
              placeholder="Select Identification"
              label="Country of Region"
              name="country"
              dropdownChoice
            />
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CustomSelect
              options={verification}
              control={control}
              rules={{ required: true }}
              placeholder="Select Identification"
              label="Regional Manager"
              name="verification"
              dropdownChoice
            />
            <ControlledInput
              name="email"
              control={control}
              placeholder="Enter Regional Manager email"
              type="email"
              label="Regional Manager Email"
              rules={{ required: true }}
              variant="primary"
            />
            <ControlledInput
              name="phone"
              control={control}
              placeholder="Enter Regional Manager Phon"
              type="number"
              label="Regional Manager Phone"
              rules={{ required: true }}
              variant="primary"
            />
          </div>

          <CustomButton
            variant="primary"
            label="Add Branch"
            type="button"
            className="w-[129px] bg-[#E7EEFA] text-darkBlue hover:text-darkBlue hover:bg-[#E7EEFA]/50 rounded-lg mt-2.5 py-3"
          />

          <CustomButton
            variant="primary"
            label="Add Region"
            type="submit"
            className="w-[378px] rounded-lg mt-48 py-3"
          />
        </form>
      </SheetContent>
    </>
  );
};
