"use client";

import * as React from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { BookOpen, Leaf, Sparkles } from "lucide-react";

const PAGE_COUNT = 7;
const MOBILE_BREAKPOINT = "(max-width: 1023px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(MOBILE_BREAKPOINT);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync of the initial media query result
    setIsMobile(media.matches);
    const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}

export function Book3D() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 16, mass: 0.4 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!isMobile) return;
    // Sweeps the book from one tilt to the other as it travels through the viewport,
    // reusing the same mouse-driven rotation pipeline instead of duplicating it.
    mouseX.set(progress - 0.5);
    mouseY.set((progress - 0.5) * 0.6);
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[380px] w-full items-center justify-center [perspective:1600px] sm:h-[440px] lg:h-[520px]"
    >
      <motion.div
        style={{ rotateX, rotateY, x: translateX }}
        className="relative [transform-style:preserve-3d]"
      >
        <div className="relative h-[280px] w-[200px] [transform-style:preserve-3d] sm:h-[340px] sm:w-[244px] lg:h-[400px] lg:w-[288px]">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-r-md rounded-l-sm border border-border-subtle bg-gradient-to-br from-white to-slate-50 dark:from-slate-200 dark:to-slate-300"
              style={{ transform: `translateZ(${-4 - i * 3}px) translateX(${2 + i * 1.2}px)` }}
            />
          ))}

          <div
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-r-md rounded-l-sm border border-black/10 bg-gradient-to-br from-[#0F172A] via-[#151E33] to-[#0B0F1A] p-5 shadow-2xl sm:p-6"
            style={{ transform: "translateZ(14px)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 8px)",
              }}
            />
            <div className="relative flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-yellow">
                <BookOpen className="size-4 text-[#0F172A]" />
              </span>
              <span className="font-display text-sm font-bold tracking-wide text-white">ABEDIK</span>
            </div>

            <div className="relative">
              <div className="mb-2 h-1 w-10 rounded-full bg-brand-yellow" />
              <p className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                Wydanie
                <br />
                Premium
              </p>
              <p className="mt-1 text-xs text-white/60">Offset &middot; Hardcover</p>
            </div>

            <div className="relative flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-white/50">
              <span>Since 1994</span>
              <span>PL</span>
            </div>
          </div>

          <div
            className="absolute top-0 bottom-0 left-0 w-3 rounded-l-sm bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 dark:from-slate-500 dark:via-slate-300 dark:to-slate-500"
            style={{
              transform: "rotateY(90deg) translateZ(1.5px) translateX(-1.5px)",
              transformOrigin: "left",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 top-6 flex items-center gap-2 rounded-2xl border border-border-subtle bg-surface/90 px-3 py-2 shadow-lg backdrop-blur sm:left-0 sm:top-8"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-brand-emerald-soft">
          <Leaf className="size-3.5 text-brand-emerald" />
        </span>
        <span className="text-xs font-semibold text-foreground">FSC® certified</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-8 right-0 flex items-center gap-2 rounded-2xl border border-border-subtle bg-surface/90 px-3 py-2 shadow-lg backdrop-blur sm:right-2"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-brand-yellow-soft">
          <Sparkles className="size-3.5 text-brand-yellow" />
        </span>
        <span className="text-xs font-semibold text-foreground">26M+ ksiąg/rok</span>
      </motion.div>
    </div>
  );
}
