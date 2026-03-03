import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import TextChip from "@/components/Common/storyChip";
import { ServiceHero } from "@/types/service";


const HeroSection = ({ hero }: ServiceHero) => {
  return (
    <section>
      <div className="bg-(--color-neutral-1)">
        <div className="flex  flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:pb-5 md:pt-40 pt-40">
          {/* Top content */}
          <Button
            variant={"outline"}
            className="border border-black/10 relative bg-white"
          >
            <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
            {hero?.label || "CYBERSECURITY CONSULTING"}
          </Button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-snug md:leading-tight xl:leading-snug text-gray-900">
            {hero?.title.titleLine1 || "Navigate regulatory complexity."} <br />
            {hero?.title.titleLine2 || "Manage risk."}{" "}
            <span className="bg-[#E85744] text-white p-2 rounded">
              {hero?.title.titleLine3 || "Build trust."}
            </span>
          </h1>

          <p className="text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
            {hero?.description ||
              "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals."}
          </p>
        </div>

        {/* Full-width image section */}
        <div className="relative w-full mt-24 ">
          {/* Quote box */}
          <div className="absolute top-2 bg-white left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-lg rounded-xl p-6 z-10 w-[86%]  md:max-w-2xl border border-gray-200 py-10">
            <svg
              className="absolute top-[-9vw] left-[4vw] sm:top-[-2.4vw] sm:left-[2vw] md:top-[-3.4vw] md:left-[2vw] lg:top-[-2vw] lg:left-[2vw] w-[20vw] h-[18vw] sm:w-[15vw] sm:h-[13vw] max-w-[40px] max-h-[72px]"
              viewBox="0 0 86 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M0 37.4991L16.7947 -0.000976562H35.1161L19.0848 37.4991H35.1161V71.999H0V37.4991Z"
                fill="#416CEE"
              />
              <path
                d="M50.3838 37.499L67.1785 -0.00109863H85.4999L69.4686 37.499H85.4999V71.9989H50.3838V37.499Z"
                fill="#416CEE"
              />
            </svg>

            <p className="text-gray-700 text-lg ">
              {hero?.BulletPointsInsideImage ||
                "In a connected world, trust is your most valuable currency — and security is how you protect it."}
            </p>
          </div>

          <div className="relative w-full mt-6 h-100px md:h-h-150 px-4 sm:px-6 lg:px-14  max-w-7xl mx-auto ">
            <Image
              src={hero?.cardImage?.url}
              alt={hero?.cardImage?.alternativeText || "hero"}
              width={1920}
              height={600}
              className="rounded-xl object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="flex-1 space-y-6 relative min-h-50">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-rethink font-bold leading-tight text-gray-900">
              {hero?.title2 || "Smarter. Safer. Deciphi."}
            </h1>
            <TextChip
              badge={
                hero?.BulletPoints2?.[0]?.point ||
                "Your Trusted Partner in Cybersecurity Excellence"
              }
              badgeClassName="bg-gray-100 absolute bottom-18 left-8"
            />
            <TextChip
              badge={
                hero?.BulletPoints2?.[1]?.point ||
                "Guided by Best Practices, Powered by Innovation"
              }
              badgeClassName="bg-gray-100  absolute bottom-0 left-0"
            />
          </div>

          <div className="flex-1 space-y-6 lg:pt-4">
            <p className="text-lg sm:text-xl lg:text-xl font-arial leading-relaxed text-gray-600">
              {hero?.bottomDescription.titleLine1 ||
                "We connect the dots — so you don&apos;t have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat."}
            </p>
            <p className="text-lg sm:text-xl lg:text-xl font-arial leading-relaxed text-gray-600">
              {hero?.bottomDescription.titleLine2 ||
                "With Deciphi, you get more than just a service provider — you get a trusted partner committed to your success in an ever-evolving digital landscape."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
