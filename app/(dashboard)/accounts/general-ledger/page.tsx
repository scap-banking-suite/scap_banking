"use client";

import ApprovalListLayout from "@/components/Account/GeneralLedger/ApprovalList/ApprovalListLayout";
import LedgerListLayout from "@/components/Account/GeneralLedger/LedgerList/LedgerListLayout";
import ListLayout from "@/components/Account/GeneralLedger/List/ListLayout";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const GeneralLedger = () => {
  return (
    <div>
      <TopBar title={"General Ledger"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="List">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="List"
            >
              List
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Ledger"
            >
              Ledger List
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Approval"
            >
              Ledger Approval List
            </TabsTrigger>
          </TabsList>
          <TabsContent value="List" className="w-[95%] mx-auto">
            <ListLayout />
          </TabsContent>
          <TabsContent value="Ledger" className="w-[95%] mx-auto">
            <LedgerListLayout />
          </TabsContent>
          <TabsContent value="Approval" className="w-[95%] mx-auto">
            <ApprovalListLayout />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default GeneralLedger;
