"use client";

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
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserCheck, UserMinus, DollarSign, MessageCircle } from "lucide-react";

const SuperAdminOverviewPage = () => {
  const stats = [
    { icon: <Users className="text-blue-500" />, title: "Total Schools", value: 3000 },
    { icon: <Users className="text-blue-500" />, title: "Total Students", value: 3000 },
    { icon: <UserCheck className="text-green-500" />, title: "Signed In", value: 2200 },
    { icon: <UserMinus className="text-yellow-500" />, title: "Signed Out", value: 800 },
    { icon: <DollarSign className="text-teal-500" />, title: "Paid ", value: 2500 },
    { icon: <DollarSign className="text-red-500" />, title: "Unpaid ", value: 500 },
    { icon: <DollarSign className="text-green-600" />, title: "Total Revenue", value: "$150,000" },
  ]; 

  const smsParentList = [
    { id: 1, school: "St. Albans", parentCount: 200 },
    { id: 2, school: "Greenwood Academy", parentCount: 150 },
    { id: 3, school: "Bright Future High", parentCount: 300 },
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
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className=" w-full">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex w-full  flex-col md:flex-row items-center p-4 gap-4"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="w-full md:min-w-[300px] ">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-600">
                    {stat.icon}
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold text-gray-800">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* SMS Parent List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 bg-white w-full mt-5 rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              SMS to Parent List
            </h3>
            <div className="overflow-x-scroll">

            
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>School</TableHead>
                  <TableHead>Parents to Notify</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {smsParentList.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{entry.id}</TableCell>
                    <TableCell>{entry.school}</TableCell>
                    <TableCell>{entry.parentCount}</TableCell>
                    <TableCell>
                      <Button variant="outline" className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Notify
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </motion.div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SuperAdminOverviewPage;
