"use client";
import BankLineChart from "@/components/Dashboard/charts/BankLineChart";
import StatCard from "@/components/Dashboard/otherComp/StatCard";
import TopBar from "@/components/Dashboard/otherComp/TopBar";
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
          <div className="mt-4">
            <BankLineChart />
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
    </div>
  );
};

export default Overview;
