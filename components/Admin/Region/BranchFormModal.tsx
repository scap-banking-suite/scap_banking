"use client";
import React from "react";
import { SheetContent } from "@/components/ui/sheet";

import { ChevronLeft, X } from "lucide-react";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import {
  AuthUser,
  Userdata,
} from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { RegionDataItem, useRegions } from "@/components/api/crud/region";
import { useBranches } from "@/components/api/crud/branch";
import { toast } from "sonner";
import { useUsers } from "@/components/api/crud/allUsers";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";

const status = [
  { value: "true", label: "True" },
  { value: "false", label: "False" },
];

const fields: Field[] = [
  {
    name: "regionID",
    type: "number",
    errorMessage: "Region is required",
    isRequired: true,
  },
  {
    name: "branchName",
    type: "text",
    errorMessage: "Branch Name is required",
    isRequired: true,
  },
  {
    name: "branchAddress",
    type: "text",
    errorMessage: "Branch Address is required",
    isRequired: true,
  },
  {
    name: "branchMobile",
    type: "text",
    errorMessage: "Branch Mobile is required",
    isRequired: true,
  },
  {
    name: "branchState",
    type: "text",
    errorMessage: "Branch State is required",
    isRequired: true,
  },
  {
    name: "branchManager",
    type: "text",
    errorMessage: "Branch Manager Name is required",
    isRequired: true,
  },
  {
    name: "branchStatus",
    type: "text",
    errorMessage: "Branch Status is required",
    isRequired: true,
  },
  {
    name: "branchGLNumber",
    type: "text",
    errorMessage: "Branch Gl number is required",
    isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BranchFormModal = ({ setIsOpen }: Props) => {
  const { control, handleSubmit, formState, reset } = useDynamicForm<AuthUser>(
    fields,
    {}
  );

  const { isValid } = formState;

  const { getRegionLists } = useRegions();
  const { getAllUsers } = useUsers();
  const { addBranch, getBranchLists } = useBranches();

  const { data: regionList } = getRegionLists();
  const { refetch } = getBranchLists();
  const { data: allUsers } = getAllUsers();

  const regionListData = regionList?.data || [];
  const userListData = allUsers?.data || [];

  const RegionOptions = regionListData?.map((reg: RegionDataItem) => ({
    value: reg?.id?.toString(),
    label: reg?.name,
  }));

  const UsersOptions = Array.isArray(userListData)
    ? userListData?.map((user: Userdata) => ({
        value: user?.name,
        label: user?.name,
      }))
    : [];

  const { mutate, isPending } = addBranch;

  const onSubmit = (data: any) => {
    const transformedData = {
      ...data,
      branchStatus: data.branchStatus === "true",
    };

    mutate(transformedData, {
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
        <ModalHeader
          title="Add Branches"
          icon={ChevronLeft}
          description="Back to Region"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="w-full ">
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
              <ControlledInput
                name="branchName"
                control={control}
                placeholder="Enter branch name"
                type="text"
                label="Branch Name"
                rules={{ required: true }}
                variant="primary"
              />

              <ControlledInput
                name="branchMobile"
                control={control}
                placeholder="Enter Branch Phone Number"
                type="number"
                label="Branch Phone Number"
                rules={{ required: true }}
                variant="primary"
              />

              <ControlledInput
                name="branchAddress"
                control={control}
                placeholder="Enter Branch Address"
                type="text"
                label="Branch Address"
                rules={{ required: true }}
                variant="primary"
              />
              <CustomSelect
                name="regionID"
                options={RegionOptions}
                control={control}
                rules={{ required: true }}
                placeholder="Select Region"
                label="Branch Region"
                dropdownChoice
              />

              <ControlledInput
                name="branchState"
                control={control}
                placeholder="Enter Branch State"
                type="text"
                label="Branch State"
                rules={{ required: true }}
                variant="primary"
              />
              <CustomSelect
                name="branchManager"
                options={UsersOptions}
                control={control}
                rules={{ required: true }}
                placeholder="Select Branch Manager"
                label="Branch Manager"
                dropdownChoice
              />

              <CustomSelect
                options={status}
                control={control}
                rules={{ required: true }}
                placeholder="Select Status"
                label="Branch Status"
                name="branchStatus"
                dropdownChoice
              />

              <ControlledInput
                name="branchGLNumber"
                control={control}
                placeholder="Branch GL Number"
                type="text"
                label="Enter Branch GL Number"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Branch"
              type="submit"
              className="w-[265px] bg-[#E7EEFA] text-darkBlue hover:text-darkBlue hover:bg-[#E7EEFA]/50 rounded-lg mt-2.5 py-3"
              isLoading={isPending}
              disabled={!isValid}
            />
          </ModalFooter>
        </form>
      </SheetContent>
    </>
  );
};
