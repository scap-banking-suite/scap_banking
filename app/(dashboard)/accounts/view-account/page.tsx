"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Accounts = () => {
  return (
    <div>
      <TopBar title={"View Account"} />
      <section className="w-full mt-2 bg-accountBg rounded-t-[20px]">
        <Tabs defaultValue="ID">
          <TabsList className="w-full flex justify-around rounded-b-none rounded-t-[20px] bg-primary pb-0 px-5">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="ID"
            >
              By Customer ID
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Email"
            >
              By Customer Email
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="BVN"
            >
              By Customer BVN
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="NIN"
            >
              By Customer NIN
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Mobile"
            >
              By Customer Mobile No
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ID">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="Mobile">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Accounts;
