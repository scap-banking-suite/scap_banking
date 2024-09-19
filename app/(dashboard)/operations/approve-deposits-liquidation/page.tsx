"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import ApproveDepositTable from "@/components/Operations/Tables/ApproveDepositTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AccountsDeposit = () => {
  return (
    <div>
      <TopBar title={"Approve Deposits Liquidation"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Deposits">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Deposits"
            >
              Approve Deposits Liquidation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Deposits" className="w-full mx-auto -mt-0">
            <ApproveDepositTable />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AccountsDeposit;
