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

export const ProductFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch, setValue } =
    useDynamicForm<ListForm>(fields, {});

  const { isValid } = formState;

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader title="New Product Feature" icon={X} description="Close" />
        <form>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="product"
                control={control}
                placeholder="Enter product code"
                type="text"
                label="Product "
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="Feature"
                control={control}
                placeholder="Enter product feature"
                type="text"
                label="Product Feature"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="Ledger"
                control={control}
                placeholder="Enter ledger"
                type="text"
                label="Ledger"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="status"
                control={control}
                placeholder="Status"
                type="text"
                label="Status"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="Value"
                control={control}
                placeholder="Enter Value"
                type="text"
                label="Value"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="isFiat"
                control={control}
                placeholder="Enter isFiat"
                type="text"
                label="isFiat"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-3">
              <ControlledInput
                name="ledgerName"
                control={control}
                placeholder="Enter Description"
                type="text"
                label="Description"
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
              <ControlledInput
                name="shortcode"
                control={control}
                placeholder="Enter shortcode"
                type="text"
                label="Shortcode "
                // rules={{ required: true }}
                variant="primary"
                disabled
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Product Feature"
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
