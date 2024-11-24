"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const CreateLoginPage: React.FC = () => {
  const [formValues, setFormValues] = useState({
    studentName: "",
    studentPin: "",
  });

  const [errors, setErrors] = useState({
    studentName: "",
    studentPin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors dynamically
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { studentName: "", studentPin: "" };

    if (!formValues.studentName.trim()) {
      newErrors.studentName = "Student name is required.";
      isValid = false;
    }

    if (!/^\d{4}$/.test(formValues.studentPin)) {
      newErrors.studentPin = "PIN must be a 4-digit number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formValues);
      // Add logic to save student login details
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 text-center">
              <CardTitle className="text-2xl font-semibold tracking-wide">Create Login</CardTitle>
              <p className="text-sm mt-1 text-gray-200">Secure your account with a personalized PIN</p>
            </CardHeader>
          </motion.div>
          <CardContent className="p-6 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <Input
                    name="studentName"
                    value={formValues.studentName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`rounded-lg py-3 px-4 shadow-md transition duration-200 ${
                      errors.studentName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-red-500 text-xs mt-2">{errors.studentName}</p>
                  )}
                </div>
              </motion.div>

              {/* Student PIN */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student PIN
                  </label>
                  <Input
                    name="studentPin"
                    value={formValues.studentPin}
                    onChange={handleChange}
                    placeholder="Enter a 4-digit PIN"
                    type="password"
                    maxLength={4}
                    className={`rounded-lg py-3 px-4 shadow-md transition duration-200 ${
                      errors.studentPin
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {errors.studentPin && (
                    <p className="text-red-500 text-xs mt-2">{errors.studentPin}</p>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                <Link href="/login/exeat">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md text-lg font-medium transition duration-200"
                >
                   Login
                </Button>
                </Link>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateLoginPage;
