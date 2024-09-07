"use client";
import ByCustomerID from "@/components/Account/ViewAccount/ByCustomerID";
import ViewAccInput from "@/components/Account/ViewAccInput";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ByCustomerEmail from "@/components/Account/ViewAccount/ByCustomerEmail";
import ByCustomerBVN from "@/components/Account/ViewAccount/ByCustomerBVN";
import ByCustomerNIN from "@/components/Account/ViewAccount/ByCustomerNIN";
import ByCustomerMobile from "@/components/Account/ViewAccount/ByCustomerMobile";

const Accounts = () => {
  return (
    <div>
      <TopBar title={"View Account"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
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
            <ByCustomerID />
          </TabsContent>
          <TabsContent value="Email">
            <ByCustomerEmail />
          </TabsContent>
          <TabsContent value="Email">
            <ByCustomerEmail />
          </TabsContent>
          <TabsContent value="BVN">
            <ByCustomerBVN />
          </TabsContent>
          <TabsContent value="NIN">
            <ByCustomerNIN />
          </TabsContent>
          <TabsContent value="Mobile">
            <ByCustomerMobile />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Accounts;
