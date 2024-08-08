import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../shared/Spinner";

type CustomBtnProps = {
  children: ReactNode;
  isPending?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton = ({
  children,
  className,
  isPending,
  ...rest
}: CustomBtnProps) => {
  const { disabled, type, onClick } = rest;
  return (
    <>
      
      <button
        type={type}
        className={`  py-4  h-14 bg-btnprimary whitespace-nowrap rounded-lg flex items-center justify-center text-white text-lg  font-semibold  ${className} ${
          isPending || (disabled && "opacity-70 cursor-not-allowed")
        }`}
        onClick={onClick}
        disabled={isPending || disabled}
        {...rest}
      >
        {isPending ? <Spinner /> : children}
      </button>
    </>
  );
};
