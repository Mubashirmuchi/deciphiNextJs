
'use client'


import { motion } from "motion/react"
import {
  BarChart2,
  Monitor,
  Users,
  ShieldCheck,
  Network,
  Globe,
  Smartphone,
  Cpu,
  Layers,
} from "lucide-react"

interface Benefit {
icon: string;
  title: string
  desc: string
}

interface BenefitsProps {
  title: string
  description: string
  features: Benefit[]
}

export default function BenefitsSection({
  title,
  description,
  features,
}: BenefitsProps){
  const iconMap: Record<string, any> = {
  BarChart2,
  Monitor,
  Users,
  ShieldCheck,
  Network,
  Globe,
  Smartphone,
  Cpu,
  Layers,
}
    return(
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
            {/* <span className="text-black bg-clip-text ">Deciphi</span> Wayfinder
            <br />
            Threat Detection and Response */}
            {title}
          </h2>
          <p className="text-zinc-500 text-lg max-w-3xl mx-auto leading-relaxed">
         {description}
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
          {features.map((f, i)=> {
            const Icon = iconMap[f.icon]
              return (
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
          <Icon className="w-8 h-8" />
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
        )
})}
        </motion.div>
      </div>
    </section>
    )
}