import { Navbar } from "@/components/Dashboard/menubars/Navbar";
import { Rightbar } from "@/components/Dashboard/menubars/Rightbar";
import { Sidebar } from "@/components/Dashboard/menubars/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex bg-[url('/backgrounddash.png')] bg-no-repeat bg-contain bg-bottom ">
      <Sidebar />
      <div className="w-[66%]">
        <Navbar />
        <div className="pl-[34px] pr-[30px]">{children}</div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Layout;
