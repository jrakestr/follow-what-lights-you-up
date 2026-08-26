"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addApplication, type ApplyGuest } from "@/lib/capture";
import { referralSources } from "@/lib/content";

type TravelingAs = "solo" | "couple" | "group";

const tiers = [
  "The Journey · double occupancy",
  "The Journey · matched roommate",
  "The Journey · single occupancy",
  "The Suite · double occupancy",
  "Full buyout · by quote",
];

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "duplicate">("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [travelingAs, setTravelingAs] = useState<TravelingAs | "">("");
  const [partySize, setPartySize] = useState(1);
  const [guests, setGuests] = useState<ApplyGuest[]>([]);
  const [roommateMatch, setRoommateMatch] = useState<
    "yes" | "no" | "unsure" | ""
  >("");
  const [tier, setTier] = useState("");
  const [source, setSource] = useState("");
  const [drawing, setDrawing] = useState("");
  const [error, setError] = useState("");

  const extraGuests = useMemo(() => {
    if (!travelingAs || travelingAs === "solo") return 0;
    return Math.max(partySize - 1, 1);
  }, [partySize, travelingAs]);

  function resizeGuests(count: number) {
    setGuests((current) => {
      const next = current.slice(0, count);
      while (next.length < count) next.push({ firstName: "", lastName: "" });
      return next;
    });
  }

  function onTravelingAs(value: TravelingAs) {
    setTravelingAs(value);
    if (value === "solo") {
      setPartySize(1);
      setGuests([]);
    } else {
      setRoommateMatch("");
    }
    if (value === "couple") {
      setPartySize(2);
      resizeGuests(1);
    }
    if (value === "group") {
      const size = Math.max(4, partySize);
      setPartySize(size);
      resizeGuests(size - 1);
    }
  }

  function onPartySize(value: number) {
    setPartySize(value);
    resizeGuests(Math.max(value - 1, 0));
  }

  function continueFrom(next: number) {
    if (step === 0) {
      if (!firstName || !lastName || !email || !phone || !city) {
        setError("Complete each field before continuing.");
        return;
      }
    }
    if (step === 1) {
      if (!travelingAs) {
        setError("Choose how you intend to travel.");
        return;
      }
      if (travelingAs !== "solo" && partySize < 2) {
        setError("Add the size of your party.");
        return;
      }
      if (travelingAs === "solo" && !roommateMatch) {
        setError("Tell us whether you want a matched roommate.");
        return;
      }
    }
    setError("");
    setStep(next);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 2) {
      continueFrom(step + 1);
      return;
    }
    if (!tier || !source || drawing.trim().length < 12) {
      setError(
        "Choose a cabin preference, a source, and answer the drawing question.",
      );
      return;
    }
    if (!travelingAs) {
      setError("Choose how you intend to travel.");
      setStep(1);
      return;
    }
    const result = addApplication({
      firstName,
      lastName,
      email,
      phone,
      city,
      travelingAs,
      partySize: travelingAs === "solo" ? 1 : partySize,
      guests: guests.slice(0, extraGuests),
      roommateMatch: travelingAs === "solo" ? roommateMatch : "",
      tier,
      source,
      drawing,
    });
    setStatus(result.ok ? "success" : "duplicate");
  }

  if (status === "success") {
    return (
      <div className="border border-stone p-8">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          Application received
        </p>
        <h2 className="mt-4 font-display text-3xl">
          A founder writes within 48 hours.
        </h2>
        <p className="mt-4 font-body leading-[1.8] text-graphite">
          If the mix is right, we schedule a 20-minute call. Then an invitation.
          Then a $3,000 deposit — $5,000 on January 15, 2027, balance April 15,
          2027. This form is stored on this browser only in the first
          iteration.
        </p>
        <Link
          href="/egypt-2027"
          className="mt-8 inline-block text-[11px] uppercase tracking-[0.2em] underline decoration-amber underline-offset-4"
        >
          Return to Egypt 2027
        </Link>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="border border-stone p-8">
        <h2 className="font-display text-3xl">You already applied.</h2>
        <p className="mt-4 font-body text-graphite">
          We have this email on an application from this browser. If you have
          not heard from us, write Chelsea — she is the named contact before
          and after you apply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <p className="tracking-data text-[11px] uppercase text-graphite">
        Step {step + 1} of 3
      </p>

      {step === 0 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="First name"
            value={firstName}
            onChange={setFirstName}
          />
          <Field label="Last name" value={lastName} onChange={setLastName} />
          <Field
            label="Email"
            value={email}
            onChange={setEmail}
            type="email"
          />
          <Field label="Phone" value={phone} onChange={setPhone} type="tel" />
          <div className="sm:col-span-2">
            <Field label="City" value={city} onChange={setCity} />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <div>
            <Label className="text-[11px] uppercase tracking-[0.16em] text-graphite">
              Traveling as
            </Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                [
                  ["solo", "On my own"],
                  ["couple", "As a couple"],
                  ["group", "As a group"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onTravelingAs(value)}
                  className={`border px-4 py-2 text-[11px] uppercase tracking-[0.16em] ${
                    travelingAs === value
                      ? "border-ink bg-ink text-paper"
                      : "border-stone"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {travelingAs === "solo" && (
            <div>
              <Label className="text-[11px] uppercase tracking-[0.16em] text-graphite">
                Roommate matching
              </Label>
              <p className="mt-2 text-sm text-graphite">
                Matched roommate is $14,500. Single occupancy is $17,900. The
                match is introduced before cabins lock.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(
                  [
                    ["yes", "Match me"],
                    ["no", "Private cabin"],
                    ["unsure", "Not sure yet"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRoommateMatch(value)}
                    className={`border px-4 py-2 text-[11px] uppercase tracking-[0.16em] ${
                      roommateMatch === value
                        ? "border-ink bg-ink text-paper"
                        : "border-stone"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {(travelingAs === "couple" || travelingAs === "group") && (
            <div>
              <Label
                htmlFor="partySize"
                className="text-[11px] uppercase tracking-[0.16em] text-graphite"
              >
                Party size
              </Label>
              <Input
                id="partySize"
                type="number"
                min={travelingAs === "couple" ? 2 : 4}
                max={24}
                value={partySize}
                onChange={(event) => onPartySize(Number(event.target.value))}
                className="mt-2 h-11 max-w-32 rounded-none"
              />
              <p className="mt-2 text-sm text-graphite">
                Groups of 4–6 are the usual self-formed party. Adjacent cabins
                and a private table night are held together.
              </p>
            </div>
          )}
          {extraGuests > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-graphite">
                Names for the rest of the party. A single person can hold seats
                while others confirm.
              </p>
              {Array.from({ length: extraGuests }).map((_, index) => (
                <div key={index} className="grid gap-3 sm:grid-cols-2">
                  <Field
                    label={`Guest ${index + 2} first name`}
                    value={guests[index]?.firstName ?? ""}
                    onChange={(value) =>
                      setGuests((current) => {
                        const next = [...current];
                        next[index] = {
                          firstName: value,
                          lastName: next[index]?.lastName ?? "",
                        };
                        return next;
                      })
                    }
                  />
                  <Field
                    label={`Guest ${index + 2} last name`}
                    value={guests[index]?.lastName ?? ""}
                    onChange={(value) =>
                      setGuests((current) => {
                        const next = [...current];
                        next[index] = {
                          firstName: next[index]?.firstName ?? "",
                          lastName: value,
                        };
                        return next;
                      })
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <Label className="text-[11px] uppercase tracking-[0.16em] text-graphite">
              Cabin preference
            </Label>
            <Select value={tier} onValueChange={setTier}>
              <SelectTrigger className="mt-2 h-11 w-full rounded-none">
                <SelectValue placeholder="Select a tier" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                {tiers.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-[11px] uppercase tracking-[0.16em] text-graphite">
              How did you hear about us?
            </Label>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="mt-2 h-11 w-full rounded-none">
                <SelectValue placeholder="Referral source" />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                {referralSources.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="drawing"
              className="text-[11px] uppercase tracking-[0.16em] text-graphite"
            >
              What lights you up?
            </Label>
            <Textarea
              id="drawing"
              name="drawing"
              required
              rows={6}
              value={drawing}
              onChange={(event) => setDrawing(event.target.value)}
              className="mt-2 rounded-none"
              placeholder="An open drawing. Not a cover letter."
            />
          </div>
        </div>
      )}

      {error ? <p className="text-sm text-ink">{error}</p> : null}

      <div className="flex flex-wrap gap-4">
        {step > 0 && (
          <Button
            type="button"
            variant="outline"
            className="h-11 rounded-none text-[11px] uppercase tracking-[0.2em]"
            onClick={() => {
              setError("");
              setStep((current) => current - 1);
            }}
          >
            Back
          </Button>
        )}
        <Button
          type="submit"
          className="h-11 rounded-none bg-ink px-8 text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-ink/90"
        >
          {step < 2 ? "Continue" : "Submit application"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <Label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.16em] text-graphite"
      >
        {label}
      </Label>
      <Input
        id={id}
        value={value}
        type={type}
        required
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 rounded-none"
      />
    </div>
  );
}
