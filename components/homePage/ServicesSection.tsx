


"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import type { ServiceSection } from "@/types/home";
import { Card } from "@/types/home";

// ── Typography mirror (heading-sm, body-sm only needed in cards) ──────
const tx = {
  "heading-lg": "text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug",
  "heading-md": "text-lg sm:text-xl lg:text-2xl font-semibold leading-snug",
  "body": "text-base sm:text-lg font-normal leading-relaxed",
  "body-sm": "text-sm sm:text-base font-normal leading-relaxed",
} as const;

// ── Types ─────────────────────────────────────────────────────────────
export interface NormalisedCard {
  id: number;
  title: string;
  description: string;
  images: { url: string; alternativeText: string; width?: number | null; height?: number | null }[];
}

// ── Animation ─────────────────────────────────────────────────────────
const scaleIn: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Animated({ index, className, children }: {
  index: number; className?: string; children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} custom={index} variants={scaleIn}
      initial="hidden" animate={inView ? "visible" : "hidden"}
      className={className}>
      {children}
    </motion.div>
  );
}

// ── Per-card icon SVGs (exact from Grid.tsx) ───────────────────────────
function IconConsulting() {
  return (
    <div className="bg-[#D5C056] rounded-full p-2 shrink-0">
      <svg fill="white" height="32" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M29.9 17.5c-.2-.3-.5-.5-.9-.5-2.2 0-4.3 1-5.6 2.8l-.9 1.2c-1.1 1.3-2.8 2-4.5 2h-3c-.6 0-1-.4-1-1s.4-1 1-1h1.9c1.6 0 3.1-1.3 3.1-2.9V18c0-.5-.5-1-1-1h-6.1c-3.6 0-6.5 1.6-8.1 4.2l-2.7 4.2c-.2.3-.2.7 0 1l3 5c.1.2.4.4.6.5h.2c.2 0 .4-.1.6-.2 3.8-2.5 8.2-3.8 12.7-3.8 3.3 0 6.3-1.8 7.9-4.7l2.7-4.8c.2-.2.2-.6.1-.9" />
        <path d="M12.9 15H19c1.6 0 3 1.3 3 2.9v.4c1-1.2 2.2-2.1 3.7-2.7C27.3 12.7 28 9 28 4.3c0-.3-.2-.6-.4-.8-.3-.2-.6-.2-.9-.1-3.3 1.1-6.6.2-9-2.1-.4-.4-1-.4-1.4 0-2.4 2.3-5.7 3.2-9 2.1-.3-.1-.6-.1-.9.1-.2.2-.4.5-.4.8 0 4.7.8 8.5 2.5 11.5 1.3-.5 2.8-.8 4.4-.8" />
      </svg>
    </div>
  );
}

function IconAssessment() {
  return (
    <div className="bg-[#5BD661] rounded-full p-2 shrink-0">
      <svg height="32" fill="white" width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M10 14.36H4a.36.36 0 1 1 0-.72h6a.36.36 0 1 1 0 .72m0-3H4a.36.36 0 1 1 0-.72h6a.36.36 0 1 1 0 .72m0-3H4a.36.36 0 1 1 0-.72h6a.36.36 0 1 1 0 .72M29 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M15 23.36H1A.36.36 0 0 1 .64 23V1A.36.36 0 0 1 1 .64h30a.36.36 0 0 1 .36.36v22h-.72V4.36H1.36v18.28H15zM1.36 3.64h29.28V1.36H1.36zM23 31.36A6.37 6.37 0 0 1 16.64 25v-7.223l6.36-3.18 6.36 3.18V25A6.367 6.367 0 0 1 23 31.36m-5.64-13.137V25c0 3.11 2.529 5.64 5.64 5.64s5.64-2.529 5.64-5.64v-6.777L23 15.402z" />
        <path fill="none" d="M0 0h32v32H0z" />
      </svg>
    </div>
  );
}

