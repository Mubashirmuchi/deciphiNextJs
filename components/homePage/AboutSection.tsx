// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import { Check, Clock, Lock, Presentation, ShieldCheck } from "lucide-react";
// import Link from "next/link";
// import type { AboutUs } from "@/types/home";

// const AboutSection = ({ about }: { about: AboutUs }) => {
//   return (
//     <section id="about-us" className="w-full  py-12 sm:py-16 lg:py-24">
//       <div
      
      
//       className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
//           {/* Left Column - Image and Features */}
//           <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-4 relative">
//             <Image
//               src={about.cardImage?.url || ""}
//               alt={about.cardImage?.alternativeText || "About Us Image"}
//               width={382}
//               height={494}
//               className="w-full rounded-2xl shadow-lg h-144.5 object-cover"
//             />
//             <div className="space-y-3 lg:ml-8 xl:ml-16">
//               <div className="absolute top-3 left-0 md:left-3 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
//                 <span className="bg-(--color-blue) rounded-full shrink-0">
//                   <Check color="white" fill="#0088FF" />
//                 </span>
//                 <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1 w-full">
//                   {about.BulletPointsInsideImage[0]?.point ||
//                     "Simplify Compliance jhjhhj Automated Reporting Tools"}
//                 </span>
//               </div>
//               <div className="absolute top-16 right-0 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
//                 <span className="bg-(--color-blue) rounded-full shrink-0">
//                   <Check color="white" fill="#0088FF" />
//                 </span>
//                 <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1 w-full">
//                   {about.BulletPointsInsideImage[1]?.point ||
//                     "Get Expert Support When You Need It, On-Demand"}
//                 </span>
//               </div>
//               <div className="absolute top-29.25 left-0 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
//                 <span className="bg-(--color-blue) rounded-full shrink-0">
//                   <Check color="white" fill="#0088FF" />
//                 </span>
//                 <span className="text-xs sm:text-sm  font-space font-normal leading-4 text-text-dark1 w-full">
//                   {about.BulletPointsInsideImage[2]?.point ||
//                     "Stay Protected 24/7 with Real-Time Threat Monitoring"}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="order-1 lg:order-2 space-y-8">
//             <div className="space-y-6">
              // <Button variant={"outline"} className="border border-black/10">
              //   <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
              //   {about.label || "About Us"}
              // </Button>

//               <div className="space-y-4">
//                 <div className="relative">
//                   <div className="absolute -bottom-2 left-0 w-48 sm:w-56 md:w-64 h-16 sm:h-18 md:h-20 bg-accent-orange1 rounded opacity-80 -z-10" />
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
//                     <span className="text-text-secondary1">
//                       {about.title.titleLine1 || "Smarter. Safer."}
//                     </span>
//                     <br />
//                   </h2>
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit p-2">
//                     {about.title.titleLine2 || "Deciphi."}
//                   </h2>
//                 </div>

//                 <p className="text-base sm:text-lg font-arial leading-relaxed text-text-secondary1">
//                   {about.description}{" "}
//                 </p>
//               </div>
//             </div>
//             <Link href="/contact">
//               <Button
//                 size="sm"
//                 className="cursor-pointer bg-(--color-primary) text-white hover:bg-[#71120f] transition-all duration-300"
//               >
//                 {about.Cta?.text || "Contact Us"}
//               </Button>
//             </Link>
//           </div>
//         </div>

//         <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-y border-black/5">
//           {/* Item 1 */}
//           <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
//             <ShieldCheck color="#595856" />

//             <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
//               {about.BulletPoints2[0]?.point}
//             </span>
//           </div>

//           {/* Item 2 */}
//           <div className="flex items-center p-4 sm:p-6">
//             <Lock color="#595856" />

//             <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
//               {about.BulletPoints2[1]?.point}
//             </span>
//           </div>
//         </div>
//         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-b border-black/5">
//           {/* Item 1 */}
//           <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
//             <Presentation color="#595856" />

