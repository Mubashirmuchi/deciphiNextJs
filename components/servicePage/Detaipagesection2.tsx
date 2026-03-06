"use client";

import { BarChart2, Monitor, Users, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Scale Security Investments",
    desc: "Fuse human expertise, industry-leading threat intelligence, and AI to secure every level of your business against modern adversaries.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Reduce Risk",
    desc: "Gain expert around-the-clock monitoring and response to reduce operational risk and strengthen your resilience.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Limit Disruptions",
    desc: "Save your team the hassle. Our experts respond to all suspicious activity, and only engage your team when needed.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Gain Control with Tailored Security",
    desc: "Access everything you need, from white-glove support with proactive readiness to emergency response and dedicated threat advisors.",
  },
];

export default function WayfinderSection() {
  return (
    <section className="relative bg-white overflow-hidden py-24 px-6">
      {/* Top red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-zinc-900 leading-[1.15] mb-6">
            <span className="text-black bg-clip-text ">Deciphi</span> Wayfinder
            <br />
            Threat Detection and Response
          </h2>
          <p className="text-zinc-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Threat hunting. Managed detection and response. Elite incident
            readiness and response. Wayfinder TDR combines them all into one
            complete portfolio of managed security services.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#ac1b1b]/20 border border-[#ac1b1b]/20 rounded-2xl overflow-hidden"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 bg-white hover:bg-[#ac1b1b]/[0.03] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="text-[#ac1b1b]/60 group-hover:text-[#ac1b1b] transition-colors duration-300 mb-6">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-zinc-900 font-semibold text-lg mb-3 leading-snug">
                {f.title}
              </h3>

              {/* Desc */}
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#ac1b1b] to-[#721212] transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Web-Based Products",
    description:
      "Detect and fix weak spots in web apps with the help of highly skilled and certified cyber security professionals focused on every aspect of safety.",
    es: "Andersen's team does the following:",
    points: [
      "Evaluating the current infrastructure",
      "Testing by simulating intruders and their attacks;",
      "Pinning down weaknesses and creating strategies",
      "Safeguarding asset integrity.",
    ],
  },

  {
    title: "Red Teaming",
    description:
      "A red team leverages unlimited, realistic attack simulations to assess and upgrade your security via penetration testing, phishing, and social engineering.",
    es: "Andersen offers",
    points: [
      "Intensive simulations of real-world digital intrusions;",
      "Employment of attacker-style tactics for evaluations;",
      "Checks of physical, social, and technical security defenses;",
      "Well-thought-out social manipulation testing services.",
    ],
  },
];
