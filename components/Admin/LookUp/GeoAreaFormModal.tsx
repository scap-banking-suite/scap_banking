"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import {  Region } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { useGeoArea } from "@/components/api/crud/geoArea";

const areaType = [
  { value: "LGA", label: "LGA" },
  { value: "State", label: "State" },
  { value: "Country", label: "Country" },
];

const fields: Field[] = [
  {
    name: "code",
    type: "text",
    errorMessage: "Geo Area code is required",
    isRequired: true,
  },
  {
    name: "stateOrLgaOrCountry",
    type: "text",
    errorMessage: "Area is required",
    isRequired: true,
  },
  {
    name: "name",
    type: "text",
    errorMessage: "Geo Area Name is required",
    isRequired: true,
  },
  {
    name: "parentId",
    type: "text",
    errorMessage: "Parent is required",
    isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GeoAreaFormModal = ({ setIsOpen }: Props) => {


  const { control, handleSubmit, formState, reset } =
    useDynamicForm<Region>(fields, {});

  const { isValid } = formState;

  const { addGeoArea, getGeoLists } = useGeoArea();

  const { refetch } = getGeoLists();

  const { mutate, isPending } = addGeoArea;

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
        <ModalHeader title="Add Geo Area" icon={X} description="Close" />
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
                name="name"
                control={control}
                placeholder="Enter Geo area name"
                type="text"
                label="Geo Area Name"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-3">
              <CustomSelect
                options={areaType}
                control={control}
                // rules={{ required: true }}
                placeholder="Select Area"
                label="Area"
                name="stateOrLgaOrCountry"
                dropdownChoice
              />
              <ControlledInput
                name="parentId"
                control={control}
                placeholder="Enter Parent name"
                type="text"
                label="Parent"
                // rules={{ required: true }}
                variant="primary"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Geo Area"
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
