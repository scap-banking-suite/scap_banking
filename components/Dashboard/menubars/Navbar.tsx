import SearchInputComp from "@/components/controlInput/SearchInputComp";
import {
  CollapseActiveIcon,
  FavouriteIcon,
  LightModeIcon,
  NotificationIcon,
} from "@/icons/svgComp/NavbarIcons";
import React from "react";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <nav className="bg-white border-b border-b-black border-opacity-10 h-[68px] flex items-center justify-between py-4 px-7">
      {/* <p>bjv</p> */}
      <div className="flex gap-5 items-center">
        <CollapseActiveIcon />
        <FavouriteIcon />
        <div className="flex items-center gap-4">
          <p className="text-sm text-black opacity-40 font-normal">
            Dashboards
          </p>
          <span className="text-black opacity-20 text-sm font-normal">/</span>
          <p className="text-black   text-sm font-normal">Overview</p>
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
