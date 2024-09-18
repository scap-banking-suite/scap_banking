"use client";
import EmailAlert from "@/components/Account/AddAlertSubscribers/EmailAlert";
import SMSAlert from "@/components/Account/AddAlertSubscribers/SMSAlert";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const AddAlertSubs = () => {
  return (
    <div>
      <TopBar title={"Add Alert Subscribers"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Email">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Email"
            >
              Email Alert
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="SMS"
            >
              SMS Alert
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Email" className="w-[95%] mx-auto">
            <EmailAlert />
          </TabsContent>
          <TabsContent value="SMS" className="w-[95%] mx-auto">
            <SMSAlert />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AddAlertSubs;
