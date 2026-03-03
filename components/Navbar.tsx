"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/lib/menu";
import MobMenu from "@/components/mobile-menu";

export function Header() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />

        <NavItems items={navItems} />

        <div className="flex items-center gap-4">
       
            <NavbarButton 
            href="book-call"
            // href="tel:+97441499289"
              className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)] text-white hover:bg-[linear-gradient(113deg,#c62828_0%,#8b1c1c_50%,#5a0d0d_100%)]
  transition-all duration-300"
              variant="primary"
            >
              Book a call
            </NavbarButton>
  
        </div>
      </NavBody>
      <MobMenu items={navItems} />
    </Navbar>
  );
}
