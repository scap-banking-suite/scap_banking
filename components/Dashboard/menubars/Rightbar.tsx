"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileAvatar from "@/icons/svgs/profileAvatar.svg";
import Image from "next/image";
import NotificationBoard from "../otherComp/NotificationBoard";
import ActivityBoard from "../otherComp/ActivityBoard";
import ActiveUsers from "../otherComp/ActiveUsers";
import { DropdownIcon } from "@/icons/svgComp/DropdownIcon";
import { useAuthStore } from "@/store/authStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

export type NotificationDataType = {
  time: string;
  type: string;
  description: string;
}[];

export type ActivityDataType = {
  image: string;
  description: string;
  time?: string;
}[];

export const Rightbar = (props: Props) => {
  const router = useRouter();
  const { currentUser, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    Cookies.remove("accessToken");
    toast.success("Logged out successfully");
    router.push("/auth/login");
  };

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

  const activitiesData: ActivityDataType = [
    {
      image: profileAvatar,
      description: "Changed the style.",
      time: "Just now",
    },
    {
      image: profileAvatar,
      description: "Released a new version.",
      time: "59 minutes ago",
    },
    {
      image: profileAvatar,
      description: "Submitted a bug.",
      time: "12 hours ago",
    },
    {
      image: profileAvatar,
      description: "Modified A data in Page X.",
      time: "Today, 11:59 AM",
    },
    {
      image: profileAvatar,
      description: "Deleted a page in Project X.",
      time: "Feb 2, 2024",
    },
  ];
  const activeUsers: ActivityDataType = [
    {
      image: profileAvatar,
      description: "Natali Craig",
    },
    {
      image: profileAvatar,
      description: "Drew Cano",
    },
    {
      image: profileAvatar,
      description: "Andi Lane",
    },
    {
      image: profileAvatar,
      description: "Koray Okumus",
    },
    {
      image: profileAvatar,
      description: "Melody Macy",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-[18%] h-screen p-4 border-l  border-l-black border-opacity-10 bg-transparent  overflow-y-scroll scrollbar-hidden"
      >
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center justify-between gap-3 bg-accent border border-[#8F96A1] rounded-[34px] px-3 py-2 w-full h-[47px] cursor-pointer">
              <h3
                className="text-xs capitalize "
                style={{
                  fontFamily: "PoppinsBold",
                }}
              >
                {currentUser?.fullname}
              </h3>
              <div className="flex items-center gap-3">
                <Avatar className="w-[29px] h-[29px]">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    <Image
                      src={profileAvatar}
                      width={29}
                      height={29}
                      alt="profile"
                    />
                  </AvatarFallback>
                </Avatar>
                <div className="text-[#637381]">
                  <DropdownIcon />
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-[#fffae5]">
            <button
              onClick={handleLogout}
              className="w-full flex items-center p-2 space-x-1 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              <IoIosLogOut className="mr-2 text-primary size-6" />
              Logout
            </button>
          </PopoverContent>
        </Popover>

        <NotificationBoard notificationsData={notificationsData} />
        <ActivityBoard activitiesData={activitiesData} />
        <ActiveUsers activeUsers={activeUsers} />
      </motion.div>
    </AnimatePresence>
  );
};
