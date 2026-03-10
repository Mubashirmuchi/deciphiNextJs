"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Icons ─────────────────────────────────────────────────────────────
const icons = {
  training: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  compliance: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  workshop: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  adversary: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  assessment: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  phishing: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

const leftCards = [
  {
    id: "training",
    icon: icons.training,
    title: "Training Programmes",
    desc: "Tailored content to address your organization's specific risks and industry requirements.",
  },
  {
    id: "compliance",
    icon: icons.compliance,
    title: "Compliance Support",
    desc: "Ensure your organization meets regulatory and compliance requirements through structured training modules.",
  },
  {
    id: "workshop",
    icon: icons.workshop,
    title: "Hands-On Workshops",
    desc: "Interactive sessions to teach practical skills for recognizing and mitigating threats.",
  },
];

const rightCards = [
  {
    id: "adversary",
    icon: icons.adversary,
    title: "Adversary Insights",
    desc: "Training grounded in real-world threat scenarios, helping your team think like an attacker to strengthen defenses.",
  },
  {
    id: "assessment",
    icon: icons.assessment,
    title: "Ongoing Assessment",
    desc: "Regular testing and feedback to measure progress and reinforce a culture of continuous improvement.",
  },
  {
    id: "phishing",
    icon: icons.phishing,
    title: "Phishing Simulations",
    desc: "Realistic simulations to help employees identify and respond to phishing attacks.",
  },
];

// ── Feature card ──────────────────────────────────────────────────────
function FeatureCard({
  icon, title, desc, custom,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  custom: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={custom}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-gray-50 rounded-2xl p-5"
    >
      {/* Icon badge */}
      <span className="inline-flex w-10 h-10 rounded-xl bg-red-50 items-center justify-center text-[#C0392B] mb-4">
        {icon}
      </span>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────
interface WhatWeProvideSectionProps {
  label?:       string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  image?:       string;
  imageAlt?:    string;
}

export default function WhatWeProvideSection({
  label        = "What We Provide",
  headingLine1 = "Navigate regulatory",
  headingLine2 = "complexity. Manage risk.",
  description  = "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals.",
  image        = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  imageAlt     = "Modern architectural building with pipes",
}: WhatWeProvideSectionProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerIn  = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-20 px-4 md:px-8" aria-labelledby="wwp-heading">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            custom={0} variants={fadeUp} initial="hidden"
            animate={headerIn ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 border border-gray-200 bg-white
                       rounded-sm px-4 py-1.5 mb-6 "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{label}</span>
          </motion.div>

          <motion.h2
            id="wwp-heading"
            custom={1} variants={fadeUp} initial="hidden"
            animate={headerIn ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-4 max-w-2xl mx-auto"
          >
            {headingLine1}<br />{headingLine2}
          </motion.h2>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden"
            animate={headerIn ? "visible" : "hidden"}
            className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* ── 3-column grid: cards | image | cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-start">

          {/* Left cards */}
          <div className="flex flex-col gap-4">
            {leftCards.map((c, i) => (
              <FeatureCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} custom={i} />
            ))}
          </div>

          {/* Centre image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-70 xl:w-[320px] rounded-2xl overflow-hidden self-stretch"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={320}
              height={560}
              className="w-full h-full object-cover min-h-140"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Right cards */}
          <div className="flex flex-col gap-4">
            {rightCards.map((c, i) => (
              <FeatureCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} custom={i + 0.5} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}