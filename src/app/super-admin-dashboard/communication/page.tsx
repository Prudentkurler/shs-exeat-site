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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";



const Page = () => {
  const filters = {
    schools: ["All Schools", "St. Albans High School", "Greenwood Academy", "Hillside School"],
    grades: ["All Grades", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    paymentStatus: ["All", "Paid", "Unpaid"],
  };

  const parents = [
    { id: 1, name: "John Doe", school: "St. Albans High School", grade: "Grade 1", status: "Paid", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", school: "Greenwood Academy", grade: "Grade 3", status: "Unpaid", phone: "123-456-7891" },
    { id: 3, name: "Emily Davis", school: "Hillside School", grade: "Grade 2", status: "Paid", phone: "123-456-7892" },
    { id: 4, name: "Michael Brown", school: "St. Albans High School", grade: "Grade 4", status: "Unpaid", phone: "123-456-7893" },
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
                <BreadcrumbPage>SMS to Parent List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="p-6 space-y-6">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-md shadow-md space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-700">Filter Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* School Filter */}
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select School" />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.schools.map((school, index) => (
                      <SelectItem key={index} value={school}>
                        {school}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Grade Filter */}
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.grades.map((grade, index) => (
                      <SelectItem key={index} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Payment Status Filter */}
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Payment Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.paymentStatus.map((status, index) => (
                      <SelectItem key={index} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Search by Name */}
              <div>
                <Input placeholder="Search by Parent Name" />
              </div>
            </div>
          </motion.div>

          {/* Parent List Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Parent List</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>School</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parents.map((parent) => (
                  <TableRow key={parent.id}>
                    <TableCell>{parent.id}</TableCell>
                    <TableCell>{parent.name}</TableCell>
                    <TableCell>{parent.school}</TableCell>
                    <TableCell>{parent.grade}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          parent.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {parent.status}
                      </span>
                    </TableCell>
                    <TableCell>{parent.phone}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Send SMS
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
