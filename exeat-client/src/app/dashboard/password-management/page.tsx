"use client";

import React, { useState } from "react";
import AppSidebar from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip } from "@/components/ui/tooltip";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const studentData = [
  { id: 1, name: "John Doe", program: "Computer Science", password: "abcd1234", updatedAt: "2024-11-10" },
  { id: 2, name: "Jane Smith", program: "Mathematics", password: "securePass1!", updatedAt: "2024-11-09" },
  { id: 3, name: "Alice Brown", program: "Physics", password: "password2024$", updatedAt: "2024-11-08" },
];

const PasswordManagementPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredData = studentData.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchQuery) ||
      entry.program.toLowerCase().includes(searchQuery)
  );

  return (
    <SidebarProvider>
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
                <BreadcrumbPage>Password Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="p-4 space-y-6">
          {/* Update Password Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Set Daily Password</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      placeholder="Enter a new password"
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2.5"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  <Tooltip>
                    <p className="text-sm text-gray-500">Use a strong password with at least 8 characters, including uppercase, lowercase, number, and special character.</p>
                  </Tooltip>
                  <Button>Set Password</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Separator />

          {/* Student Data Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>Student Passwords</CardTitle>
                  <Input
                    type="text"
                    placeholder="Search by name or program"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table className="border border-gray-200 rounded-lg">
                  <TableHeader className="bg-gray-100 text-gray-700">
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Password</TableHead>
                      <TableHead>Updated On</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((entry) => (
                      <TableRow key={entry.id}>
                        <TableCell>{entry.id}</TableCell>
                        <TableCell>{entry.name}</TableCell>
                        <TableCell>{entry.program}</TableCell>
                        <TableCell>{entry.password}</TableCell>
                        <TableCell>{entry.updatedAt}</TableCell>
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

export default PasswordManagementPage;
