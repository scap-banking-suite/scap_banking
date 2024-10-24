"use client";
import React, { useState } from "react";
import {
  Sheet,
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
import { BranchFormModal } from "./BranchFormModal";
import { useRegions } from "@/components/api/crud/region";
import { toast } from "sonner";

const country = [
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
];

const manager = [
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
];

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const fields: Field[] = [
  {
    name: "name",
    type: "text",
    errorMessage: "Region Name is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "password",
    errorMessage: "Enter password",
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegionFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset } = useDynamicForm<AuthUser>(
    fields,
    {}
  );

  const { isValid } = formState;

  const { addRegion, getRegionLists } = useRegions();
  const { refetch } = getRegionLists();

  const { mutate, isPending } = addRegion;

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        refetch();
        reset();
        setIsOpen(false);
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error creating Region");
      },
    });
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-5"
        >
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
            <ControlledInput
              name="name"
              control={control}
              placeholder="Enter region name"
              type="text"
              label="Region Name"
              rules={{ required: true }}
              variant="primary"
            />
            <CustomSelect
              options={country}
              control={control}
              // rules={{ required: true }}
              placeholder="Select Region Country"
              label="Country of Region"
              name="country"
              dropdownChoice
            />
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CustomSelect
              options={gender}
              control={control}
              // rules={{ required: true }}
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
              // rules={{ required: true }}
              variant="primary"
            />
            <ControlledInput
              name="phone"
              control={control}
              placeholder="Enter Regional Manager Phon"
              type="number"
              label="Regional Manager Phone"
              // rules={{ required: true }}
              variant="primary"
            />
          </div>

          {/* <CustomButton
            variant="primary"
            label="Add Branch"
            type="button"
            onClick={openBranchModal}
            className="w-[129px] bg-[#E7EEFA] text-darkBlue hover:text-darkBlue hover:bg-[#E7EEFA]/50 rounded-lg mt-2.5 py-3"
          /> */}

          <CustomButton
            variant="primary"
            label="Add Region"
            type="submit"
            className="w-[378px] rounded-lg mt-36 py-3"
            isLoading={isPending}
            disabled={!isValid}
          />
        </form>
      </SheetContent>
    </>
  );
};
