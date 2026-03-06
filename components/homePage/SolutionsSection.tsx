// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   Globe,
//   IdCard,
//   ShieldAlert,
//   Boxes,
//   Database,
//   Cloud,
//   X,
//   Plus,
//   CheckCircle2,
// } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     icon: IdCard,
//     title: "Identity and Access Management",
//     description:
//       "At Deciphi, we offer more than just cybersecurity—we provide peace of mind. Backed by real-world experience and deep technical expertise, we tailor solutions that protect what matters most.",
//   },
//   {
//     id: 2,
//     icon: Globe,
//     title: "Network Security",
//     description:
//       "Comprehensive network protection with advanced threat detection, firewall management, and zero-trust architecture to safeguard your infrastructure from evolving cyber threats.",
//   },
//   {
//     id: 3,
//     icon: ShieldAlert,
//     title: "Endpoint Security",
//     description:
//       "Protect every device across your organization with intelligent endpoint detection, automated response, and continuous monitoring to stop threats before they spread.",
//   },
//   {
//     id: 4,
//     icon: Database,
//     title: "Data Security",
//     description:
//       "Encrypt, classify, and control sensitive data across all environments. Our data security solutions ensure compliance and prevent unauthorized access or exfiltration.",
//   },
//   {
//     id: 5,
//     icon: Cloud,
//     title: "Cloud Security",
//     description:
//       "Secure your cloud workloads, configurations, and identities across AWS, Azure, and GCP with continuous posture management and runtime threat protection.",
//   },
//   {
//     id: 6,
//     icon: Boxes,
//     title: "Application Security",
//     description:
//       "Embed security into every stage of your development lifecycle with SAST, DAST, API security testing, and developer-friendly tools that don't slow you down.",
//   },
// ];

// const badges = [
//   "Single Sign-On (SSO)",
//   "Privileged Access Management (PAM)",
//   "Multi-Factor Authentication (MFA)",
// ];

// export default function ServicesSection() {
//   const [openId, setOpenId] = useState<number | null>(1);

//   return (
//     <section className="h-screen w-full overflow-hidden bg-[#F5F3EE] flex items-center snap-start">
//       <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT — Gradient Card */}
//         <motion.div
//           className="w-full"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="relative rounded-3xl overflow-hidden w-full min-h-[500px] bg-gradient-to-br from-[#ac1b1b] to-[#721212] shadow-2xl shadow-red-900/20 flex flex-col justify-between p-8">
//             {/* Decorative circles */}
//             <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
//             <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />

//             {/* Top label */}
//             <div className="relative z-10">
//               <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
//                 Our Services
//               </span>

//               <h2 className="text-white text-3xl font-bold mt-3 leading-tight">
//                 Cybersecurity
//                 <br />
//                 Built for You
//               </h2>
//             </div>

//             {/* Badges */}
//             <div className="relative z-10 flex flex-col gap-3">
//               {badges.map((badge, i) => (
//                 <motion.div
//                   key={badge}
//                   className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
//                 >
//                   <CheckCircle2
//                     size={16}
//                     className="text-white flex-shrink-0"
//                     strokeWidth={2.5}
//                   />
//                   <span className="text-sm font-medium text-white/90 whitespace-nowrap">
//                     {badge}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//         {/* RIGHT — Accordion */}
//         <motion.div
//           className="flex flex-col gap-2"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//         >
//           {services.map((service, i) => {
//             const Icon = service.icon;
//             const isOpen = openId === service.id;

