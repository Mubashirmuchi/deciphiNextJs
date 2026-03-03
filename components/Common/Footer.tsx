import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "./Wave";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Hero Section */}

      <div className="w-full  px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative w-full bg-[#b02123] rounded-2xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 overflow-hidden">
            {/* Background Image */}

            <BackgroundBeams />

            {/* Content Overlay */}
            <div className="relative  z-10 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <div className=" px-2 py-1 rounded mb-2">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-rethink font-medium text-white-1">
                    <span className="bg-gradient-to-b from-transparent to-red-800 px-2 border-b-4 border-[#E85744]">
                      Cybersecurity
                    </span>{" "}
                    Does Not Have
                  </h2>
                </div>
                <h2 className="text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl font-rethink font-medium text-white-1">
                  To Be Complicated.
                </h2>
              </div>

              <Link href="/contact">
                <Button className="cursor-pointer inline-flex items-center gap-2 bg-white  rounded-lg px-4 sm:px-6 py-1 hover:bg-opacity-90 transition-all duration-200 shadow-md">
                  <span className="text-sm sm:text-base font-arial text-text-footer1">
                    Contact us
                  </span>
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Company Info - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <Image
                  src="/images/img_frame_39.svg"
                  alt="Company Logo"
                  width={170}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
                <p className="text-base sm:text-lg font-arial leading-relaxed text-text-muted1">
                  Join our newsletter to stay up to date on features and
                  releases.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-bg-card1 rounded-lg p-4 sm:p-6 shadow-md max-w-sm">
                <div className="space-y-1 mb-2">
                  <p className="text-sm text-text-muted1">Contact</p>
                  <p className="text-base sm:text-lg font-rethink font-medium text-text-secondary1">
                    <a href="mailto:contact@deciphi.com">contact@deciphi.com</a>
                  </p>
                </div>
                <p className="text-base sm:text-lg font-rethink font-medium text-text-secondary1">
                  <a href="tel:+97441499289">+974 4149 9289</a>
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <Link
                href="/services"
                className="text-lg sm:text-xl font-rethink font-medium text-text-primary1"
              >
                Services
              </Link>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Cybersecurity Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Security Assessment & Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Cybersecurity Awareness Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    System Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    OT Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Cloud Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-rethink font-medium text-text-primary1">
                Explore
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/#about-us"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-choose-us"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Why choose us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="text-sm sm:text-base font-arial text-text-muted1 hover:text-text-primary1 transition-colors duration-200"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 border-t border-black/10 pt-6 sm:pt-8">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 order-2 sm:order-1">
              <a
                href="https://www.facebook.com/share/1JckRdEtuo/?mibextid=wwXIfr"
                className="w-8 h-8 bg-[hsl(var(--color-accent-dark))] rounded-full p-2 hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              >
                <Facebook color="white" />
              </a>
              <a
                href="https://x.com/teamdeciphi"
                className="w-8 h-8 bg-[hsl(var(--color-accent-dark))] rounded-full p-2 hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              >
                <Twitter color="white" />
              </a>
              <a
                href="https://www.instagram.com/teamdeciphi?igsh=YWg4aG5meDNqemQ3"
                className="w-8 h-8 bg-[hsl(var(--color-accent-dark))] rounded-full p-2 hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              >
                <Instagram color="white" />
              </a>
              <a
                href="https://www.linkedin.com/company/deciphi"
                className="w-8 h-8 bg-[hsl(var(--color-accent-dark))] rounded-full p-2 hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
              >
                <Youtube color="white" />
              </a>
            </div>

            {/* Links and Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2 text-center sm:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link
                  href="#"
                  className="text-sm font-arial text-text-secondary1 hover:text-text-primary1 transition-colors duration-200"
                >
                  Privacy & Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm font-arial text-text-secondary1 hover:text-text-primary1 transition-colors duration-200"
                >
                  Terms Condition
                </Link>
              </div>
              <p className="text-sm font-arial text-text-secondary1">
                Copyright © 2024. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
