import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import Image from "next/image";
import type { HeroSection } from "@/types/home";

const HeroSection = ({ hero }: HeroSection) => {
  const videoUrl = hero?.backgroundVideo?.url;
  const imgUrl = hero?.backgroundImage?.url;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
    >
      {/* Background Video with Fallback */}

      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src={imgUrl || ""}
          alt={imgUrl}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video for desktop */}
      <div className="hidden lg:block">
        <BackgroundVideo src={videoUrl || ""} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70 lg:bg-black/25" />
      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-tight text-text-light1">
            {hero?.title.titleLine1}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {hero?.title.titleLine2}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {hero?.title.titleLine3}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-arial font-normal leading-relaxed max-w-3xl mx-auto text-text-2">
            {hero?.description}
          </p>
          <div className="pt-4">
            <Link href={hero?.Cta?.url || "/contact"}>
              <Button
                className="bg-[linear-gradient(113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%)]   hover:bg-[linear-gradient(113deg,#c62828_0%,#8b1c1c_50%,#5a0d0d_100%)]
  transition-all duration-300  border-border-secondary1 rounded-md text-sm sm:text-base py-6 cursor-pointer"
              >
                {hero?.Cta?.text}
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