//             return (
//               <motion.div
//                 key={service.id}
//                 className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
//                   isOpen
//                     ? "bg-white border-slate-200 shadow-md shadow-slate-100"
//                     : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-200"
//                 }`}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.06 }}
//                 onClick={() => setOpenId(isOpen ? null : service.id)}
//               >
//                 {/* Header */}
//                 <div className="flex items-center justify-between px-5 py-4">
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`p-1.5 rounded-lg transition-colors ${isOpen ? "text-blue-600" : "text-slate-500"}`}
//                     >
//                       <Icon size={20} strokeWidth={1.75} />
//                     </div>
//                     <span
//                       className={`font-semibold text-sm transition-colors ${
//                         isOpen
//                           ? "text-slate-900 underline underline-offset-2"
//                           : "text-slate-700"
//                       }`}
//                     >
//                       {service.title}
//                     </span>
//                   </div>
//                   <div
//                     className={`flex-shrink-0 transition-all duration-200 ${isOpen ? "text-slate-400" : "text-slate-400"}`}
//                   >
//                     {isOpen ? <X size={16} /> : <Plus size={16} />}
//                   </div>
//                 </div>

//                 {/* Body */}
//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       key="content"
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                     >
//                       <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
//                         {service.description}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  IdCard,
  ShieldAlert,
  Boxes,
  Database,
  Cloud,
  X,
  Plus,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: IdCard,
    title: "Identity and Access Management",
    description:
      "At Deciphi, we offer more than just cybersecurity—we provide peace of mind. Backed by real-world experience and deep technical expertise, we tailor solutions that protect what matters most.",
  },
  {
    id: 2,
    icon: Globe,
    title: "Network Security",
    description:
      "Comprehensive network protection with advanced threat detection, firewall management, and zero-trust architecture to safeguard your infrastructure from evolving cyber threats.",
  },
  {
    id: 3,
    icon: ShieldAlert,
    title: "Endpoint Security",
    description:
      "Protect every device across your organization with intelligent endpoint detection, automated response, and continuous monitoring to stop threats before they spread.",
  },
  {
    id: 4,
    icon: Database,
    title: "Data Security",
    description:
      "Encrypt, classify, and control sensitive data across all environments. Our data security solutions ensure compliance and prevent unauthorized access or exfiltration.",
  },
  {
    id: 5,
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Secure your cloud workloads, configurations, and identities across AWS, Azure, and GCP with continuous posture management and runtime threat protection.",
  },
  {
    id: 6,
    icon: Boxes,
    title: "Application Security",
    description:
      "Embed security into every stage of your development lifecycle with SAST, DAST, API security testing, and developer-friendly tools that don't slow you down.",
  },
];

const badges = [
  "Single Sign-On (SSO)",
  "Privileged Access Management (PAM)",
  "Multi-Factor Authentication (MFA)",
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="h-screen w-full bg-[#F5F3EE] flex items-center overflow-hidden snap-start">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

          {/* LEFT — Gradient Card — stretches full height of grid row */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden w-full bg-gradient-to-br from-[#ac1b1b] to-[#721212] shadow-2xl shadow-red-900/20 flex flex-col justify-between p-8 lg:p-10">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-white/[0.03] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              {/* Top label + heading */}
              <div className="relative z-10">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  Our Services
                </span>
                <h2 className="text-white text-3xl lg:text-4xl font-bold mt-3 leading-tight">
                  Cybersecurity
                  <br />
                  Built for You
                </h2>
                <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
                  Tailored solutions that protect your organization at every layer — from identity to cloud.
                </p>
              </div>

              {/* Badges */}
              <div className="relative z-10 flex flex-col gap-3 mt-8">
                {badges.map((badge, i) => (
                  <motion.div
                    key={badge}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <CheckCircle2
                      size={16}
                      className="text-white flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm font-medium text-white/90 whitespace-nowrap">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Accordion */}
          <motion.div
            className="flex flex-col gap-2 justify-between"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              const isOpen = openId === service.id;

              return (
                <motion.div
                  key={service.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen
                      ? "bg-white border-slate-200 shadow-md shadow-slate-100"
                      : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-200"
                  }`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${
                          isOpen ? "text-[#ac1b1b]" : "text-slate-400"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <span
                        className={`font-semibold text-sm transition-colors ${
                          isOpen
                            ? "text-slate-900 underline underline-offset-2 decoration-[#ac1b1b]"
                            : "text-slate-700"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <div className="flex-shrink-0 text-slate-400 ml-3">
                      {isOpen ? <X size={15} /> : <Plus size={15} />}
                    </div>
                  </div>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}