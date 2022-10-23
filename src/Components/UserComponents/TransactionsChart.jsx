import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    xv: 3000,
    bv: 1950,
    cv: 1000,
    dv: 7005,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    xv: 3000,
    bv: 1950,
    cv: 1000,
    dv: 7005,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    xv: 3000,
    bv: 1950,
    cv: 1000,
    dv: 7005,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    xv: 3000,
    bv: 1950,
    cv: 1000,
    dv: 7005,
    amt: 2400,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    xv: 3000,
    bv: 1950,
    cv: 1000,
    dv: 7005,
    amt: 2400,
  },
];

export default function TransactionsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="" />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82bb9d" />
        <Bar dataKey="xv" fill="#88aad8" />
        <Bar dataKey="cv" fill="#82ff9d" />
        <Bar dataKey="bv" fill="#88bbd8" />
        <Bar dataKey="dv" fill="#82009d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
