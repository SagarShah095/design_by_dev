"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { impact } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/** Counts up from 0 the first time the number scrolls into view. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  // The server renders the final number; the animation only rewrites the text node.
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          el.textContent = String(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>{value}</span>
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section id="impact" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[44px]">
        <SectionHeader label={impact.label} title={impact.title} body={impact.body} />

        <div className="flex w-full flex-col items-stretch gap-[24px] md:flex-row md:items-center">
          {impact.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className={`relative flex min-w-0 flex-1 flex-col items-start gap-[24px] overflow-hidden rounded-[12px] border border-[#181818] p-[24px] ${
                stat.highlight ? "" : "bg-shade"
              }`}
            >
              {stat.highlight ? (
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12px] bg-accent">
                  <Image src="/images/texture-rot90.webp" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="rounded-[12px] object-cover" />
                </div>
              ) : (
                <Image
                  src="/icons/impact-watermark.svg"
                  alt=""
                  aria-hidden
                  width={149}
                  height={151}
                  className="pointer-events-none absolute top-[-56px] right-[-13px] h-[151px] w-[149px]"
                />
              )}

              <p className="relative flex items-center gap-[6px] font-heading leading-[1.2] whitespace-nowrap text-white">
                <span className="text-[44px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[20px]">{stat.label}</span>
              </p>

              <Image
                src={stat.highlight ? "/icons/line-light.svg" : "/icons/line-dark.svg"}
                alt=""
                aria-hidden
                width={360.667}
                height={1}
                className="relative h-px w-full"
              />

              <p
                className={`relative min-h-[66px] w-full text-[16px] leading-normal ${
                  stat.highlight ? "text-white" : "text-subtext"
                }`}
              >
                {stat.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
