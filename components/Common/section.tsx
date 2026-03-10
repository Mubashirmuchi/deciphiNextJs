"use client";

import { motion } from "framer-motion";

export default function Section({ 
  children, 
  bg,
  id 
}: {
  children: React.ReactNode;
  bg?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 ${bg || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}