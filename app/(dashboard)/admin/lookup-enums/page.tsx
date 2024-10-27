"use client";

import BranchLayout from "@/components/Admin/Branch/BranchLayout";
import Configuration from "@/components/Admin/LookUp/Configuration";
import GeoLayout from "@/components/Admin/LookUp/GeoLayout";
import SectorLayout from "@/components/Admin/LookUp/SectorLayout";
import RegionLayout from "@/components/Admin/Region/RegionLayout";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const LookupEnum = () => {
  return (
    <div>
      <TopBar title={"LOOKUP /  ENUMS"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Geo">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Geo"
            >
              Geo Area
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Sector"
            >
              Sector
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="configuration"
            >
              Approval configuration
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Geo" className="w-[95%] mx-auto">
            <GeoLayout />
          </TabsContent>
          <TabsContent value="Sector" className="w-[95%] mx-auto">
            <SectorLayout />
          </TabsContent>
          <TabsContent value="configuration" className="w-[95%] mx-auto">
            <Configuration />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default LookupEnum;
