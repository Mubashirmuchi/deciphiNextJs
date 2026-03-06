"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Shield,
  Smartphone,
  Layers,
  Cpu,
  Network,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    tag: "01",
    title: "Web-Based Products",
    description:
      "Detect and fix weak spots in web apps with the help of highly skilled and certified cyber security professionals focused on every aspect of safety.",
    es: "Our team does the following:",
    points: [
      "Evaluating the current infrastructure",
      "Testing by simulating intruders and their attacks",
      "Pinning down weaknesses and creating strategies",
      "Safeguarding asset integrity",
    ],
    size: "large", // spans 2 cols
  },
  {
    icon: Shield,
    tag: "02",
    title: "Red Teaming",
    description:
      "A red team leverages unlimited, realistic attack simulations to assess and upgrade your security via penetration testing, phishing, and social engineering.",
    es: "Deciphi offers:",
    points: [
      "Intensive simulations of real-world digital intrusions",
      "Employment of attacker-style tactics for evaluations",
      "Checks of physical, social, and technical security defenses",
      "Well-thought-out social manipulation testing services",
    ],
    size: "small",
  },
  {
    icon: Smartphone,
    tag: "03",
    title: "Mobile Apps",
    description:
      "Comprehensive mobile security assessments covering iOS and Android platforms to identify vulnerabilities before attackers do.",
    es: "Deciphi offers:",
    points: [
      "Static and dynamic analysis of mobile binaries",
      "Runtime manipulation and reverse engineering checks",
      "Insecure data storage and transmission testing",
      "Third-party SDK vulnerability assessments",
    ],
    size: "small",
  },
  {
    icon: Layers,
    tag: "04",
    title: "APIs",
    description:
      "Deep-dive API security testing to uncover authentication flaws, injection risks, and data exposure before they become critical incidents.",
    es: "Deciphi offers:",
    points: [
      "REST, GraphQL, and SOAP endpoint analysis",
      "Authentication and authorization bypass testing",
      "Rate limiting and input validation checks",
      "Sensitive data exposure identification",
    ],
    size: "small",
  },
  {
    icon: Cpu,
    tag: "05",
    title: "IoT Devices",
    description:
      "End-to-end IoT security assessments spanning firmware, communication protocols, and physical attack surfaces.",
    es: "Deciphi offers:",
    points: [
      "Firmware extraction and binary analysis",
      "Wireless protocol security evaluation",
      "Hardware interface and debug port testing",
      "Cloud backend and API security review",
    ],
    size: "small",
  },
  {
    icon: Network,
    tag: "06",
    title: "Network Testing",
    description:
      "Thorough network penetration testing to identify misconfigurations, exposed services, and lateral movement paths.",
    es: "Deciphi offers:",
    points: [
      "Internal and external network reconnaissance",
      "Firewall rule and segmentation analysis",
      "Man-in-the-middle and traffic interception testing",
      "Active Directory and privilege escalation audits",
    ],
    size: "large",
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#ac1b1b]/8 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#721212]/6 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-[#ac1b1b] font-semibold mb-4"
        >
          Security Assessment & Testing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-tight max-w-2xl"
        >
          What We{" "}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac1b1b] to-[#721212]">
            Test & Protect
          </span> */}

              <span className="bg-[#E85744] text-white p-2 rounded leading-snug ">
           Test & Protect
            </span>
        </motion.h2>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isActive = active === i;
          const isLarge = service.size === "large";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className={`
                group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden cursor-pointer
                transition-all duration-300
                ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}
                ${isActive ? "border-[#ac1b1b]/40 shadow-xl shadow-[#ac1b1b]/10" : "hover:border-zinc-300"}
              `}
            >
              {/* Animated bg fill on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#ac1b1b]/[0.04] to-[#721212]/[0.02]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glowing top border */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ac1b1b] to-[#721212]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative p-7 h-full flex flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(172,27,27,0.12)"
                        : "rgba(244,244,245,1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-[#ac1b1b]" : "text-zinc-500"
                      }`}
                    />
                  </motion.div>
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    isActive ? "text-[#ac1b1b]" : "text-zinc-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Points — reveal on hover */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-[#ac1b1b] font-semibold uppercase tracking-widest mb-3">
                        {service.es}
                      </p>
                      <ul className="space-y-2">
                        {service.points.map((point, pi) => (
                          <motion.li
                            key={pi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pi * 0.07 }}
                            className="flex items-start gap-2 text-sm text-zinc-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#ac1b1b]/60 shrink-0 mt-0.5" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA hint */}
                <div className="mt-auto pt-5">
                  <motion.div
                    animate={{ x: isActive ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1 text-xs font-semibold text-[#ac1b1b]/60 group-hover:text-[#ac1b1b] transition-colors"
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}