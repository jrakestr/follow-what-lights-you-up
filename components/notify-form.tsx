"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addNotify } from "@/lib/capture";
import { notifyYears } from "@/lib/content";

type Status = "idle" | "success" | "duplicate" | "error";

export function NotifyForm({ defaultYear }: { defaultYear?: number }) {
  const [status, setStatus] = useState<Status>("idle");
  const [years, setYears] = useState<number[]>(
    defaultYear ? [defaultYear] : [],
  );
  const [confirmed, setConfirmed] = useState<number[]>([]);

  function toggle(year: number) {
    setYears((current) =>
      current.includes(year)
        ? current.filter((item) => item !== year)
        : [...current, year],
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "");
    const email = String(data.get("email") ?? "");
    if (!firstName || !email || years.length === 0) {
      setStatus("error");
      return;
    }
    const result = addNotify({ firstName, email, years });
    setConfirmed(years);
    setStatus(result.ok ? "success" : "duplicate");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {notifyYears.map((year) => {
          const active = years.includes(year);
          return (
            <button
              key={year}
              type="button"
              onClick={() => toggle(year)}
              className={`tracking-data border px-4 py-2 text-xs ${
                active
                  ? "border-amber bg-amber/10 text-ink"
                  : "border-stone text-graphite hover:border-ink"
              }`}
            >
              {year}
            </button>
          );
        })}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          name="firstName"
          required
          placeholder="First name"
          className="h-11 rounded-none"
          aria-label="First name"
        />
        <Input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="h-11 rounded-none"
          aria-label="Email"
        />
      </div>
      <Button
        type="submit"
        className="h-11 rounded-none bg-ink px-8 text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-ink/90"
      >
        Notify me
      </Button>
      {status === "success" && (
        <p className="text-sm leading-relaxed">
          You will hear from us when Follow the Light {confirmed.join(", ")}{" "}
          opens. Egypt 2027 is the active run — you can request an invitation
          now.
        </p>
      )}
      {status === "duplicate" && (
        <p className="text-sm leading-relaxed">
          You&apos;re already on the list. We added {confirmed.join(", ")} to
          your notification.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm">Choose at least one year, then add your name.</p>
      )}
    </form>
  );
}
