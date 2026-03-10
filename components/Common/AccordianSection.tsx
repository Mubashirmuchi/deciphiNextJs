
"use client";


import  { useState  } from 'react'

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";
import {
  Check,
  Cloud,
  Database,
  Globe,
  IdCard,
  MousePointerClick,
  ShieldAlert,
} from "lucide-react";
import {
  motion,

} from "motion/react";
import { AccordianItem } from '@/types/home';
const Accordian = ({accordianData}:{accordianData:AccordianItem[]}) => {
    const [value, setValue] = useState<string>("item-0");
    const iconMap = {
    Check,
    Cloud,
    Database,
    Globe,
    IdCard,
    MousePointerClick,
    ShieldAlert,
  };
  return (
   <Accordion
  value={value}
  onValueChange={setValue}
  type="single"
  collapsible
  className="max-w-lg my-4 w-full space-y-3"
>
  {accordianData.map(
    ({ title, description, icon }, index) => {
      const Icon = iconMap[icon as keyof typeof iconMap];

      return (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          onMouseEnter={() => setValue(`item-${index}`)}
          className="border border-black/10 rounded-md p-2 px-3"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-45">
              
              <div className="flex items-start gap-3 text-(--color-text-1) font-semibold">
                <Icon color="var(--color-text-1)" />
                {title}
              </div>

              <Plus className="h-5 w-5 shrink-0 transition-transform duration-300" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content forceMount asChild>
  <motion.div
 

      initial={{ height: 0, opacity: 0 }}
              animate={
                value === `item-${index}`
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0.3 }
              }
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
              }}
              className="overflow-hidden text-black/80"
  >
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={
        value === `item-${index}`
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 15 }
      }
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="pb-4 pt-2"
    >
      {description}
    </motion.p>
  </motion.div>
</AccordionPrimitive.Content>
          
        </AccordionItem>
      );
    },
  )}
</Accordion>
  )
}

export default Accordian
