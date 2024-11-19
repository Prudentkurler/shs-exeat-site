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
import { Skeleton } from "@/components/ui/skeleton";
import { Link, Loader2 } from "lucide-react"; // Spinner icon
import { motion } from "framer-motion";

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state for steps
  const [submitting, setSubmitting] = useState(false); // Loading state for submit

  // Handler to navigate steps
  const nextStep = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep((prev) => Math.min(prev + 1, 3));
    }, 1000); // Simulate loading
  };

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert("Form submitted successfully!"); // Simulate form submission
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl font-bold text-center text-blue-600 mb-6"
          >
            Register
          </motion.h2>

          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-4"
          >
            <p className="text-sm text-gray-600">Step {step} of 3</p>
          </motion.div>

          {/* Step Content */}
          <form onSubmit={handleSubmit}>
            {loading ? (
              // Skeleton Loader for loading state
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                {step === 1 && (
                  <div>
                    {/* Step 1: Region and School */}
                    <div>
                      <Label htmlFor="region">Select Region</Label>
                      <Select>
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Choose your region" />
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
                    {/* Step 2: Student Details */}
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="program">Program</Label>
                      <Input id="program" placeholder="Enter your program" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    {/* Step 3: Parent Details */}
                    <div>
                      <Label htmlFor="parentName">Parent Name</Label>
                      <Input id="parentName" placeholder="Enter parent name" />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Parent Phone</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        placeholder="Enter parent phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Parent Email</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        placeholder="Enter parent email address"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <motion.div
              className="flex justify-between mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {step > 1 && (
                <Button
                  variant="secondary"
                  onClick={prevStep}
                  disabled={loading}
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  variant="default"
                  onClick={nextStep}
                  disabled={loading || submitting}
                >
                  {loading ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    "Next"
                  )}
                </Button>
              ) : (
                
                <Button
                  type="submit"
                  variant="default"
                  disabled={submitting || loading}
                >
                  {submitting ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    "Submit"
                  )}
                </Button>
               
              )}
            </motion.div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
