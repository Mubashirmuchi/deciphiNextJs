import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Grid from "./grid";
import type { ServiceSection } from "@/types/home";

const ServicesSection = ({ServiceSection}:{ServiceSection:ServiceSection}) => {
 return (
    <section className="relative  flex flex-col gap-5 w-full  bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* dark:bg-black */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#fff_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#BFBDBD_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none bg-white absolute inset-0 flex  mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] ">
        {/* dark:bg-black */}
      </div>
      <Button
        variant={"outline"}
        className="border border-black/10 relative bg-whit self-start"
      >
        <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
        {ServiceSection?.label || "OUR SERVICES"}
      </Button>
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
        <span className=" p-2 mr-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit">
        {ServiceSection?.title.titleLine1}
        </span>
         {ServiceSection?.title.titleLine2}
        <br />
      </h2>

      <p className="relative max-w-5xl text-base sm:text-lg font-arial leading-relaxed text-black/60">
         {ServiceSection?.description}
      </p>
      <Grid services={ServiceSection?.card} />
    </section>
  );
};

export default ServicesSection;
