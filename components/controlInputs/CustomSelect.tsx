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

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  dropdownChoice?: boolean;
  name: string;
  label?: string;
};

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  dropdownChoice,
  className,
  label,
  name,
}: CustomSelectProps) => {
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
          className={`w-full ${className}`}
        >
          <SelectValue
            className="text-textbrown text-xs"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
