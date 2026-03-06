"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  
} from "@/components/ui/resizable-navbar";
import { navItems } from "@/lib/menu";
import MobMenu from "@/components/mobile-menu";

export function Header() {
  return (
    <Navbar>
      <NavBody className="py-4">
        <NavbarLogo />

        <NavItems items={navItems} />
    
  
      </NavBody>
      <MobMenu items={navItems} />
    </Navbar>
  );
}

