"use client";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb"; // Breadcrumb component
import { Loader2, Home, LogIn } from "lucide-react"; // Icons
import { motion } from "framer-motion";

const Register = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4)); // Max 4 steps
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Registration completed!");
    }, 2000); // Simulate form submission
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl"
      >
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center text-blue-600 mb-6"
          >
            Register
          </motion.h2>

          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <span>Step {step} of 4</span>
            <span className="mx-2">/</span>
            {step === 1 && <span>Region & School</span>}
            {step === 2 && <span>Student Details</span>}
            {step === 3 && <span>Parent Details</span>}
            {step === 4 && <span>ID & Pin Info</span>}
          </Breadcrumb>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <Label htmlFor="region">Select Region</Label>
                  <Select>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Choose a region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="school">Select Your School</Label>
                  <Select>
                    <SelectTrigger id="school">
                      <SelectValue placeholder="Choose your school" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school1">School 1</SelectItem>
                      <SelectItem value="school2">School 2</SelectItem>
                      <SelectItem value="school3">School 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4">
                  <Label htmlFor="photo">Upload Photo</Label>
                  <Input type="file" id="photo" />
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="program">Program</Label>
                  <Input id="program" placeholder="Enter your program" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="residence">Residence</Label>
                  <Input id="residence" placeholder="Enter your residence" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div>
                  <Label htmlFor="parentName">Parent Name</Label>
                  <Input id="parentName" placeholder="Enter parent name" />
                </div>
                <div>
                  <Label htmlFor="parentPhone">Parent Phone</Label>
                  <Input
                    id="parentPhone"
                    type="tel"
                    placeholder="Enter parent phone"
                  />
                </div>
                <div>
                  <Label htmlFor="parentEmail">Parent Email</Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    placeholder="Enter parent email"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianName">Guardian Name</Label>
                  <Input id="guardianName" placeholder="Enter guardian name" />
                </div>
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone</Label>
                  <Input
                    id="guardianPhone"
                    type="tel"
                    placeholder="Enter guardian phone"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianEmail">Guardian Email</Label>
                  <Input
                    id="guardianEmail"
                    type="email"
                    placeholder="Enter guardian email"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div>
                  <Label htmlFor="yourPhone">Your Phone Number</Label>
                  <Input
                    id="yourPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="parentPhone">Parent Phone Number</Label>
                  <Input
                    id="parentPhone"
                    type="tel"
                    placeholder="Enter parent phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone Number</Label>
                  <Input
                    id="guardianPhone"
                    type="tel"
                    placeholder="Enter guardian phone number"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="secondary" onClick={prevStep}>
                  Back
                </Button>
              )}
              {step < 4 ? (
                <Button variant="default" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="default">
                  {submitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Submit"}
                </Button>
              )}
            </div>
          </form>

          {/* Back Home and Login Buttons */}
          <div className="flex justify-between mt-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <Home className="w-4 h-4" /> Back Home
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" /> Login
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
