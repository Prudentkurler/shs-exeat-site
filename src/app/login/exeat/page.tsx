"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

interface HistoryRecord {
  name: string;
  house: number;
  activity: 'check-in' | 'check-out';
  Reason: string;
  feedback: string;
  date: string;
  time: string;
}
const ExeatPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("welcome");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const [history, setHistory] = useState<HistoryRecord[]>([
    {
      name: "Gal Gaddot",
      house: 2,
      activity: "check-in",
      Reason: "Going for a checkup.",
      feedback: "My ward reported late.",
      date: "2024-11-10",
      time: "4:00pm",
    },
  ]);
  const [currentName] = useState("John Doe");
  const [currentHouse] = useState(3);
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  

  const handlePaymentSuccess = (reference: string) => {
    setPaymentStatus("Paid");
    alert(`Payment successful! Reference: ${reference}`);
  };

  const handlePaymentClose = () => {
    alert("Payment dialog closed.");
  };

  const handleFeedbackSubmit = () => {
    alert("Feedback submitted successfully!");
    setFeedback("");
  };

  const handleMessageSubmit = () => {
    alert("Message sent to the school successfully!");
    setMessage("");
  };

 
  

  const router = useRouter()
  const searchParams = useSearchParams();
  const name = searchParams.get('name')?.toUpperCase();

  

  return (
       
            
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <header className="w-full max-w-5xl mb-10">
        <div className="flex items-center justify-between bg-gray-200 text-white rounded-lg px-6 py-4 shadow-md">
          <div>
            <h1 className="md:text-2xl text- font-bold text-first">Welcome, {name}</h1>
            <p className="text-sm text-gray-200">Manage your activities seamlessly</p>
          </div>
          <Image
            src="/Images/lady.jpg"
            alt="Student Photo"
            className="w-20 h-20 rounded-full border-2 border-white"
            width={60}
            height={60}
            />
        </div>
      </header>

      {/* Navigation Section */}
      <section className="w-full max-w-5xl mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="flex items-center justify-center bg-[#4567b7] text-white font-bold text-lg h-24 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentSection("payment")}
            >
            Make Payment
          </motion.div>
          <motion.div
            className="flex items-center justify-center bg-[#ffc107] text-gray-800 font-bold text-lg h-24 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentSection("message")}
          >
            Leave a message
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl space-y-8"
      >
        {currentSection === "payment" && (
        <Card className="rounded-lg shadow-lg border bg-white">
          <CardHeader className="bg-[#4567b7] text-white py-4 rounded-t-lg">
            <CardTitle className="text-lg font-bold">Make Payment</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <h2 className="text-gray-700 text-lg font-medium mb-3">Pay Charge Fee</h2>
            <div className="flex items-center space-x-4">
              <Input
                value="15.00"
                readOnly
                className="w-1/2 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
              <Button
                onClick={() => {
                  setPaymentStatus("Paid");
                  alert("Payment successful!");
                }}
                disabled={paymentStatus === "Paid"}
                className={`${
                  paymentStatus === "Paid"
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                    : "bg-[#4567b7] text-white hover:bg-[#3458a4]"
                }`}
              >
                {paymentStatus === "Paid" ? "Paid" : "Pay Now"}
              </Button>
            </div>
            {paymentStatus === "Paid" && (
              <p className="mt-3 text-sm text-green-600">Payment was successful!</p>
            )}
          </CardContent>
        </Card>
)}

        {currentSection === "message" && (
          <Card className="rounded-lg shadow-lg border bg-white">
            <CardHeader className="bg-[#ffc107] text-gray-800 py-4 rounded-t-lg">
              <CardTitle className="text-lg font-bold">Leave a message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h2 className="text-gray-700 text-lg font-medium mb-3">Contact School</h2>
              <Textarea
                placeholder="Enter your message here (max 100 words)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={100}
                className="mb-3 bg-gray-50"
                />
              <Button
                onClick={handleMessageSubmit}
                disabled={!message.trim()}
                className="bg-[#4567b7] text-white"
                >
                Send Message
              </Button>
            </CardContent>
          </Card>
        )}


      </motion.div>

      {/* History Section */}
      <section className="w-full max-w-5xl mt-8">
        <h2 className="text-gray-800 text-lg font-bold mb-4">Sign-in and Sign-out History</h2>
        <Table className="bg-white shadow rounded-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 z-10 bg-white">Student Name</TableHead>
              <TableHead>House No.</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Feedback</TableHead>
             
              
            </TableRow>
          </TableHeader>
          <TableBody>
          {history.map((record, index) => (
                <TableRow key={index} className="hover:bg-gray-100">
                  <TableCell className="sticky left-0 bg-white z-10">{name}</TableCell>
                  <TableCell>{record.house}</TableCell>
                  <TableCell>{record.activity}</TableCell>
                  <TableCell>{record.Reason}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.time}</TableCell>
                 
                  <TableCell>{record.feedback}</TableCell>
                  <TableCell>

                   
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    </div>
        
  );
};

export default ExeatPage;
