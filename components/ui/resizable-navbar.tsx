"use client";
import { cn } from "@/lib/utils";
import { Cloudy, Flame, HeartHandshake, LucideIcon, MonitorCog, Presentation, ScanLine } from "lucide-react";
import {
  motion,
  
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useRef, useState } from "react";
import { Book, Sunset, Trees, Zap } from "lucide-react";

export interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}



interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}



interface NavItemsProps {
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

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header
      ref={ref}
      className={cn("fixed inset-x-0 top-10 z-40 w-full", className)}
    >
      <nav>
        <motion.div

        // IMPORTANT: Change this to class of `fixed` sticky if you want the navbar to be fixed
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
      </nav>
    </header>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-neutral-950/80 dark:bg-neutral-950/80",

        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({  className }: NavItemsProps) => {
  const pathname = usePathname();
 const   menu = [
    { title: "About", url: "#about-us" },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Cyber Security Consulting",
          description: "Program that fits your goals",
          icon: <HeartHandshake className="size-5 shrink-0" />,
          url: "/services",
        },
        {
          title: "Cyber Security Awareness Training",
          description: "Program that fits your goals",
          icon: <Presentation className="size-5 shrink-0" />,
          url: "/services",
        },
        {
          title: "Security Assessment & Testing",
          description: "Program that fits your goals",
          icon: <ScanLine className="size-5 shrink-0" />,
          url: "/services",
        },
        {
          title: "OT Cybersecurity",
          description:
            "Program that fits your goals",
          icon: <Flame className="size-5 shrink-0" />,
          url: "/services",
        },
        
        {
          title: "System Integration Services",
          description:
            "Program that fits your goals",
          icon: <MonitorCog className="size-5 shrink-0" />,
          url: "/services",
        },{
          title: "Cloud Security Services",
          description:
            "Program that fits your goals",
          icon: <Cloudy className="size-5 shrink-0" />,
          url: "/services",
        },
      ],
    },
 {
  title: "Solutions",
  url: "#",
  items: [
    {
      title: "Application security solutions",
      description: "Secure apps. Stop threats. Ship with confidence.",
      icon: <Zap className="size-5 shrink-0" />,
      url: "#",
    },
    {
      title: "Endpoint security",
      description: "Protect every device, everywhere.",
      icon: <Sunset className="size-5 shrink-0" />,
      url: "#",
    },
    {
      title: "Internet of things (IoT) security",
      description: "Defend connected devices from cyber risks.",
      icon: <Trees className="size-5 shrink-0" />,
      url: "#",
    },
    {
      title: "Data Security Solutions",
      description: "Keep sensitive data locked and compliant.",
      icon: <Book className="size-5 shrink-0" />,
      url: "#",
    },
  ],
},
    {
      title: "Blog",
      url: "/blog",
    },
  ]
  return (
    <motion.div >
      <ul
        className={cn(
          "absolute  inset-0 hidden rounded-full flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
          `${pathname == "/" ? "" : "bg-neutral-950/80 rounded-full"}`,
          className
        )}
      >

             <NavigationMenu >
                <NavigationMenuList className=" text-white ">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>

      </ul>
    </motion.div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={"/img_frame_38.svg"}
        alt="logo"
        width={135}
        height={31}
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4  py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag 
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};


const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="font-bold  text-md ">
        <NavigationMenuTrigger className="font-bold  text-md hover:text-white/50">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground font-bold  text-md">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 font-bold  text-md">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    if (item.url.startsWith('#')) {
      e.preventDefault();
      window.location.href = '/' + item.url;
    }
  };

  return (
    <NavigationMenuItem key={item.title} className="font-bold  text-md hover:text-white/50">
      <NavigationMenuLink
        href={item.url}
        onClick={handleClick}
        className="group text-md !\hover:text-white/50 text-white font-bold  text-md  inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2   transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};