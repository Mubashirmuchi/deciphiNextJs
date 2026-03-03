import { cn } from "@/lib/utils";

interface BentoGridItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
}


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};



export const BentoGridItem = ({
  icon: Icon,
  title,
  description,
}: 

BentoGridItemProps

) => {
  return (
    <div
      className={cn(
        "group/bento h-full   shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:bg-[var(--color-neutral-1)]  dark:shadow-none",
        
      )}
    >
    
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <Icon   className="text-[#D87F6E] w-6" />
        <div className="mt-2 mb-2 font-sans font-bold  ">{title}</div>
        <div className="font-sans text-xs font-normal text-neutral-600 ">
          {description}
        </div>
      </div>
    </div>
  );
};




