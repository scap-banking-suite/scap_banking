"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import Enquiry from "@/components/Operations/Enquiry/Enquiry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AccountsEnquiry = () => {
  return (
    <div>
      <TopBar title={"Account Enquiry"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Enquiry">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Enquiry"
            >
              Account Enquiry
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Enquiry" className="w-[95%] mx-auto">
            <Enquiry />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AccountsEnquiry;
