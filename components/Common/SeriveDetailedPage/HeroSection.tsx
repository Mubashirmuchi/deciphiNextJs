
// "use client";

// import { ArrowRight, Play } from "lucide-react";
// import { motion } from "motion/react";

// interface HeroProps {
//   tagline: string;
//   title: string;
//   highlight: string;
//   description: string;
//   cta: string;
// }

// export default function HeroSection({
//   tagline,
//   title,
//   highlight,
//   description,
//   cta,
// }: HeroProps) {
//   return (
  
//    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#ffffff] text-white">

//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(70,10,10,0.25),transparent_60%)]" />
// {/* (113deg,#ac1b1b_0%,#721212_50%,#460a0a_100%) */}
//       {/* Blur glass shape */}
//       <div className="absolute -right-50 -top-25 w-175 175 bg-red-700/20 blur-[180px] rounded-full" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        // <motion.div
        //   initial={{ opacity: 0, y: 30 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.6 }}
        //   className="max-w-4xl"
        // >

//           {/* Tagline */}
        //   <p className="text-sm tracking-wider text-zinc-400 mb-6">
        //  {tagline}
        //   </p>

//           {/* Headline */}
//           <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] mb-8 text-black/80
//           ">
//            {title}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c10a0a] to-white">
//               {" "}{highlight}.
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-zinc-400 max-w-2xl mb-10">
//            {description}
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap items-center gap-6">

//             <button className="flex items-center gap-3 bg-linear-to-r from-red-600 to-orange-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
//              {cta}
//               <ArrowRight size={18} />
//             </button>


//             {/* bg-gradient-to-b from-transparent to-red-800 px-2 border-b-4 border-[#E85744] */}

//           </div>

//         </motion.div>
//       </div>
//     </section>
    
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight,Play } from "lucide-react";
import { cn } from "@/lib/utils";



 type TitlePart = {
  text: string;
  highlight?: boolean;
};

interface HeroProps {
  tagline: string;
  title: TitlePart[];
  description: string;
  cta: string;
}


interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
}

export default function HeroSection({
  tagline,
  title,
  description,
  cta
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;
    let nodes: Node[] = [];
    const packets: { from: number; to: number; progress: number; speed: number }[] = [];
    let packetTimer = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const count = Math.floor((W * H) / 9000);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.02,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Pure white background — no color wash
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W, H);

      // Move nodes + bounce
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        if (node.x < 0 || node.x > W) node.vx *= -1;
        if (node.y < 0 || node.y > H) node.vy *= -1;
      });

      // Draw edges
      const maxDist = 200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            // const alpha = (1 - dist / maxDist) * 0.45;
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(172,27,27,${alpha})`;
            
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Spawn data packets
      packetTimer++;
      if (packetTimer > 45 && packets.length < 14) {
        packetTimer = 0;
        const fromIdx = Math.floor(Math.random() * nodes.length);
        let closest = -1, closestDist = Infinity;
        nodes.forEach((b, j) => {
          if (j === fromIdx) return;
          const dx = nodes[fromIdx].x - b.x;
          const dy = nodes[fromIdx].y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist && d < closestDist) { closestDist = d; closest = j; }
        });
        if (closest !== -1) {
          packets.push({ from: fromIdx, to: closest, progress: 0, speed: 0.01 + Math.random() * 0.015 });
        }
      }

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) { packets.splice(i, 1); continue; }
        const a = nodes[p.from], b = nodes[p.to];
        if (!a || !b) { packets.splice(i, 1); continue; }
        const px = a.x + (b.x - a.x) * p.progress;
        const py = a.y + (b.y - a.y) * p.progress;

        // Soft glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        // glow.addColorStop(0, "rgba(172,27,27,0.35)");
        glow.addColorStop(0, "rgba(172,27,27,0.35)");
        glow.addColorStop(1, "rgba(172,27,27,0)");
        ctx.fillStyle = glow;
        
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(172,27,27,0.85)";
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulse) * 0.5 + 0.5;

        // Outer pulse ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + pulse * 2.5, 0, Math.PI * 2);
        // ctx.strokeStyle = `rgba(172,27,27,${0.05 + pulse * 0.07})`;
        ctx.strokeStyle = `rgba(172,27,27,${0.02 + pulse * 0.05})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(172,27,27,${0.18 + pulse * 0.12})`;
        ctx.fillStyle = `rgba(172,27,27,${0.08 + pulse * 0.08})`;
        ctx.fill();
      });

      // Faint horizontal scan line (radar sweep feel)
      const scanY = ((t * 0.35) % (H + 60)) - 30;
      const scan = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      scan.addColorStop(0, "rgba(172,27,27,0)");
      
      // scan.addColorStop(0.5, "rgba(172,27,27,0.025)");
      scan.addColorStop(0.5, "rgba(172,27,27,0.016)");
      scan.addColorStop(1, "rgba(172,27,27,0)");
      ctx.fillStyle = scan;
      ctx.fillRect(0, scanY - 30, W, 60);

      t++;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden snap-start flex items-center bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-55"
        style={{ display: "block" }}
      />

      <motion.div
      

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // className="max-w-4xl"
     

      
      className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 lg:px-20">
        <motion.p
          className="text-[#ac1b1b] text-xs font-semibold uppercase tracking-[0.2em] mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {tagline}
        </motion.p>

           <motion.h1
      className={cn(
        "text-5xl max-w-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.3] tracking-tight mb-6",
        
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {title.map((part, i) =>
        part.highlight ? (
          <span
            key={i}
            className="inline bg-[#E85744] text-white px-3 py-1 rounded box-decoration-clone"
            style={{ WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}
          >
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </motion.h1>

     

        <motion.p
          className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
{description}
        </motion.p>

        <motion.button
          className="inline-flex items-center gap-3 bg-[#8b1515] hover:bg-[#721212] text-white font-semibold text-sm px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-900/20 hover:gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
         {cta}
          <ArrowRight size={16} strokeWidth={2.5} />
        </motion.button>
      </motion.div>
    </section>
  );
}