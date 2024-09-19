"use client";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountLinkingForm } from "@/components/Operations/LinkingForm/AccountLinkingForm";

type Props = {};

const AccountLinkForm = (props: Props) => {
  return (
    <div>
      {" "}
      <TopBar title={"Account Linking Form"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Linking">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Linking"
            >
              Account Linking Form
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Linking" className="w-[95%] mx-auto">
            <AccountLinkingForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AccountLinkForm;
