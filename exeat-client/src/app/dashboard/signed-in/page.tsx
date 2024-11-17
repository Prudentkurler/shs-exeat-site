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

const signedInData = [
  { id: 1, name: "John Doe", program: "Science", residence: "Dorm A", signInTime: "08:00 AM" },
  { id: 2, name: "Alice Brown", program: "Arts", residence: "Dorm B", signInTime: "08:15 AM" },
  { id: 3, name: "Jane Smith", program: "Commerce", residence: "Dorm C", signInTime: "08:30 AM" },
];

const pieChartData = [
  { name: "Science", value: 40, color: "#4caf50" },
  { name: "Arts", value: 30, color: "#2196f3" },
  { name: "Commerce", value: 30, color: "#ff9800" },
];

const barChartData = [
  { name: "Dorm A", value: 1 },
  { name: "Dorm B", value: 1 },
  { name: "Dorm C", value: 1 },
];

const SignedInPage = () => {
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
                <BreadcrumbPage>Signed In</BreadcrumbPage>
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
                <CardTitle>Total Signed In Students</CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-gray-800">{signedInData.length}</h2>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Programs with Sign-Ins</CardTitle>
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
            <PieChart data={pieChartData} title="Sign-Ins by Program" />
            <BarChart data={barChartData} title="Sign-Ins by Residence" />
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
                <CardTitle>Students Signed In</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border border-gray-200 rounded-lg">
                  <TableHeader className="bg-gray-100 text-gray-700">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Residence</TableHead>
                      <TableHead>Sign-In Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {signedInData.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.program}</TableCell>
                        <TableCell>{student.residence}</TableCell>
                        <TableCell>{student.signInTime}</TableCell>
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

export default SignedInPage;
