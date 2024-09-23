"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import ApproveAccrusalTable from "@/components/Finance/Tables/ApproveAccrusalTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const ApprovePendingPrepayment = () => {
  return (
    <div>
      <TopBar title={"Approve Pending Prepayments/Accruals"} />
      <section className="w-full mt-2 pb-10">
        <Tabs defaultValue="Accruals">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Accruals"
            >
              Approve Pending Prepayments/Accruals
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Accruals" className="w-full mx-auto -mt-0">
            <ApproveAccrusalTable />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ApprovePendingPrepayment;
