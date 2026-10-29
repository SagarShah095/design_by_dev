import { footer } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { SocialButtons } from "@/components/ui/SocialButtons";

export function Footer() {
  return (
    <footer className="w-full rounded-[12px] bg-footer py-[40px]">
      <div className="flex w-full flex-col items-start gap-[44px] px-5 md:px-[40px]">
        <div className="flex w-full flex-col items-start justify-between gap-[44px] lg:flex-row">
          <div className="flex max-w-[451.639px] flex-col items-start gap-[45.164px]">
            <div className="flex w-full flex-col items-start gap-[22.582px]">
              <a href="#top" aria-label="Designbyxy — back to top">
                <Logo />
              </a>
              <p className="text-[16px] leading-normal text-white">
                {footer.tagline[0]} <br className="hidden sm:block" />
                {footer.tagline[1]}
              </p>
            </div>
            <div className="flex max-w-[338.729px] flex-col items-start gap-[14px]">
              <p className="font-heading text-[20px] leading-[1.2] whitespace-nowrap text-white">{footer.socialTitle}</p>
              <SocialButtons gap="gap-[7.527px]" />
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-y-10 leading-normal">
            <nav aria-label="Quick links" className="flex w-[210px] flex-col items-start gap-[24px]">
              <p className="font-heading text-[20px] leading-[1.2] text-subtext">Quick link</p>
              <ul className="flex flex-col items-start gap-[10px] text-[16px] text-white">
                {footer.quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-colors duration-200 hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services" className="flex flex-col items-start gap-[24px]">
              <p className="font-heading text-[20px] leading-[1.2] text-subtext">Services</p>
              <ul className="flex flex-col items-start gap-[10px] text-[16px] text-white">
                {footer.services.map((s) => (
                  <li key={s}>
                    <a href="#services" className="transition-colors duration-200 hover:text-accent">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-[#2e2e2e] pt-[24px] sm:flex-row sm:items-center">
          <p className="text-[16px] leading-normal text-white">{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-[22.582px] gap-y-2">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[16px] leading-normal whitespace-nowrap text-white transition-colors duration-200 hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
