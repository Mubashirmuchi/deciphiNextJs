"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, MapPin, BellDot, Play, Cloud, Shield,
  ChevronDown, ChevronRight, Menu, X,
} from "lucide-react";
import type { Variants } from "framer-motion";
import CTAButton from "./CTA";
import Link from "next/link";
import Image from "next/image";

// ── Nav data ──────────────────────────────────────────────────────────
export const navItems = [
  { name: "About", link: "/#about", isHashLink: true },
  {
    name: "Services",
    link: "/services",
    submenu: [
      { name: "Cyber Security Consulting",         desc: "Expert guidance tailored to your goals",       icon: ShoppingBag, path: "/services/consulting"  },
      { name: "Security Assessment & Testing",     desc: "Identify vulnerabilities before attackers do", icon: Shield,      path: "/services/assessment"  },
      { name: "Cyber Security Awareness Training", desc: "Empower your team with knowledge",             icon: BellDot,     path: "/services/training"    },
      { name: "System Integration Services",       desc: "Seamless, secure tech integration",            icon: Play,        path: "/services/integration" },
      { name: "OT Cybersecurity",                  desc: "Protect operational technology environments",  icon: MapPin,      path: "/services/ot"          },
      { name: "Cloud Security Services",           desc: "Secure your cloud infrastructure end-to-end", icon: Cloud,       path: "/services/cloud"       },
    ],
  },
  { name: "Blog", link: "/blog" },
];

// ── Variants ──────────────────────────────────────────────────────────
const dropdownVariants: Variants = {
  hidden:  { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.15, ease: "easeIn" } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.045, duration: 0.2, ease: "easeOut" },
  }),
};

// height-based collapse for mobile panels
const collapseVariants: Variants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.18, ease: "easeIn" } },
};

// staggered slide-in for sub-items
const mobileItemVariants: Variants = {
  hidden:  { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.05, duration: 0.22, ease: "easeOut" },
  }),
};

// ── Logo ──────────────────────────────────────────────────────────────


