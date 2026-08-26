# Follow What Lights You Up

Invite-only luxury journeys around extraordinary celestial events. Different destination. Different journey. Same sun.

This repository is the **frontend-first** platform: editorial marketing pages, the Egypt 2027 conversion path, and client-side waitlist / notify / apply capture. There is no backend, no environment file, and no payment processor in this iteration.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a fixed port:

```bash
npx next dev --port 43127
```

No `.env` is required.

## What is in this iteration

- Home, philosophy, Follow the Light, Egypt 2027, who travels, founders, journal (3 field notes), FAQ, terms, privacy, booking conditions, apply
- Waitlist, future-eclipse Notify Me, and the multi-step application — stored in `localStorage` on this browser
- Duplicate waitlist copy: “You're already on the list”
- Remaining cabins on Egypt 2027 are static numbers representing confirmed deposits only
- Seller-of-travel micro-footer: CST No. X · Fla. Seller of Travel Reg. No. X

## Brand

Editorial luxury: warm paper and ink, high-contrast serif headers (Fraunces), clean sans body (Plus Jakarta Sans), Geist Mono for dates and prices, full-bleed cinematic stills, tall cards, ample white space.

## Facts locked in copy

- Totality at Luxor: about 6 minutes 23 seconds, longest visible from land between 1991 and 2114
- Next U.S. total after 2027: March 30, 2033 (Alaska only). Contiguous U.S.: August 2044
- Follow the Light calendar: 2027 Egypt, 2028 Australia, 2030 Southern Africa (Nov 25, 2030), 2033 Alaska, 2034 Egypt / North Africa (March 20, 2034)

## Next iteration (not in this repo yet)

Invitation tokens, deposit collection, live inventory, pipeline due dates, and email sequences.
