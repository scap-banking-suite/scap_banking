"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TotalCostFundForm } from "@/components/Finance/TotalCostFundForm";

type Props = {};

const TotalCostFund = (props: Props) => {
  return (
    <div>
      <TopBar title={"Total Cost of Funds"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="fixed-assets">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="fixed-assets"
            >
              Fixed Assets Register Section
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fixed-assets" className="w-full px-10 py-6">
            <TotalCostFundForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default TotalCostFund;
