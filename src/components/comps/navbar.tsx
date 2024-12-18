"use client";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!pathname.includes("dashboard") && (
        <div className="w-full h-[60px] bg-first flex items-center justify-between shadow-md px-4">
          {/* Logo */}
          <Link href="/">
            <h3 className="text-xl text-second font-bold">EXEAT.COM</h3>
          </Link>

          <div className="hidden  md:flex items-center gap-3 text-second font-semibold tex-xl">
          <Link href="/">
                  Home
                </Link>
            
             
                <Link href="/about" >
                  About
                </Link>
                <Link href="/support" >
                  Support
                </Link>
                <Link href="/dashboard" >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard /> 
                  </div>
                </Link>
                <Link href="/super-admin-dashboard" >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard /> 
                  </div>
                </Link>
          </div>

          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-second md:hidden flex text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      )}

      {/* Fullscreen Sliding Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Menu Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            ></motion.div>

            {/* Sliding Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full bg-first z-50 flex flex-col items-center py-5 text-second"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-5 right-5 text-2xl focus:outline-none"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Centered Menu Items */}
              <nav className="flex flex-col mt-8 pt-5 items-center  gap-8 text-2xl font-semibold">

                <div className=" mb-5">
                  <h3>Exeat.com</h3>
                </div>

                <div className="flex flex-col gap-6 mt-8 items-center">

                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
            
             
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
                <Link href="/support" onClick={toggleMenu}>
                  Support
                </Link>
                {
                  pathname.includes('exeat') && (
                    <Link href="/" onClick={toggleMenu}>
                      Log out
                    </Link>
                  )
                }
                <Link href="/dashboard" onClick={toggleMenu}>
                  <div className="flex items-center gap-2">
                    <LayoutDashboard /> 
                  </div>
                </Link>
                <Link href="/super-admin-dashboard" onClick={toggleMenu}>
                  <div className="flex items-center gap-2">
                    <LayoutDashboard /> 
                  </div>
                </Link>
        </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
