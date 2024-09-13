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
};

export const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  dropdownChoice,
  className,
}: CustomSelectProps) => {
  return (
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
  );
};
