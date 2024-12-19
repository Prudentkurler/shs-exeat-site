"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, LogIn, TrendingUp, ChevronUp } from "lucide-react"; // Using lucide-react icons for visuals
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/comps/footer";
import Link from "next/link";
import {motion} from 'framer-motion'


const Page = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
 



  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
     <motion.div
      className="w-full h-[90vh] flex flex-col justify-center items-center gap-5 bg-black/50 bg-blend-overlay bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/homeHero.jpg')",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-3xl md:text-5xl w-[70%] text-center text-second font-extrabold leading-snug"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ensuring your child's/student's safety every step of the way.
      </motion.h1>
      <motion.p
        className="mt-3 text-md md:text-lg px-4 text-center text-second/90"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Sign up for a safer tomorrow. Protect your child's journey. Experience the power of exeat.com
      </motion.p>
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link href="/register">
          <Button
            variant="default"
            size="lg"
            className="mt-5 lg:w-[300px] px-6 py-3 bg-white text-blue-600 rounded-2xl
                       hover:shadow-xl hover:bg-[#ffc107] hover:border-2 hover:border-white hover:text-white 
                       transition-all duration-500 ease-in-out"
          >
            Register Now
          </Button>
        </Link>
        <Link href="/login">
          <Button
            variant="outline"
            size="lg"
            className="mt-5 lg:w-[300px] px-6 py-3 border-2 border-white text-white bg-transparent 
                       hover:bg-[#ffc107] hover:text-white hover:shadow-xl
                       transition-all duration-500 ease-in-out rounded-2xl"
          >
            Login
          </Button>
        </Link>
      </motion.div>
    </motion.div>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-first">
          Core Features
        </h2>
        <div className="flex flex-wrap gap-6 justify-center px-6">
          {[
            { title: "Automated student tracking", color: "from-pink-400 to-red-400" },
            { title: "Real-time location updates", color: "from-indigo-400 to-purple-400" },
            { title: "Secure message or feedback system for parents and schools", color: "from-green-400 to-teal-400" },
            { title: "Customizable alerts and notifications", color: "from-yellow-400 to-orange-400" },
            { title: "User-friendly web application", color: "from-first to-blue-400" },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${feature.color} text-white w-full md:w-[22%] shadow-lg transform transition-transform hover:scale-105`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Learn more about how this feature can streamline your management.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-first">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-6">
          {[
            {
              icon: <BadgeCheck className="h-8 w-8" />,
              title: " Select Your School and Register ",
              description: "Create an account and connect with your wards school",
              bgColor: "bg-blue-500",
            },
            {
              icon: <LogIn className="h-8 w-8" />,
              title: "Login and Manage Your Details",
              description: "Check your wards' check-in and out date and time. You can also leave feedbacks to school.",
              bgColor: "bg-green-500",
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Track  Your Ward's Progress",
              description: "Get in touch with your wards school, individual teachers.",
              bgColor: "bg-yellow-500",
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.bgColor} p-4 rounded-full text-white`}>{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-first">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start px-6">
          {[
            {
              quote: "This platform has made managing attendance and payments so much easier. It’s intuitive and efficient!",
              name: "Jane Doe, Student",
            },
            {
              quote: "The real-time sign-in/out history is a game-changer for our school. Highly recommend it!",
              name: "Mr. Smith, Administrator",
            },
            {
              quote: "Being able to track revenue and attendance in one place has been incredibly helpful for our admin team.",
              name: "Dr. Johnson, Principal",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg max-w-sm text-center">
              <p className="text-gray-600 italic">“{testimonial.quote}”</p>
              <p className="mt-4 font-bold text-second">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg 
                     hover:bg-blue-500 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      <Separator className="my-10" />
      <Footer />
    </>
  );
};

export default Page;
