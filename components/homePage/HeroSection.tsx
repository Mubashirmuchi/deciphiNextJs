"use client"
import { motion, Variants } from "motion/react";
import BackgroundVideo from "../BackgroundVideo";
import Image from "next/image";
import type { HeroSection } from "@/types/home";
import CTAButton from "../CTA";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};



export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32 ,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease:  [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};


const HeroSection = ({ hero }: HeroSection) => {
  const videoUrl = hero?.backgroundVideo?.url;
  const imgUrl = hero?.backgroundImage?.url;


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full"
    >
      {/* Background Video with Fallback */}

      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src={imgUrl || ""}
          alt={imgUrl}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video for desktop */}
      <div className="hidden lg:block">
        {/* <BackgroundVideo src={videoUrl || ""} /> */}
        <BackgroundVideo
  src={videoUrl || ""}
  overlay={true}
  crossfadeDuration={1.8}  // seconds — tune to your video
/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70 lg:bg-black/5" />
      {/* Content Overlay */}
     <div className="relative z-10 flex flex-col min-h-screen">

   
      {/* ── Hero copy ── */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center
                   px-6 md:px-12 pb-20 pt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]
                     tracking-tight text-white max-w-3xl mx-auto"
        >
          Securing Your&nbsp;Network,<br />
          With Cybersecurity<br />
          Expertise.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mt-7 leading-relaxed"
        >
          At Deciphi, we help organizations stay ahead of evolving cyber risks. Our
          expert-led services empower you to act with confidence and secure your future.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10">
          <CTAButton  href='/contact' text="Get Started" />
        </motion.div>
      </motion.div>

    </div>
    </section>
  );
};

export default HeroSection;
