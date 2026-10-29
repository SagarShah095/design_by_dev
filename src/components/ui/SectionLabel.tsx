/** Orange dot + small caption used above every section heading. */
export function SectionLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`flex items-center gap-[8px] ${className}`}>
      <span className="flex items-center rounded-full bg-accent/20 p-[2.667px]" aria-hidden>
        <span className="block size-[10px] rounded-full bg-accent" />
      </span>
      <p className="text-[16px] leading-normal whitespace-nowrap text-white">{children}</p>
    </div>
  );
}
