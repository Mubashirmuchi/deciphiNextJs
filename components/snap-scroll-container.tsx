"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

export function SnapScrollContainer({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsCount = Array.isArray(children) ? children.length : 1;

  const scrollToSection = (index: number) => {
    if (containerRef.current && !isScrolling) {
      setIsScrolling(true);
      const section = containerRef.current.children[index] as HTMLElement;
      section?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (isScrolling) return;

    if (e.deltaY > 0 && currentSection < sectionsCount - 1) {
      scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") scrollToSection(Math.min(currentSection + 1, sectionsCount - 1));
      if (e.key === "ArrowUp") scrollToSection(Math.max(currentSection - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, sectionsCount, isScrolling]);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="h-screen overflow-hidden snap-y snap-mandatory"
    >
      {children}
    </div>
  );
}

export function SnapSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={`min-h-screen w-full snap-start snap-always ${className || ""}`}>
      {children}
    </section>
  );
}
