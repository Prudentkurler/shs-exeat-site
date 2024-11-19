import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface LineChartProps {
  data: { name: string; value: number }[];
  title?: string;
}

export const LineChart = ({ data, title = "Line Chart" }: LineChartProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <ReLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </ReLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
