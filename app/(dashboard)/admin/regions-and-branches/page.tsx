"use client";
import ExportPDF from "@/components/Account/AccountEnquiry/ExportPDF";
import SpoolEntries from "@/components/Account/AccountEnquiry/SpoolEntries";
import BranchLayout from "@/components/Admin/Branch/BranchLayout";
import RegionLayout from "@/components/Admin/Region/RegionLayout";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const RegionsAndBranches = () => {
  return (
    <div>
      <TopBar title={"Regions"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Regions">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Regions"
            >
              Regions
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Branches"
            >
              Branches
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Regions" className="w-[95%] mx-auto">
            <RegionLayout />
          </TabsContent>
          <TabsContent value="Branches" className="w-[95%] mx-auto">
            <BranchLayout />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default RegionsAndBranches;
