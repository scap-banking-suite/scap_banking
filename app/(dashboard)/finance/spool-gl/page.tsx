import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { SpoolByDateForm } from "@/components/Finance/Spool/SpoolByDateForm";

type Props = {};

const SpoolGl = (props: Props) => {
  return (
    <div>
      <TopBar title={"Spool GL by Date"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Spool">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Spool"
            >
              Spool GL by Date
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Spool" className="w-full px-10 py-4">
            <SpoolByDateForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default SpoolGl;
