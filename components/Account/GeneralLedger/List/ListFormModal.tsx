"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Region } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { useLedgerList } from "@/components/api/crud/ledgerList";

const ledgerClass = [
  { id: 1, value: "1", label: "Class A" },
  { id: 2, value: "2", label: "Class B" },
  { id: 3, value: "3", label: "Class C" },
];

const parentOptions = [
  { id: 1, value: "1", label: "Parent A" },
  { id: 2, value: "2", label: "Parent B" },
  { id: 3, value: "3", label: "Parent C" },
];

const fields: Field[] = [
  {
    name: "ledgerClassID",
    type: "text",
    errorMessage: "Area is required",
    // isRequired: true,
  },
  {
    name: "subName",
    type: "text",
    isRequired: true,
  },
  {
    name: "parentID",
    type: "text",
    errorMessage: "Parent is required",
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ListFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset } = useDynamicForm<Region>(
    fields,
    {}
  );

  const { isValid } = formState;

  const { addList, getLists } = useLedgerList();

  const { refetch } = getLists();

  const { mutate, isPending } = addList;

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      parentID: Number(data.parentID),
      ledgerClassID: Number(data.ledgerClassID),
    };

    mutate(payload, {
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
        <ModalHeader title="Add List" icon={X} description="Close" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
              <ControlledInput
                name="subName"
                control={control}
                placeholder="Enter Ledger Name"
                type="text"
                label="Ledger name"
                rules={{ required: true }}
                variant="primary"
              />
              <CustomSelect
                options={ledgerClass}
                control={control}
                placeholder="Select Ledger"
                label="Ledger Class"
                name="ledgerClassID"
                dropdownChoice
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-3">
              <CustomSelect
                options={parentOptions}
                control={control}
                placeholder="Select Parent"
                label="Parent"
                name="parentID"
                dropdownChoice
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add List"
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
