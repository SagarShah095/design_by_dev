import Image from "next/image";

/** Designbyxy lock-up: traced mark + "Design" / "byxy" set in Arimo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-[11.7px] ${className}`}>
      <Image src="/icons/logo-mark.svg" alt="" width={53.337} height={54} className="h-[54px] w-[53.337px]" />
      <span className="font-logo leading-normal whitespace-nowrap text-white tracking-[-1.6489px]">
        <span className="text-[32.977px]">Design</span>
        <span className="text-[17.238px]">byDev</span>
      </span>
      <span className="sr-only">DesignbyDev home</span>
    </span>
  );
}
