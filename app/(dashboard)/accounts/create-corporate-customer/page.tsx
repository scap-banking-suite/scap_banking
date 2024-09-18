import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from '@/components/Dashboard/otherComp/TopBar';
import { CorporateCustomerForm } from '@/components/Account/AddCorporateDirector/CorporateCustomerForm';

type Props = {}

const CreateCorporateCustomer = (props: Props) => {
  return (
    <div>
      <TopBar title={"Create Corporate Customer"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="Customer">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="Customer"
            >
              Create New Corporate Customer
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Customer" className="w-[95%] mx-auto py-5">
            <CorporateCustomerForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

export default CreateCorporateCustomer