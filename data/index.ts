"use client"

import { FaLinkedinIn, FaCss3Alt, FaReact, FaPython, FaMdb, FaBootstrap, FaNodeJs, FaNpm, FaElementor, FaGitAlt } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaThreads, FaHtml5 } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";

// export const navItems = [
//     { name: "About", link: "#about" },
//     { name: "Projects", link: "#projects" },
//     { name: "Testimonials", link: "#testimonials" },
//   ];
  
  export const contactDetails = [
    {
      id: 1,
      img: MdOutlineEmail,
      link: "mailto:liam@liamco.io",
    },
    {
      id: 2,
      img: TbBrandGithubFilled,
      link: "https://github.com/lico27",
    },
    {
      id: 3,
      img: FaThreads,
      link: "https://www.threads.net/@__lico27",
    },
    {
      id: 4,
      img: FaLinkedinIn,
      link: "https://www.linkedin.com/in/liam-cottrell-a1837272",
    },
  ];

  export const skills = [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Python",
      icon: FaPython,
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
    },
    {
      name: "MDB",
      icon: FaMdb,
    },
    {
      name: "Tailwind",
      icon: RiTailwindCssFill,
    },
    {
      name: "Next.js",
      icon: RiNextjsFill,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "npm",
      icon: FaNpm,
    },
    {
      name: "Elementor",
      icon: FaElementor,
    },
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "SQL",
      icon: PiFileSql,
    }
  ];