"use client";
import { AuthUser } from "@/components/api/type";
import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
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

const country = [
  { value: "Nigeria", label: "Nigeria" },
  { value: "UK", label: "United Kingdom" },
  { value: "USA", label: "United State of America" },
];

const lga = [
  { value: "odili", label: "Odili" },
  { value: "AMAC", label: "Garki" },
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

export const CorporateCustomerForm = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLGA, setSelectedLGA] = useState<string>("");

  return (
    <section className="bg-white rounded-[30px] p-10">
      <form className="w-full flex flex-col">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="Account_Name"
            control={control}
            placeholder="Acc name"
            type="text"
            label="Account_Name"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={country}
            placeholder="Select Country"
            label="Country of Residence"
            name="country"
            dropdownChoice
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="Office Phone"
            control={control}
            placeholder="+234 --- --- --"
            type="text"
            label="Office Phone"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={lga}
            control={control}
            rules={{ required: true }}
            placeholder="Select LGA"
            label="Local Government Area"
            name="lga"
            dropdownChoice
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="Office Address"
            control={control}
            placeholder="Address"
            type="text"
            label="Office Address"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Company Email"
            control={control}
            placeholder="example@mail.com"
            type="email"
            label="Company Email"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <ControlledInput
            name="Customer Surname"
            control={control}
            placeholder="Surname"
            type="text"
            label="Customer Surname"
            rules={{ required: true }}
            variant="primary"
          />
          <ControlledInput
            name="Customer Firstname"
            control={control}
            placeholder="Firstname"
            type="text"
            label="Customer Firstname"
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
            label="Customer Middlename"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomDatePicker
            name="dob"
            control={control}
            label="Customer Date Of Birth"
            rules={{ required: true }}
            variant="basic"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3">
          <CustomSelect
            options={verification}
            control={control}
            rules={{ required: true }}
            placeholder="Select Identification"
            label="Customer Means of Identification"
            name="verification"
            dropdownChoice
          />
          <ControlledInput
            name="id_number"
            control={control}
            placeholder="12345678902930298"
            type="number"
            label="Customer Identification Number"
            rules={{ required: true }}
            variant="primary"
          />
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-3">
          <ControlledInput
            name="bvn"
            control={control}
            placeholder="2138930292"
            type="number"
            label="Customer BVN"
            rules={{ required: true }}
            variant="primary"
          />
          <CustomSelect
            options={gender}
            control={control}
            rules={{ required: true }}
            placeholder="Select Gender"
            label="Customer Gender"
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
          label="Add Corporate Customer"
          className="w-[378px] rounded-lg mt-2.5 py-3"
        />
      </form>
    </section>
  );
};
