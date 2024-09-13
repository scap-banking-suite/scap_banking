"use client";
import { CustomDatePicker } from "@/components/controlInputs/CustomDatePicker";
import { CustomSelect } from "@/components/controlInputs/CustomSelect";
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

const Loans = () => {
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

  const [selectedStatus, setSelectedStatus] = useState<string>("");

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

  const banklist = [
    { value: "uba", label: "UBA" },
    { value: "gtbank", label: "Gtbank" },
    { value: "zenith", label: "Zenith" },
  ];

  return (
    <div>
      <TopBar title={"Loans"}/>
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
          {/* {graph} */}
          <div className="mt-4 bg-[#F7F9FB] rounded-[16px] py-7">
            <main className="flex items-center justify-between mb-3 px-4">
              <div>
                <h4 className="text-sm font-semibold text-black">
                  Total Loans Per Month
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
        <section className="w-[23%]">
          <StatCard
            className="!w-[200px]"
            type={"user"}
            amount="2,856"
            percent={"+6.08"}
            title={"Total Mobile Users"}
          />
          <article className="mt-4 bg-[#F7F9FB] rounded-[16px] w-full py-7 px-4 h-[388px]">
            <div>
              <h4 className="text-sm font-semibold mb-4">
              Total Loans by Products 
              </h4>
              <CustomSelect
                options={banklist}
                value={selectedStatus}
                onChange={(value) => setSelectedStatus(value)}
                placeholder="Product"
                className="bg-transparent rounded-[10px]"
              />
              {[...Array(5)].map((_, index) => (
                <section
                  key={index}
                  className="flex items-center justify-between mt-7"
                >
                  <p className="text-xs font-normal text-black">Lapo MFB</p>
                  <h5 className="text-xs font-medium">23,005,468</h5>
                </section>
              ))}
            </div>
          </article>
        </section>
      </main>
      <article className="py-3 flex justify-between items-center">
        <div className="bg-[#F7F9FB] rounded-[16px] py-3 px-2 w-[48.5%]">
          <main className="flex items-center justify-between mb-3 px-4 py-2">
            <div>
              <h4 className="text-sm font-semibold text-black">
                Total Loans by Officers
              </h4>
            </div>
            <div className="">
              <CustomDatePicker />
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
                Total Loans by Classification
                </h4>
              </div>
              <div className="">
                <CustomDatePicker />
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

export default Loans;
