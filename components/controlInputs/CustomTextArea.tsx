import React from "react";
import { useController, Control, FieldValues, FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import clsx from "clsx";

type ControlledTextAreaProps<T extends FieldValues> = {
  name: string;
  label: string;
  control: Control<any>; 
  rules?: { required?: boolean; [key: string]: any }; 
  placeholder?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const CustomTextArea = <T extends FieldValues>({
  label,
  name,
  control,
  rules,
  placeholder = "",
  variant = "primary",
  icon,
  ...props
}: ControlledTextAreaProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const baseStyles =
    "w-full py-2 px-4 h-[290px] rounded-[10px] outline-none text-[#64748B] text-base";
  const styles = {
    primary: "focus:border-accent focus:ring-accent",
    secondary: "border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
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
      <div className="relative">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          className={clsx(inputClassName, "pr-10")}
          style={{ fontFamily: "SatoshiRegular" }}
          {...props}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 capitalize">
          {(error as FieldError)?.message}
        </p>
      )}
    </div>
  );
};
