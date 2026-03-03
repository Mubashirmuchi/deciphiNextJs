import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Check, Clock, Lock, Presentation, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { AboutUs } from "@/types/home";

const AboutSection = ({ about }: { about: AboutUs }) => {
  return (
    <section id="about-us" className="w-full  py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Image and Features */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-4 relative">
            <Image
              src={about.cardImage?.url || ""}
              alt={about.cardImage?.alternativeText || "About Us Image"}
              width={382}
              height={494}
              className="w-full rounded-2xl shadow-lg h-144.5 object-cover"
            />
            <div className="space-y-3 lg:ml-8 xl:ml-16">
              <div className="absolute top-3 left-0 md:left-3 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
                <span className="bg-(--color-blue) rounded-full shrink-0">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1 w-full">
                  {about.BulletPointsInsideImage[0]?.point ||
                    "Simplify Compliance jhjhhj Automated Reporting Tools"}
                </span>
              </div>
              <div className="absolute top-16 right-0 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
                <span className="bg-(--color-blue) rounded-full shrink-0">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm font-space font-normal leading-4 text-text-dark1 w-full">
                  {about.BulletPointsInsideImage[1]?.point ||
                    "Get Expert Support When You Need It, On-Demand"}
                </span>
              </div>
              <div className="absolute top-29.25 left-0 w-full max-w-95.5 shadow-md bg-white rounded-2xl px-4 py-2 flex gap-2 items-center">
                <span className="bg-(--color-blue) rounded-full shrink-0">
                  <Check color="white" fill="#0088FF" />
                </span>
                <span className="text-xs sm:text-sm  font-space font-normal leading-4 text-text-dark1 w-full">
                  {about.BulletPointsInsideImage[2]?.point ||
                    "Stay Protected 24/7 with Real-Time Threat Monitoring"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <Button variant={"outline"} className="border border-black/10">
                <div className="bg-green-600 w-2 h-2 rounded-full mr-2 "></div>
                {about.label || "About Us"}
              </Button>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -bottom-2 left-0 w-48 sm:w-56 md:w-64 h-16 sm:h-18 md:h-20 bg-accent-orange1 rounded opacity-80 -z-10" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight ">
                    <span className="text-text-secondary1">
                      {about.title.titleLine1 || "Smarter. Safer."}
                    </span>
                    <br />
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-rethink font-medium leading-tight  bg-[#E85744] text-white w-fit p-2">
                    {about.title.titleLine2 || "Deciphi."}
                  </h2>
                </div>

                <p className="text-base sm:text-lg font-arial leading-relaxed text-text-secondary1">
                  {about.description}{" "}
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button
                size="sm"
                className="cursor-pointer bg-(--color-primary) text-white hover:bg-[#71120f] transition-all duration-300"
              >
                {about.Cta?.text || "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-y border-black/5">
          {/* Item 1 */}
          <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
            <ShieldCheck color="#595856" />

            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              {about.BulletPoints2[0]?.point}
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center p-4 sm:p-6">
            <Lock color="#595856" />

            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              {about.BulletPoints2[1]?.point}
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border-b border-black/5">
          {/* Item 1 */}
          <div className="flex items-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-black/10">
            <Presentation color="#595856" />

            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              {about.BulletPoints2[2]?.point}
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center p-4 sm:p-6">
            <Clock color="#595856" />

            <span className="ml-3 text-base sm:text-lg font-arial text-text-secondary1">
              {about.BulletPoints2[3]?.point}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
