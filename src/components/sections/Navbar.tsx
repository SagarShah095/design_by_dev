"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-20 flex w-full items-center justify-between px-5 pt-[14px] pb-[10px] md:px-10 lg:px-[60px]">
      <a href="#top" aria-label="Home" className="flex items-center transition-opacity hover:opacity-80">
        <Image
          src="/icons/logo-mark.svg"
          alt="Logo"
          width={53.337}
          height={54}
          priority
          className="h-[54px] w-auto"
        />
      </a>

      <nav
        aria-label="Primary"
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[28px] rounded-full border border-white/10 bg-black/35 px-[29px] py-[16px] backdrop-blur-[0.55px] md:flex"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[16px] leading-normal whitespace-nowrap text-white transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex w-auto items-center justify-end gap-3 md:w-[200px]">
        <a
          href="#contact"
          aria-label="Book a video call"
          className="flex size-[54px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/35 backdrop-blur-[7.35px] transition-colors duration-300 hover:bg-black/55"
        >
          <span className="relative size-[24px]">
            {/* Figma group inset 11.68% / 3.72% inside the 24px frame */}
            <Image
              src="/icons/meet.svg"
              alt=""
              width={22.213}
              height={18.3927}
              className="absolute top-[11.68%] left-[3.72%] h-[76.64%] w-[92.56%]"
            />
          </span>
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex size-[54px] items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-[7.35px] md:hidden"
        >
          <span className="relative block h-[12px] w-[20px]">
            <span
              className={`absolute left-0 h-[1.5px] w-full rounded bg-white transition-all duration-300 ${open ? "top-[5px] rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full rounded bg-white transition-all duration-300 ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 px-6 pt-28 pb-10 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-[24px] right-5 flex size-[54px] items-center justify-center rounded-full border border-white/10"
        >
          <span className="relative block size-[20px]">
            <span className="absolute top-1/2 left-0 h-[1.5px] w-full rotate-45 bg-white" />
            <span className="absolute top-1/2 left-0 h-[1.5px] w-full -rotate-45 bg-white" />
          </span>
        </button>
        <nav aria-label="Mobile" className="flex flex-col gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-[40px] leading-none font-medium tracking-heading text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
