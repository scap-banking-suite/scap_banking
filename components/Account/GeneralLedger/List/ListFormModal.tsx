"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { ListForm } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";

const fields: Field[] = [
  {
    name: "name",
    type: "text",
    errorMessage: "Region Name is required",
    isRequired: true,
  },
  {
    name: "country",
    type: "text",
    errorMessage: "Region Country is required",
    // isRequired: true,
  },
  {
    name: "regionalManagerName",
    type: "text",
    errorMessage: "Region Manager is required",
    isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ListFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch, setValue } =
    useDynamicForm<ListForm>(fields, {});

  const { isValid } = formState;

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader title="Add List" icon={X} description="Close" />
        <form>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="ledgerName"
                control={control}
                placeholder="code"
                type="text"
                label="Ledger Name"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="geo"
                control={control}
                placeholder="Enter Geo area name"
                type="text"
                label="Ledger Class"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
              <ControlledInput
                name="name"
                control={control}
                placeholder="Enter region name"
                type="text"
                label="Parent"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add List"
              type="submit"
              className="w-[378px] rounded-lg mt-36 py-3"
              disabled={!isValid}
            />
          </ModalFooter>
        </form>
      </SheetContent>
    </>
  );
};
