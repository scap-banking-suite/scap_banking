"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { FinanceDateform } from "@/components/Finance/AssetDepreciation/FinanceDateform";
import { SelectAssetForm } from "@/components/Finance/AssetDepreciation/SelectAssetForm";
import AuthorizeFixedDepositTable from "@/components/Operations/Tables/AuthorizeFixedDepositTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const StatementFinancialPosition = () => {
  return (
    <div>
      <TopBar title={"Statement of Financial Position"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Statement">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Statement"
            >
              Statement of Financial Position
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Statement" className="w-full mx-auto -mt-0 ">
            <div className=" bg-accountBg">
              <div className="w-[90%] mx-auto py-7">
                <section className="w-[60%]">
                  <FinanceDateform startDate={true} />
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

export default StatementFinancialPosition;
