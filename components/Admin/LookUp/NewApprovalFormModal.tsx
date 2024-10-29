"use client";
import React from "react";
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
import { useApprovalConfig } from "@/components/api/crud/approvalConfig";

const configuration = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
];

const fields: Field[] = [
  {
    name: "moduleName",
    type: "text",
    errorMessage: "Approval Config Name is required",
    isRequired: true,
  },
  {
    name: "modulePath",
    type: "text",
    errorMessage: "Region Manager is required",
    // isRequired: true,
  },

  {
    name: "isConfigured",
    type: "text",
    errorMessage: " is required",
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewApprovalFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset } = useDynamicForm<Region>(
    fields,
    {}
  );

  const { isValid } = formState;

  const { addApprovalConfig, getApprovalConfigLists } = useApprovalConfig();

  const { refetch } = getApprovalConfigLists();

  const { mutate, isPending } = addApprovalConfig;

  const onSubmit = (data: any) => {
    const transformedData = {
      ...data,
      isConfigured: data.isConfigured === "true",
    };

    mutate(transformedData, {
      onSuccess: (response: any) => {
        toast.success(response?.message);
        refetch();
        reset();
        setIsOpen(false);
      },
      onError: (error: any) => {
        toast.error(error?.message || "Error creating Geo Area");
      },
    });
  };

  return (
    <>
      <SheetContent side="adjusted" className="">
        <ModalHeader
          title="New Approval Configuration"
          icon={X}
          description="Close"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full flex flex-col gap-5">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
              <ControlledInput
                name="moduleName"
                control={control}
                placeholder="Enter Module Name"
                type="text"
                label="Module Name"
                rules={{ required: true }}
                variant="primary"
              />
              <ControlledInput
                name="modulePath"
                control={control}
                placeholder="Enter Module Path"
                type="text"
                label="Module Path"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-3">
              <CustomSelect
                options={configuration}
                control={control}
                // rules={{ required: true }}
                placeholder="Select Configuration"
                label="isConfigured"
                name="isConfigured"
                dropdownChoice
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Approval Configuration"
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
