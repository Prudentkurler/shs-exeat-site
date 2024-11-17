"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";

const ExeatPage: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [history] = useState([
    { date: "2024-11-10", time: "08:00 AM", status: "Sign In" },
    { date: "2024-11-10", time: "05:00 PM", status: "Sign Out" },
  ]);
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const handlePayment = () => {
    setPaymentStatus("Paid");
    alert("Payment successful!");
  };

  const handleFeedbackSubmit = () => {
    alert("Feedback submitted successfully!");
    setFeedback("");
  };

  const handleMessageSubmit = () => {
    alert("Message sent to the school successfully!");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl space-y-8"
      >
        {/* Exeat Card */}
        <Card className="rounded-lg shadow-lg border bg-white">
          <CardHeader className="text-center bg-blue-500 text-white py-6 rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Exeat Management</CardTitle>
            <p className="text-sm mt-1 text-gray-100">Manage your activities seamlessly</p>
          </CardHeader>
          <CardContent className="p-6">
            {/* Payment Section */}
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-3 text-gray-700">Pay Charge Fee</h2>
              <div className="flex items-center space-x-4">
                <Input
                  value="50.00"
                  readOnly
                  className="w-1/2 bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <Button onClick={handlePayment} disabled={paymentStatus === "Paid"}>
                  {paymentStatus === "Paid" ? "Payment Complete" : "Pay Now"}
                </Button>
              </div>
              {paymentStatus === "Paid" && (
                <p className="mt-2 text-sm text-green-600">Payment was successful.</p>
              )}
            </section>

            {/* Sign-in/Sign-out History */}
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-3 text-gray-700">Sign-in and Sign-out History</h2>
              <Table className="bg-gray-50 rounded-lg shadow-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-medium text-gray-600">Date</TableHead>
                    <TableHead className="font-medium text-gray-600">Time</TableHead>
                    <TableHead className="font-medium text-gray-600">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((record, index) => (
                    <TableRow key={index} className="hover:bg-gray-100">
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.time}</TableCell>
                      <TableCell>{record.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            {/* Feedback Section */}
            <section className="mb-6">
              <h2 className="text-lg font-bold mb-3 text-gray-700">Leave Feedback</h2>
              <Textarea
                placeholder="Write your feedback here (max 200 words)"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                maxLength={200}
                className="mb-3 bg-gray-50"
              />
              <Button onClick={handleFeedbackSubmit} disabled={!feedback.trim()}>
                Submit Feedback
              </Button>
            </section>

            {/* Contact School Section */}
            <section>
              <h2 className="text-lg font-bold mb-3 text-gray-700">Contact School</h2>
              <Textarea
                placeholder="Enter your message here (max 100 words)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={100}
                className="mb-3 bg-gray-50"
              />
              <Button onClick={handleMessageSubmit} disabled={!message.trim()}>
                Send Message
              </Button>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ExeatPage;
