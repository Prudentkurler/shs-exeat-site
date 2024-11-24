"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart } from "@/components/comps/pieChart";
import { BarChart } from "@/components/comps/barChart";
import { motion } from "framer-motion";
import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const studentsData = [
  { id: 1, name: "John Doe", program: "Science", status: "Signed In", payment: "Paid", residence: "Dorm A" },
  { id: 2, name: "Jane Smith", program: "Arts", status: "Signed Out", payment: "Unpaid", residence: "Dorm B" },
  { id: 3, name: "Alice Brown", program: "Science", status: "Signed In", payment: "Paid", residence: "Dorm A" },
  { id: 4, name: "Bob White", program: "Commerce", status: "Signed Out", payment: "Paid", residence: "Dorm C" },
];

const pieChartData = [
  { name: "Signed In", value: 60, color: "#4caf50" },
  { name: "Signed Out", value: 40, color: "#f44336" },
];

const barChartData = [
  { name: "Science", value: 30 },
  { name: "Arts", value: 20 },
  { name: "Commerce", value: 10 },
];

export default function TotalStudentsPage() {
  return (

    <SidebarProvider
    className="w-full"
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

    <div className="md:p-4 space-y-6 w-full">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-3 p-3 items-center w-full"
      >
        <Card className=" w-full ">
          <CardHeader>
            <CardTitle>Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold text-gray-800">120</h2>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Signed In</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold text-gray-800">80</h2>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Signed Out</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold text-gray-800">40</h2>
          </CardContent>
        </Card>
      </motion.div>

      <Separator />

      {/* Visualizations Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 items-center p-3"
      >
        <PieChart data={pieChartData} title="Sign-in vs Sign-out" />
        <BarChart data={barChartData} title="Students by Program" />
      </motion.div>

      <Separator />

      {/* Data Table Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-white p-4 shadow-md w-full"
      >
        <Card>
          <CardHeader>
            <CardTitle>Students List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="border border-gray-200 rounded-lg">
              <TableHeader className="bg-gray-100 text-gray-700">
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Residence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentsData.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded ${
                          student.status === "Signed In"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded ${
                          student.payment === "Paid"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {student.payment}
                      </span>
                    </TableCell>
                    <TableCell>{student.residence}</TableCell>
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