function IconTraining() {
  return (
    <div className="bg-[#5559D5] rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0">
      <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512.001 512.001">
        <path d="M461.894 133.591a16.69 16.69 0 0 0 15.836-11.418L511.118 22.01c4.357-13.066-8.154-25.469-21.119-21.112L389.835 34.286a16.69 16.69 0 0 0-11.412 15.836v60.306l-23.614 25.896c-21.694-35.753-44.836-67.502-63.279-91.109-18.6-23.827-52.862-23.782-71.428 0-18.4 23.55-41.482 55.205-63.138 90.86l-23.386-25.646V50.12a16.695 16.695 0 0 0-11.412-15.836L22.002.897C9.022-3.457-3.473 8.95.884 22.009l33.388 100.164a16.69 16.69 0 0 0 15.836 11.418h59.406l30.015 32.915c-15.158 27.905-24.154 48.831-32.921 72.445-15.877 44.364-19.751 78.004-16.743 112.971 1.768 20.709 7.135 40.307 15.194 58.322l-67.287 73.801c-6.217 6.815-5.727 17.373 1.087 23.584 6.827 6.214 17.367 5.736 23.584-1.087l59.955-65.758c30.684 43.19 79.588 71.203 133.766 71.203 53.82 0 102.626-28.107 133.242-71.412l60.152 65.968c6.218 6.822 16.759 7.3 23.584 1.087 6.815-6.211 7.304-16.77 1.087-23.584l-67.534-74.066c7.989-17.947 13.321-37.458 15.082-58.074 3.322-39.289-2.665-73.574-16.749-112.924-8.711-23.557-17.794-44.577-32.79-72.219l30.248-33.172zm-50.083-71.439 57.07-19.026-19.02 57.076h-38.05zm-311.621 38.05H62.139L43.12 43.127l57.07 19.026zm205.708 77.906c9.219 0 16.694 7.474 16.694 16.694s-7.474 16.694-16.694 16.694c-9.221 0-16.694-7.474-16.694-16.694s7.473-16.694 16.694-16.694M246.404 65.766c5.251-6.704 13.573-6.704 18.824 0a965 965 0 0 1 24.258 32.498c-9.134 8.297-21.091 13.068-33.67 13.068-12.582 0-24.541-4.772-33.671-13.073 9.153-12.803 17.527-23.877 24.259-32.493m-40.67 112.342c9.22 0 16.694 7.474 16.694 16.694s-7.474 16.694-16.694 16.694c-9.221 0-16.694-7.474-16.694-16.694s7.473-16.694 16.694-16.694m50.082 267.103c-9.221 0-16.694-7.474-16.694-16.694s7.473-16.694 16.694-16.694 16.694 7.474 16.694 16.694-7.475 16.694-16.694 16.694M381.74 276.118c2.721 10.227 4.73 20.331 6.006 30.251l-53.349 53.35c-6.52 6.52-17.089 6.52-23.609 0l-43.168-43.168c-6.518-6.52-17.088-6.52-23.606 0l-43.168 43.168c-6.52 6.52-17.089 6.52-23.609 0l-53.352-53.352c1.275-9.921 3.285-20.025 6.007-30.252l47.347 47.347c6.518 6.518 17.088 6.518 23.606 0l43.168-43.168c6.52-6.52 17.089-6.52 23.609 0l43.168 43.168c6.521 6.521 17.085 6.522 23.606 0z" />
      </svg>
    </div>
  );
}

function IconIntegration() {
  return (
    <div className="bg-[#58C9D6] rounded-full p-2 shrink-0">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11zM13.995 11a2 2 0 1 0-2.745 1.856v2.394a.75.75 0 0 0 1.5 0v-2.398A2 2 0 0 0 13.995 11" fill="white" />
      </svg>
    </div>
  );
}

