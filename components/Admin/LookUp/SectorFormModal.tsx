"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { ManagerOption, Userdata } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { useSectors } from "@/components/api/crud/sector";
import { Region } from "@/components/api/crud/region";

const categoryOption = [
  { value: "assigned", label: "Assigned" },
  { value: "unassigned", label: "Unassigned" },
];

const fields: Field[] = [
  {
    name: "sectorName",
    type: "text",
    errorMessage: "Sector Name is required",
    isRequired: true,
  },
  {
    name: "code",
    type: "text",
    errorMessage: "Sector Code is required",
    isRequired: true,
  },
  {
    name: "category",
    type: "text",
    errorMessage: "Sector Category is required",
    // isRequired: true,
  },
  {
    name: "sectorDescription",
    type: "text",
    errorMessage: "Sector Description is required",
    isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SectorFormModal = ({ setIsOpen }: Props) => {


  const { control, handleSubmit, formState, reset } =
    useDynamicForm<Region>(fields, {});

  const { isValid } = formState;

  const { addSector, getSectorLists } = useSectors();

  const { refetch } = getSectorLists();



  const { mutate, isPending } = addSector;

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
        <ModalHeader title="Add Sector" icon={X} description="Close" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
              <ControlledInput
                name="code"
                control={control}
                placeholder="Code"
                type="text"
                label="Code"
                rules={{ required: true }}
                variant="primary"
              />
              <ControlledInput
                name="sectorName"
                control={control}
                placeholder="Enter Sector name"
                type="text"
                label="Sector Name"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-3">
              <CustomSelect
                options={categoryOption}
                control={control}
                // rules={{ required: true }}
                placeholder="Select Category"
                label="Category"
                name="category"
                dropdownChoice
              />
              <ControlledInput
                name="sectorDescription"
                control={control}
                placeholder="Enter Sector Description"
                type="text"
                label="Sector Description"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Sector"
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
