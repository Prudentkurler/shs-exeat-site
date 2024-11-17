"use client";

import AppSidebar  from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart } from "@/components/comps/pieChart";
import { BarChart } from "@/components/comps/barChart";
import { barChartData } from "@/components/comps/chartData";
import { pieChartData } from "@/components/comps/chartData";
 // Assuming you have chart components
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const chartData = [
    { name: "Signed In", value: 60 },
    { name: "Signed Out", value: 40 },
  ];

  const tableData = [
    { id: 1, name: "John Doe", status: "Signed In", payment: "Paid" },
    { id: 2, name: "Jane Smith", status: "Signed Out", payment: "Unpaid" },
    { id: 3, name: "Alice Brown", status: "Signed In", payment: "Paid" },
    { id: 4, name: "Bob White", status: "Signed Out", payment: "Unpaid" },
  ];

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
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
          {/* Animated Overview Section */}
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-2">
                <Users className="text-blue-500" />
                <CardTitle>Students Signed In</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">120</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-2">
                <TrendingDown className="text-red-500" />
                <CardTitle>Students Signed Out</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">80</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-2">
                <DollarSign className="text-green-500" />
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">$10,500</h2>
              </CardContent>
            </Card>
          </motion.div>

          {/* Animated Charts Section */}
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Sign-in vs Sign-out</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart data={pieChartData}/>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart data={barChartData} title="Revenue" />
              </CardContent>
            </Card>
          </motion.div>

          {/* Styled Table Section */}
          <motion.div
            className="rounded-xl bg-white p-4 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Students Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border border-gray-200 rounded-lg">
                  <TableHeader className="bg-gray-100 text-gray-700">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded ${
                              row.status === "Signed In"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {row.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded ${
                              row.payment === "Paid"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {row.payment}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
