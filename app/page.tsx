"use client";
import Hero from "@/components/Hero";
import ScrollingSkills from "@/components/ScrollingSkills";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
// import { NavbarTwo } from "@/components/ui/NavbarTwo";
import { Certifications } from "@/components/Certifications";

export default function Home() {
  return (
   <div className="bg-black-100">
      {/* <NavbarTwo /> */}
      <div className="relative bg-black-100 flex flex-col items-center mx-auto sm:px-10 px-5">
        <main className="w-full h-screen">
          <Hero />
          <ScrollingSkills />
          <BackgroundBeams />
          <Certifications />
        </main>
      </div>
   </div>
  );
}
