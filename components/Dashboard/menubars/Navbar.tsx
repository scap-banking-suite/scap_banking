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

type Props = {};

export const Navbar = (props: Props) => {
  const path = usePathname();

  const value1 = path?.split("/")[1]
  const value2 = path?.split("/")[2]



  return (
    <nav className="bg-white border-b border-b-black border-opacity-10 h-[68px] flex items-center justify-between py-4 px-7">
      {/* <p>bjv</p> */}
      <div className="flex gap-5 items-center">
        <CollapseActiveIcon />
        <FavouriteIcon />
        <div className="flex items-center gap-4">
          <p className="text-sm text-black opacity-40 font-normal">
            {value1?.charAt(0).toUpperCase() + value1.slice(1)}
          </p>
          <span className="text-black opacity-20 text-sm font-normal">/</span>
          <p className="text-black   text-sm font-normal">{value2?.charAt(0).toUpperCase() + value2.slice(1)}</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <SearchInputComp placeholder="Search" className="" />
        <LightModeIcon />
        <NotificationIcon />
        <CollapseActiveIcon />
      </div>
    </nav>
  );
};
