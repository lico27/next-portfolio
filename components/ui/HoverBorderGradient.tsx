"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  href,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    href?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #5AD767 0%, rgba(255, 255, 255, 0) 100%)";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-lg border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...(Tag === "a" ? { href, target: "_blank", rel: "noopener noreferrer" } : {})} // Add target and rel for anchor tags
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: "transparent" }}
        animate={{
          background: hovered ? highlight : "transparent",
        }}
        transition={{ ease: "linear", duration: 0.5 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
