import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Intro } from "@/components/sections/Intro";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1920px] overflow-x-clip bg-black">
      <Hero />
      <Intro />
      <Work />
      <Services />
      <WhyUs />
      <Process />
      <Impact />
      <Faq />
      {/* Contact + footer share one section in Figma (40px side padding) */}
      <section className="flex w-full flex-col items-start gap-[60px] bg-black px-5 pt-16 pb-5 md:px-[40px] md:pb-[40px] lg:pt-[80px]">
        <div className="mx-auto w-full max-w-[1360px]">
          <Contact />
        </div>
        <div className="mx-auto w-full max-w-[1360px]">
          <Footer />
        </div>
      </section>
    </main>
  );
}
