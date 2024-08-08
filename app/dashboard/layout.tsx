import Navbar from "@/components/Dashboard/menubars/Navbar";
import Rightbar from "@/components/Dashboard/menubars/Rightbar";
import Sidebar from "@/components/Dashboard/menubars/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[66%]">
        <Navbar />
        <div className="pl-[22px] pr-[18px]">{children}</div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Layout;
