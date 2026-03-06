"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Activity,
  Bell,
  LayoutDashboard,
  Bot,
  Network,
  ChevronRight,
  Zap,
  Eye,
  Lock,
  MessageCircleCheck,
  Server,
  ChartNetwork,
  Mail,
  Laptop,
  Cloud,
  Globe,
  Fingerprint,
} from "lucide-react";

const tabs = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    title: "Complete Security Visibility",
    description:
      "A unified dashboard that surfaces every threat, alert, and anomaly across your entire network — in real time. Know your risk posture at a glance.",
    bullets: [
      "Real-time threat heatmaps",
      "Risk score per asset and user",
      "Executive & SOC-ready views",
    ],
    // Simulated dashboard UI
    visual: <DashboardVisual />,
  },
  {
    id: "xdr",
    icon: Shield,
    label: "Active XDR",
    title: "Active XDR Protection from Modern Threats",
    description:
      "Cross-layer detection and response that correlates signals across endpoints, network, cloud, and identity — stopping attacks before they spread.",
    bullets: [
      "Cross-layer threat correlation",
      "Automated kill-chain disruption",
      "MITRE ATT&CK mapped detections",
    ],
    visual: <XDRVisual />,
  },
  {
    id: "siem",
    icon: Activity,
    label: "SIEM",
    title: "A Comprehensive SIEM Solution",
    description:
      "Ingest, normalize, and analyze logs from every source. Our SIEM turns raw data into actionable intelligence with AI-powered correlation rules.",
    bullets: [
      "10,000+ log sources supported",
      "AI-powered correlation engine",
      "Compliance reporting built-in",
    ],
    visual: <SIEMVisual />,
  },
  {
    id: "alerts",
    icon: Bell,
    label: "Smart Alerts",
    title: "Alerts That Actually Matter",
    description:
      "Context-aware alerting eliminates noise. Our engine prioritizes by severity, asset criticality, and business impact — so your team acts on what counts.",
    bullets: [
      "Noise reduction up to 94%",
      "Priority scoring per alert",
      "Slack, email, PagerDuty integrations",
    ],
    visual: <AlertsVisual />,
  },
  {
    id: "agents",
    icon: Bot,
    label: "Agents",
    title: "Lightweight Agents, Maximum Coverage",
    description:
      "Deploy our agent to any endpoint in minutes. Zero performance impact, full telemetry — Windows, Linux, macOS, and cloud workloads covered.",
    bullets: [
      "< 1% CPU overhead",
      "Tamper-proof and self-healing",
      "Deploy via MDM, GPO, or CLI",
    ],
    visual: <AgentsVisual />,
  },
];

// ── VISUALS ──────────────────────────────────────────────

