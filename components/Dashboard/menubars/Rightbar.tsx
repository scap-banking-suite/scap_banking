import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownIcon } from "@/icons/svgComp/Dropdown";
import profileAvatar from "@/icons/svgs/profileAvatar.svg";
import Image from "next/image";
import NotificationBoard from "../otherComp/NotificationBoard";

type Props = {};

export type NotificationDataType = {
  time: string;
  type: string;
  description: string;
}[];
export const Rightbar = (props: Props) => {
  const notificationsData: NotificationDataType = [
    {
      time: "Just now",
      type: "bugfix",
      description: "You fixed a bug.",
    },
    {
      time: "59 minutes ago",
      type: "userRegistration",
      description: "New user registered.",
    },
    {
      time: "12 hours ago",
      type: "bugfix",
      description: "You fixed a bug.",
    },
    {
      time: "Today, 11:59 AM",
      type: "subscription",
      description: "Andi Lane subscribed to you.",
    },
  ];

  return (
    <section className=" w-[18%] h-screen p-4 border-l  border-l-black border-opacity-10 bg-white flex flex-col items-center">
      <div className="flex items-center justify-between gap-3 bg-accent border border-[#8F96A1] rounded-[34px] px-3 py-2 w-[220px] h-[47px] cursor-pointer">
        <h3
          className="text-xs "
          style={{
            fontFamily: "PoppinsBold",
          }}
        >
          Abiodun Adebayo M.
        </h3>
        <Avatar className="w-[29px] h-[29px]">
          <AvatarImage src="" />
          <AvatarFallback>
            <Image src={profileAvatar} width={29} height={29} alt="profile" />
          </AvatarFallback>
        </Avatar>
        <div className="text-[#637381]">
          <DropdownIcon />
        </div>
      </div>
      <NotificationBoard notificationsData={notificationsData} />
    </section>
  );
};
