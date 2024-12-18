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
import { Button} from "@/components/ui/button";
import {  Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserCheck, UserMinus, PlusCircle, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import {  addSchool, getSchools } from "@/actions/schoolActions";
import { useFormState } from "react-dom";
import { addSchoolAdmin } from "@/actions/schoolAdmin";
import { useRouter } from "next/navigation";



export interface School {
  region_id: string;
  name: string;
  code: string;
  address: string;
}
const SuperAdminSchoolsPage = () => {
  const [isAddSchoolDialogOpen, setIsAddSchoolDialogOpen] = useState(false);
  const [isAssignAdminDialogOpen, setIsAssignAdminDialogOpen] = useState(false);
  const [newSchoolName, setNewSchoolName] = useState("");
  const [newSchoolCode, setNewSchoolCode] = useState("");
  const [newSchoolRegion, setNewSchoolRegion] = useState("");
  const [newSchoolAddress, setNewSchoolAddress] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [newAdminPhone, setNewAdminPhone] = useState("");
  const [schools, setSchools] = useState<School[]>([]);

  const [filteredSchools, setFilteredSchools] = useState(schools);
  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const initialState = { success: false, message: "" };
  const [state, formAction] = useFormState(addSchool, initialState);
  const [adminstate, adminformAction] = useFormState(addSchool, initialState);
 

  const router = useRouter();
  const admininitialState = { success: false, message: "" };


 




  


  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const schoolData = await getSchools();
        setSchools(schoolData);
        setFilteredSchools(schoolData);

        console.log(schoolData)
      } catch (error) {
        console.log('Failed to fetch schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleAddSchool = () => {
    setIsAddSchoolDialogOpen(true);
  };


  


interface Admin {
    name: string;
    email: string;
}

const handleAssignAdmin = (school: School) => {
    setSelectedSchool(school);
    setIsAssignAdminDialogOpen(true);
};

  const handleSaveAdmin = () => {
    // Implement logic to save the new admin
    if (newAdminName.trim() !== "" && newAdminEmail.trim() !== "") {
      // Add new admin to the selected school
      setIsAssignAdminDialogOpen(false);
      setNewAdminName("");
      setNewAdminEmail("");
    }
  };

const handleFilterSchools = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm: string = e.target.value.toLowerCase();
    const filteredSchools: School[] = schools.filter((school: School) =>
        school.name.toLowerCase().includes(searchTerm)
    );
    setFilteredSchools(filteredSchools);
};

//generate password function


    const [newAdminPassword, setNewAdminPassword] = useState("");

    const generatePassword = () => {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setNewAdminPassword(password);
    };


 
    
    

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
                <BreadcrumbPage>Schools</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="w-full p-4">
          {/* Add School Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 rounded-md shadow-md mb-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Add School</h3>
            <div className="flex items-center gap-4">
              <Button onClick={handleAddSchool}>
                <PlusCircle className="h-5 w-5 mr-2" />
                Add School
              </Button>
            </div>
          </motion.div>

          {/* Schools List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-4 rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Schools</h3>
            <div className="overflow-x-auto">

                {/* Filter Schools */}
                <div className="mt-5 mb-4 w-full md:w-1/4 px-4">

            <Input
                        placeholder="Search by name"
                        className="w-full"
                        onChange={handleFilterSchools}
                      />
                </div>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-white z-10">School</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools.map((school) => (
                    <TableRow key={school.region_id}>
                      <TableCell className="sticky left-0 bg-white z-10">{school.name}</TableCell>
                      <TableCell>{school.code}</TableCell>
                      <TableCell>{school.region_id}</TableCell>
                      <TableCell>{school.address}</TableCell>
                    
                      <TableCell>
                        <Button variant="outline" className="flex items-center gap-2" onClick={() => handleAssignAdmin(school)}>
                          <UserPlus className="h-4 w-4" />
                          Assign Admin
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>

        {/* Add School Dialog */}
        <Dialog open={isAddSchoolDialogOpen} onOpenChange={setIsAddSchoolDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add School</DialogTitle>
            </DialogHeader>
            <form action={formAction}>
      <div className="space-y-4">
        <div>
          <Label className="mb-3" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            value={newSchoolName}
            onChange={(e) => setNewSchoolName(e.target.value)}
            placeholder="St. John's Grammar"
            name="name"
            required
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="code">
            Code
          </Label>
          <Input
            id="code"
            value={newSchoolCode}
            onChange={(e) => setNewSchoolCode(e.target.value)}
            placeholder="bbcc"
            name="code"
            required
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="region">
            Region_id
          </Label>
          <Input
            id="region_id"
            value={newSchoolRegion}
            onChange={(e) => setNewSchoolRegion(e.target.value)}
            placeholder=""
            name="region_id"
            required
          />
        </div>
        <div>
          <Label className="mb-3" htmlFor="address">
            Address
          </Label>
          <Input
            id="address"
            value={newSchoolAddress}
            onChange={(e) => setNewSchoolAddress(e.target.value)}
            placeholder="Achimota"
            name="address"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add School
      </button>
      {statusMessage && (
        <div className="mt-4 text-sm text-gray-700">{statusMessage}</div>
      )}
    </form>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddSchoolDialogOpen(false)}>
                Cancel
              </Button>
             
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Assign Admin Dialog */}
        <Dialog open={isAssignAdminDialogOpen} onOpenChange={setIsAssignAdminDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Assign Admin to {selectedSchool?.name}</DialogTitle>
            </DialogHeader>
            <form  className="space-y-4">
      <div>
        <Label htmlFor="adminName">Name</Label>
        <Input id="adminName" name="name" placeholder="Enter admin name" required />
      </div>
      <div>
        <Label htmlFor="adminEmail">Email</Label>
        <Input id="adminEmail" name="email" placeholder="Enter admin email" required />
      </div>
      <div>
        <Label htmlFor="adminPhone">Phone</Label>
        <Input id="adminPhone" name="phone" placeholder="Enter admin phone" required />
      </div>
      <div>
        <Label htmlFor="adminPassword">Password</Label>
        <div className="flex gap-4 items-center">
          <Input
            id="adminPassword"
            name="password"
            value={newAdminPassword}
            onChange={(e) => setNewAdminPassword(e.target.value)}
            placeholder="Enter admin password"
            required
          />
          <Button
            type="button"
            onClick={generatePassword}
            variant="default"
            className="bg-green-500 flex items-center gap-2"
          >
            <UserCheck className="h-4 w-4" />
            Generate Password
          </Button>
        </div>
      </div>

      <Button type="submit" className="bg-blue-500 text-white">
        Add Admin
      </Button>

      {state.success && <p className="text-green-600 mt-2">{state.message}</p>}
      {state.error && <p className="text-red-600 mt-2">{state.error}</p>}
    </form>
            <DialogFooter className="mt-4">
              <Button variant="outline" onClick={() => setIsAssignAdminDialogOpen(false)}>
                Cancel
              </Button>
              
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SuperAdminSchoolsPage;
