"use client";

import NotificationManagementReport from "@/components/Account/AlertMgts/NotificationManagementReport";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AlertMgtsReport = () => {
  return (
    <div>
      <TopBar title={"Alerts Management Report"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Notification">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Notification"
            >
              Notification Management Report
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Notification" className="w-[95%] mx-auto">
            <NotificationManagementReport />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AlertMgtsReport;
