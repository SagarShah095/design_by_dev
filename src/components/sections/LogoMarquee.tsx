import Image from "next/image";

/** Client logos as laid out in Figma (each item carries its own right padding). */
function LogoSet() {
  return (
    <div className="flex h-[35px] shrink-0 items-center">
      <div className="flex items-center pr-[102px]">
        <Image src="/icons/logo-lxa.svg" alt="LXA Group" width={132.443} height={27.2} className="h-[27.2px] w-[132.443px]" />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <Image src="/icons/logo-monte.svg" alt="Monte" width={124} height={20.4} className="h-[20.4px] w-[123.64px]" />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <Image src="/icons/logo-aurelune.svg" alt="Aurelune Café" width={200.045} height={20.4} className="h-[20.4px] w-[200.045px]" />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <span
          role="img"
          aria-label="Urbanexa"
          className="block h-[34px] w-[119.85px] bg-white"
          style={{
            maskImage: "url(/images/logo-urbanexa-mask.png)",
            WebkitMaskImage: "url(/images/logo-urbanexa-mask.png)",
            maskSize: "119.766px 34px",
            WebkitMaskSize: "119.766px 34px",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "0px -0.273px",
            WebkitMaskPosition: "0px -0.273px",
          }}
        />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <Image src="/icons/logo-veylo.svg" alt="VEYLO" width={56} height={26} className="h-[26px] w-[56px]" />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <span
          aria-hidden
          className="block h-[34px] w-[119.85px] bg-white"
          style={{
            maskImage: "url(/images/logo-urbanexa-mask.png)",
            WebkitMaskImage: "url(/images/logo-urbanexa-mask.png)",
            maskSize: "119.766px 34px",
            WebkitMaskSize: "119.766px 34px",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "0px -0.273px",
            WebkitMaskPosition: "0px -0.273px",
          }}
        />
      </div>
      <div className="flex items-center pr-[125.538px]">
        <span className="flex items-center gap-[6.182px]">
          <span
            aria-hidden
            className="block size-[34px] bg-white"
            style={{
              maskImage: "url(/images/logo-stocksclue-mask.png)",
              WebkitMaskImage: "url(/images/logo-stocksclue-mask.png)",
              maskSize: "34px 34px",
              WebkitMaskSize: "34px 34px",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          <span className="font-inter text-[21.636px] leading-[21.636px] font-semibold tracking-[-0.7727px] whitespace-nowrap text-white">
            StocksClue
          </span>
        </span>
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-t border-white/20 pt-[33px] pb-[32px]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <LogoSet />
        <div aria-hidden>
          <LogoSet />
        </div>
      </div>
    </div>
  );
}
