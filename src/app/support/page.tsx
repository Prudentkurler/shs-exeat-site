"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronDown, Mail, Phone, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SupportPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-first text-second">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We're Here to Help
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-center w-[90%] md:w-[60%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Contact our team or browse our FAQs to get the support you need.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="w-full bg-white p-6 shadow-md rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              Contact Us
            </h2>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" className="mt-4 bg-indigo-600 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Support Options */}
          <motion.div
            className="w-full space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className="flex flex-row items-center gap-4 p-4 shadow-md">
              <Mail className="h-10 w-10 text-indigo-500" />
              <div>
                <CardTitle>Email Support</CardTitle>
                <p className="text-gray-600">support@shs-exeat.com</p>
              </div>
            </Card>
            <Card className="flex flex-row items-center gap-4 p-4 shadow-md">
              <Phone className="h-10 w-10 text-green-500" />
              <div>
                <CardTitle>Call Us</CardTitle>
                <p className="text-gray-600">+233 123 456 789</p>
              </div>
            </Card>
            <Card className="flex flex-row items-center gap-4 p-4 shadow-md">
              <HelpCircle className="h-10 w-10 text-yellow-500" />
              <div>
                <CardTitle>Help Center</CardTitle>
                <p className="text-gray-600">
                  Visit our <a href="/help" className="text-indigo-600">Help Center</a> for FAQs and guides.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-600">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "How do I create an account?",
              answer:
                "Creating an account is simple. Just click on the 'Sign Up' button on the homepage and fill in your details.",
            },
            {
              question: "How can I reset my password?",
              answer:
                "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions.",
            },
            {
              question: "Is my data secure?",
              answer:
                "Absolutely! We use advanced security measures to protect your personal and sensitive information.",
            },
            {
              question: "Can I get a refund for unused features?",
              answer:
                "Refunds depend on the terms of your subscription. Please contact our support team for assistance.",
            },
          ].map((faq, index) => (
            <CollapsibleItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Separator className="my-10" />
      <footer className="w-full bg-gray-800 py-6 text-white text-center">
        <p>© {new Date().getFullYear()} SHS-Exeat. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

interface CollapsibleItemProps {
  question: string;
  answer: string;
}

const CollapsibleItem = ({ question, answer }: CollapsibleItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white p-4 shadow-md rounded-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

export default SupportPage;
