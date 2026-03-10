
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import type { SolutionsSection } from "@/types/home";
import {SolutionItem, solutionsData} from "@/data/loaders/solutionsata"

// ── Typography mirror ─────────────────────────────────────────────────
const tx = {
  "heading-xl": "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
  "heading-sm": "text-base md:text-lg font-semibold leading-snug",
  "body":       "text-base font-normal leading-relaxed",
  "body-sm":    "text-sm font-normal leading-relaxed",
  "overline":   "text-xs font-semibold uppercase tracking-widest",
} as const;

// ── Per-solution icons (SVG, matches screenshot style) ────────────────
const icons: Record<string, React.ReactNode> = {
  iam: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h4m-4 4h8m-8 4h6"/><circle cx="17" cy="8" r="1.5"/>
    </svg>
  ),
  network: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  endpoint: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  data: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  cloud: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  appsec: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

// ── Framer variants ───────────────────────────────────────────────────
const imgVariants: Variants = {
  hidden:  { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.98, transition: { duration: 0.22, ease: "easeIn" } },
};

const tagVariants: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

const bodyVariants: Variants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.18, ease: "easeIn" } },
};

// ── Accordion row ─────────────────────────────────────────────────────
function AccordionRow({
  item,
  isOpen,
  onActivate,
}: {
  item: SolutionItem;
  isOpen: boolean;
  onActivate: () => void;
}) {
  const icon = icons[item.id];

  return (
    <div
      className={`border-b border-gray-100 last:border-0 cursor-pointer
                  transition-colors duration-150
                  ${isOpen ? "bg-gray-50" : "hover:bg-gray-50/60"}`}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      {/* Row header */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="flex items-center gap-3">
          {/* Icon badge */}
          <span
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200
              ${isOpen ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-500"}`}
          >
            {icon}
          </span>

          {/* Title — heading-sm */}
          <span className={`${tx["heading-sm"]} transition-colors duration-200
            ${isOpen ? "text-gray-900" : "text-gray-600"}`}>
            {item.title}
          </span>
        </span>

        {/* +/× */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-xl font-light shrink-0 ml-4 leading-none
            ${isOpen ? "text-gray-800" : "text-gray-400"}`}
        >
          +
        </motion.span>
      </div>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={bodyVariants}
            initial="hidden" animate="visible" exit="exit"
            className="overflow-hidden"
          >
            <p className={`${tx["body-sm"]} text-gray-500 px-5 pb-5 pt-0.5 max-w-md`}>
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────
// export default function SolutionsSection(   solutionsSection: SolutionsSection) {


export default function SolutionsSection({
  solutionsSection,
}: {
  solutionsSection: SolutionsSection;
}) {

   const data = solutionsData

  const [activeId, setActiveId] = useState<string>(data.items[0]?.id ?? "");
  const active = data.items.find((s) => s.id === activeId) ?? data.items[0];

console.log("solutionsSection",solutionsSection?.title)
  return (
    <section className="bg-white py-20 px-4 md:px-8" aria-labelledby="solutions-heading">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <header className="mb-14">

          {/* Overline pill */}
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-white
                          rounded-sm px-4 py-1.5 mb-5 ">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className={`${tx["overline"]} text-gray-500`}>{solutionsSection.label??'SOLUTIONS'}</span>
          </div>

          {/* H2 — heading-xl */}
          <h2 id="solutions-heading" className={`${tx["heading-xl"]} text-gray-900 mb-4`}>
            {/* Red highlighted word, matching screenshot */}
            <span className="inline-flex items-center justify-center
                             px-4 py-1 rounded-md bg-[#C0392B] text-white mr-3">
              {solutionsSection?.title?.titleLine1}
            </span>
            {solutionsSection?.title?.titleLine2}
          </h2>

          {/* Description — body */}
          <p className={`${tx["body"]} text-gray-500 max-w-lg`}>
            {solutionsSection?.description}
          </p>
        </header>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">

          {/* ── Left: sticky image with floating tags ── */}
          <div className="relative rounded-2xl overflow-hidden h-120 lg:sticky lg:top-28">

            {/* Crossfading image */}
            <AnimatePresence mode="sync">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.imageAlt}
                variants={imgVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 w-full h-full object-cove bg-black"
              />
            </AnimatePresence>

            {/* Soft gradient so tags are readable */}
            <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

            {/* Floating tag pills — stagger in per-solution */}
            <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-2 px-5">
              <AnimatePresence mode="sync">
                {active.tags.map((tag, i) => (
                  <motion.div
                    key={`${active.id}-${tag.label}`}
                    custom={i}
                    variants={tagVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm
                               rounded-full px-4 py-2 shadow-md"
                  >
                    {/* Blue checkmark circle */}
                    <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                      {tag.label}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {data.items.map((item) => (
              <AccordionRow
                key={item.id}
                item={item}
                isOpen={activeId === item.id}
                onActivate={() => setActiveId(item.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


