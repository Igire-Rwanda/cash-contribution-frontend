import Box from "@mui/material/Box/Box";
import React, { PureComponent } from "react";
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

export default class ExpenseChart extends PureComponent {
  createData(day, money) {
    return { name: day, money };
  }
  data = [
    this.createData("Monday", 2000),
    this.createData("Tuesday", 3020),
    this.createData("Wednesday", 4500),
    this.createData("Thursday", 5500),
    this.createData("Friday", 7000),
  ];

  render() {
    return (
      <Box
        sx={{
          minWidth: "536px",
          maxHeight: "261px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={536}
            height={261}
            data={this.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="money"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
