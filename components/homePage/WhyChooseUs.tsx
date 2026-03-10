"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";

const textStyles = {
  display: "text-5xl md:text-6xl font-bold leading-tight tracking-tight",
  body: "text-lg md:text-xl leading-relaxed text-gray-600",
  overline: "text-sm font-semibold uppercase tracking-wide",
} as const;

const checkBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TrustedSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#FAFAFA]  py-20 lg:py-28 px-5 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

   {/* Left – Text content */}
        <div ref={contentRef} className="flex flex-col gap-7 lg:gap-9">

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className={`${textStyles.overline} text-emerald-700`}>WHY CHOOSE US</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className={`${textStyles.display} text-gray-900`}
          >
            Trusted
            <br />
            For a Reason
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`${textStyles.body} max-w-xl`}
          >
            At Deciphi, we offer more than just cybersecurity—we provide peace of mind. 
            Backed by real-world experience and deep technical expertise, we tailor 
            solutions that fit your unique needs. Whether you&apose;re scaling, ensuring 
            compliance, or managing daily threats, we focus on what matters most to 
            your business, keeping you ahead, not just secure.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-700 hover:bg-red-800 
                         text-white font-semibold text-base rounded-xl shadow-md 
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact us
            </motion.a>
          </motion.div>
        </div>

        {/* Right – Image + floating badges */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -40 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 aspect-4/5 lg:aspect-auto lg:h-145"
        >
          <Image
          width={1200} height={800}
            // src="https://images.unsplash.com/photo-1573164574000-9d9d0c2d242d?auto=format&fit=crop&w=1200&q=80"
src="https://img.freepik.com/free-photo/handshake_1098-17050.jpg?t=st=1773153924~exp=1773157524~hmac=8d04ceb82d082b2d13e680e517fe62e1924962b63257574947ddff5358cd6dc6&w=2000"
            alt="Professional working on laptop – representing trust and cybersecurity"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Subtle vignette / gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

          {/* Floating badges – positioned like in the screenshot */}
          <motion.div
            custom={0}
            variants={checkBadgeVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="absolute top-8 left-6 md:top-12 md:left-10 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg border border-gray-200/60 flex items-center gap-2.5 text-sm font-medium text-gray-800"
          >
            <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Ensure Data Privacy for Enhanced Trust
          </motion.div>

          <motion.div
            custom={1}
            variants={checkBadgeVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className="absolute top-28 left-10 md:top-40 md:left-16 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-lg border border-gray-200/60 flex items-center gap-2.5 text-sm font-medium text-gray-800"
          >
            <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Guided by Best Practices, Powered by Innovation
          </motion.div>

          {/* Small green dot badge in top-right corner (optional accent) */}
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40" />
        </motion.div>

     
      </div>
    </section>
  );
}