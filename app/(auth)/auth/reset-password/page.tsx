"use client";

import { CustomButton } from "@/components/clickable/CustomButton";
import ControlledInput from "@/components/controlInputs/ControlledInput";
import useDynamicForm from "@/hooks/useDynamicForm";
import { LockKeyIcon } from "@/icons/svgComp/LockKeyIcon";
import { MessageIcon } from "@/icons/svgComp/MessageIcon";
import { Field } from "@/schemas/dynamicSchema";
import Image from "next/image";
import React from "react";
import logo from "@/icons/svgs/logo.svg";
import details from "@/icons/svgs/bank.svg";
import downV from "@/public/newv.png";

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
];

type Props = {};

const ResetPassword = (props: Props) => {
  const { control, handleSubmit, formState } = useDynamicForm(fields, {});
  const { isValid } = formState;

  return (
    <main className="flex h-screen ">
      <div className="bg-darkBlue flex-1">
        <div className="flex flex-col items-center justify-center h-screen bg-logobg bg-cover bg-no-repeat bg-top">
          <div className="">
            <Image
              src={logo}
              alt="BANK X"
              width={520}
              height={221}
              className=""
            />
          </div>
          <Image src={details} alt="Details" />
        </div>
      </div>
      <div className=" flex-1  bg-upvector bg-right-top bg-contain bg-no-repeat relative">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <h3 className="text-base  text-textcolor mb-7">Forgot Password</h3>
            <h1 className="text-primary text-5xl font-bold max-w-[335px] ">
              Reset Password
            </h1>

            <form action="" className="mt-12">
              <h2
                className="text-base text-[#596080] mb-7 max-w-[428px] leading-7"
                style={{ fontFamily: "SatoshiBold" }}
              >
                Enter your email address to receive a password <br /> reset
                link.
              </h2>
              <ControlledInput
                name="email"
                control={control}
                placeholder="Enter your email"
                type="email"
                label="Email"
                rules={{ required: true }}
                icon={<MessageIcon />}
                variant="primary"
              />

              <CustomButton
                variant="primary"
                label="Send Password Reset Link"
                className="mt-5 rounded-lg w-full h-14"
                // disabled={!isValid}
              />
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src={downV} alt="bg" />
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
