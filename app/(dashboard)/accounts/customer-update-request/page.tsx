"use client";

import CustomerUpdateReport from "@/components/Account/CustomerUpdate/CustomerUpdateReport";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const CustomerUpdate = () => {
  return (
    <div>
      <TopBar title={"Customer Update Request"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Approve">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Approve"
            >
              Approve Customer Update
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Approve" className="w-[95%] mx-auto">
            <CustomerUpdateReport />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default CustomerUpdate;
