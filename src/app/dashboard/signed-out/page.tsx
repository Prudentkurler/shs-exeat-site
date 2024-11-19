"use client";

import React from "react";
import AppSidebar from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart } from "@/components/comps/pieChart";
import { BarChart } from "@/components/comps/barChart";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const signedOutData = [
  { id: 1, name: "John Doe", program: "Science", residence: "Dorm A", signOutDate: "2024-11-16" },
  { id: 2, name: "Jane Smith", program: "Arts", residence: "Dorm B", signOutDate: "2024-11-15" },
  { id: 3, name: "Alice Brown", program: "Commerce", residence: "Dorm C", signOutDate: "2024-11-14" },
];

const pieChartData = [
  { name: "Science", value: 50, color: "#4caf50" },
  { name: "Arts", value: 30, color: "#2196f3" },
  { name: "Commerce", value: 20, color: "#ff9800" },
];

const barChartData = [
  { name: "Dorm A", value: 1 },
  { name: "Dorm B", value: 1 },
  { name: "Dorm C", value: 1 },
];

const SignOutPage = () => {
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
                <BreadcrumbPage>Sign Out</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="p-4 space-y-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-2"
          >
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Total Signed Out Students</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">{signedOutData.length}</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Programs with Sign-Outs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4">
                  <li>Science: 1</li>
                  <li>Arts: 1</li>
                  <li>Commerce: 1</li>
                </ul>
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
            <PieChart data={pieChartData} title="Sign-Outs by Program" />
            <BarChart data={barChartData} title="Sign-Outs by Residence" />
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
                <CardTitle>Students Signed Out</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border border-gray-200 rounded-lg">
                  <TableHeader className="bg-gray-100 text-gray-700">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Residence</TableHead>
                      <TableHead>Sign-Out Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signedOutData.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.program}</TableCell>
                        <TableCell>{student.residence}</TableCell>
                        <TableCell>{student.signOutDate}</TableCell>
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
};

export default SignOutPage;
