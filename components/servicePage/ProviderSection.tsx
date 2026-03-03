import React from "react";
import { Button } from "../ui/button";
import GridSection from "./GridSection";
import type { ProvideSection } from "@/types/service";

const ProvideSection = ({provideSection}:{provideSection:ProvideSection}) => {
  return (
    <section className="min-h-screen  p-4 sm:p-6 lg:p-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Button
            variant={"outline"}
            className="border border-black/10 relative bg-white"
          >
            <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
            {provideSection?.label || "what we provide"}
          </Button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
           { provideSection?.title||" Navigate regulatory complexity. Manage risk."}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
     {     provideSection?.description || "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals."}
          </p>
        </div>

        <GridSection cardImage={provideSection?.cardImage} accordian={provideSection?.accordian} />
      </div>
    </section>
  );
};

export default ProvideSection;
