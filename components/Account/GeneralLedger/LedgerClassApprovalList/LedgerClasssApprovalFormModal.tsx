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
import { formatDate } from "@/utils/formatdate";

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
  item: any;
};

export const LedgerClasssApprovalFormModal = ({ setIsOpen, item }: Props) => {
  if (!item) return null;
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
            {item?.mailMessage}
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
                Branch
              </h3>
              <p className="text-xs text-placeholderText">{item?.branchCode}</p>
            </div>
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Approve Role
              </h3>
              <p className="text-xs text-placeholderText">
                {item?.approveRole}
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Status
              </h3>
              <p
                className={` ${
                  item?.messageStatus === "Denied"
                    ? "bg-[#FFDEDC] text-[#FF361B]"
                    : "text-[#14804A] bg-[#E1FCEF]"
                }  rounded-sm flex justify-center items-center gap-2 h-[22px] w-[92px]`}
              >
                <SquareDotIcon />
                {item?.messageStatus}
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="w-[30%] text-darkBlue font-semibold text-sm">
                Date Created
              </h3>
              <p className="text-xs text-placeholderText">
                {formatDate(item?.createdDate)}
              </p>
            </div>
          </section>
        </form>
      </SheetContent>
    </>
  );
};
