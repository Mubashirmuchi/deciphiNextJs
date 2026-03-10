import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const TextChip = ({
  badge = "Guided by Best Practices, Powered by Innovation",
  badgeClassName = "text-black",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "mt-8 sm:mt-10 lg:mt-12 flex flex-col gap-4 sm:gap-6 max-w-2xl",
        className
      )}
    >
      <div
        className={`flex  items-center gap-2 sm:gap-3 bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-800 ${badgeClassName}`}
      >
        <span className="  p-2  bg-blue-500 rounded-full">
          <Check size={12} height={12} width={12} color="white" />
        </span>
        <span className="font-medium ">{badge}</span>
      </div>
    </div>
  );
};

export default TextChip;
