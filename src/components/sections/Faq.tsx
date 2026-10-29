"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { faq } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Faq() {
  const [open, setOpen] = useState<number>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-[44px]">
        <Reveal className="flex w-full flex-col items-center gap-[24px]">
          <SectionLabel>{faq.label}</SectionLabel>
          <div className="flex w-full flex-col items-center gap-[14px] text-center leading-normal">
            <h2 className="w-full max-w-[709px] font-heading text-[32px] leading-[1.2] font-medium tracking-heading text-white sm:text-[38px] lg:text-[44px]">
              {faq.title}
            </h2>
            <p className="w-full max-w-[870px] text-[16px] text-subtext">{faq.body}</p>
          </div>
        </Reveal>

        <Reveal className="flex w-full max-w-[835px] flex-col">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const isLast = i === faq.items.length - 1;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div key={item.q} className={isLast ? "" : "border-b border-line"}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-4 py-[20px] text-left"
                  >
                    <span className="min-w-0 flex-1 font-heading text-[18px] leading-[1.2] text-white sm:text-[20px]">
                      {item.q}
                    </span>
                    {/* "Border" component: Default = minus (open), active = plus (closed) */}
                    <span className="flex shrink-0 items-center rounded-full border border-white/10 bg-black/40 p-[12px] transition-colors duration-300 group-hover:border-accent/60">
                      <Image
                        src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
                        alt=""
                        width={20}
                        height={20}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="-mt-[6px] pb-[20px] text-[16px] leading-normal text-white/80">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <PillButton href={faq.cta.href}>{faq.cta.label}</PillButton>
      </div>
    </section>
  );
}
