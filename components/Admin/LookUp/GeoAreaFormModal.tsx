"use client";
import React, { useEffect, useMemo, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { useGeoArea } from "@/components/api/crud/geoArea";
import { StateLGAItem, useStateLGA } from "@/components/api/crud/stateLga";
import { GeoArea } from "@/components/api/type";

const areaType = [
  { value: "LGA", label: "LGA" },
  { value: "State", label: "State" },
  { value: "Country", label: "Country" },
];

type AddressOption = { value: string; label: string };

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
    // isRequired: true,
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
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GeoAreaFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch } =
    useDynamicForm<GeoArea>(fields, {});

  const areaTypeValue = watch("stateOrLgaOrCountry");

  // const [filteredOptions, setFilteredOptions] = useState<AddressOption[]>([]);
  // const [selectedAreaType, setSelectedAreaType] = useState("");

  const { isValid } = formState;

  const { addGeoArea, getGeoLists } = useGeoArea();
  const { getStateLGA } = useStateLGA();

  const { refetch } = getGeoLists();
  const { data: stateLGAList, refetch: stateRefetch } = getStateLGA();

  const stateLGAListData = stateLGAList?.data || [];

  const filteredOptions = useMemo(() => {
    const lowercaseAreaType = areaTypeValue?.toLowerCase();
    return stateLGAListData
      ?.filter(
        (item: StateLGAItem) =>
          item?.stateOrLgaOrCountry?.toLowerCase() === lowercaseAreaType
      )
      .map((item: StateLGAItem) => ({
        value: item?.id.toString(),
        label: item?.name,
      }));
  }, [areaTypeValue, stateLGAListData]);

  const { mutate, isPending } = addGeoArea;

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        refetch();
        stateRefetch();
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
              <CustomSelect
                options={areaType}
                control={control}
                // rules={{ required: true }}
                placeholder="Select Area"
                label="Area"
                name="stateOrLgaOrCountry"
                dropdownChoice
              />
              {areaTypeValue && (
                <CustomSelect
                  options={filteredOptions}
                  control={control}
                  placeholder="Select Parent"
                  label="Parent"
                  name="parentId"
                  dropdownChoice
                />
              )}
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
