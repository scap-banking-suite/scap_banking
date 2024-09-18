"use client";

import React from "react";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApproveAlertSubscriberForm } from "@/components/Account/ApproveAlertSubscriber/ApproveAlertSubscriberForm";

type Props = {};

const ApproveAlertSubscribers = (props: Props) => {
  return (
    <div>
      <TopBar title={"Approve Alert Subscribers"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Subscribers">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Subscribers"
            >
              Approve Extra Alert Subscribers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Subscribers" className="w-[85%] px-10 py-12">
            <ApproveAlertSubscriberForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ApproveAlertSubscribers;
