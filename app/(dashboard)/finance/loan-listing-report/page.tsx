"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import AuthorizeFixedDepositTable from "@/components/Operations/Tables/AuthorizeFixedDepositTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const LoanListingReport = () => {
  return (
    <div>
      <TopBar title={"Loan Listing Report"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Listing">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Listing"
            >
              Loan Listing Report
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Listing" className="w-full mx-auto -mt-0">
            <AuthorizeFixedDepositTable />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default LoanListingReport;
