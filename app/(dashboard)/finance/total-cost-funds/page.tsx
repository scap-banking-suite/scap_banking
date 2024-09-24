"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import TotalCostTable from "@/components/Finance/Tables/TotalCostTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const TotalCostFund = () => {
  return (
    <div>
      <TopBar title={"Total Cost of Funds"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Funds">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Funds"
            >
              Total Cost of Funds
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Funds" className="w-full mx-auto -mt-0">
            <TotalCostTable />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default TotalCostFund;
