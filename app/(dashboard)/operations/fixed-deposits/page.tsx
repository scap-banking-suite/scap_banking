"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FixedDepositForm } from "@/components/Operations/FixedDepositForm/FixedDepositForm";

type Props = {};

const FixedDeposit = (props: Props) => {
  return (
    <div>
      {" "}
      <TopBar title={"Fixed Deposits"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Deposit">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Deposit"
            >
              Fixed Deposits
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Deposit" className="w-[95%] mx-auto">
            <FixedDepositForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default FixedDeposit;
