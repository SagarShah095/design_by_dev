import { intro } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section id="problem" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <Reveal className="mx-auto flex max-w-[998px] justify-center">
        <p className="text-center font-heading text-[26px] leading-[1.2] font-medium tracking-heading text-white sm:text-[32px] lg:text-[38px]">
          {intro.lead}
          <span className="text-white/60">{intro.rest}</span>
        </p>
      </Reveal>
    </section>
  );
}
