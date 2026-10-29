"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { contact } from "@/content/site";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SocialButtons } from "@/components/ui/SocialButtons";

const labelCls = "text-[16px] leading-normal font-medium whitespace-nowrap text-subtext";
const fieldCls =
  "w-full border-b border-line bg-transparent px-[12px] pt-[13px] pb-[14px] text-[16px] leading-normal text-white outline-none transition-colors duration-300 placeholder:text-white focus:border-white/60 focus-visible:outline-none aria-[invalid=true]:border-accent";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

function Select({ id, name, options, defaultValue }: { id: string; name: string; options: string[]; defaultValue: string }) {
  return (
    <div className="relative w-full">
      <select id={id} name={name} defaultValue={defaultValue} className={`${fieldCls} cursor-pointer appearance-none pr-[48px]`}>
        {options.map((o) => (
          <option key={o} value={o} className="bg-shade text-white">
            {o}
          </option>
        ))}
      </select>
      <Image
        src="/icons/chevron-down.svg"
        alt=""
        aria-hidden
        width={24}
        height={24}
        className="pointer-events-none absolute top-1/2 right-[12px] -translate-y-1/2"
      />
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid email.";
    if (!data.message?.trim()) next.message = "Tell us a little about your project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent", message: "Thanks — your message is on its way. We'll be in touch soon." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="px-[12px] text-[14px] text-accent">
        {errors[k]}
      </p>
    ) : null;

  return (
    <div id="contact" className="flex w-full flex-col items-start gap-[16px] px-0 md:px-[40px]">
      <SectionLabel>{contact.label}</SectionLabel>

      <div className="flex w-full flex-col items-start gap-[44px] lg:flex-row">
        <Reveal className="flex min-w-0 flex-1 flex-col items-start justify-between gap-[40px] self-stretch">
          <div className="flex w-full flex-col items-start gap-[14px]">
            <h2 className="w-full font-heading text-[32px] leading-[1.2] font-medium tracking-heading text-white sm:text-[38px] lg:text-[44px]">
              {contact.title[0]}
              <br />
              {contact.title[1]}
            </h2>
            <p className="w-full text-[16px] leading-normal text-subtext">{contact.body}</p>
          </div>
          <div className="flex w-full flex-col items-start gap-[24px]">
            <p className="w-full text-[16px] leading-normal font-semibold text-white/60">{contact.followLabel}</p>
            <SocialButtons />
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0 flex-1 self-stretch">
          <form noValidate onSubmit={onSubmit} className="flex w-full flex-col items-start gap-[32px]" aria-label="Project enquiry">
            <div className="flex w-full flex-col items-start gap-[32px] sm:flex-row sm:items-start sm:gap-[24px]">
              <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[12px]">
                <label htmlFor="name" className={labelCls}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="ex. John"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldCls}
                />
                {err("name")}
              </div>
              <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[12px]">
                <label htmlFor="email" className={labelCls}>
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@youremail.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldCls}
                />
                {err("email")}
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <label htmlFor="company" className={labelCls}>
                Your Company name
              </label>
              <input id="company" name="company" autoComplete="organization" placeholder="ex. Facebook" className={fieldCls} />
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <label htmlFor="service" className={labelCls}>
                Service
              </label>
              <Select id="service" name="service" options={contact.serviceOptions} defaultValue={contact.serviceOptions[0]} />
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <label htmlFor="budget" className={labelCls}>
                Budget
              </label>
              <Select id="budget" name="budget" options={contact.budgetOptions} defaultValue="$2,500 - $3,500" />
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <label htmlFor="message" className={labelCls}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your project here..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldCls} h-[160px] resize-none`}
              />
              {err("message")}
            </div>

            <div className="flex flex-col items-start gap-3">
              <PillButton type="submit" disabled={status.state === "sending"}>
                {status.state === "sending" ? "Sending…" : contact.submitLabel}
              </PillButton>
              <p role="status" aria-live="polite" className={`text-[14px] ${status.state === "error" ? "text-accent" : "text-subtext"}`}>
                {status.message}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
