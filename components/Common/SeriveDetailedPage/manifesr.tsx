"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp : Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const checkItems = [
  "Guided by Best Practices, Powered by Innovation",
  "Guided by Best Practices, Powered by Innovation",
];

const paragraphs = [
  "We connect the dots — so you don't have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat.",
  "We connect the dots — so you don't have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat.",
];

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#F5F4F0] py-24 px-6 md:px-12 overflow-hidden relative"
    >
      {/* Blue corner accents — top-left & bottom-right, matching screenshot */}
      <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-500 rounded-tl-md" aria-hidden="true" />
      <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-blue-500 rounded-br-md" aria-hidden="true" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── LEFT: giant stacked heading + checklist ── */}
        <div>
          {/* Display heading — three lines, each on its own */}
          <motion.h2
            custom={0} variants={fadeUp} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold
                       leading-[1.05] tracking-tight text-gray-900 mb-10"
          >
            Smarter.<br />
            Safer.<br />
            Deciphi.
          </motion.h2>

          {/* Checklist */}
          <ul className="flex flex-col gap-3">
            {checkItems.map((item, i) => (
              <motion.li
                key={i}
                custom={1 + i * 0.5} variants={fadeUp} initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex items-center gap-3"
              >
                {/* Blue filled checkmark circle */}
                <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm text-gray-600 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: two paragraphs stacked ── */}
        <div className="flex flex-col gap-10 pt-2 lg:pt-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={2 + i} variants={fadeUp} initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-base md:text-lg text-gray-600 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>

      </div>
    </section>
  );
}