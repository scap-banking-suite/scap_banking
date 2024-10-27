"use client";
import React, { useState } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { AuthUser } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { BranchFormModal } from "./BranchFormModal";
import { useRegions } from "@/components/api/crud/region";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";

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
        <ModalHeader title="Add region" icon={X} description="Close" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full flex flex-col gap-5">
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
          </ModalBody>
          <ModalFooter>
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
          </ModalFooter>
        </form>
      </SheetContent>
    </>
  );
};