// ── Desktop dropdown ──────────────────────────────────────────────────
function DesktopDropdown({ items }: { items: (typeof navItems)[1]["submenu"] }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden" animate="visible" exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 w-145"
    >
      <div className="relative bg-white/95 backdrop-blur-xl rounded-md shadow-2xl shadow-black/20 border border-white/60 p-5 grid grid-cols-2 gap-2">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white/95 border-l border-t border-white/60 rotate-45 rounded-sm" />
        {items!.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name} href={item.path} custom={i}
              variants={itemVariants} initial="hidden" animate="visible"
              className="flex items-start gap-3 p-3.5 rounded-xl group hover:bg-[#8B1A1A]/6 transition-colors duration-150"
            >
              <span className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-[#8B1A1A]/10 group-hover:bg-[#8B1A1A]/20 flex items-center justify-center transition-colors">
                <Icon size={17} className="text-[#8B1A1A]" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-gray-800 group-hover:text-[#8B1A1A] transition-colors leading-snug">{item.name}</span>
                <span className="block text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</span>
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── Mobile nested submenu ─────────────────────────────────────────────
function MobileSubmenu({
  items,
  isOpen,
}: {
  items: (typeof navItems)[1]["submenu"];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          variants={collapseVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden"
        >
          {/* Left accent line — visual indent */}
          <div className="mx-3 mt-1 mb-2 pl-3 border-l-2 border-[#8B1A1A]/40 flex flex-col gap-0.5">
            {items!.map((sub, i) => {
              const Icon = sub.icon;
              return (
                <motion.a
                  key={sub.name}
                  href={sub.path}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                             text-white/65 hover:text-white hover:bg-white/10
                             text-sm transition-colors group"
                >
                  {/* Icon badge */}
                  <span className="shrink-0 w-8 h-8 rounded-lg
                                   bg-[#8B1A1A]/20 group-hover:bg-[#8B1A1A]/40
                                   flex items-center justify-center transition-colors">
                    <Icon size={14} className="text-[#c0504d]" />
                  </span>

                  {/* Text */}
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-snug truncate">
                      {sub.name}
                    </span>
                    <span className="block text-xs text-white/38 leading-snug truncate">
                      {sub.desc}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [openDropdown, setOpenDropdown]     = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled]             = useState(false);
  const navRef     = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMenu  = (name: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenDropdown(name); };
  const closeMenu = ()              => { closeTimer.current = setTimeout(() => setOpenDropdown(null), 80); };
  const toggleMobile = (name: string) => setMobileExpanded((p) => (p === name ? null : name));

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Bar */}
        <div className={`flex items-center justify-between rounded-md px-6 py-3 transition-all duration-300
          ${scrolled ? "bg-black/60  backdrop-blur-xl shadow-lg shadow-black/20 border-0" : "border-0"}`}>

       <Link href="/" className="flex items-center gap-2.5">
<Image
            src="/img_frame_38.svg"
            width={150}
            height={40}
            alt="Deciphi Logo"
            className="w-37.5 h-10 object-contain"
          />

    </Link>

          {/* Desktop pill — unchanged */}
          <div className="hidden  md:flex items-center gap-1  border-none rounded-md px-10 py-2">
            {navItems.map((item) => {
              const hasSubmenu = !!item.submenu;
              const isOpen     = openDropdown === item.name;
              return (
                <div
                  key={item.name} className="relative"
                  onMouseEnter={() => hasSubmenu && openMenu(item.name)}
                  onMouseLeave={() => hasSubmenu && closeMenu()}
                >
                  {hasSubmenu ? (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                      className={`flex items-center gap-1 text-sm  font-bold px-4 py-1.5 rounded-full transition-all duration-200
                        ${isOpen ? "text-white bg-white/15" : "text-white/85 hover:text-white hover:bg-white/12"}`}
                    >
                      {item.name}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={13} />
                      </motion.span>
                    </button>
                  ) : (
                    <Link href={item.link} className="flex items-center text-sm font-bold px-4 py-1.5 rounded-full text-white/85 hover:text-white hover:bg-white/12 transition-all duration-200">
                      {item.name}
                    </Link>
                  )}
                  <AnimatePresence>
                    {hasSubmenu && isOpen && <DesktopDropdown items={item.submenu} />}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

     

          <CTAButton className="px-3 py-1 hidden md:inline-flex" text="Contact us"  href="/contact"/> 



          {/* Hamburger */}
          <button
            className="md:hidden text-white p-1.5"
            onClick={() => { setMobileOpen((v) => !v); setMobileExpanded(null); }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile sidebar-style dropdown ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={collapseVariants}
              initial="hidden" animate="visible" exit="exit"
              className="md:hidden mt-2 overflow-hidden rounded-md
                         bg-black/55 backdrop-blur-xl border border-white/15 shadow-xl"
            >
              <nav className="p-3 flex flex-col gap-0.5">

                {navItems.map((item) => {
                  const hasSubmenu = !!item.submenu;
                  const isExpanded = mobileExpanded === item.name;

                  return (
                    <div key={item.name}>
                      {hasSubmenu ? (
                        <>
                          {/* ── Trigger row ── */}
                          <button
                            onClick={() => toggleMobile(item.name)}
                            className={`w-full flex items-center justify-between
                                        px-4 py-3 rounded-xl text-sm font-medium
                                        transition-colors duration-200
                                        ${isExpanded
                                          ? "text-white bg-white/12"
                                          : "text-white/80 hover:text-white hover:bg-white/8"
                                        }`}
                          >
                            <span className="flex items-center gap-3">
                              {/* Animated accent bar */}
                              <motion.span
                                className="block w-1 rounded-full bg-[#c0504d]"
                                animate={{ height: isExpanded ? 18 : 8, opacity: isExpanded ? 1 : 0.35 }}
                                transition={{ duration: 0.2 }}
                              />
                              {item.name}
                            </span>
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <ChevronDown size={15} />
                            </motion.span>
                          </button>

                          {/* ── Nested submenu ── */}
                          <MobileSubmenu items={item.submenu} isOpen={isExpanded} />
                        </>
                      ) : (
                        <a
                          href={item.link}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl
                                     text-sm font-medium text-white/80
                                     hover:text-white hover:bg-white/8 transition-colors"
                        >
                          <span className="block w-1 h-2 rounded-full bg-white/25" />
                          {item.name}
                        </a>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="mt-2 pt-3 border-t border-white/10">
                  <motion.a
                    href="/contact"
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2
                               bg-[#8B1A1A] hover:bg-[#9e1f1f]
                               text-white text-sm font-semibold
                               px-5 py-3 rounded-xl w-full transition-colors"
                  >
                    Get Started <ChevronRight size={15} />
                  </motion.a>
                </div>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}