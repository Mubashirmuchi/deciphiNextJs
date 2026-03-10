"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { AboutUs } from "@/types/home";
import CTAButton from "../CTA";

const tx = {
  "display":  "text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight",
  "body-lg":  "text-lg md:text-xl font-normal leading-relaxed",
  "body-sm":  "text-sm font-normal leading-relaxed",
  "overline": "text-xs font-semibold uppercase tracking-widest",
} as const;

const stats = [
  { value: "500+",  label: "Clients Protected"    },
  // { value: "99.9%", label: "Threat Detection Rate" },
  { value: "24/7",  label: "Active Monitoring"     },
  // { value: "15+",   label: "Years Experience"      },
];

const features = [
  {
    label: "Expert Solutions",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    label: "Advanced Defense",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    label: "Strategic Consulting",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
  {
    label: "Seamless Integration",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
];

const fadeUp:Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutSection({ about }: { about: AboutUs }) {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftIn   = useInView(leftRef,  { once: true, margin: "-80px" });
  const rightIn  = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-white py-20 lg:py-28 px-5 md:px-8 lg:px-12" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ">

        {/* ── LEFT: image card (matches screenshot shape exactly) ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -28 }}
          animate={leftIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-xl overflow-hidden h-130 shadow-2xl shadow-black/15"
        >
          {/* Photo */}
          <Image
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
            alt="Deciphi cybersecurity professionals"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={800}
            height={520}
          />

          {/* Subtle dark gradient — bottom-heavy so stats stay readable */}
          <div className="absolute inset-0bg-linear-to-t from-black/75 via-black/25 to-transparent" />

          {/* ── Stats grid — bottom of card ── */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
            <div className="border-t border-white/20 mb-5" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={leftIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.09, ease: "easeOut" }}
                >
                  <p className="text-2xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-xs text-white/55 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Active Threat Protection badge — bottom-right float ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={leftIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 right-6 flex items-center gap-2
                       bg-white rounded-full px-4 py-2 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
              Active Threat Protection
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: text content (unchanged from screenshot) ── */}
        <div ref={rightRef} className="flex flex-col gap-6">

          {/* Overline pill */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden"
            animate={rightIn ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 border border-gray-200
                       rounded-sm px-4 py-1.5 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className={`${tx["overline"]} text-gray-500`}>About Us</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden"
            animate={rightIn ? "visible" : "hidden"}
          >
            <h2 id="about-heading" className={`${tx["display"]} text-gray-900`}>
              Smarter. Safer.
            </h2>
            <span
              className="inline-block mt-2 px-4 py-1.5 rounded-sm text-white
                         text-5xl md:text-6xl font-bold leading-tight"
              style={{ background: "#E85744" }}
            >
              Deciphi.
            </span>
          </motion.div>

          {/* Body */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden"
            animate={rightIn ? "visible" : "hidden"}
            className={`${tx["body-lg"]} text-gray-500 max-w-lg`}
          >
            We connect the dots, so you do not have to. At Deciphi, we simplify
            cybersecurity by transforming complex challenges into clear, effective
            strategies—protecting your operations today while preparing you for
            tomorrow&apos;s threats.
          </motion.p>

          {/* Feature grid */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden"
            animate={rightIn ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-x-8 gap-y-4 pt-1"
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 border border-gray-200 rounded-md px-4 py-2">
                <span className="text-gray-400">{f.icon}</span>
                <span className={`${tx["body-sm"]} text-gray-700 font-medium`}>{f.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden"
            animate={rightIn ? "visible" : "hidden"}
          >
            {/* <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white
                         text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md"
              whileHover={{ backgroundColor: "#9e1f1f", y: -1, boxShadow: "0 10px 28px rgba(139,26,26,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a> */}
            <CTAButton className="inline-flex items-center gap-2  text-white
                         text-sm font-semibold px-7 py-3.5 rounded-xl shadow-md" href="/contact" text="Contact Us" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}