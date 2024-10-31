"use client";

import ProductMgtLayout from "@/components/Account/ProductManagement/ProductMgtLayout";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const ProductManagement = () => {
  return (
    <div>
      <TopBar title={"Product Management"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Products">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Products"
            >
              Products
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Feature"
            >
              Product Feature
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Products" className="w-[95%] mx-auto">
            <ProductMgtLayout />
          </TabsContent>
          <TabsContent value="Feature" className="w-[95%] mx-auto">
            {" "}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ProductManagement;
