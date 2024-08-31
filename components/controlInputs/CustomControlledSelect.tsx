import React from "react";
import { useController, Control } from "react-hook-form";
import { Description, Field, Label, Select } from "@headlessui/react";
import { FaSpinner } from "react-icons/fa";
import { ChevDropdownIcon } from "@/icons/svgComp/ArrowD";
import { cn } from "@/lib/utils";
import { Spinner } from "../shared/Spinner";

type Option = { value: string | number; label: string };

type CustomSelectProps = {
  name: string;
  label?: string;
  control: Control<any>;
  rules?: { required: boolean };
  options: string[] | Option[];
  placeholder?: string;
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean; // New loading prop
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const CustomControlledSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  control,
  rules,
  options,
  placeholder = "Select an option",
  variant = "primary",
  loading = false,
  ...props
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const hasValue = value !== undefined && value !== null && value !== "";

  const baseStyles =
    "w-full py-2 px-4 h-14  border outline-none  rounded-[10px] border border-bordergrey  focus:outline-none data-[focus]:outline data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 mt-2 block appearance-none cursor-pointer";
  const styles = {
    primary: "border border-bordergrey text-xs text-textbrown bg-red-500",
    secondary: "border-secondary bg-yellow-100",
    tertiary: "border-tertiary bg-green-100",
    hasValue: "border-primary/5 bg-primary/10",
    invalid: "bg-red-200",
  };

  const selectClassName = cn(baseStyles, styles[variant], {
    [styles.hasValue]: hasValue,
    [styles.invalid]: invalid,
  });

  return (
    <Field className="mb-4">
      <Label
        className="text-base font-semibold capitalize text-[#333333]"
        htmlFor={name}
      >
        {label}
      </Label>

      <div className="relative">
        <Select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className={selectClassName}
          disabled={loading}
          {...props}
        >
          {loading ? (
            <Spinner />
          ) : (
            Array.isArray(options) &&
            options.length > 0 &&
            options.map((option) =>
              typeof option === "string" ? (
                <option key={option} value={option} className="capitalize bg-white mt-2">
                  {option}
                </option>
              ) : (
                <option
                  key={option?.value}
                  value={option?.value}
                  className="capitalize bg-white"
                >
                  {option.label}
                </option>
              )
            )
          )}
        </Select>
        <span className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2">
          {loading ? (
            <FaSpinner className="animate-spin text-secondary" />
          ) : (
            <ChevDropdownIcon />
          )}
        </span>
      </div>

      {error && (
        <Description className="text-red-500 text-xs/4 line-clamp-1 mt-2">
          {error.message}
        </Description>
      )}
    </Field>
  );
};

export default CustomControlledSelect;
