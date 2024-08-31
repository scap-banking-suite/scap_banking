"use client";
import BankBarChart from "@/components/Dashboard/charts/BankBarChart";
import BankLineChart from "@/components/Dashboard/charts/BankLineChart";
import BankPieChart from "@/components/Dashboard/charts/BankPieChart";
import StatCard from "@/components/Dashboard/otherComp/StatCard";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
import { DotIcon } from "@/icons/svgComp/ChartIcon";
import React, { useState } from "react";

export type StatDataType = {
  id: number;
  percent: string;
  amount: string;
  title: string;
  type: string;
}[];

const Overview = () => {
  const initialData: StatDataType = [
    {
      id: 1,
      percent: "+11.00",
      amount: "7,656,783",
      title: "Total accounts opened",
      type: "open",
    },
    {
      id: 2,
      percent: "-0.43",
      amount: "490,656,783",
      title: "Total deposits",
      type: "deposit",
    },
    {
      id: 3,
      percent: "+15.03",
      amount: "1.656",
      title: "Total Cards Issued",
      type: "card",
    },
  ];

  const [statData, setStatData] = useState(initialData);

  // Function to handle click and reorder the array
  const handleCardClick = (index: number) => {
    if (index !== 0) {
      const reorderedData = [
        statData[index],
        ...statData.filter((_, i) => i !== index),
      ];
      setStatData(reorderedData);
    }
  };

  return (
    <div>
      <TopBar />
      <main className="flex justify-between py-3">
        <section className="w-[74%]">
          <div className="flex items-center ">
            {statData?.map((item, index) => {
              return (
                <StatCard
                  index={index}
                  type={item?.type}
                  amount={item?.amount}
                  percent={item?.percent}
                  onClick={() => handleCardClick(index)}
                  title={item?.title}
                />
              );
            })}
          </div>
          <div className="mt-4 bg-[#F7F9FB] rounded-[16px] py-7">
            <main className="flex items-center justify-between mb-3 px-4">
              <div>
                <h4 className="text-sm font-semibold text-black">
                  Total Deposits Per Month
                  <span className="ml-2 opacity-40 font-normal">(Naira)</span>
                </h4>
              </div>
              <div className="w-px h-[20px] bg-black bg-opacity-20" />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-btnprimary">
                  <DotIcon />
                  <p className="text-xs  font-normal text-black">This year</p>
                </div>
                <div className="text-[#A8C5DA] flex items-center gap-1">
                  <DotIcon />
                  <p className="text-xs  font-normal text-black">Last year</p>
                </div>
              </div>
            </main>
            <div className="w-full">
              <BankLineChart />
            </div>
          </div>
        </section>
        <section className="w-[20%]">
          <StatCard
            className="!w-[200px]"
            type={"user"}
            amount="2,856"
            percent={"+6.08"}
            title={"Total Mobile Users"}
          />
        </section>
      </main>
      <article className="py-3 flex justify-between items-center">
        <div className="bg-[#F7F9FB] rounded-[16px] py-3 px-2 w-[48.5%]">
          <main className="flex items-center justify-between mb-3 px-4 py-2">
            <div>
              <h4 className="text-sm font-semibold text-black">
                Total Accounts by Officers
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-btnprimary">
                <DotIcon />
                <p className="text-xs  font-normal text-black">This year</p>
              </div>
              <div className="text-[#A8C5DA] flex items-center gap-1">
                <DotIcon />
                <p className="text-xs  font-normal text-black">Last year</p>
              </div>
            </div>
          </main>
          <div className="w-full">
            <BankBarChart />
          </div>
        </div>
        <div className="w-[48.5%] bg-white border-2 border-[#F7F9FB] rounded-[16px] py-2">
          <main className="mb-3 py-3 border-b-2 border-[#F7F9FB]">
            <section className="px-3 flex items-center justify-between ">
            <div>
              <h4 className="text-sm font-semibold text-black">
                Total Deposits by Officers
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-btnprimary">
                <DotIcon />
                <p className="text-xs  font-normal text-black">This year</p>
              </div>
              <div className="text-[#A8C5DA] flex items-center gap-1">
                <DotIcon />
                <p className="text-xs  font-normal text-black">Last year</p>
              </div>
            </div>
            </section>
          </main>
          <div className="w-full">
            <BankPieChart />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Overview;
