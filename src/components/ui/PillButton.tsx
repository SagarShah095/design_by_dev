import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type LinkProps = { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">;
type ButtonProps = { href?: undefined } & ComponentPropsWithoutRef<"button">;
type Props = (LinkProps | ButtonProps) & { children: ReactNode; className?: string };

const base =
  "group inline-flex h-[50px] shrink-0 items-center justify-center gap-[10px] overflow-hidden rounded-[61px] bg-white py-[14px] pr-[6px] pl-[20px] font-body text-[16px] font-medium leading-none whitespace-pre text-shade transition-[transform,box-shadow] duration-300 hover:shadow-[0_0_0_4px_rgba(251,69,28,0.25)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span className="relative flex size-[38px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent">
        {/* Figma: arrow-down icon rotated -130deg */}
        <Image
          src="/icons/arrow.svg"
          alt=""
          width={24}
          height={24}
          className="-rotate-[130deg] transition-transform duration-300 group-hover:-rotate-[90deg]"
        />
      </span>
    </>
  );
}

/** "Component 1" in Figma — white pill with the orange arrow badge. */
export function PillButton({ children, className = "", ...rest }: Props) {
  const cls = `${base} ${className}`;
  if (typeof rest.href === "string") {
    return (
      <a className={cls} {...(rest as LinkProps)}>
        <Inner>{children}</Inner>
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonProps)}>
      <Inner>{children}</Inner>
    </button>
  );
}
