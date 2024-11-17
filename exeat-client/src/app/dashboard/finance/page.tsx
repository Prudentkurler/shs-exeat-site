"use client";

import React, { useState } from "react";
import AppSidebar from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart } from "@/components/comps/lineChart";
import { BarChart } from "@/components/comps/barChart";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const financeData = [
  { id: 1, name: "John Doe", program: "Science", paymentStatus: "Paid", amountPaid: 500, dues: 0 },
  { id: 2, name: "Alice Brown", program: "Arts", paymentStatus: "Unpaid", amountPaid: 0, dues: 300 },
  { id: 3, name: "Jane Smith", program: "Commerce", paymentStatus: "Paid", amountPaid: 400, dues: 0 },
  { id: 4, name: "Bob White", program: "Science", paymentStatus: "Unpaid", amountPaid: 200, dues: 200 },
];

const revenueTrendData = [
  { name: "January", revenue: 1000 },
  { name: "February", revenue: 1500 },
  { name: "March", revenue: 1200 },
  { name: "April", revenue: 1800 },
];

const paymentBarData = [
  { name: "Science", value: 700 },
  { name: "Arts", value: 300 },
  { name: "Commerce", value: 400 },
];

const FinancePage = () => {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? financeData : financeData.filter((item) => item.paymentStatus === filter);

  const exportToCSV = () => {
    // Placeholder for CSV export functionality
    console.log("Exporting to CSV...");
  };

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
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

        <div className="p-4 space-y-6">
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-3"
          >
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">$1,100</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Total Unpaid Dues</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">$500</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Paid Students</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">2</h2>
              </CardContent>
            </Card>
          </motion.div>

          <Separator />

          {/* Visualizations Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <LineChart data={revenueTrendData.map(item => ({ name: item.name, value: item.revenue }))} title="Revenue Trends" />
            <BarChart data={paymentBarData} title="Payments by Program" />
          </motion.div>

          <Separator />

          {/* Data Table Section */}
          <motion.div       
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-4 shadow-md"
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Financial Details</CardTitle>
                  <div>
                    <Button variant="outline" className="mr-2" onClick={() => setFilter("All")}>
                      All
                    </Button>
                    <Button variant="outline" className="mr-2" onClick={() => setFilter("Paid")}>
                      Paid
                    </Button>
                    <Button variant="outline" onClick={() => setFilter("Unpaid")}>
                      Unpaid
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table className="border border-gray-200 rounded-lg">
                  <TableHeader className="bg-gray-100 text-gray-700">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Amount Paid</TableHead>
                      <TableHead>Dues</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.program}</TableCell>
                        <TableCell>{item.paymentStatus}</TableCell>
                        <TableCell>${item.amountPaid}</TableCell>
                        <TableCell>${item.dues}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <div className="p-4">
                <Button onClick={exportToCSV}>Export to CSV</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default FinancePage;
