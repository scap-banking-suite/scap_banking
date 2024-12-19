"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import useDynamicForm from "@/hooks/useDynamicForm";
import { CustomButton } from "@/components/clickable/CustomButton";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { SquareDotIcon } from "@/icons/svgComp/TableIcons";

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

export const LedgerClasssApprovalFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset, watch } =
    useDynamicForm<any>(fields, {});

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader
          title="Ledger Class Approval"
          icon={X}
          description="Close"
        />
        <form>
          <p className="my-5 text-sm text-placeholderText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis,
          </p>
          <div className="flex gap-4 items-center">
            <CustomButton
              variant="primary"
              className="rounded-[4px] w-fit bg-[#E1FCEF] font-normal h-[40px] text-[#14804A] text-xs px-2"
              icon={SquareDotIcon}
              label="Approve"
            />
            <CustomButton
              variant="primary"
              className="rounded-[4px] w-fit bg-[#FFDED3] font-normal h-[40px] text-[#F3542C] text-xs px-2"
              icon={SquareDotIcon}
              label="Deny"
            />
          </div>
          <section className="space-y-5 mt-10">
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Ledger Subclass Name
              </h3>
              <p className="text-xs text-placeholderText">Ledger Name</p>
            </div>
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Ledger Class
              </h3>
              <p className="text-xs text-placeholderText">Ledger Class</p>
            </div>
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Ledger Parent
              </h3>
              <p className="text-xs text-placeholderText">Ledger Parent</p>
            </div>
          </section>
        </form>
      </SheetContent>
    </>
  );
};
