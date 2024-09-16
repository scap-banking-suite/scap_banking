import TopBar from "@/components/Dashboard/otherComp/TopBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CorporateDirectorForm } from "@/components/Account/AddCorporateDirector/CorporateDirectorForm";

type Props = {};

const AddCorporateDirector = (props: Props) => {
  return (
    <div>
      <TopBar title={"Add Corporate Director"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Director">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Director"
            >
              New Corporate Director
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Director" className="w-[95%] mx-auto py-5">
            <CorporateDirectorForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default AddCorporateDirector;
