"use client";
import Image from "next/image";

export default function ControlSection() {


  return (
    <section className="relative  text-black ">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Penetration Testing
            <br />
            Services
          </h2>

          <div className="">
            <h4 className="text-zinc-900 text-2xl max-w-xl font-bold">
              Identify Vulnerabilities Before Attackers Do
            </h4>
            <p className="text-zinc-700 text-lg max-w-xl mt-4">
              Our penetration testing services simulate real-world cyberattacks
              to identify vulnerabilities in your infrastructure, applications,
              and network environments. By adopting the perspective of an
              attacker, we uncover security weaknesses that automated scanners
              and traditional security tools often miss.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-(--color-neutral-3) border-2 border-gray-100 rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 ">
            {" "}
            {/* <div className="w-full"> */}
            <Image
              src="/what-is-firewall.jpg"
              alt={"Training Service"}
              width={392}
              height={266}
              className="w-full"
            />
            {/* </div> */}
            <div className="space-y-2">
              <div className="flex justify-between border-b-2 border-gray-100 pb-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-rethink font-medium text-text-secondary1">
                Types of Penetration
                <br /> Testing
              </h3>{" "}
              <div className="bg-[#5559D5] rounded-full p-2 w-12 h-12">
                <svg
                  fill="white"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.1 16.1"
                  xmlSpace="preserve"
                >
                  <path d="M13.8 3 7.3 0h-.5L.3 3q-.3.15-.3.6c0 4.6 2.1 8.9 5.8 11.7l1 .7c.2.2.5.2.7 0l.9-.7c3.6-2.8 5.7-7.1 5.7-11.7q0-.45-.3-.6M7.7 14.4l-.6.5-.6-.5C3.2 11.9 1.2 8 1.1 3.9L7 1.2l6 2.7c-.1 4.1-2.1 8-5.3 10.5M7.1 3c.3 0 .6.3.6.6V7h2.9c.3 0 .6.3.6.6s-.3.6-.6.6h-3v4.4c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.1H3.6c-.3 0-.6-.2-.6-.5s.3-.6.6-.6h2.9V3.6c0-.3.3-.6.6-.6" />
                </svg>
              </div></div>
              <p className="text-base sm:text-lg   text-text-muted1">
                How the targeted remediation of critical vulnerabilities
                strengthens IT and enhances organizational resilience against
                cyber attacks.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
