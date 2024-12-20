"use client";
import SearchInputComp from "@/components/controlInputs/SearchInputComp";
import {
  CollapseActiveIcon,
  FavouriteIcon,
  LightModeIcon,
  NotificationIcon,
} from "@/icons/svgComp/NavbarIcons";
import React from "react";

import { usePathname } from "next/navigation";
import notificationStore from "@/store/notificationStore";

export const Navbar = () => {
  const path = usePathname();
  const { toggleNotification, setSideBarVisible, sideBarVisible } =
    notificationStore();

  const value1 = path?.split("/")[1];
  const value2 = path?.split("/")[2];

  function capitalizeEachWord(text: string) {
    return text
      .split("-") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back into a single string
  }

  return (
    <nav className="bg-white border-b border-b-black border-opacity-10 h-[68px] flex items-center justify-between py-4 px-7">
      {/* <p>bjv</p> */}
      <div className="flex gap-5 items-center">
        <div className="cursor-pointer" onClick={() => setSideBarVisible(!sideBarVisible)}>
          <CollapseActiveIcon />
        </div>
        <FavouriteIcon />
        <div className="flex items-center gap-4">
          <p className="text-sm text-black opacity-40 font-normal">
            {capitalizeEachWord(value1)}
          </p>
          <span className="text-black opacity-20 text-sm font-normal">/</span>
          <p className="text-black   text-sm font-normal">
            {capitalizeEachWord(value2)}
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <SearchInputComp placeholder="Search" className="" />
        <LightModeIcon />
        <div className="cursor-pointer" onClick={toggleNotification}>
          <NotificationIcon />
        </div>
        {/* <CollapseActiveIcon /> */}
      </div>
    </nav>
  );
};
