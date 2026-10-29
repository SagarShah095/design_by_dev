"use client";

import Image from "next/image";
import { useState } from "react";
import { services } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { Muted, SectionHeader } from "@/components/ui/SectionHeader";

const titleCls =
  "font-heading text-[24px] leading-[1.2] tracking-heading text-white sm:text-[30px] lg:text-[34px]";
const numberCls = "font-heading text-[16px] leading-[1.2] text-white sm:text-[20px]";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[44px]">
        <SectionHeader
          label={services.label}
          title={
            <>
              {services.title.lead}
              <Muted>{services.title.muted}</Muted>
            </>
          }
          body={services.body}
        />

        <ul className="flex w-full flex-col">
          {services.items.map((item, i) => {
            const number = String(i + 1).padStart(2, "0");
            const expandable = Boolean(item.description && item.image);
            const isOpen = expandable && active === i;
            const isLast = i === services.items.length - 1;

            return (
              <li key={item.title} className={isLast ? "" : "border-b border-line"}>
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
                  {/* Left Column: Heading at top, Description at bottom */}
                  <div className="flex min-w-0 flex-1 flex-col items-start justify-between px-0 sm:px-[24px]">
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`service-panel-${i}`}
                      className="group flex w-full cursor-pointer items-center gap-[16px] py-[26px] text-left sm:gap-[24px] sm:py-[34px]"
                    >
                      <span className={`${titleCls} transition-opacity group-hover:opacity-70`}>{item.title}</span>
                      <span className={numberCls}>{number}</span>
                    </button>

                    {expandable && (
                      <div
                        id={`service-desc-${i}`}
                        className={`grid w-full transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden" inert={!isOpen}>
                          <p className="w-full max-w-[560px] pb-[26px] text-[16px] leading-relaxed text-subtext sm:pb-[34px] lg:text-[17px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Image */}
                  {expandable && (
                    <div
                      id={`service-panel-${i}`}
                      onClick={() => !isOpen && setActive(i)}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-0 sm:px-[24px] lg:px-0 lg:pr-[24px] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 cursor-pointer"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden" inert={!isOpen}>
                        <div className="pb-[26px] sm:pb-[34px] lg:py-[24px]">
                          <div className="w-full shrink-0 rounded-[18px] bg-white/10 p-[4px] lg:w-[551px]">
                            <div className="relative h-[260px] w-full overflow-hidden rounded-[14px] sm:h-[382px]">
                              <Image
                                src={item.image!}
                                alt={`${item.title} example`}
                                fill
                                sizes="(min-width: 1024px) 551px, 100vw"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <PillButton href={services.cta.href}>{services.cta.label}</PillButton>
      </div>
    </section>
  );
}
