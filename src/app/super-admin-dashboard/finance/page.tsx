"use client"

import SuperAdminSidebar from "@/components/admin-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Line, Pie } from "react-chartjs-2";
import { DollarSign,  UserCheck, UserMinus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement,LineElement, ArcElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const Page = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Total Revenue ($)",
        data: [10000, 15000, 20000, 25000, 30000, 35000, 40000],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const Options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: true } },
    },
  };

  const paymentBreakdownData = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        data: [2500, 500],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderWidth: 1,
      },
    ],
  };

  const transactions = [
    { id: 1, name: "John Doe", amount: "$500", status: "Paid", date: "2024-12-01" },
    { id: 2, name: "Jane Smith", amount: "$300", status: "Pending", date: "2024-12-01" },
    { id: 3, name: "Emily Davis", amount: "$800", status: "Paid", date: "2024-12-01" },
    { id: 4, name: "Michael Brown", amount: "$700", status: "Pending", date: "2024-12-01" },
  ];

  return (
    <SidebarProvider style={{ "--sidebar-width": "19rem" } as React.CSSProperties}>
      <SuperAdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Finance</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="p-6 space-y-6">

           


          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <Card className=" w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="text-teal-500" />
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800">$150,000</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-600">
                  <UserCheck className="text-green-500" />
                  Paid Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800">2,500</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-600">
                  <UserMinus className="text-red-500" />
                  Unpaid Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800">500</p>
              </CardContent>
            </Card>
          </motion.div>

        


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Revenue Overview */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded-md shadow-md flex flex-col"
            >
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue Overview</h3>
                <div className="flex-1">
                <Line data={revenueData} options={Options} />
                </div>
            </motion.div>

            {/* Payment Breakdown */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white p-4 rounded-md shadow-md flex flex-col"
            >
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Payment Breakdown</h4>
                <div className="flex-1">
                <Pie data={paymentBreakdownData} />
                </div>
            </motion.div>
            </div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white w-full rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`text-sm font-medium ${
                          transaction.status === "Paid"
                            ? "text-green-600"
                            : "text-yellow-500"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
