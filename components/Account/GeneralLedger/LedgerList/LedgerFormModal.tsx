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
    name: "acctName",
    type: "text",
    errorMessage: "Account Name is required",
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
  {
    name: "regionalManagerPhone",
    type: "text",
    errorMessage: "Region Manager Mobile is required",
    // isRequired: true,
  },
  {
    name: "regionalManagerEmail",
    type: "email",
    errorMessage: "Region Manager Email is required",
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LedgerFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch, setValue } =
    useDynamicForm<ListForm>(fields, {});

  const { isValid } = formState;

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader title="Add Ledger List" icon={X} description="Close" />
        <form>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="acctName"
                control={control}
                placeholder="enter ledger name"
                type="text"
                label="Ledger Name"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="Region"
                control={control}
                placeholder="enter region name"
                type="text"
                label="Region"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="branch"
                control={control}
                placeholder="Enter branch name"
                type="email"
                label="Branch"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="Ledger"
                control={control}
                placeholder="Enter Ledger Class Ledger"
                type="number"
                label="Ledger Class Ledger"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="Sub"
                control={control}
                placeholder="Enter Sub Class name"
                type="email"
                label="Sub Class"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="Classification"
                control={control}
                placeholder="Enter Ledger Classification"
                type="number"
                label="Ledger Classification"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="acctName"
                control={control}
                placeholder="Select CurrencyCOde"
                type="email"
                label="CurrencyCOde"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="geo"
                control={control}
                placeholder="IsControlLG (TF)"
                type="number"
                label="IsControlLG "
                // rules={{ required: true }}
                variant="primary"
                disabled
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
