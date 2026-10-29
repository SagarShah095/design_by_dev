import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Props = {
  label: string;
  title: ReactNode;
  body: string;
  /** Figma uses a fixed 570px title column in the Process section */
  titleClassName?: string;
};

/** Heading 44 + muted continuation; description sits in the right column on desktop. */
export function SectionHeader({ label, title, body, titleClassName = "lg:flex-1" }: Props) {
  return (
    <Reveal className="flex w-full flex-col items-start gap-[24px]">
      <SectionLabel>{label}</SectionLabel>
      <div className="flex w-full flex-col items-start gap-[16px] lg:flex-row lg:gap-[44px]">
        <h2
          className={`font-heading text-[32px] leading-[1.2] font-medium tracking-heading text-white sm:text-[38px] lg:text-[44px] ${titleClassName}`}
        >
          {title}
        </h2>
        <p className="text-[16px] leading-normal text-subtext lg:flex-1">{body}</p>
      </div>
    </Reveal>
  );
}

export function Muted({ children }: { children: ReactNode }) {
  return <span className="text-white/60">{children}</span>;
}
