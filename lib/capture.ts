export type WaitlistEntry = {
  firstName: string;
  email: string;
  source: string;
  createdAt: string;
};

export type NotifyEntry = {
  email: string;
  firstName: string;
  years: number[];
  createdAt: string;
};

export type ApplyGuest = {
  firstName: string;
  lastName: string;
};

export type ApplyEntry = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  travelingAs: "solo" | "couple" | "group";
  partySize: number;
  guests: ApplyGuest[];
  roommateMatch: "yes" | "no" | "unsure" | "";
  tier: string;
  source: string;
  drawing: string;
  createdAt: string;
};

const WAITLIST_KEY = "fwlyu.waitlist";
const NOTIFY_KEY = "fwlyu.notify";
const APPLY_KEY = "fwlyu.apply";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as T[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function addWaitlist(
  entry: Omit<WaitlistEntry, "createdAt">,
): { ok: true } | { ok: false; duplicate: true } {
  const email = normalizeEmail(entry.email);
  const list = read<WaitlistEntry>(WAITLIST_KEY);
  if (list.some((item) => normalizeEmail(item.email) === email)) {
    return { ok: false, duplicate: true };
  }
  list.push({
    ...entry,
    email,
    firstName: entry.firstName.trim(),
    createdAt: new Date().toISOString(),
  });
  write(WAITLIST_KEY, list);
  return { ok: true };
}

export function addNotify(
  entry: Omit<NotifyEntry, "createdAt">,
): { ok: true; years: number[] } | { ok: false; duplicate: true } {
  const email = normalizeEmail(entry.email);
  const list = read<NotifyEntry>(NOTIFY_KEY);
  const existing = list.find((item) => normalizeEmail(item.email) === email);
  if (existing) {
    const merged = Array.from(new Set([...existing.years, ...entry.years]));
    existing.years = merged;
    write(NOTIFY_KEY, list);
    return { ok: false, duplicate: true };
  }
  list.push({
    ...entry,
    email,
    firstName: entry.firstName.trim(),
    createdAt: new Date().toISOString(),
  });
  write(NOTIFY_KEY, list);
  return { ok: true, years: entry.years };
}

export function addApplication(
  entry: Omit<ApplyEntry, "createdAt">,
): { ok: true } | { ok: false; duplicate: true } {
  const email = normalizeEmail(entry.email);
  const list = read<ApplyEntry>(APPLY_KEY);
  if (list.some((item) => normalizeEmail(item.email) === email)) {
    return { ok: false, duplicate: true };
  }
  list.push({
    ...entry,
    email,
    createdAt: new Date().toISOString(),
  });
  write(APPLY_KEY, list);
  return { ok: true };
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
