import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Control, useController } from "react-hook-form";
import { cn } from "@/lib/utils";

type CustomSelectProps = {
  options: any;
  placeholder?: string;
  className?: string;
  dropdownChoice?: boolean;
  name: string;
  label?: string;
  control?: Control<any>;
  rules?: { required: boolean };
  variant?: "primary" | "secondary" | "tertiary";
};

export const CustomSelect = ({
  options,
  placeholder,
  dropdownChoice,
  control,
  rules,
  className,
  label,
  name,
  variant = "primary",
}: CustomSelectProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const baseStyles =
    "w-full py-2 px-4 h-14 rounded-[8px] border outline-none text-[#64748B] text-base";
  const styles = {
    primary: "focus:border-accent focus:ring-accent",
    secondary:
      "border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary: "border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant], {
    [styles.invalid]: invalid,
  });

  return (
    <div className="mb-4 space-y-2">
      <Label
        htmlFor={name}
        className="text-base capitalize text-[#1C2434]"
        style={{ fontFamily: "SatoshiBold" }}
      >
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          dropdownChoice={dropdownChoice}
          className={`${inputClassName} ${className}`}
        >
          <SelectValue
            className="text-textbrown text-xs"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((option: any) => (
              <SelectItem key={option?.value} value={option?.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