function IconOT() {
  return (
    <div className="bg-red-500 rounded-full p-2 shrink-0">
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.5V16H8.75A4.75 4.75 0 0 0 4 20.75v18.5A4.75 4.75 0 0 0 8.75 44h22.5q.285 0 .56-.033a17 17 0 0 1-1.288-1.048C28.37 40.982 26 37.796 26 33.25v-5.41a2.75 2.75 0 0 1 2.598-2.747h.011a11 11 0 0 0 .344-.028c.242-.021.579-.056.954-.11.828-.118 1.554-.287 1.933-.459.277-.125.785-.479 1.356-.953a18 18 0 0 0 .813-.72l.043-.04.007-.007A2.74 2.74 0 0 1 36 22v-1.25A4.75 4.75 0 0 0 31.25 16H28v-3.5a8 8 0 1 0-16 0M20 7a5.5 5.5 0 0 1 5.5 5.5V16h-11v-3.5A5.5 5.5 0 0 1 20 7m3 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="#FFFFFF" />
        <path d="M28 27.76v5.74c0 6.483 6.314 9.798 7.722 10.456a.64.64 0 0 0 .553 0C37.684 43.302 44 40.01 44 33.713V27.76a.78.78 0 0 0-.76-.771c-.962-.033-2.627-.154-3.741-.589-1.036-.404-2.233-1.47-2.925-2.145a.83.83 0 0 0-1.149 0c-.692.675-1.89 1.74-2.925 2.145-1.113.435-2.778.556-3.74.589a.78.78 0 0 0-.76.771" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

function IconCloud() {
  return (
    <div className="bg-[#57AFD5] rounded-full p-2 shrink-0">
      <svg fill="white" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.4 507.4">
        <path d="M290.5 282.774c9.3-9.5 14.6-22.3 14.6-35.8 0-28.4-23.1-51.4-51.4-51.4s-51.4 23-51.4 51.4c0 13.5 5.3 26.3 14.6 35.8l-11.8 53.3c-1.8 7.2 3.5 17.1 13.8 17.1h69.6c9.5 0 15.6-8.8 13.8-17.1zm-29.4-2.2 9.8 44.4h-34.5l9.8-44.4c1.2-5.6-1-11.4-5.7-14.6-6.3-4.3-10-11.5-10-19.1 0-12.8 10.4-23.2 23.2-23.2s23.2 10.4 23.2 23.2c0 7.6-3.8 14.7-10.1 19.1-4.7 3.3-7 9-5.7 14.6" />
        <path d="M456.5 292.074c13.2-41.4-14.3-78.7-50.2-86-8.6-78.2-71.9-138.9-151.8-143.3-85.2-4.7-159.2 58.1-169.5 141.7-50.5 16.4-85 63.2-85 117.1 0 68 55.3 123.3 123.3 123.3h305.1c43.5 0 79-35.4 79-79 0-33.4-20.9-62.4-50.9-73.8m-28.1 124.6H123.3c-52.4 0-95.1-42.7-95.1-95.1 0-44.2 30.1-82.2 73.2-92.4 6.1-1.4 10.5-6.7 10.8-12.9 5.2-77.2 72.2-129.1 140.7-125.3 69.4 3.8 123.6 59.1 126.1 128.4.3 7.6 6.5 13.6 14.1 13.6h.1c31.5 1.3 48.8 33.6 31.5 60.5-5.5 7.9-1.9 19.9 9.9 22.1 25.5 3.1 44.6 24.7 44.6 50.4 0 27.9-22.8 50.7-50.8 50.7" />
      </svg>
    </div>
  );
}

// ── Shared card header (title + icon + border-bottom) ─────────────────
function CardHeader({ title, icon, size = "lg" }: {
  title: string; icon: React.ReactNode; size?: "lg" | "md"
}) {
  const words = title.split(" ");
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

  return (
    <div className="flex justify-between items-start pb-6 border-b-2 border-gray-100">
      <h3 className={`${size === "lg" ? tx["heading-lg"] : tx["heading-md"]} text-gray-900 flex-1 pr-4`}>
        {line1}<br />{line2}
      </h3>
      {icon}
    </div>
  );
}

// ── Img helper — shows placeholder if src is empty ────────────────────
function CardImg({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  if (!src) return null;
  return (
    <Image
      width={800} height={450}
      src={src} alt={alt}
      className={`w-full rounded ${className ?? ""}`}
      loading="lazy" decoding="async"
      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
    />
  );
}



// 

// ── Typography class map — mirrors Typography.astro exactly ───────────
const typography: Record<string, string> = {
  "display": "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight",
  "heading-xl": "text-4xl md:text-5xl font-bold leading-tight tracking-tight",
  "heading-lg": "text-3xl md:text-4xl font-semibold leading-snug tracking-tight",
  "heading-md": "text-2xl md:text-3xl font-semibold leading-snug",
  "heading-sm": "text-xl md:text-2xl font-semibold leading-snug",
  "body-lg": "text-lg md:text-xl font-normal leading-relaxed",
  "body": "text-base font-normal leading-relaxed",
  "body-sm": "text-sm font-normal leading-relaxed",
  "caption": "text-xs font-normal leading-normal",
  "overline": "text-xs font-semibold uppercase tracking-widest",
};

function t(variant: keyof typeof typography, extra = "") {
  return [typography[variant], extra].filter(Boolean).join(" ");
}


// ── Animation variants ────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};





function ServicesCardsClient({ cards }: { cards: Card[] }) {
  const s = cards; // shorthand

  return (
    <div className="relative space-y-4 sm:space-y-6">

      {/* ── Row 1: Consulting (2/5) + Assessment (3/5) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">

        {/* Card 0 — Cybersecurity Consulting */}
        <Animated index={0} className="lg:col-span-2 bg-white border-2 border-gray-100 rounded-lg p-6 sm:p-8">
          <div className="space-y-6 sm:space-y-8 h-full flex flex-col">
            <div className="space-y-4">
              <CardHeader title={s[0]?.title ?? ""} icon={<IconConsulting />} size="lg" />
              <p className={`${tx["body"]} text-gray-500`}>{s[0]?.description}</p>
            </div>
            <div className="mt-auto">
              <CardImg
                src={s[0]?.images[0]?.url}
                alt={s[0]?.images[0]?.alternativeText || "Consulting Service"}
                className="h-36 object-cover"
              />
            </div>
          </div>
        </Animated>

        {/* Card 1 — Security Assessment & Testing */}
        <Animated index={1} className="lg:col-span-3 bg-white border-2 border-gray-100 rounded-lg p-6 sm:p-8">
          <div className="space-y-6 sm:space-y-8 h-full flex flex-col">
            <div className="space-y-4">
              <CardHeader title={s[1]?.title ?? ""} icon={<IconAssessment />} size="lg" />
              <p className={`${tx["body"]} text-gray-500`}>{s[1]?.description}</p>
            </div>
            {/* Two images side by side */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <div className="flex-1 overflow-hidden rounded">
                <CardImg
                  src={s[1]?.images[0]?.url}
                  alt={s[1]?.images[0]?.alternativeText || "Assessment"}
                  className="h-48 object-cover"
                />
              </div>
              {s[1]?.images[1]?.url && (
                <div className="w-full sm:w-40 overflow-hidden rounded">
                  <CardImg
                    src={s[1].images[1].url}
                    alt={s[1].images[1].alternativeText || "Assessment 2"}
                    className="h-48 object-cover object-bottom-right"
                  />
                </div>
              )}
            </div>
          </div>
        </Animated>
      </div>

      {/* ── Row 2: Cybersecurity Awareness Training (full width) ── */}
      <Animated index={2} className="bg-white border-2 border-gray-100 rounded-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-end">
          <div className="space-y-6">
            <div className="space-y-4">
              <IconTraining />
              <h3 className={`${tx["heading-lg"]} text-gray-900`}>
                {s[2]?.title.split(" ")[0]}<br />
                {s[2]?.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>
            <p className={`${tx["body"]} text-gray-500`}>{s[2]?.description}</p>
          </div>
          <div className="w-full">
            <CardImg
              src={s[2]?.images[0]?.url}
              alt={s[2]?.images[0]?.alternativeText || "Training Service"}
              className="object-contain"
            />
          </div>
        </div>
      </Animated>

      {/* ── Row 3: System Integration + OT + Cloud ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Card 3 — System Integration */}
        <Animated index={3} className="bg-white border-2 border-gray-100 rounded-lg p-6">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <CardHeader title={s[3]?.title ?? ""} icon={<IconIntegration />} size="md" />
              <p className={`${tx["body-sm"]} text-gray-500`}>{s[3]?.description}</p>
            </div>
            <div className="mt-auto">
              {/* Red gradient bg matches the screenshot */}
              <div className="bg-linear-to-b from-red-600 to-red-800 rounded p-4">
                <CardImg
                  src={s[3]?.images[0]?.url}
                  alt={s[3]?.images[0]?.alternativeText || "Integration Service"}
                />
              </div>
            </div>
          </div>
        </Animated>

        {/* Card 4 — OT Cybersecurity */}
        <Animated index={4} className="bg-white border-2 border-gray-100 rounded-lg p-6">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <CardHeader title={s[4]?.title ?? ""} icon={<IconOT />} size="md" />
              <p className={`${tx["body-sm"]} text-gray-500`}>{s[4]?.description}</p>
            </div>
            <div className="mt-auto">
              <CardImg
                src={s[4]?.images[0]?.url}
                alt={s[4]?.images[0]?.alternativeText || "OT Service"}
                className="object-cover"
              />
            </div>
          </div>
        </Animated>

        {/* Card 5 — Cloud Security */}
        <Animated index={5} className="bg-white border-2 border-gray-100 rounded-lg p-6 md:col-span-2 lg:col-span-1">
          <div className="space-y-6 h-full flex flex-col">
            <div className="space-y-4">
              <CardHeader title={s[5]?.title ?? ""} icon={<IconCloud />} size="md" />
              <p className={`${tx["body-sm"]} text-gray-500`}>{s[5]?.description}</p>
            </div>
            <div className="mt-auto">
              <CardImg
                src={s[5]?.images[0]?.url}
                alt={s[5]?.images[0]?.alternativeText || "Cloud Security Service"}
                className="rounded object-cover"
              />
            </div>
          </div>
        </Animated>
      </div>

    </div>
  );
}



// ── Main export ───────────────────────────────────────────────────────
export default function ServicesSectionClient({ ServiceSection }: { ServiceSection: ServiceSection }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerView = useInView(headerRef, { once: true, margin: "-60px" });

  const cards = ServiceSection?.card ?? [];

  return (
    <section
      className="relative bg-gray-50 py-24 px-4 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: "radial-gradient(circle,#1a1a2e 1px,transparent 1px)", backgroundSize: "28px 28px" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <header ref={headerRef} className="text-center mb-14">

          {/* Overline label pill */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden"
            animate={headerView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 border border-gray-200
                       bg-white rounded-sm px-4 py-1.5 mb-6 "


          >

            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className={`${t("overline")} text-gray-500`}>{ServiceSection.label}</span>


          </motion.div>

          {/* <motion.div
                      custom={0} variants={fadeUp} initial="hidden"
                      animate={rightIn ? "visible" : "hidden"}
                      className="inline-flex items-center gap-2 border border-gray-200
                                 rounded-sm px-4 py-1.5 w-fit"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className={`${tx["overline"]} text-gray-500`}>About Us</span>
                    </motion.div> */}

          {/*    
          <motion.h2
            id="services-heading"
            custom={1} variants={fadeUp} initial="hidden"
            animate={headerView ? "visible" : "hidden"}
            className={t("heading-xl", "text-gray-900")}
          >
            
            <span className="inline-block mr-3 px-3 py-1 rounded-md text-white"
                  style={{ background: "#8B1A1A" }}>
              {ServiceSection.title.titleLine1}
            </span>
            {ServiceSection.title.titleLine2}
          </motion.h2> */}



          <motion.div
            custom={1} variants={fadeUp} initial="hidden"
            animate={headerView ? "visible" : "hidden"}

          >
            <h2 id="about-heading" className={`${t("display")} text-gray-900  inline-block mt-2 px-4 py-1.5 rounded-sm 
                                   text-5xl md:text-6xl font-bold leading-tight`}>
              <span className="bg-[#E85744] text-white inline-block mt-2 px-4 py-1.5 rounded-sm 
                                   text-5xl md:text-6xl font-bold leading-tight mr-1">{ServiceSection.title.titleLine1}</span>
              {ServiceSection.title.titleLine2} </h2>




          </motion.div>


          {/* Body description — body */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden"
            animate={headerView ? "visible" : "hidden"}
            className={t("body", "mt-5 text-gray-500 max-w-2xl mx-auto")}
          >
            {ServiceSection.description}
          </motion.p>
        </header>
        {ServicesCardsClient({ cards })}
        {/* ── Bento grid ── */}

      </div>
    </section>
  );
}