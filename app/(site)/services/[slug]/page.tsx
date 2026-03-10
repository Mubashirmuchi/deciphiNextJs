"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import ManifestoSection from "@/components/Common/SeriveDetailedPage/manifesr";
import WhatWeProvideSection from "@/components/Common/SeriveDetailedPage/GridSection";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface ServiceHeroProps {
  label?: string;   // overline — "CYBER SECURITY CONSULTING"
  headingLine1?: string;  // "Navigate regulatory complexity."
  headingLine2?: string;  // "Manage risk."
  headingHighlight?: string; // "Build trust."
  description?: string;
  quote?: string;
  image?: string;
  imageAlt?: string;
}

export default function ServiceHero({
  label = "Cyber Security Consulting",
  headingLine1 = "Navigate regulatory complexity.",
  headingLine2 = "Manage risk.",
  headingHighlight = "Build trust.",
  description = "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals.",
  quote = "In a connected world, trust is your most valuable currency — and security is how you protect it.",
  image = "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=85",
  imageAlt = "Offshore industrial vessel at dusk",
}: ServiceHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingIn = useInView(headingRef, { once: true, margin: "-60px" });

  // Parallax on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <>  <section
      ref={sectionRef}
      className="bg-[#F7F6F2] pt-26 pb-0 px-4 md:px-8 overflow-hidden"
      aria-labelledby="service-hero-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* ── Overline pill ── */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 border border-gray-200 bg-white
                     rounded-full px-4 py-1.5 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            {label}
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <div ref={headingRef}>
          <motion.h1
            id="service-hero-heading"
            custom={1} variants={fadeUp} initial="hidden"
            animate={headingIn ? "visible" : "hidden"}
            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.12]
                       tracking-tight text-gray-900 mb-4"
          >
            {headingLine1}
            <br />
            <span className="inline">{headingLine2} </span>
            {/* Red highlight chip — inline with last line */}
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-lg text-white
                         text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-none
                         align-middle"
              style={{ background: "#C0392B" }}
            >
              {headingHighlight}
            </span>
          </motion.h1>
        </div>

        {/* ── Description ── */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden"
          animate={headingIn ? "visible" : "hidden"}
          className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* ── Image + Quote card ── */}
      <motion.div
        custom={3} variants={fadeUp} initial="hidden"
        animate={headingIn ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto mt-16"
      >
        {/* Quote card — overlaps image top */}
        <div className="relative z-10 mx-6 -mb-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-black/8 px-8 pt-6 pb-8 border border-gray-100">
            {/* Big blue quotation mark */}
            <svg
              className="mb-3"
              width="44" height="36" viewBox="0 0 44 36" fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 36V22.08C0 15.36 1.92 9.84 5.76 5.52 9.6 1.2 15.12 0 22.32 0v7.2c-4.08.48-7.08 1.68-9 3.6-1.92 1.92-2.88 4.56-2.88 7.92H18V36H0zm26 0V22.08c0-6.72 1.92-12.24 5.76-16.56C35.6 1.2 41.12 0 48.32 0v7.2c-4.08.48-7.08 1.68-9 3.6-1.92 1.92-2.88 4.56-2.88 7.92H44V36H26z"
                fill="#3B5BDB"
              />
            </svg>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium max-w-lg">
              {quote}
            </p>
          </div>
        </div>

        {/* Image with blue border/glow */}
        <div
          className="relative rounded-3xl overflow-hidden"

        >
          <div className="overflow-hidden rounded-3xl h-[420px] md:h-[540px]">
            <motion.img
              src={image}
              alt={imageAlt}
              style={{ y: imgY }}
              className="w-full h-[115%] object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Subtle top gradient so image doesn't feel cut-off */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none rounded-3xl" />
        </div>
      </motion.div>
    </section>
      <ManifestoSection />
      <WhatWeProvideSection />
    </>
  );
}