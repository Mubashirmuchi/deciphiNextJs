//  import React from "react";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import TextChip from "@/components/Common/storyChip";
// import { ServiceHero } from "@/types/service";


// const HeroSection = ({ hero }: ServiceHero) => {
//   return (
//     <section>
//       <div className="bg-(--color-neutral-1)">
//         <div className="flex  flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:pb-5 md:pt-40 pt-40">
//           {/* Top content */}
//           <Button
//             variant={"outline"}
//             className="border border-black/10 relative bg-white"
//           >
//             <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
//             {hero?.label || "CYBERSECURITY CONSULTING"}
//           </Button>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-snug md:leading-tight xl:leading-snug text-gray-900">
//             {hero?.title.titleLine1 || "Navigate regulatory complexity."} <br />
//             {hero?.title.titleLine2 || "Manage risk."}{" "}
//             <span className="bg-[#E85744] text-white p-2 rounded">
//               {hero?.title.titleLine3 || "Build trust."}
//             </span>
//           </h1>

//           <p className="text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
//             {hero?.description ||
//               "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals."}
//           </p>
//         </div>

//         {/* Full-width image section */}
//         <div className="relative w-full mt-24 ">
//           {/* Quote box */}
//           <div className="absolute top-2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-lg rounded-xl p-6 z-10 w-[86%]  md:max-w-2xl border border-gray-200 py-10">
//             <svg
//               className="absolute top-[-9vw] left-[4vw] sm:top-[-2.4vw] sm:left-[2vw] md:top-[-3.4vw] md:left-[2vw] lg:top-[-2vw] lg:left-[2vw] w-[20vw] h-[18vw] sm:w-[15vw] sm:h-[13vw] max-w-[40px] max-h-[72px]"
//               viewBox="0 0 86 72"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <path
//                 d="M0 37.4991L16.7947 -0.000976562H35.1161L19.0848 37.4991H35.1161V71.999H0V37.4991Z"
//                 fill="#416CEE"
//               />
//               <path
//                 d="M50.3838 37.499L67.1785 -0.00109863H85.4999L69.4686 37.499H85.4999V71.9989H50.3838V37.499Z"
//                 fill="#416CEE"
//               />
//             </svg>

//             <p className="text-gray-700 text-lg ">
//               {hero?.BulletPointsInsideImage ||
//                 "In a connected world, trust is your most valuable currency — and security is how you protect it."}
//             </p>
//           </div>

//           <div className="relative w-full mt-6 h-100px md:h-h-150 px-4 sm:px-6 lg:px-14  max-w-7xl mx-auto ">
//             <Image
//               src={hero?.cardImage?.url}
//               alt={hero?.cardImage?.alternativeText || "hero"}
//               width={1920}
//               height={600}
//               className="rounded-xl object-cover w-full h-full"
//               priority
//             />
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
//           <div className="flex-1 space-y-6 relative min-h-50">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-rethink font-bold leading-tight text-gray-900">
//               {hero?.title2 || "Smarter. Safer. Deciphi."}
//             </h1>
//             <TextChip
//               badge={
//                 hero?.BulletPoints2?.[0]?.point ||
//                 "Your Trusted Partner in Cybersecurity Excellence"
//               }
//               badgeClassName="bg-gray-100 absolute bottom-18 left-8"
//             />
//             <TextChip
//               badge={
//                 hero?.BulletPoints2?.[1]?.point ||
//                 "Guided by Best Practices, Powered by Innovation"
//               }
//               badgeClassName="bg-gray-100  absolute bottom-0 left-0"
//             />
//           </div>

//           <div className="flex-1 space-y-6 lg:pt-4">
//             <p className="text-lg sm:text-xl lg:text-xl font-arial leading-relaxed text-gray-600">
//               {hero?.bottomDescription.titleLine1 ||
//                 "We connect the dots — so you don&apos;t have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat."}
//             </p>
//             <p className="text-lg sm:text-xl lg:text-xl font-arial leading-relaxed text-gray-600">
//               {hero?.bottomDescription.titleLine2 ||
//                 "With Deciphi, you get more than just a service provider — you get a trusted partner committed to your success in an ever-evolving digital landscape."}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { motion } from "motion/react";
import {
  BookOpen,
  ClipboardCheck,
  Wrench,
  Target,
  RefreshCw,
  Mail,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Training Programmes",
    desc: "Tailored content to address your organization's specific risks and industry requirements.",
  },
  {
    icon: Target,
    title: "Adversary Insights",
    desc: "Training grounded in real-world threat scenarios, helping your team think like an attacker to strengthen defenses.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Support",
    desc: "Ensure your organization meets regulatory and compliance requirements through structured training modules.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Assessment",
    desc: "Regular testing and feedback to measure progress and reinforce a culture of continuous improvement.",
  },
  {
    icon: Wrench,
    title: "Hands-On Workshops",
    desc: "Interactive sessions to teach practical skills for recognizing and mitigating threats.",
  },
  {
    icon: Mail,
    title: "Phishing Simulations",
    desc: "Realistic simulations to help employees identify and respond to phishing attacks.",
  },
];

