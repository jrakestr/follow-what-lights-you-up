"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addWaitlist } from "@/lib/capture";
import { referralSources } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "success" | "duplicate" | "error";

export function WaitlistForm({
  tone = "light",
  compact = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [source, setSource] = useState<string>("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "");
    const email = String(data.get("email") ?? "");
    if (!firstName || !email || !source) {
      setStatus("error");
      return;
    }
    const result = addWaitlist({ firstName, email, source });
    setStatus(result.ok ? "success" : "duplicate");
    if (result.ok) form.reset();
  }

  const field =
    tone === "dark"
      ? "rounded-none border-paper/25 bg-transparent text-paper placeholder:text-paper/40"
      : "rounded-none border-stone bg-paper";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div
        className={cn(
          "grid gap-3",
          compact ? "grid-cols-1" : "sm:grid-cols-2",
        )}
      >
        <Input
          name="firstName"
          required
          placeholder="First name"
          className={cn("h-11", field)}
          aria-label="First name"
        />
        <Input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={cn("h-11", field)}
          aria-label="Email"
        />
      </div>
      <Select value={source} onValueChange={setSource}>
        <SelectTrigger className={cn("h-11 w-full", field)}>
          <SelectValue placeholder="How did you hear about us?" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          {referralSources.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className={cn(
          "h-11 w-full rounded-none text-[11px] uppercase tracking-[0.2em]",
          tone === "dark"
            ? "bg-paper text-ink hover:bg-paper/90"
            : "bg-ink text-paper hover:bg-ink/90",
        )}
      >
        Join the waitlist
      </Button>
      {status === "success" && (
        <p className="text-sm leading-relaxed text-amber">
          You are on the list. Next: request an invitation for Egypt 2027 when
          you are ready.
        </p>
      )}
      {status === "duplicate" && (
        <p className="text-sm leading-relaxed">
          You&apos;re already on the list. If you are ready to travel,{" "}
          <a href="/apply" className="underline decoration-amber underline-offset-4">
            request an invitation
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="text-sm">Add your name, email, and how you found us.</p>
      )}
    </form>
  );
}
