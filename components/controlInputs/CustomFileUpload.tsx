import React from "react";
import { useController, Control } from "react-hook-form";
import { Label } from "../ui/label";

type ControlledFileInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean };
  placeholder?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CustomFileUpload = ({
  label,
  name,
  control,
  rules,
  placeholder = "",
  icon,
  variant = "primary",
  ...props
}: ControlledFileInputProps) => {
  // useController hook to control the file input
  const { field } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="mb-4 space-y-2">
      {/* Label */}
      <Label
        htmlFor={name}
        className="text-base capitalize text-[#1C2434]"
        style={{ fontFamily: "SatoshiBold" }}
      >
        {label}
      </Label>

      <div className="flex items-center">
        {/* Hidden Input */}
        <input
          id={name}
          type="file"
          {...field} 
          className="hidden"
          {...props}
        />
        {/* Styled Input for UI */}
        <input
          type="text"
          placeholder={placeholder}
          className="w-1/2 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none "
          value={field.value ? field.value.name : ""}
          readOnly
        />
        {/* Browse Button */}
        <button
          type="button"
          onClick={() => document.getElementById(name)?.click()}
          className="w-1/2 whitespace-nowrap bg-[#D4D7E5] border border-gray-300 text-[#0B0F19] text-base px-4 py-2 rounded-r-md hover:bg-gray-200 focus:outline-none"
        >
          Browse Files
        </button>
      </div>
    </div>
  );
};
