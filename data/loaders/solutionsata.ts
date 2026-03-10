/**
 * solutions.data.ts
 *
 * CMS-ready data for the Solutions "Built for You" section.
 * Replace `image` URLs with your actual CMS/Cloudinary URLs.
 * The `tags` array renders as floating pill badges over the image.
 */

export interface SolutionTag {
  label: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: SolutionTag[];
}

export interface SolutionsSectionData {
  label: string;                          // overline — "SOLUTIONS"
  title: { highlight: string; rest: string }; // "Built" / "for You"
  description: string;
  items: SolutionItem[];
}

// ── Seed data ─────────────────────────────────────────────────────────
export const solutionsData: SolutionsSectionData = {
  label: "Solutions",
  title: {
    highlight: "Built",
    rest: "for You",
  },
  description:
    "We design cybersecurity solutions around your unique needs—no templates, no fluff. Just smart, effective protection that fits your business.",

  items: [
    {
      id: "iam",
      title: "Identity and Access Management",
      description:
        "At Deciphi, we offer more than just cybersecurity—we provide peace of mind. Backed by real-world experience and deep technical expertise, we tailor solutions that protect your people, systems, and data.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
      imageAlt: "Workers collaborating on a construction structure",
      tags: [
        { label: "Single Sign-On (SSO)" },
        { label: "Privileged Access Management (PAM)" },
        { label: "Multi-Factor Authentication (MFA)" },
      ],
    },
    {
      id: "network",
      title: "Network Security",
      description:
        "Comprehensive network protection that monitors, detects, and responds to threats in real time—keeping your infrastructure resilient against evolving attack vectors.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
      imageAlt: "Network server infrastructure",
      tags: [
        { label: "Firewall Management" },
        { label: "Intrusion Detection (IDS/IPS)" },
        { label: "Zero Trust Network Access" },
      ],
    },
    {
      id: "endpoint",
      title: "Endpoint Security",
      description:
        "Protect every device in your fleet—from laptops to servers—with intelligent endpoint detection, response, and hardening strategies built for modern threats.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80",
      imageAlt: "Security monitoring dashboard",
      tags: [
        { label: "EDR / XDR" },
        { label: "Device Hardening" },
        { label: "Patch Management" },
      ],
    },
    {
      id: "data",
      title: "Data Security",
      description:
        "Safeguard sensitive data wherever it lives—at rest, in transit, or in use—through encryption, DLP policies, and rigorous classification frameworks.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80",
      imageAlt: "Data center with server racks",
      tags: [
        { label: "Data Loss Prevention (DLP)" },
        { label: "Encryption at Rest & Transit" },
        { label: "Data Classification" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Security",
      description:
        "End-to-end cloud security from configuration reviews to runtime protection, ensuring your cloud environments stay compliant and secure at every layer.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
      imageAlt: "Cloud infrastructure visualization",
      tags: [
        { label: "Cloud Security Posture (CSPM)" },
        { label: "Cloud Config Review" },
        { label: "Container Security" },
      ],
    },
    {
      id: "appsec",
      title: "Application Security",
      description:
        "Embed security into every stage of your SDLC with automated code scanning, penetration testing, and runtime application self-protection strategies.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
      imageAlt: "Developer writing secure code",
      tags: [
        { label: "SAST / DAST Scanning" },
        { label: "Penetration Testing" },
        { label: "Runtime App Protection (RASP)" },
      ],
    },
  ],
};