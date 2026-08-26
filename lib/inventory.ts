export const inventory = {
  maxGuests: 24,
  confirmedDeposits: 6,
  remainingPlaces: 18,
  lastVerified: "August 2026",
  note: "Remaining places reflect confirmed deposits only. Holds and applications are not counted as inventory.",
  tiers: [
    {
      id: "journey-double",
      name: "The Journey · double",
      remaining: 8,
      capacity: 12,
    },
    {
      id: "journey-match",
      name: "The Journey · matched roommate",
      remaining: 6,
      capacity: 8,
    },
    {
      id: "journey-single",
      name: "The Journey · single",
      remaining: 4,
      capacity: 6,
    },
    {
      id: "suite",
      name: "The Suite · double",
      remaining: 2,
      capacity: 4,
    },
  ],
} as const;

export type InventoryTierId = (typeof inventory.tiers)[number]["id"];
