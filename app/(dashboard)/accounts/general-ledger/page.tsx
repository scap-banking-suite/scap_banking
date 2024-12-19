"use client";

import ApprovalListLayout from "@/components/Account/GeneralLedger/ApprovalList/ApprovalListLayout";
import LedgerClassLayout from "@/components/Account/GeneralLedger/LedgerClass/LedgerClassLayout";
import LedgerClassApprovalListLayout from "@/components/Account/GeneralLedger/LedgerClassApprovalList/LedgerClassApprovalListLayout";
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
        <Tabs defaultValue="LedgerClass">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
          <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="LedgerClass"
            >
              Ledger Class
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="LedgerSubclass"
            >
              Ledger Subclass
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="LedgerclassApprovalList"
            >
              Ledger class Approval List
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
          <TabsContent value="LedgerClass" className="w-[95%] mx-auto">
            <LedgerClassLayout />
          </TabsContent>
          <TabsContent value="LedgerSubclass" className="w-[95%] mx-auto">
            <ListLayout />
          </TabsContent>
          <TabsContent value="LedgerclassApprovalList" className="w-[95%] mx-auto">
            <LedgerClassApprovalListLayout />
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
