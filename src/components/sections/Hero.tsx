import Image from "next/image";
import { hero } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { LogoMarquee } from "./LogoMarquee";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section id="top" className="bg-black p-[10px]">
      <div className="relative flex h-[calc(100svh-20px)] min-h-[640px] w-full flex-col items-start justify-between overflow-hidden rounded-[12px] lg:max-h-[940px] lg:min-h-[760px]">
        {/* Background layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12px] bg-black">
          <Image src="/images/hero-bg-2.webp" alt="" fill priority sizes="100vw" className="rounded-[12px] object-cover" />
          <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-black/0 to-black/80" />
        </div>

        <Navbar />

        <div className="relative flex w-full flex-col items-start justify-center gap-[24px] px-5 md:px-10 lg:px-[80px]">
          <div className="flex w-full max-w-[833px] flex-col items-start gap-[14px] leading-normal text-white">
            <h1 className="font-heading text-[40px] leading-[1.2] font-medium tracking-heading sm:text-[52px] lg:text-[64px]">
              {hero.title}
            </h1>
            <p className="text-[17px] sm:text-[20px]">{hero.body}</p>
          </div>
          <PillButton href={hero.cta.href}>{hero.cta.label}</PillButton>
        </div>

        <div className="relative w-full">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
