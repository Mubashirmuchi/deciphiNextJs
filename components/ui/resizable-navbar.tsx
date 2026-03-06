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

// export const Navbar = ({ children, className }: NavbarProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const [visible, setVisible] = useState<boolean>(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 100) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   });

//   return (
//     <header
//       ref={ref}
//       className={cn("fixed inset-x-0 top-0 py-2 z-40 w-full bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]", className)}
//     >
//       <nav>
//         <motion.div

//         // IMPORTANT: Change this to class of `fixed` sticky if you want the navbar to be fixed
//         >
//           {React.Children.map(children, (child) =>
//             React.isValidElement(child)
//               ? React.cloneElement(
//                   child as React.ReactElement<{ visible?: boolean }>,
//                   { visible }
//                 )
//               : child
//           )}
//         </motion.div>
//       </nav>
//     </header>
//   );
// };


export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (latest < previous) {
      setVisible(true);
    } else if (latest > previous && latest > 10) {
      setVisible(false);
    }

    lastScrollY.current = latest;
  });

  return (
    // <motion.header
    //   ref={ref}
    //   animate={{ y: visible ? 0 : "-120%" }}
    //   transition={{ duration: 0.3, ease: "easeInOut" }}
    //   className={cn("fixed inset-x-0 top-0 py-2 z-40 w-full bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]", className)}
    // >
    <motion.header
  ref={ref}
  animate={{ y: visible ? 0 : "-120%" }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className={cn(
    "fixed inset-x-0 top-0 z-40 w-full bg-white  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]",
    className
  )}
>
      <nav>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible }
              )
            : child
        )}
      </nav>
    </motion.header>
  );
};
// export const NavBody = ({ children, className, visible }: NavBodyProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? "blur(10px)" : "none",
//         // boxShadow: visible
//         //   ? "0 0 24px  rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
//         //   : "none",

//         width: visible ? "100%" : "100%",
//         y: visible ? 0 : 0,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 200,
//         damping: 50,
//       }}
//       style={{
//         // minWidth: "800px",
//       }}
//       className={cn(
//         "relative z-60 mx-auto hidden w-full max-w-7xl bg-white flex-row items-center justify-between self-start   px-4 py-2 lg:flex ",
//         visible && "bg-white/80 dark:bg-white/80",

//         className
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// };
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.div
      animate={{
        backgroundColor: visible || !isHome
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0)",
        boxShadow: visible || !isHome
          ? "0 4px 6px -1px rgba(0,0,0,0.08)"
          : "none",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative z-60 mx-auto w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-3 lg:flex hidden",
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
    { title: "About", url: "/#about" },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Cyber Security Consulting",
          description: "Program that fits your goals",
          icon: <HeartHandshake className="size-5 shrink-0" />,
          url: "/services/consulting",
        },
        {
          title: "Cyber Security Awareness Training",
          description: "Program that fits your goals",
          icon: <Presentation className="size-5 shrink-0" />,
          url: "/services/penetration",
        },
        {
          title: "Security Assessment & Testing",
          description: "Program that fits your goals",
          icon: <ScanLine className="size-5 shrink-0" />,
          url: "/services/training",
        },
        {
          title: "OT Cybersecurity",
          description:
            "Program that fits your goals",
          icon: <Flame className="size-5 shrink-0" />,
          url: "/services/integration",
        },
        
        {
          title: "System Integration Services",
          description:
            "Program that fits your goals",
          icon: <MonitorCog className="size-5 shrink-0" />,
          url: "/services/ot",
        },{
          title: "Cloud Security Services",
          description:
            "Program that fits your goals",
          icon: <Cloudy className="size-5 shrink-0" />,
          url: "/services/cloud",
        },
      ],
    },
 {
  title: "Solutions",
  url: "/solutions",

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
          "absolute  inset-0 hidden rounded-full flex-1 flex-row items-center justify-end space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
          `${pathname == "/" ? "" : "bg-white/80 rounded-full"}`,
          className
        )}
      >

             <NavigationMenu >
                <NavigationMenuList className=" text-black">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
  <NavbarButton
          href="book-call"
          // href="tel:+97441499289"
          className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)] text-white hover:bg-[linear-gradient(113deg,#c62828_0%,#8b1c1c_50%,#5a0d0d_100%)]
  transition-all duration-300"
  
          variant="primary"
        >
          Book a call
        </NavbarButton>
 
      </ul>
      
      
    </motion.div>
  );
};

// 

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={"/img_frame_39.svg"}
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
    "px-4   py-2 rounded-md bg-white button  text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-black",
    dark: "bg-black text-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-black shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
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
      <NavigationMenuItem key={item.title} className="font-bold   text-md  ">
        <NavigationMenuTrigger className="font-bold   text-md hover:text-black/50">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover bg-white  text-popover-foreground font-bold  text-md">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80 font-bold text-md text-black">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }


  return (
    <NavigationMenuItem key={item.title} className="font-bold  text-md hover:text-black/50 ">
      <Link className="group inline-flex px-4 py-2 " href={item.url}>{item.title}</Link>
    </NavigationMenuItem>

  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex text-black min-w-80 flex-row gap-4 rounded-md  p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
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
    </Link>
  );
};