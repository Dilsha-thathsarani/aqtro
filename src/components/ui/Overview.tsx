"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", total: 6000 },
  { name: "Feb", total: 1500 },
  { name: "Mar", total: 3200 },
  { name: "Apr", total: 3200 },
  { name: "May", total: 3600 },
  { name: "Jun", total: 2400 },
  { name: "Jul", total: 2400 },
  { name: "Aug", total: 3800 },
  { name: "Sep", total: 3600 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#a3e635" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
