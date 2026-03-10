"use client";

import { motion } from "motion/react";

const clients = [
  { name: "Hitachi", style: "font-bold text-2xl tracking-tight text-[#ac1b1b]" },
  { name: "Uber", style: "font-black text-2xl text-zinc-900" },
  { name: "AT&T", style: "font-bold text-2xl text-zinc-800" },
  { name: "Samsung", style: "font-bold text-2xl tracking-widest text-zinc-900 uppercase" },
  { name: "JetBlue", style: "font-semibold text-2xl italic text-zinc-800" },
  { name: "ServiceNow", style: "font-medium text-2xl text-zinc-600" },
  { name: "Aston Martin", style: "font-light text-xl tracking-widest uppercase text-zinc-500" },
  { name: "Lyft", style: "font-black text-2xl text-[#ac1b1b]" },
  { name: "Oracle", style: "font-bold text-2xl text-zinc-800" },
  { name: "Siemens", style: "font-semibold text-2xl tracking-tight text-zinc-700" },
];

// Duplicate for seamless loop
const marqueeItems = [...clients, ...clients];

export default function TrustMarquee() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ac1b1b]/6 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] uppercase text-[#ac1b1b] font-semibold mb-5"
        >
          Trusted Worldwide
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] mb-5"
        >
          The World&apos;s Leading Enterprises{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac1b1b] to-[#721212]">
            Trust Deciphi
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg"
        >
          Including four of the Fortune 10 and hundreds of the Global 2000.
        </motion.p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 shrink-0 group cursor-default"
              >
                {/* Dot accent */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#ac1b1b]/30 group-hover:bg-[#ac1b1b] transition-colors duration-300 shrink-0" />
                <span
                  className={`${client.style} transition-opacity duration-300 group-hover:opacity-70 whitespace-nowrap`}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10 max-w-3xl mx-auto mt-16 grid grid-cols-3 divide-x divide-zinc-200"
      >
        {[
          { value: "4", label: "Fortune 10 Companies" },
          { value: "500+", label: "Global 2000 Clients" },
          { value: "40+", label: "Countries Protected" },
        ].map((stat, i) => (
          <div key={i} className="text-center px-8">
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ac1b1b] to-[#721212]">
              {stat.value}
            </p>
            <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}