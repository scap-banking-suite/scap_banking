"use client";
import SpoolEntries from "@/components/Account/AccountEnquiry/SpoolEntries";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AccountsEnquiry = () => {
  return (
    <div>
      <TopBar title={"Account Enquiry"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Spool">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Spool"
            >
              Spool Entries
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Export"
            >
              Export to PDF
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Spool" className="w-[95%] mx-auto">
            <SpoolEntries/>
          </TabsContent>
          <TabsContent value="Export" className="w-[95%] mx-auto">
            <p>export</p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AccountsEnquiry;
