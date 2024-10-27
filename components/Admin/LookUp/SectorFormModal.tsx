"use client";
import React, { useEffect, useState } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { ManagerOption, Region, Userdata } from "@/components/api/type";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import { CustomButton } from "@/components/clickable/CustomButton";
import { useRegions } from "@/components/api/crud/region";
import { toast } from "sonner";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { X } from "lucide-react";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { useUsers } from "@/components/api/crud/allUsers";

const country = [
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
];

const fields: Field[] = [
  {
    name: "name",
    type: "text",
    errorMessage: "Region Name is required",
    isRequired: true,
  },
  {
    name: "manager",
    type: "text",
    errorMessage: "Region Manager is required",
    // isRequired: true,
  },
  {
    name: "phone",
    type: "text",
    errorMessage: "Region Manager Mobile is required",
    // isRequired: true,
  },
  {
    name: "email",
    type: "email",
    errorMessage: "Region Manager Email is required",
    // isRequired: true,
  },
];

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SectorFormModal = ({ setIsOpen }: Props) => {
  const [managerOptions, setManagerOptions] = useState<ManagerOption[]>([]);

  const { control, handleSubmit, formState, reset, watch, setValue } =
    useDynamicForm<Region>(fields, {});

  const { isValid } = formState;

  const { getAllUsers } = useUsers();
  const { addRegion, getRegionLists } = useRegions();

  const { refetch } = getRegionLists();
  const { data: allUsers } = getAllUsers();

  const userListData = allUsers?.data || [];
  const selectedManager = watch("manager");

  console.log(managerOptions, "drop__");

  useEffect(() => {
    if (userListData) {
      const UsersOptions = Array.isArray(userListData)
        ? userListData?.map((user: Userdata) => ({
            value: user?.name,
            label: user?.name,
            email: user?.email,
            phone: user?.mobile,
          }))
        : [];
      setManagerOptions(UsersOptions);
    }
  }, [allUsers]);

  useEffect(() => {
    const selectedUser = managerOptions?.find(
      (manager) => manager?.value === selectedManager
    );
    if (selectedUser) {
      setValue("email", selectedUser?.email);
      setValue("mobile", selectedUser.phone);
    }
  }, [selectedManager, managerOptions, setValue]);

  const { mutate, isPending } = addRegion;

  const onSubmit = (data: any) => {
    mutate(data, {
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
        <ModalHeader title="Add Sector" icon={X} description="Close" />
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
                placeholder="Enter Sector name"
                type="text"
                label="Sector Name"
                rules={{ required: true }}
                variant="primary"
              />
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-3">
              <CustomSelect
                options={managerOptions}
                control={control}
                // rules={{ required: true }}
                placeholder="Select Category"
                label="Category"
                name="category"
                dropdownChoice
              />
              <ControlledInput
                name="Description"
                control={control}
                placeholder="Enter Sector Description"
                type="text"
                label="Parent"
                // rules={{ required: true }}
                variant="primary"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              variant="primary"
              label="Add Sector"
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
