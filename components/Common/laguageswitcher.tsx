'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', dir: 'rtl', flag: '🇦🇪' },
];

interface LanguageSwitcherProps {
  /** Called when user picks a language — wire to i18n router */
  onChange?: (code: string) => void;
  /** Starting language code */
  defaultLang?: string;
}

export default function LanguageSwitcher({
  onChange,
  defaultLang = 'en',
}: LanguageSwitcherProps) {
  const [current, setCurrent]   = useState(defaultLang);
  const [open, setOpen]         = useState(false);
  const ref                     = useRef<HTMLDivElement>(null);

  const active = languages.find((l) => l.code === current) ?? languages[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (code: string) => {
    setCurrent(code);
    setOpen(false);
    onChange?.(code);
    // Flip document dir for RTL support
    document.documentElement.dir = languages.find((l) => l.code === code)?.dir ?? 'ltr';
  };

  return (
    <div ref={ref} className="relative inline-block">

      {/* ── Trigger button ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.96 }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                     text-sm font-medium transition-colors duration-200
                    ${open
                      ? 'bg-white  text-gray-900 shadow-sm'
                      : ' text-white hover:bg-white/20'
                    }`}
      >
        {/* <span className="text-base leading-none">{active.flag}</span> */}
        <    Languages 
 className="w-4 h-4" />

        <span className="tracking-wide uppercase text-xs font-semibold">
          {active.code}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth={2.5}
          strokeLinecap="round" strokeLinejoin="round"
          className="opacity-70"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Select language"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } }}
            exit={{    opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.13, ease: 'easeIn' } }}
            className="absolute right-0 mt-2 w-36 bg-white rounded-xl
                       shadow-xl shadow-black/10 border border-gray-100
                       overflow-hidden z-50 py-1"
          >
            {languages.map((lang) => {
              const isActive = lang.code === current;
              return (
                <motion.li
                  key={lang.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => select(lang.code)}
                  whileHover={{ backgroundColor: '#F9FAFB' }}
                  className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer
                               transition-colors text-sm
                               ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="lang-check"
                      className="w-4 h-4 rounded-full bg-[#8B1A1A] flex items-center justify-center"
                    >
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

    </div>
  );
}