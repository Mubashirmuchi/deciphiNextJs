"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  href?: string;
  className?: string;
}

export default function CTAButton({ text, href = "#", className }: Props) {
  const hasCustomBg = className?.includes("bg-");

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "relative inline-flex items-center gap-3 px-5 py-2 text-white text-lg font-medium rounded-md shadow-lg overflow-hidden group",
        !hasCustomBg &&
          "bg-[radial-gradient(circle_at_30%_30%,#AC1B1B_0%,#731212_52%,#460B0B_95%)]",
        className
      )}
    >
      <span className="relative z-10">{text}</span>

      <ChevronRight size={15} />

      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-xl"></span>
    </motion.a>
  );
}