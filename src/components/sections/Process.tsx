"use client";

import Image from "next/image";
import { useState } from "react";
import { process } from "@/content/site";
import { Muted, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[44px]">
        <SectionHeader
          label={process.label}
          title={
            <>
              {process.title.lead}
              <Muted>{process.title.muted}</Muted>
            </>
          }
          body={process.body}
          titleClassName="lg:w-[570px] lg:shrink-0"
        />

        <Reveal className="flex w-full flex-col overflow-hidden rounded-[12px] lg:flex-row">
          <ol className="flex w-full shrink-0 flex-col justify-center border border-black bg-shade lg:w-[684px]">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              const isLast = i === process.steps.length - 1;
              // Active icon sits on white → needs dark strokes; inactive on dark → light strokes
              const wantTone = isActive ? "dark" : "light";
              const flip = step.iconTone !== wantTone;

              return (
                <li key={step.title} className={isLast ? "" : "border-b border-white/[0.08]"}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className="group flex w-full cursor-pointer items-start gap-[16px] p-[20px] text-left sm:p-[24px]"
                  >
                    <span
                      className={`flex size-[40px] shrink-0 items-center justify-center rounded-[8px] p-[10px] transition-colors duration-300 ${
                        isActive ? "bg-white" : "bg-white/[0.06] group-hover:bg-white/[0.12]"
                      }`}
                    >
                      <Image src={step.icon} alt="" width={20} height={20} className={flip ? "invert" : ""} />
                    </span>
                    <span className={`flex min-w-0 flex-1 flex-col gap-[12px] ${isActive && step.description ? "" : "pt-[5.5px]"}`}>
                      <span className="font-heading text-[20px] leading-[1.2] text-white sm:text-[24px]">{step.title}</span>
                      {step.description && (
                        <span
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive ? "grid-rows-[1fr] opacity-100" : "-mt-[12px] grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <span className="min-h-0 overflow-hidden text-[16px] leading-normal text-subtext">{step.description}</span>
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative min-h-[300px] min-w-0 flex-1 self-stretch overflow-hidden sm:min-h-[402px]">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image src="/images/texture.webp" alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 w-[calc(100%-32px)] max-w-[504px] -translate-x-1/2 -translate-y-1/2 rounded-[8px] border border-white/[0.13] bg-white/10 p-[6px] shadow-[0px_6px_14.1px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10.05px]">
              <div className="relative aspect-[492/274] w-full overflow-hidden rounded-[4px]">
                <Image
                  src="/images/process-board.webp"
                  alt="Strategy and journey-mapping board from a discovery workshop"
                  fill
                  sizes="(min-width: 1024px) 492px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
