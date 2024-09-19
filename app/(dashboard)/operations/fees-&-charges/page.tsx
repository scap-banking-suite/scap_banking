"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FixedDepositForm } from "@/components/Operations/FixedDepositForm/FixedDepositForm";
import { FeesAndChargesForm } from "@/components/Operations/FeesAndCharges/FeesAndChargesForm";

type Props = {};

const FeesAndCharges = (props: Props) => {
  return (
    <div>
      {" "}
      <TopBar title={"Fees & Charges"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Fees">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Fees"
            >
              Fees & Charges
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Fees" className="w-[95%] mx-auto">
            <FeesAndChargesForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default FeesAndCharges;
