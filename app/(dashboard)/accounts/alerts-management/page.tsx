"use client";
import ManageCustomerNotification from "@/components/Account/AlertMgts/ManageCustomerNotification";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AlertMgts = () => {
  return (
    <div>
      <TopBar title={"Alerts Management"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Customer">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Customer"
            >
              Manage Customer Notification
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Customer" className="w-[95%] mx-auto">
            <ManageCustomerNotification />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AlertMgts;
