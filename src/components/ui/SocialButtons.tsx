import Image from "next/image";
import { socials } from "@/content/site";

/** "Component 4" in Figma — 54px glass circles with LinkedIn / X / Instagram. */
export function SocialButtons({ gap = "gap-[12px]" }: { gap?: string }) {
  return (
    <ul className={`flex items-start ${gap}`}>
      {socials.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            aria-label={s.name}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex size-[54px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/35 backdrop-blur-[7.35px] transition-colors duration-300 hover:border-accent/60 hover:bg-accent/15"
          >
            <Image src={s.icon} alt="" width={24} height={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}