//             <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
//               {about.BulletPoints2[2]?.point}
//             </span>
//           </div>

//           {/* Item 2 */}
//           <div className="flex items-center p-4 sm:p-6">
//             <Clock color="#595856" />

//             <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
//               {about.BulletPoints2[3]?.point}
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  MonitorCheck,
  Timer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";

const highlights = [
  "Stay Protected 24/7 with Real-Time Threat Monitoring",
  "Simplify Compliance with Automated Reporting Tools",
  "Get Expert Support When You Need It, On-Demand",
];

const stats = [
  { value: "500+", label: "Clients Protected" },
  { value: "99.9%", label: "Threat Detection Rate" },
  { value: "24/7", label: "Active Monitoring" },
  { value: "15+", label: "Years Experience" },
];

const features = [
  { icon: ShieldCheck, label: "Expert Solutions" },
  { icon: Lock, label: "Advanced Defense" },
  { icon: MonitorCheck, label: "Strategic Consulting" },
  { icon: Timer, label: "Seamless Integration" },
];

export default function AboutSection() {
  return (
    // bg-white
    <section className="relative   px-6 overflow-hidden  ">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] bg-[#ac1b1b]/7 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#721212]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
{/* items-center */}
          {/* LEFT — Visual block replacing image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // className="relative" 
              className="relative order-2 lg:order-1"

          >
            {/* Main card */}
            <div className="flex flex-col justify-center h-full relative rounded-3xl bg-gradient-to-br from-[#ac1b1b] via-[#8f1515] to-[#460a0a] p-10 overflow-hidden">

              {/* Decorative rings */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-white/10" />
              <div className="absolute -right-2 -top-2 w-32 h-32 rounded-full border border-white/10" />

              {/* Noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

              <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-semibold mb-8">
                Why Deciphi
              </p>

              {/* Highlight checklist */}
              <div className="space-y-4 mb-10">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-snug font-medium">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl shadow-zinc-200 px-5 py-4 flex items-center gap-3 border border-zinc-100"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-semibold text-zinc-800">
                Active Threat Protection
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="order-1 lg:order-2"


          >
            {/* Badge */}
         

                   <Button className="inline-flex items-center gap-2 border  border-black/10 ">
              {/* <div className="w-1.5 h-1.5 rounded-full bg-[#ac1b1b]" /> */}
              {/* <span className="text-xs font-semibold text-[#ac1b1b] tracking-wide uppercase">
                About Uswwer
              </span> */}

           
                <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
                { "About Us"}
         
            
            </Button>


                       


            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-semibold text-zinc-900 leading-[1.1] mb-2">
              Smarter. Safer.
            </h2>
            <h2 className="text-5xl md:text-6xl font-semibold leading-[1.1] mb-8">
             
                 <span
   
            className="inline bg-[#E85744] text-white px-3 py-1 rounded box-decoration-clone"
            style={{ WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}
          >
          Deciphi.
          </span>
            </h2>

            {/* Body */}
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              We connect the dots, so you do not have to. At Deciphi, we
              simplify cybersecurity by transforming complex challenges into
              clear, effective strategies. Our team combines deep expertise
              with a forward-thinking approach to deliver solutions that
              protect your operations today while preparing you for
              tomorrow's threats.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-zinc-100 hover:border-[#ac1b1b]/30 hover:bg-[#ac1b1b]/[0.03] transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#ac1b1b] transition-colors duration-200 shrink-0" />
                    <span className="text-sm font-medium text-zinc-700">
                      {f.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            {/* <button className="bg-gradient-to-r from-[#ac1b1b] to-[#721212] text-white px-7 py-3.5 rounded-md font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#ac1b1b]/25 transition-all duration-200">
              Contact Us
            </button> */}
             <motion.button
          className="inline-flex items-center gap-3 bg-[#8b1515] hover:bg-[#721212] text-white font-semibold text-sm px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-900/20 hover:gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
Contact Us
          <ArrowRight size={16} strokeWidth={2.5} />
        </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}