import { BellDot, LucideIcon, MapPin, Play, ShoppingBag } from "lucide-react";
export interface NavItemsProps {
  items: {
    name: string;
    link: string;
    submenu?: {
      name: string;
      desc?: string;
      icon?: LucideIcon;
      path: string;
    }[];
  }[];
  className?: string;
  onItemClick?: () => void;
}


export const navItems = [
  {
    name: "About us",
    link: "/#about-us",
    isHashLink: true,
  },
  {
    name: "Services",
    link: "/services",

    submenu: [
      {
        name: "Cyber Security Consulting",
        desc: "Program that fits your goals",
        icon: ShoppingBag,
        path: "/services",
      },
      {
        name: "Security Assessment & Testing",
        desc: "Program that fits your goals",
        icon: MapPin,
        path: "/services",
      },
      {
        name: "Cyber Security Awareness Training",
        desc: "Program that fits your goals",
        icon: BellDot,
        path: "/services",
      },
      {
        name: "System Integration Services",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services",
      },
      {
        name: " OT Cybersecurity",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services",
      },
      {
        name: "Cloud Security Services",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services",
      },
    ],
  },
  {
    name: "Solutions",
    link: "/solutions",
    submenu: [
      {
        name: "Cyber Security Consulting",
        desc: "Program that fits your goals",
        icon: ShoppingBag,
        path: "/services/cyber-security-consulting",
      },
      {
        name: "Security Assessment & Testing",
        desc: "Program that fits your goals",
        icon: MapPin,
        path: "/services/cyber-security-consulting",
      },
      {
        name: "Cyber Security Awareness Training",
        desc: "Program that fits your goals",
        icon: BellDot,
        path: "/services/cyber-security-consulting",
      },
      {
        name: "System Integration Services",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services/cyber-security-consulting",
      },
      {
        name: " OT Cybersecurity",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services/cyber-security-consulting",
      },
      {
        name: "Cloud Security Services",
        desc: "Program that fits your goals",
        icon: Play,
        path: "/services/cyber-security-consulting",
      },
    ],
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
