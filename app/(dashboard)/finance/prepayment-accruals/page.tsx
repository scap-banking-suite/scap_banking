import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrepaymentForm } from "@/components/Finance/Prepayment&Accurals/PrepaymentForm";

type Props = {};

const PrepaymentsAndAccurals = (props: Props) => {
  return (
    <div>
      <TopBar title={"Prepayment & Accruals"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Accruals">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Accruals"
            >
              Prepayment & Accruals
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Accruals" className="w-full px-10 py-6">
            <PrepaymentForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default PrepaymentsAndAccurals;
