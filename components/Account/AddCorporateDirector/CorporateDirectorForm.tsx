"use client";
import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomFileUpload } from "@/components/controlInputs/CustomFileUpload";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import React, { useState } from "react";

const verification = [
  { value: "passport", label: "International Passport" },
  { value: "license", label: "Driver's License" },
  { value: "nin", label: "NIN" },
];

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "password",
    type: "password",
    errorMessage: "Enter password",
    isRequired: true,
  },
];

type Props = {};

export const CorporateDirectorForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  return (
    <section className="bg-white rounded-[30px] p-10">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="customerID"
            control={control}
            placeholder=""
            type="text"
            label="CustomerID"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Acc name"
            type="text"
            label="Account_Name"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="Director Surname"
            control={control}
            placeholder="Surname"
            type="text"
            label="Director Surname"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Director Firstname"
            control={control}
            placeholder="Firstname"
            type="text"
            label="Director Firstname"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="customerID"
            control={control}
            placeholder="Middlename"
            type="text"
            label="Director Middlename"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Address"
            type="text"
            label="Director Home Address"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-3">
          <CustomSelect
            options={verification}
            value={selectedStatus}
            onChange={(value) => setSelectedStatus(value)}
            placeholder="Select Identification"
            label="Director Means of Identification"
            name="verification"
            dropdownChoice
          />
          <ControlledInput
            name="id_number"
            control={control}
            placeholder="12345678902930298"
            type="number"
            label="Director Identification Number"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="bvn"
            control={control}
            placeholder="2138930292"
            type="number"
            label="Director BVN"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-3">
          <CustomSelect
            options={verification}
            value={selectedStatus}
            onChange={(value) => setSelectedStatus(value)}
            placeholder="Select LGA"
            label="Director Local Government Area"
            name="lga"
            dropdownChoice
          />
          <CustomSelect
            options={gender}
            value={selectedGender}
            onChange={(value) => setSelectedGender(value)}
            placeholder="Select Gender"
            label="Director Gender"
            name="gender"
            dropdownChoice
          />
          <CustomFileUpload
            name="file"
            label="File Upload"
            control={control}
            rules={{ required: true }}
            placeholder=""
            variant="primary"
          />
        </div>
        <CustomButton
          variant="primary"
          label="Add Corporate Director"
          className="w-[378px] rounded-lg mt-2.5 py-3"
        />
      </form>
    </section>
  );
};
