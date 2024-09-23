"use client";
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from '@/components/Dashboard/otherComp/TopBar';
import { GenerateIncomeForm } from '@/components/Finance/GenerateIncomeForm';

type Props = {}

const StatementComprehensiveIncome = (props: Props) => {
  return (
    <div>
      <TopBar title={"Statement of Comprehensive Income"} />
      <section className="w-full mt-2 bg-accountBg rounded-[20px] pb-10">
        <Tabs defaultValue="income">
          <TabsList className="w-full flex justify-start gap-x-10 rounded-b-none rounded-t-[20px] bg-primary pb-0 px-10">
            <TabsTrigger
              className="data-[state=active]:bg-accent rounded-b-none rounded-t-[20px] mt-1 text-white"
              value="income"
            >
              Statement of Comprehensive Income
            </TabsTrigger>
          </TabsList>
          <TabsContent value="income" className="w-full px-10 py-6">
            <GenerateIncomeForm />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

export default StatementComprehensiveIncome