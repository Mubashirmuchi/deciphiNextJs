import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import type { WhyChooseUs } from "@/types/home";

const ChooseUsSection = ({chooseUs}: {chooseUs: WhyChooseUs }) => {
  return (
    <section id="why-choose-us" className="w-full  pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Image and Features */}
          <div className="order-2 lg:order-2 space-y-6 relative">
            {/* Feature Tags */}
            <div className="space-y-3 lg:ml-8 xl:ml-16   ">
              <div className="lg:ml-8 xl:ml-16">
                <div className="absolute top-3 left-28 shadow-2xl bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                  <span className="bg-(--color-blue) rounded-full  ">
                    <Check color="white" fill="#0088FF" />
                  </span>

                  <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                  {chooseUs?.BulletPointsInsideImage[0]?.point||""}  
                  </span>
                </div>
              </div>
              <div className="absolute top-20 left-40 shadow-md bg-white  rounded-2xl px-6 py-2  flex gap-2 items-center">
                <span className="bg-(--color-blue) rounded-full  ">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1">
                    {chooseUs?.BulletPointsInsideImage[1]?.point||""}  
                </span>
              </div>
            </div>

            {/* Main Image */}
            {/* <div className="relative"> */}
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-4">
              <Image
                src={chooseUs?.cardImage?.url || ""}
                alt={chooseUs?.cardImage?.alternativeText || "Cybersecurity Dashboard"}
                width={382}
                height={494}
                className="w-full rounded-2xl shadow-lg h-118.25 "
              />
            </div>
            {/* </div> */}
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-1 space-y-8">
            <div className="space-y-6">
              <Button variant={"outline"} className="border border-black/10">
                <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
               {chooseUs?.label || "WHY CHOOSE US"}
              </Button>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -bottom-2 left-0 w-48 sm:w-56 md:w-64 h-16 sm:h-18 md:h-20 bg-accent-orange1 rounded opacity-80 -z-10" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit p-2">
                     {chooseUs?.title.titleLine1 || "Trusted"}
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
                    <span className="text-text-secondary1">  {chooseUs?.title.titleLine2 || "For a Reason"}</span>
                    <br />
                  </h2>
                </div>

                <p className="text-base sm:text-lg font-arial leading-relaxed text-text-secondary1">
                  {chooseUs?.description || ""}
                 
                </p>
              </div>
            </div>

            <Link href="/contact">
           
              <Button
                size="sm"
                className="bg-(--color-primary) text-white cursor-pointer"
              >
                {chooseUs?.Cta?.text || "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
