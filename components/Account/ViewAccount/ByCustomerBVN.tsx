import React from "react";
import ViewAccInput from "../ViewAccInput";
import { CustomButton } from "@/components/clickable/CustomButton";
import GenerateProfile from "./GenerateProfile";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AccountTable from "./Tables/AccountTable";
import LoanTable from "./Tables/LoanTable";

const ByCustomerBVN = () => {
  return (
    <main className="w-[95%] mx-auto">
      <div className="my-10">
        <ViewAccInput type="text" placeholder="Enter Customer BVN"   buttonLabel="View Account"/>
      </div>
      <section className="bg-white rounded-[30px] px-5 py-5">
        <GenerateProfile />
        <Tabs defaultValue="current">
          <TabsList className="bg-accountBg rounded-none mt-6 w-full flex justify-start pb-0">
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:font-bold  data-[state=active]:border-b data-[state=active]:border-b-primary text-tableText"
              value="current"
            >
              Current & Savings Account
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-b-primary text-tableText"
              value="loans"
            >
              Loans
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-b-primary text-tableText"
              value="deposits"
            >
              Deposits
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:border-b-primary text-tableText"
              value="standing"
            >
              Standing Order
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="-mt-1 mb-40">
            <AccountTable />
          </TabsContent>
          <TabsContent value="loans" className="-mt-1">
            <LoanTable />
          </TabsContent>
          <TabsContent value="deposits" className="-mt-1 mb-40">
            <AccountTable />
          </TabsContent>
          <TabsContent value="standing" className="-mt-1 mb-40">
            <AccountTable />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default ByCustomerBVN;