export default function ConsultingPage() {
  return (
    <main className="bg-white text-zinc-900 overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#ac1b1b]/8 blur-[140px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#ac1b1b] font-semibold mb-6">
            Cyber Security Consulting
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-6 text-zinc-900">
            Navigate regulatory complexity.{" "}
            <br className="hidden md:block" />
            Manage risk.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white px-3 py-1">
                Build trust.
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ac1b1b] to-[#721212] rounded-md" />
            </span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-xl mx-auto">
            Get strategic, expert-driven guidance to build and scale a resilient
            security program that fits your goals.
          </p>
        </motion.div>
      </section>

      {/* ── QUOTE BLOCK ── */}
      <section className="relative px-6 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#721212]/5 blur-[120px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-[#ac1b1b] via-[#8f1515] to-[#460a0a] p-12 md:p-16 overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full border border-white/10" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full border border-white/10" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              {/* Quote mark */}
              <div className="text-white/20 text-9xl font-serif leading-none mb-4 select-none">
        <blockquote/>
              </div>
              <p className="text-white text-2xl md:text-3xl font-medium leading-snug max-w-2xl">
                In a connected world, trust is your most valuable currency —
                and security is how you protect it.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-white/30" />
                <span className="text-white/50 text-sm tracking-wide">
                  Deciphi Security Philosophy
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SMARTER SAFER DECIPHI ── */}
      <section className="relative py-28 px-6 bg-zinc-50 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] bg-[#ac1b1b]/6 blur-[130px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-8">
              Smarter.
              <br />
              Safer.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac1b1b] to-[#721212]">
                Deciphi.
              </span>
            </h2>

            <div className="space-y-3">
              {[
                "Guided by Best Practices, Powered by Innovation",
                "Guided by Best Practices, Powered by Innovation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ac1b1b] shrink-0" />
                  <span className="text-sm text-zinc-500">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {[
              "We connect the dots — so you don't have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat.",
              "We combine deep technical expertise with strategic insight to deliver security programs that don't just protect — they enable. Our consultants work alongside your team to build lasting capabilities.",
            ].map((text, i) => (
              <p key={i} className="text-zinc-500 text-base leading-relaxed">
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#ac1b1b]/7 blur-[150px] rounded-full" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#721212]/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#ac1b1b] font-semibold mb-4">
              What We Provide
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.15] mb-5 max-w-2xl mx-auto">
              Navigate regulatory complexity. Manage risk.
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
              Get strategic, expert-driven guidance to build and scale a
              resilient security program that fits your goals.
            </p>
          </motion.div>

          {/* Bento grid with center visual */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px_1fr] gap-4">

            {/* Left column */}
            <div className="space-y-4">
              {features.slice(0, 3).map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-[#ac1b1b]/30 hover:shadow-lg hover:shadow-[#ac1b1b]/5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 group-hover:bg-[#ac1b1b]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#ac1b1b] transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2 text-sm">
                      {f.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Center — branded visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-b from-[#ac1b1b] via-[#8f1515] to-[#460a0a] overflow-hidden flex flex-col justify-between p-8"
            >
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-white/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-44 h-44 rounded-full border border-white/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full border border-white/10" />
              </div>

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10">
                <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                  Our Promise
                </p>
                <p className="text-white text-xl font-semibold leading-snug mb-8">
                  Security that adapts to your business — not the other way around.
                </p>
              </div>

              <div className="relative z-10 space-y-3">
                {["Proactive", "Tailored", "Resilient"].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 border border-white/10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    <span className="text-white/80 text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column */}
            <div className="space-y-4">
              {features.slice(3).map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-[#ac1b1b]/30 hover:shadow-lg hover:shadow-[#ac1b1b]/5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 group-hover:bg-[#ac1b1b]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#ac1b1b] transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 mb-2 text-sm">
                      {f.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}