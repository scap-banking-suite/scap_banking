"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { AuthorizeFixedDepositForm } from "@/components/Operations/FixedDeposits/AuthorizeFixedDepositForm";
import AuthorizeFixedDepositTable from "@/components/Operations/Tables/AuthorizeFixedDepositTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AssetDepreciationReport = () => {
  return (
    <div>
      <TopBar title={"Asset Depreciation Report"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Depreciation">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Depreciation"
            >
              Asset Depreciation Report
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Depreciation" className="w-full mx-auto -mt-0 ">
            <div className=" bg-accountBg">
              <div className="w-[90%] mx-auto py-7">
                <section className="w-[80%]">
                  <AuthorizeFixedDepositForm />
                </section>
              </div>
            </div>
            <div className="">
              <AuthorizeFixedDepositTable />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AssetDepreciationReport;