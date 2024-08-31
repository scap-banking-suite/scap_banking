import React, { ReactNode } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 10000,
    pv: 9000,
  },
  {
    name: "Feb",
    uv: 2000,
    pv: 9000,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 10500,
    pv: 16000,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 21000,
    pv: 1000,
    amt: 2000,
  },
  {
    name: "May",
    uv: 24000,
    pv: 8000,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 17000,
    pv: 12500,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 19000,
    pv: 26000,
    amt: 2100,
  },
];

export default function BankLineChart() {
  type CustomTooltipProps = {
    active?: boolean;
    payload?: any;
    label?: string;
  };

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      // Format the number with commas
      const formattedValue = new Intl.NumberFormat().format(payload[0].value);

      return (
        <div
          className="w-fit h-fit rounded-[10px] bg-white p-2 text-xs font-semibold"
          style={{ boxShadow: "0px 1px 7px 0px #89898940" }}
        >
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs mb-1">
              <span
                className={`font-semibold ${
                  index === 0
                    ? "text-[#0357EE66]"
                    : index === 1
                    ? "text-btnprimary"
                    : "text-gray-500"
                }`}
              >
                {entry.name}
              </span>
              :{" "}
              <span className="">
                {new Intl.NumberFormat().format(entry.value)}
              </span>
            </p>
          ))}
          {/* <p className="text-sm text-[#9D9EBA]">{label}</p> */}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={500} height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3"  /> */}
        <XAxis
          tick={{ fill: "#1C1C1C66", fontSize: "12" }}
          stroke="none"
          dataKey="name"
          padding={{ left: 30, right: 30 }}
        />
        <YAxis stroke="none" tick={{ fill: "#1C1C1C66", fontSize: "12" }} />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="pv"
          dot={false}
          stroke="#A8C5DA"
          activeDot={{ r: 8 }}
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#0357EE66"
          dot={false}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
