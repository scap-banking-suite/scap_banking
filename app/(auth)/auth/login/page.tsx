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
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { AuthUser } from "@/components/api/type";

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

const Login = (props: Props) => {
  const { control, handleSubmit, formState, getValues } =
    useDynamicForm<AuthUser>(fields, {});
  const { isValid } = formState;
  const { setAccessToken, setCurrentUser } = useAuthStore();

  const router = useRouter();

  const generateRandomToken = () => {
    return Math.random().toString(36).substr(2);
  };

  const onSubmit = () => {
    const formData = getValues();
    const { email, password } = formData;

    const token = generateRandomToken();
    const user = { email, password };

    try {
      // Set token and user in Zustand and localStorage
      setAccessToken(token);
      setCurrentUser(user);

      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("accessToken", token);
      Cookies.set("accessToken", token, { expires: 1 });

      toast.success("Login successful! Redirecting...", {});

      setTimeout(() => {
        router.push("/dashboard/overview");
      }, 1000);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main className="flex h-screen">
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
            <h3 className="text-base ml-5 text-textcolor mb-7">
              Start for free
            </h3>
            <h1 className="text-primary text-5xl font-bold max-w-[335px] mx-auto">
              Sign In to SCAP
            </h1>
            {/* Login Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
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
              <ControlledInput
                name="password"
                control={control}
                placeholder="6+ Characters, 1 Capital letter"
                type="password"
                label="Password"
                rules={{ required: true }}
                icon={<LockKeyIcon />}
                variant="primary"
              />

              <CustomButton
                variant="primary"
                label="Sign In"
                className="mt-5 rounded-lg w-full h-14"
                disabled={!isValid}
                type="submit"
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

export default Login;
