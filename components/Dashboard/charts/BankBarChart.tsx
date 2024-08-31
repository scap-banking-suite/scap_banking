import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "Samuel",
    uv: 13000,
  },
  {
    name: "Dare",
    uv: 27000,
  },
  {
    name: "Diosa",
    uv: 19000,
  },
  {
    name: "Ebri",
    uv: 31780,
  },
  {
    name: "Okon",
    uv: 7890,
  },
  {
    name: "Daniel",
    uv: 21390,
  },
];

export default function BankBarChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const colors = [
    "#95A4FC",
    "#BAEDBD",
    "#1C1C1C",
    "#B1E3FF",
    "#A8C5DA",
    "#A1E3CB",
  ];

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 15,
        }}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <XAxis
          dataKey="name"
          tick={{ fill: "#1C1C1C66", fontSize: "12" }}
          stroke="none"
        />
        <YAxis tick={{ fill: "#1C1C1C66", fontSize: "12" }} stroke="none" />
        <Tooltip />

        <Bar
          dataKey="uv"
          radius={[8, 8, 8, 8]}
          barSize={28}
          onMouseEnter={(_, index) => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              //   fill={colors[index % colors.length]}
              fill={
                activeIndex === index ? "green" : colors[index % colors.length]
              } // Change color on hover
              stroke={activeIndex === index ? "purple" : "none"} // Add stroke on active bar
            />
          ))}
        </Bar>
        {/* <Bar
          dataKey="uv"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
