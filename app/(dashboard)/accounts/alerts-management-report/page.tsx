"use client";
import ExportPDF from "@/components/Account/AccountEnquiry/ExportPDF";
import SpoolEntries from "@/components/Account/AccountEnquiry/SpoolEntries";
import EmailAlert from "@/components/Account/AddAlertSubscribers/EmailAlert";
import SMSAlert from "@/components/Account/AddAlertSubscribers/SMSAlert";
import ManageCustomerNotification from "@/components/Account/AlertMgts/ManageCustomerNotification";
import NotificationManagementReport from "@/components/Account/AlertMgts/NotificationManagementReport";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AlertMgts = () => {
  return (
    <div>
      <TopBar title={"Alerts Management Report"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Customer">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Customer"
            >
              Notification Management Report
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Customer" className="w-[95%] mx-auto">
            <NotificationManagementReport />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AlertMgts;
