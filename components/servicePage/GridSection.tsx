

"use client";

import React from "react";
import Image from "next/image";
import { BentoGridItem } from "@/components/ui/bentogrid";
import type { AccordianItem, File } from "@/types/home";

import {
  CheckCircle,
  Mail,
  MessageSquareIcon,
  PlayIcon,
  Shield,
} from "lucide-react";

interface GridSectionProps {
  cardImage: File;
  accordian: AccordianItem[];
}


const iconMap = {
  CheckCircle,
  Mail,
  MessageSquareIcon,
  PlayIcon,
  Shield,
};


const GridSection = ({ cardImage, accordian }: GridSectionProps) => {
  const getIcon = (iconName: string | number | symbol) =>
    iconMap[String(iconName) as keyof typeof iconMap] ?? Shield;

  return (
    <div className="parent grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:max-h-[70vh]">
      
      {/* Card 1 */}
      <div className="p-2 flex flex-col bg-neutral-100">
        <BentoGridItem
          icon={getIcon(String(accordian[0]?.icon))}
          title={accordian[0]?.title}
          description={accordian[0]?.description}
        />
      </div>

      {/* Card 2 */}
      <div className="p-2">
        <BentoGridItem
          icon={getIcon(accordian[1]?.icon)}
          title={accordian[1]?.title}
          description={accordian[1]?.description}
        />
      </div>

      {/* Card 3 */}
      <div className="p-2">
        <BentoGridItem
          icon={getIcon(accordian[2]?.icon)}
          title={accordian[2]?.title}
          description={accordian[2]?.description}
        />
      </div>

      {/* Center Image */}
      <div
        className="hidden md:block p-2 rounded-2xl"
        style={{
          gridColumn: "2 / 3",
          gridRow: "1 / 4",
        }}
      >
        <Image
          width={500}
          height={500}
          src={cardImage?.url || ""}
          alt={cardImage?.alternativeText || "Grid Image"}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Card 4 */}
      <div className="p-2">
        <BentoGridItem
          icon={getIcon(accordian[3]?.icon)}
          title={accordian[3]?.title}
          description={accordian[3]?.description}
        />
      </div>

      {/* Card 5 */}
      <div className="p-2">
        <BentoGridItem
          icon={getIcon(accordian[4]?.icon)}
          title={accordian[4]?.title}
          description={accordian[4]?.description}
        />
      </div>
          <div className="p-2">
        <BentoGridItem
          icon={getIcon(accordian[5]?.icon)}
          title={accordian[5]?.title}
          description={accordian[5]?.description}
        />
      </div>
    </div>
  );
};

export default GridSection;