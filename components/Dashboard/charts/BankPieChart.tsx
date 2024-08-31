import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ebri", value: 200800 },
  { name: "Dare", value: 101200 },
  { name: "Daniel", value: 40000 },
  { name: "Diosa", value: 40000 },
  { name: "Samuel", value: 40000 },
  { name: "Okon", value: 10700 },
];

// Define colors separately, keeping the same order as the data
const COLORS = [
  "#66BB6A",
  "#1E88E5",
  "#FFEB3B",
  "#FFEB3B",
  "#FFEB3B",
  "#BDBDBD",
];

// Total value calculation
const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

// Custom label component to show the total in the center of the chart

const renderCustomLabel = () => {
  return (
    <g>
      {/* Background rectangle for "+61%" */}
      <rect
        x="50%"
        y="50%"
        width={50}
        height={20}
        fill="#E2FCF2" // Background color
        rx="2" // Border radius
        ry="2" // Border radius
        textAnchor="middle"
        dominantBaseline="middle"
        transform="translate(-25, 17)" // Adjust to fit the rectangle around "+61%"
      />
      {/* Text */}
      <text
        x="50%"
        y="50%"
        fill="#333"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-medium"
      >
        <tspan
          x="50%"
          dy="-2em"
          fontSize="10px"
          fontWeight="medium"
          style={{ fontFamily: "GraphikMedium", fill: "#91979E" }}
        >
          TOTAL
        </tspan>
        <tspan
          x="50%"
          dy="1em"
          fontSize="22px"
          fontWeight="medium"
          style={{ fill: "#02050A", fontFamily: "GraphikMedium" }}
        >
          $1.5M
        </tspan>
        <tspan
          x="50%"
          dy="2em"
          fill="#66BB6A"
          fontSize="14px"
          style={{ fill: "#1DC286" }}
        >
          +61%
        </tspan>
      </text>
    </g>
  );
};

const CustomLegend = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-2 ml-4 mr-4">
      {data.map((entry: any, index: any) => (
        <div key={index} className="flex items-center justify-between gap-20">
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-[3px]"
              //   style={{ backgroundColor: entry.color }}
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span
              className="text-xs text-[#02050A]"
              style={{
                fontFamily: "PoppinsNormal",
              }}
            >
              {entry.name}
            </span>
          </div>
          <div className="flex items-center text-right gap-1">
            <span
              className="text-xs text-[#02050A] font-bold"
              style={{ fontFamily: "GraphikMedium" }}
            >
              ${new Intl.NumberFormat().format(entry.value / 1000)}k
            </span>
            <span className="text-[10px] text-[#91979E]">
              ({((entry.value / totalValue) * 100).toFixed(0)}%)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function BankPieChart() {
  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            labelLine={false}
            cornerRadius={4}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend data={data} />
    </div>
  );
}
