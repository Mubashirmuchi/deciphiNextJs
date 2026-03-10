export const penetrationPage = {
  hero: {
    tagline: "Security Testing",
    // title: "Identify Weaknesses",
    // highlight: "Before Attackers Do",
    title:[
  { text: "Connect Systems" },
  { text: "Securely", highlight: true },
  { text: "  & Seamlessly" },
],

    description:
      "Simulate real-world cyberattacks to uncover vulnerabilities in your systems, applications, and networks before they can be exploited.",
    cta: "Start Security Assessment",
  },

  benefits: {
    title: "Realistic Attack Simulations",
    description:
      "Our penetration testing services help organizations uncover vulnerabilities and strengthen defenses through controlled attack simulations.",
    features: [
      {
        icon: "ShieldCheck",
        title: "Identify Critical Vulnerabilities",
        desc: "Discover weaknesses across your infrastructure before attackers exploit them.",
      },
      {
        icon: "BarChart2",
        title: "Prioritized Risk Insights",
        desc: "Understand which vulnerabilities pose the highest risk to your organization.",
      },
      {
        icon: "Monitor",
        title: "Security Control Validation",
        desc: "Test the effectiveness of your existing security measures.",
      },
      {
        icon: "Users",
        title: "Realistic Attack Scenarios",
        desc: "Simulate real adversary tactics to evaluate your security posture.",
      },
    ],
  },

  services: [
    {
      icon: "Network",
      tag: "01",
      title: "Network Penetration Testing",
      description:
        "Evaluate internal and external networks to identify vulnerabilities, misconfigurations, and potential attack paths.",
      es: "Testing includes:",
      points: [
        "External attack surface analysis",
        "Internal network privilege escalation testing",
        "Firewall and segmentation validation",
        "Lateral movement simulations",
      ],
      size: "large",
    },
    {
      icon: "Globe",
      tag: "02",
      title: "Web Application Testing",
      description:
        "Identify vulnerabilities in web applications including injection flaws, authentication weaknesses, and insecure configurations.",
      es: "Coverage includes:",
      points: [
        "OWASP Top 10 vulnerability testing",
        "Authentication and authorization flaws",
        "API security testing",
        "Input validation analysis",
      ],
      size: "small",
    },
    {
      icon: "Smartphone",
      tag: "03",
      title: "Mobile Application Testing",
      description:
        "Comprehensive security testing for iOS and Android applications to identify vulnerabilities and protect sensitive data.",
      es: "Testing includes:",
      points: [
        "Static and dynamic analysis",
        "Insecure data storage testing",
        "Authentication weaknesses",
        "API communication security",
      ],
      size: "small",
    },
  ],
}