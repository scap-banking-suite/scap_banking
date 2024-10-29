"use client";
import { Navbar } from "@/components/Dashboard/menubars/Navbar";
import { Rightbar } from "@/components/Dashboard/menubars/Rightbar";
import { Sidebar } from "@/components/Dashboard/menubars/Sidebar";
import notificationStore from "@/store/notificationStore";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { notificationVisible } = notificationStore();

  return (
    <div className="flex bg-[url('/backgrounddash.png')] bg-no-repeat bg-contain bg-bottom ">
      <Sidebar />
      <div className={` ${notificationVisible ? "w-[66%]" : "w-[84%]"}`}>
        <Navbar />
        <div className="pl-[34px] pr-[30px] overflow-y-scroll scrollbar-hidden h-[90vh]">
          {children}
        </div>
      </div>

      {notificationVisible && <Rightbar />}
    </div>
  );
};

export default Layout;
