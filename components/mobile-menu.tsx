"use client";
import { NavItemsProps } from "@/lib/menu";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import React, { useRef, useState } from "react";
import { NavbarLogo, NavbarProps } from "./ui/resizable-navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

const MobileNav = ({
  items,
  visible,
}: NavItemsProps & { visible?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="px-4">
      <div
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between  py-2 lg:hidden",
          pathname === "/" && !visible
            ? "bg-transparent"
            : "backdrop-blur-md bg-neutral-950/70 dark:bg-neutral-950/70 rounded-xl"
        )}
      >
        <NavbarLogo />

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-900 dark:text-white rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#18181A] shadow-xl p-4 z-[60]"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/90 hover:bg-white/10 rounded-lg flex w-full justify-end"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <nav className="space-y-3 mt-4">
              {[...items, { name: "Contact", link: "/contact" },{name:"Book a Call",link:"/book-call"}].map(
                (menu, index) => (
                  <motion.div
                    key={menu.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={menu.link.startsWith('#') ? '/' + menu.link : menu.link}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        className="w-full text-left px-4 py-4  hover:bg-white/10 rounded-lg text-white/70 hover:text-white/90"
                      >
                        {menu.name}
                      </Button>
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
