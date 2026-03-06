"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

export function HomeSnapWrapper({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('[data-snap-section]');
    if (!sections) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const target = e.target as HTMLElement;
      if (!containerRef.current?.contains(target)) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        
        const section = sections[nextSection] as HTMLElement;
        const top = section.offsetTop;
        
        window.scrollTo({
          top,
          behavior: "smooth",
        });

        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isScrolling]);

  return <div ref={containerRef}>{children}</div>;
}
