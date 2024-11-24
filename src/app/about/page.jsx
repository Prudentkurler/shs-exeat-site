"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck, Users, Award, TrendingUp, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Footer from "@/components/comps/footer";

const AboutPage = () => {
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
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center  text-second bg-black/50 bg-blend-overlay bg-cover bg-center"
       style={{
        backgroundImage: "url('/Images/aboutHero.jpg')",
      }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Exeat.com
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-center w-[90%] md:w-[60%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering schools, students, and parents with advanced solutions for
          safety, transparency, and efficiency.
        </motion.p>
      </section>

      {/* Mission Section */}
<section className="w-full py-16 px- mt-6">
  <div className="flex flex-col md:flex-row gap-12 ">
    <motion.div
      className="w-full md:w-1/2 p-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
        Our Mission
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        At SHS-Exeat, our mission is to provide schools, students, and
        parents with innovative tools to enhance safety and streamline
        processes. We believe in the power of technology to create a
        secure and efficient environment where education can thrive.
      </p>
    </motion.div>

    <motion.div
      className="w-full md:w-1/2 h-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative w-[90%] md:w-full mx-auto h-[300px]  md:h-[400px] lg:h-[450px]">
        <Image
          src="/Images/finger.jpg"
          alt="Innovation"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* Core Values */}
      <section className="w-full py-16 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-600">
          Our Core Values
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              icon: <BadgeCheck className="h-10 w-10 text-blue-500" />,
              title: "Integrity",
              description:
                "We uphold the highest standards of transparency and honesty.",
            },
            {
              icon: <Users className="h-10 w-10 text-green-500" />,
              title: "Community",
              description:
                "We foster strong connections between schools, students, and parents.",
            },
            {
              icon: <Award className="h-10 w-10 text-yellow-500" />,
              title: "Excellence",
              description:
                "We strive to deliver exceptional results through our services.",
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-indigo-500" />,
              title: "Innovation",
              description:
                "We leverage cutting-edge technology to solve real-world problems.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[22%] bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {value.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-600">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            {
              name: "Jane Doe",
              role: "CEO",
              image: "/Images/lady.jpg",
            },
            {
              name: "John Smith",
              role: "CTO",
              image: "/Images/man.png",
            },
            {
              name: "Son Johnson",
              role: "Head of Marketing",
              image: "/Images/ma1.png",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[22%] bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={`${member.name} Photo`}
                className="rounded-full h-24 w-24 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
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

      {/* Footer Section */}
      <Separator className="my-10" />
     <Footer/>
    </div>
  );
};

export default AboutPage;
