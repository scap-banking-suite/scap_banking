"use client";
import React, { useEffect, useState } from "react";
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
import { LedgerList, useLedgerList } from "@/components/api/crud/ledgerList";

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
  const { control, handleSubmit, formState, reset, watch } =
    useDynamicForm<LedgerList>(fields, {});

  const { isValid } = formState;
  const [showParentField, setShowParentField] = useState(false);

  const ledgerClassID = watch("ledgerClassID");

  const { addList, getLists, getLedgerClass } = useLedgerList();

  const { data: classList } = getLedgerClass();
  const { data: lists, refetch } = getLists(undefined, ledgerClassID);

  useEffect(() => {
    if (ledgerClassID) {
      setShowParentField(true);
      refetch();
    } else {
      setShowParentField(false);
    }
  }, [ledgerClassID, refetch]);


  const classListData = classList?.data || [];
  const ListData = lists?.data || [];

  const classListOption = Array.isArray(classListData)
    ? classListData?.map((list: any) => ({
        value: list?.id?.toString(),
        label: list?.name,
      }))
    : [];

  const parentListOption = Array.isArray(ListData)
    ? ListData?.map((list: any) => ({
        value: list?.id?.toString(),
        label: list?.name,
      }))
    : [];

  const { mutate, isPending } = addList;

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        refetch();
        reset();
        setIsOpen(false);
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error creating List");
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
                options={classListOption}
                control={control}
                placeholder="Select Ledger"
                label="Ledger Class"
                name="ledgerClassID"
                dropdownChoice
              />
            </div>
            {showParentField && (
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
                <CustomSelect
                  options={parentListOption}
                  control={control}
                  placeholder="Select Parent"
                  label="Parent"
                  name="parentID"
                  dropdownChoice
                />
              </div>
            )}
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
