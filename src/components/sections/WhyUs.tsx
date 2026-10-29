import Image from "next/image";
import { whyUs } from "@/content/site";
import { Muted, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const plainCard =
  "flex min-h-[280px] gap-[32px] min-w-0 flex-1 flex-col items-start justify-between rounded-[12px] border border-white/[0.08] bg-shade p-[20px] sm:h-[440px] sm:min-h-0";

export function WhyUs() {
  const { partners, roi, collective } = whyUs.cards;

  return (
    <section id="why-us" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[44px]">
        <SectionHeader
          label={whyUs.label}
          title={
            <>
              {whyUs.title.lead}
              <Muted>{whyUs.title.muted}</Muted>
            </>
          }
          body={whyUs.body}
        />

        <div className="flex w-full flex-col items-stretch gap-[16px] md:flex-row">
          <Reveal className={`${plainCard} p-[21px]`}>
            <h3 className="w-full text-[24px] leading-normal font-medium text-white">{partners.title}</h3>
            <p className="w-full text-[16px] leading-normal text-white">{partners.body}</p>
          </Reveal>

          <Reveal
            delay={120}
            className="relative flex min-h-[280px] gap-[32px] min-w-0 flex-1 flex-col items-start justify-between overflow-hidden rounded-[12px] border border-white/[0.08] p-[20px] sm:h-[440px] sm:min-h-0"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[12px]">
              <Image src="/images/texture.webp" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="rounded-[12px] object-cover" />
              <div className="absolute inset-0 rounded-[12px] bg-black/40" />
            </div>
            <div className="relative flex items-end gap-[8px]">
              <p className="font-heading text-[64px] leading-[1.2] font-medium tracking-heading whitespace-nowrap text-white">
                {roi.big}
              </p>
              <div className="relative h-[36px] w-[134px]">
                <p className="absolute top-0 left-0 text-[16px] leading-normal whitespace-nowrap text-white">{roi.small}</p>
              </div>
            </div>
            <p className="relative w-full text-[16px] leading-normal text-white">{roi.body}</p>
          </Reveal>

          <Reveal delay={240} className={plainCard}>
            <h3 className="w-full text-[24px] leading-normal font-medium text-white">{collective.title}</h3>
            <p className="w-full text-[16px] leading-normal text-white">{collective.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
