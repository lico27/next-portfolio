"use client";
import { cn } from "@/utils/cn";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export function NavbarTwo() {
  return (
      <Navbar />
  );
}

const Navbar = () => {
  const navItems = [
    {
      name: "Skills",
      link: "#",
    },
    {
      name: "Projects",
      link: "#",
    },
    {
      name: "Certifications",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <div className="w-[75vw] mx-auto">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        "sticky top-40 inset-x-0"
      )}
    >
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? "4px" : "2rem",
        }}
        key={String(open)}
        className="flex relative flex-col lg:hidden w-full justify-between items-center bg-white dark:bg-neutral-950  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2"
      >
        <div className="flex flex-row justify-between items-center w-full">
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

