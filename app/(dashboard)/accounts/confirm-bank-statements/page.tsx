"use client";

import ConfirmBankStatement from "@/components/Account/ConfirmBank/ConfirmBankStatement";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const ConfirmBank = () => {
  return (
    <div>
      <TopBar title={"Confirm Bank Statements"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Validate">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Validate"
            >
              Confirm and Generate Statement
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Validate" className="w-[95%] mx-auto">
            <ConfirmBankStatement />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ConfirmBank;