function DashboardVisual() {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl p-5 font-mono text-xs overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400 text-[11px]">
            Live — 1,284 assets monitored
          </span>
        </div>
        <span className="text-zinc-600 text-[11px]">
          06 Mar 2026 · 14:32 UTC
        </span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Critical", value: "3", color: "text-red-400" },
          { label: "High", value: "12", color: "text-orange-400" },
          { label: "Medium", value: "47", color: "text-yellow-400" },
          { label: "Resolved", value: "284", color: "text-emerald-400" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-lg p-3 border border-zinc-800"
          >
            <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
            <p className="text-zinc-500 text-[10px] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Chart bars */}
      <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800 mb-3">
        <p className="text-zinc-500 text-[10px] mb-3">
          Threat Activity — Last 24h
        </p>
        <div className="flex items-end gap-1 h-14">
          {[
            3, 7, 4, 9, 5, 12, 8, 6, 3, 15, 11, 7, 4, 8, 6, 10, 13, 9, 5, 7, 4,
            11, 8, 6,
          ].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              style={{ height: `${(h / 15) * 100}%`, originY: 1 }}
              className={`flex-1 rounded-sm ${
                h > 10 ? "bg-[#ac1b1b]" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Recent alerts */}
      <div className="space-y-1.5">
        {[
          {
            msg: "Lateral movement detected — 192.168.1.45",
            sev: "CRITICAL",
            color: "text-red-400",
          },
          {
            msg: "Brute force attempt — admin@corp.com",
            sev: "HIGH",
            color: "text-orange-400",
          },
          {
            msg: "Unusual outbound traffic — srv-db-02",
            sev: "MEDIUM",
            color: "text-yellow-400",
          },
        ].map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="flex items-center justify-between bg-zinc-900 rounded-lg px-3 py-2 border border-zinc-800"
          >
            <span className="text-zinc-400 text-[10px] truncate flex-1">
              {a.msg}
            </span>
            <span className={`text-[9px] font-bold ml-2 shrink-0 ${a.color}`}>
              {a.sev}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function XDRVisual() {
  const nodes = [
    { label: "Endpoint", x: 15, y: 20, icon: <Laptop className="w-5 h-5 text-white" /> },
    { label: "Network", x: 75, y: 20, icon: <Globe className="w-5 h-5 text-white" /> },
    { label: "Cloud", x: 15, y: 70, icon: <Cloud className="w-5 h-5 text-white" /> },
    { label: "Identity", x: 75, y: 70, icon: <Fingerprint className="w-5 h-5 text-white" /> },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl p-5 overflow-hidden relative">
      <p className="text-zinc-400 text-[11px] font-mono mb-4">
        XDR Correlation Engine — Active
      </p>

      {/* Network visualization */}
      <div className="relative flex-1" style={{ height: "220px" }}>
        {/* Center node */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#ac1b1b] to-[#721212] flex items-center justify-center z-10 border-2 border-[#ac1b1b]/50"
        >
          <Shield className="w-7 h-7 text-white" />
        </motion.div>

        {/* Pulse rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ac1b1b]/20"
            animate={{ scale: [0.8, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }}
            style={{ width: 64, height: 64 }}
          />
        ))}

        {/* Outer nodes */}
        {nodes.map((node, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg"
            >
              {node.icon}
            </motion.div>
            <span className="text-zinc-500 text-[9px] font-mono">
              {node.label}
            </span>
          </div>
        ))}

        {/* Animated connection lines via SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="#ac1b1b"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </svg>
      </div>

      {/* Threat stopped banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-3 flex items-center gap-2 bg-emerald-950/50 border border-emerald-800/40 rounded-lg px-4 py-2.5"
      >
        <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-emerald-400 text-[11px] font-mono">
          Attack chain disrupted in 0.3s — 4 layers correlated
        </span>
      </motion.div>
    </div>
  );
}

function SIEMVisual() {
  const logs = [
    {
      time: "14:32:01",
      src: "fw-edge-01",
      event: "BLOCKED inbound 45.33.32.156:4444",
      level: "WARN",
    },
    {
      time: "14:32:03",
      src: "auth-svc",
      event: "FAILED login user=admin host=10.0.0.5",
      level: "ERROR",
    },
    {
      time: "14:32:07",
      src: "srv-db-02",
      event: "Query spike — 3,200 req/s anomaly",
      level: "WARN",
    },
    {
      time: "14:32:11",
      src: "edr-agent",
      event: "Process injection attempt PID 4821",
      level: "CRIT",
    },
    {
      time: "14:32:15",
      src: "cloud-gw",
      event: "IAM role escalation — arn:aws:iam::921",
      level: "CRIT",
    },
    {
      time: "14:32:19",
      src: "vpn-gw",
      event: "AUTH success user=j.doe ip=91.205.4.2",
      level: "INFO",
    },
  ];

  const levelColor: Record<string, string> = {
    CRIT: "text-red-400",
    ERROR: "text-orange-400",
    WARN: "text-yellow-400",
    INFO: "text-zinc-500",
  };

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl p-5 font-mono overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-[11px]">
          Log Stream — 10,284 events/min
        </p>
        <div className="flex gap-1">
          {["CRIT", "ERROR", "WARN"].map((l) => (
            <span
              key={l}
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-900 ${levelColor[l]}`}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-1.5 overflow-hidden">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-start gap-2 text-[10px] leading-relaxed"
          >
            <span className="text-zinc-600 shrink-0">{log.time}</span>
            <span className="text-[#ac1b1b]/70 shrink-0 w-20 truncate">
              {log.src}
            </span>
            <span className={`shrink-0 font-bold ${levelColor[log.level]}`}>
              {log.level}
            </span>
            <span className="text-zinc-400 truncate">{log.event}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 bg-zinc-900 border border-zinc-800 rounded-lg p-3"
      >
        <p className="text-zinc-500 text-[10px] mb-2">
          AI Correlation — New Rule Triggered
        </p>
        <p className="text-[#ac1b1b] text-[11px]">
          ⚡ Brute force → DB spike → IAM escalation correlated across 3 sources
        </p>
      </motion.div>
    </div>
  );
}

function AlertsVisual() {
  const alerts = [
    {
      title: "Ransomware Behavior Detected",
      asset: "DESKTOP-JK92",
      time: "just now",
      sev: "CRITICAL",
      sevColor: "bg-red-500",
    },
    {
      title: "Privileged Account Anomaly",
      asset: "admin@corp.com",
      time: "2m ago",
      sev: "HIGH",
      sevColor: "bg-orange-500",
    },
    {
      title: "Unusual DNS Queries",
      asset: "srv-web-01",
      time: "5m ago",
      sev: "MEDIUM",
      sevColor: "bg-yellow-500",
    },
    {
      title: "Port Scan from Internal Host",
      asset: "192.168.4.77",
      time: "12m ago",
      sev: "MEDIUM",
      sevColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl p-5 font-mono overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-[11px]">Smart Alert Queue</p>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
          94% noise filtered
        </span>
      </div>

      <div className="space-y-2">
        {alerts.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center gap-3"
          >
            <div className={`w-1.5 h-10 rounded-full shrink-0 ${a.sevColor}`} />
            <div className="flex-1 min-w-0">
              <p className="text-zinc-200 text-[11px] font-semibold truncate">
                {a.title}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-zinc-600 text-[10px]">{a.asset}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-zinc-600 text-[10px]">{a.time}</span>
              </div>
            </div>
            <span
              className={`text-[9px] font-bold shrink-0 ${
                a.sev === "CRITICAL"
                  ? "text-red-400"
                  : a.sev === "HIGH"
                    ? "text-orange-400"
                    : "text-yellow-400"
              }`}
            >
              {a.sev}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 flex gap-2"
      >
        {[
          { label: "Sent to Slack", icon:<MessageCircleCheck className="w-4"/> },
          { label: "PagerDuty", icon: <ChartNetwork className="w-4"/> },
          { label: "Email SOC", icon: <Mail className="w-4"/>},
        ].map((i, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-[10px] text-zinc-500"
          >
            <span>{i.icon}</span>
            <span>{i.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function AgentsVisual() {
  const agents = [
    { host: "DESKTOP-JK92", os: "Windows 11", status: "active", cpu: "0.4%" },
    { host: "macbook-sarah", os: "macOS 14", status: "active", cpu: "0.6%" },
    { host: "srv-db-02", os: "Ubuntu 22.04", status: "active", cpu: "0.3%" },
    { host: "srv-web-01", os: "RHEL 9", status: "active", cpu: "0.5%" },
    { host: "ec2-prod-443", os: "Amazon Linux", status: "active", cpu: "0.4%" },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl p-5 font-mono overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-[11px]">
          Agent Fleet — 1,284 deployed
        </p>
        <span className="text-[10px] text-emerald-400">All healthy</span>
      </div>

      <div className="space-y-2 mb-4">
        {agents.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-zinc-300 text-[11px] flex-1 font-semibold">
              {a.host}
            </span>
            <span className="text-zinc-600 text-[10px] w-28 truncate">
              {a.os}
            </span>
            <span className="text-zinc-500 text-[10px] w-8 text-right">
              {a.cpu}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Avg CPU", value: "0.4%", color: "text-emerald-400" },
          { label: "Coverage", value: "100%", color: "text-[#ac1b1b]" },
          { label: "Platforms", value: "5 OS", color: "text-zinc-300" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-center"
          >
            <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
            <p className="text-zinc-600 text-[9px] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const [paused, setPaused] = useState(false);

  const active = tabs[activeTab];

  //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTab((prev) => (prev + 1) % tabs.length);
  //   }, 5000); // switch every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      onMouseLeave={() => setPaused(false)}
      className="relative bg-white py-28 px-6 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-[#ac1b1b]/6 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#721212]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#ac1b1b] font-semibold mb-4">
            Security Platform
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-[1.1] mb-4 max-w-3xl mx-auto">
            One Platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ac1b1b] to-[#721212]">
              Total Visibility.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Active XDR protection from modern threats. A comprehensive SIEM
            solution. Built for the speed of today&apos;s adversaries.
          </p>
        </motion.div>

        {/* Tab bar */}
        {/* <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#ac1b1b] to-[#721212] text-white shadow-lg shadow-[#ac1b1b]/20"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div> */}

        {/* Tab bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={i}
                onClick={() => {
                  setActiveTab(i);
                  setPaused(true);
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-[#ac1b1b] to-[#721212] text-white shadow-lg shadow-[#ac1b1b]/20"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700"
                }`}
              >
                {/* Progress sweep on active tab */}
                {isActive && !paused && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            Left — text
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ac1b1b]/8 border border-[#ac1b1b]/20 rounded-full px-3 py-1 mb-5">
                <active.icon className="w-3.5 h-3.5 text-[#ac1b1b]" />
                <span className="text-xs text-[#ac1b1b] font-semibold">{active.label}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-[1.2] mb-5">
                {active.title}
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed mb-7">
                {active.description}
              </p>

              <ul className="space-y-3 mb-8">
                {active.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-zinc-700 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ac1b1b]/10 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 text-[#ac1b1b]" />
                    </div>
                    {b}
                  </motion.li>
                ))}
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#ac1b1b] to-[#721212] text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#ac1b1b]/25 transition-all duration-200 text-sm">
                See {active.label} in action
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            Right — visual
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200">
              {active.visual}

              Reflection shine
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </AnimatePresence> */}

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeTab + "-text"}
              initial={{ opacity: 0, filter: "blur(4px)", y: 12 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", y: -12 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Left — text */}
              <div className="inline-flex items-center gap-2 bg-[#ac1b1b]/8 border border-[#ac1b1b]/20 rounded-full px-3 py-1 mb-5">
                <active.icon className="w-3.5 h-3.5 text-[#ac1b1b]" />
                <span className="text-xs text-[#ac1b1b] font-semibold">
                  {active.label}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-[1.2] mb-5">
                {active.title}
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed mb-7">
                {active.description}
              </p>

              <ul className="space-y-3 mb-8">
                {active.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3 text-zinc-700 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ac1b1b]/10 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 text-[#ac1b1b]" />
                    </div>
                    {b}
                  </motion.li>
                ))}
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#ac1b1b] to-[#721212] text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#ac1b1b]/25 transition-all duration-200 text-sm">
                Get a Demo 
                {/* {active.label} in action */}
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right — visual */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab + "-visual"}
                initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                {active.visual}
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl z-10" />
          </div>
        </div>
        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 rounded-2xl overflow-hidden"
        >
          {[
            {
              icon: Eye,
              label: "Full Visibility",
              sub: "Every asset, every event",
            },
            {
              icon: Zap,
              label: "0.3s Response",
              sub: "Automated threat disruption",
            },
            {
              icon: Lock,
              label: "Zero Trust Ready",
              sub: "Identity-first architecture",
            },
            {
              icon: Network,
              label: "Any Environment",
              sub: "Cloud, on-prem, hybrid",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white px-6 py-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ac1b1b]/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#ac1b1b]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.label}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
