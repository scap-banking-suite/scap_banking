"use client";
import { Navbar } from "@/components/Dashboard/menubars/Navbar";
import { Rightbar } from "@/components/Dashboard/menubars/Rightbar";
import { Sidebar } from "@/components/Dashboard/menubars/Sidebar";
import notificationStore from "@/store/notificationStore";
import React, { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { notificationVisible, sideBarVisible, setSideBarVisible } = notificationStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSideBarVisible(true);
      } else {
        setSideBarVisible(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex bg-[url('/backgrounddash.png')] bg-no-repeat bg-contain bg-bottom ">
      {sideBarVisible && <Sidebar />}
      <div
        className={` ${
          notificationVisible && !sideBarVisible
            ? "w-[82%]"
            : !notificationVisible && sideBarVisible
            ? "w-[84%]"
            : !sideBarVisible && !notificationVisible
            ? "w-full"
            : "w-[66%]"
        }`}
      >
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
