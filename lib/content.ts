import { images } from "@/lib/images";

export const brand = {
  name: "Follow What Lights You Up",
  tagline: "Follow what lights you up.",
  alive: "Go toward the things that make you feel alive.",
  conditions:
    "We create the conditions for awe. What happens from there belongs to you.",
  curate: "Curate everything. Script nothing.",
  spain:
    "The eclipse lasted for minutes. The feeling didn't.",
  sameSun: "Different destination. Different journey. Same sun.",
  statement:
    "Follow What Lights You Up is a premium experiential entertainment company creating intimate, highly curated experiences around extraordinary natural and cultural moments. We bring together destination, hospitality, food, music, adventure, culture and carefully curated community — not simply to give travelers somewhere beautiful to go, but to create experiences powerful enough to interrupt the ordinary.",
} as const;

export const facts = {
  totality: "6 minutes 23 seconds",
  totalityLand:
    "the longest totality visible from land between 1991 and 2114",
  nextUs: "March 30, 2033",
  nextUsPlace: "Alaska only",
  contiguousUs: "August 2044",
  heat: "100°F–110°F",
  maxGuests: 24,
  minAge: 21,
} as const;

export const pillars = [
  {
    name: "Discover",
    body: "Experience the destination beyond the obvious through culture, history and exceptional local access.",
  },
  {
    name: "Gather",
    body: "Make the table part of the storytelling through memorable restaurants, chefs and private dining.",
  },
  {
    name: "Play",
    body: "Embrace whatever makes the destination exhilarating: water, desert, wilderness, movement or adventure.",
  },
  {
    name: "Connect",
    body: "Curate a small community of travelers who are interesting, interested, open and present.",
  },
  {
    name: "Listen",
    body: "Use music, storytelling and cultural expression to deepen the emotional arc without turning the trip into a retreat.",
  },
  {
    name: "Witness",
    body: "Protect the moment of totality. No programming competes with the sky.",
  },
] as const;

export const eclipses = [
  {
    year: 2027,
    date: "August 2, 2027",
    place: "Egypt",
    region: "Cairo, the Nile, Luxor",
    motif: "6m 23s Luxor",
    status: "active" as const,
    notify: false,
    image: images.luxorColumns,
  },
  {
    year: 2028,
    date: "July 22, 2028",
    place: "Australia",
    region: "Sydney / Outback",
    motif: "Sydney and the red centre",
    status: "notify" as const,
    notify: true,
    image: images.outback,
  },
  {
    year: 2030,
    date: "November 25, 2030",
    place: "Southern Africa",
    region: "Kalahari / Coast",
    motif: "Desert night, Atlantic edge",
    status: "notify" as const,
    notify: true,
    image: images.kalahari,
  },
  {
    year: 2033,
    date: "March 30, 2033",
    place: "Alaska",
    region: "Arctic Wild",
    motif: "The next totality on U.S. soil",
    status: "notify" as const,
    notify: true,
    image: images.alaska,
  },
  {
    year: 2034,
    date: "March 20, 2034",
    place: "Egypt / North Africa",
    region: "Atlas & Sahara",
    motif: "Return to the light path",
    status: "notify" as const,
    notify: true,
    image: images.atlas,
  },
] as const;

export const notifyYears = [2028, 2030, 2033, 2034] as const;

export const days = [
  {
    day: 1,
    verb: "Arrive",
    line: "Something is beginning",
    body: "Welcome baskets. An informal founder dinner. The Nile is already working on you.",
  },
  {
    day: 2,
    verb: "Discover",
    line: "Look where I am",
    body: "Culture, exploration, exceptional local access. The destination beyond the obvious.",
  },
  {
    day: 3,
    verb: "Gather",
    line: "Look who I'm experiencing it with",
    body: "Connect over exquisite local cuisine and private dining. The table is part of the story.",
  },
  {
    day: 4,
    verb: "Anticipate",
    line: "Tomorrow is why we came",
    body: "Rest, reflect, or celebrate. Explicit unstructured time. No itinerary competing for your attention.",
  },
  {
    day: 5,
    verb: "Witness",
    line: "I cannot believe I just experienced that",
    body: "The moment of totality: no distractions, prime viewing location, zero competing programming.",
  },
  {
    day: 6,
    verb: "Feel",
    line: "The Afterglow",
    body: "An intimate musical experience in partnership with FaceSoul. The sky has gone. The feeling has not.",
  },
  {
    day: 7,
    verb: "Follow",
    line: "What lights me up",
    body: "Depart having discovered something new — in the place, and in yourself.",
  },
] as const;

export const rates = [
  {
    name: "The Journey",
    occupancy: "Double occupancy",
    price: 14500,
    note: "12 to 14 inventory",
    inventory: "12–14",
  },
  {
    name: "The Journey",
    occupancy: "Matched roommate",
    price: 14500,
    note: "Solo opt-in. Closes the $3,400 single supplement without cutting the rate.",
    inventory: "Open match",
  },
  {
    name: "The Journey",
    occupancy: "Single occupancy",
    price: 17900,
    note: "Single supplement $3,400. Cap at 6.",
    inventory: "Cap 6",
  },
  {
    name: "The Suite",
    occupancy: "Double occupancy",
    price: 17500,
    note: "Per person, double. 2 to 4 inventory.",
    inventory: "2–4",
  },
] as const;

export const buyout = {
  label: "Full buyout",
  range: "$345,000–$385,000",
  note: "Up to 24 guests. By quote.",
} as const;

export const payment = [
  {
    when: "At booking",
    amount: "$3,000 pp",
    note: "Non-refundable after 14 days",
  },
  {
    when: "January 15, 2027",
    amount: "$5,000 pp",
    note: "Second installment",
  },
  {
    when: "April 15, 2027",
    amount: "Balance",
    note: "Final payment",
  },
] as const;

export const addOns = [
  { name: "Red Sea extension", detail: "3 nights", price: 2900 },
  { name: "Abu Simbel day trip", detail: "Full day", price: 1200 },
  { name: "Private photography", detail: "Half day", price: 850 },
  {
    name: "Limited-edition keepsake set",
    detail: "Included in the program layer",
    price: 0,
  },
] as const;

export const inclusions = [
  "Seven nights: Cairo 5-star and chartered dahabiya",
  "Private vessel charter for the cohort",
  "Egyptologist and local guides",
  "Curated culinary program and private dining",
  "Prime totality viewing, with no competing programming",
  "The Afterglow, in partnership with FaceSoul",
  "Founder hosting throughout",
  "Domestic air inside Egypt as specified",
  "Ground transport and on-call medic",
  "Limited-edition keepsake set",
] as const;

export const exclusions = [
  "International airfare",
  "Egypt visa",
  "Mandatory travel insurance",
  "Gratuities",
  "Personal expenses and spa",
  "Optional add-ons (Red Sea, Abu Simbel, private photography)",
] as const;

export const travelers = [
  {
    slug: "solo",
    title: "Traveling solo",
    mix: "6 to 8 guests on a boat of 24",
    image: images.soloWoman,
    points: [
      "Single occupancy is shown plainly: $17,900.",
      "Roommate matching at $14,500 pp closes the $3,400 supplement if you opt in.",
      "You are not dropped into a room of strangers. The cohort is curated before anyone boards.",
      "Heat, terrain, and safety sit in public before you apply.",
      "Chelsea speaks with you before an invitation goes out.",
    ],
  },
  {
    slug: "couples",
    title: "Couples",
    mix: "8 to 10 guests / 4 to 5 couples",
    image: images.coupleTravel,
    points: [
      "Cabin quality is a first-order decision — the boat is the house.",
      "Day 4 is unstructured on purpose: rest, wander, or celebrate together.",
      "The table and the desert are built for two people who already travel well.",
      "No couple discount. Cabin upgrade at cost instead.",
      "Culture, adventure, and The Afterglow sit beside the sky — not a retreat schedule.",
    ],
  },
  {
    slug: "groups",
    title: "Self-formed groups",
    mix: "4 to 6 guests",
    image: images.mixedGroup,
    points: [
      "Adjacent cabins held together.",
      "One private table night for your party.",
      "$3,000 organizer credit per 12 paid guests — a standard tour-conductor mechanic, not a rate cut.",
      "One person can hold seats while the others confirm.",
      "Six or more booking together receive a named group moment.",
    ],
  },
] as const;

export const founders = [
  {
    name: "Angela",
    role: "Vision",
    discipline: "Brand Storytelling + Creative Experience",
    question: "How do we make people feel something?",
    image: images.founderAngela,
    bio: "Angela holds the emotional architecture of the journey. She protects the feeling — from the first line of copy to the last hour of totality.",
  },
  {
    name: "Dasha",
    role: "Table",
    discipline: "Culinary + Hospitality Experience",
    question: "How do we gather?",
    image: images.founderDasha,
    bio: "Dasha builds the table as storytelling. Chefs, private dining, and the small rituals that make a cohort into a community.",
  },
  {
    name: "Chelsea",
    role: "Journey",
    discipline: "Client Success + Partnerships + Operations",
    question: "How do we deliver this exceptionally?",
    image: images.founderChelsea,
    bio: "Chelsea is the named contact before you apply, and the operator who keeps 24 people safe, fed, and on time in 110°F heat.",
  },
  {
    name: "Stately",
    role: "Growth",
    discipline: "Brand Strategy + Commercial Vision",
    question: "How do we make this bigger than one trip?",
    image: images.founderStately,
    bio: "Stately treats Egypt 2027 as year one of Follow the Light — an annual company, not a one-off charter.",
  },
] as const;

export const faqs = [
  {
    q: "Who is this for?",
    a: "Adults 21 and over who already travel well — interesting, interested, open, and present. Come on your own, as a couple, or as a small group you formed yourself. Maximum 24 guests.",
  },
  {
    q: "How many guests?",
    a: "Maximum 24 guests per departure. Break-even sits at 15 to 16. We will not enlarge the boat to fill seats.",
  },
  {
    q: "What does it cost?",
    a: "The Journey is $14,500 per person double occupancy or matched roommate. Single occupancy is $17,900 (supplement $3,400, cap of 6). The Suite is $17,500 per person double. International airfare is not included.",
  },
  {
    q: "How does payment work?",
    a: "$3,000 per person at booking, non-refundable after 14 days. $5,000 due January 15, 2027. Balance due April 15, 2027. Travel insurance is a condition of booking.",
  },
  {
    q: "I am traveling alone. Will I be the only one?",
    a: "No. We hold 6 to 8 seats for people traveling alone. Roommate matching is available at the double rate so you do not pay the $3,400 supplement. Chelsea is the named contact before you apply.",
  },
  {
    q: "Can I come with a partner or with friends?",
    a: "Yes. Couples and self-formed groups are part of every departure. Adjacent cabins, a private table night, and a named group moment are how we hold a party inside the cohort — without cutting the rate.",
  },
  {
    q: "How hot is Luxor in early August?",
    a: "Early August in Luxor runs 100°F–110°F. Temple sites mean uneven ground and early mornings. The demand is moderate, not athletic — but the heat is real. We disclose it so the wrong buyer self-selects out.",
  },
  {
    q: "What if it is cloudy during totality?",
    a: "Weather and cloud cover do not entitle a refund. This is stated in the booking terms as force majeure. We choose a prime viewing location and protect the hour. The sky does not take instruction.",
  },
  {
    q: "Why 6 minutes 23 seconds matters?",
    a: "Totality at Luxor runs about 6 minutes 23 seconds — the longest totality visible from land between 1991 and 2114. The next total solar eclipse on U.S. soil after 2027 is March 30, 2033, Alaska only. The contiguous United States waits until August 2044.",
  },
  {
    q: "Do I need a visa and insurance?",
    a: "Yes. Egypt visa is your responsibility and is not included. Travel insurance is mandatory and named as a condition of booking.",
  },
  {
    q: "Can we buy out the departure?",
    a: "Yes. Full buyout up to 24 guests is $345,000 to $385,000, by quote. Groups of 6+ receive adjacent cabins, one private table night, and a named group moment — not a rate cut. Twelve paid guests earn a $3,000 organizer credit.",
  },
  {
    q: "What is The Afterglow?",
    a: "An intimate musical experience on Day 6, in partnership with FaceSoul. Music deepens the arc. It does not turn the trip into a retreat.",
  },
] as const;

export const journalPosts = [
  {
    slug: "the-feeling-didnt",
    title: "The eclipse lasted for minutes. The feeling didn't.",
    date: "August 12, 2026",
    place: "Mallorca",
    image: images.mallorca,
    excerpt:
      "Spain was not a product. It was the night four people understood the company they were going to build.",
    body: [
      "On August 12, 2026, in Mallorca, the moon took the sun for a handful of minutes. The four of us were not operating a trip. We were standing in a field with people we had chosen carefully, and then the sky did what the sky does.",
      "The eclipse lasted for minutes. The feeling didn't.",
      "That is the origin. Not a pitch deck. A symbolic night that made the philosophy obvious: curate everything, script nothing. Protect the moment. Let people be changed by it.",
      "Follow the Light is the annual expression of that night. Different destination. Different journey. Same sun.",
    ],
  },
  {
    slug: "six-minutes-twenty-three",
    title: "Six minutes and twenty-three seconds",
    date: "Field note",
    place: "Luxor, 2027",
    image: images.eclipseSky,
    excerpt:
      "The longest totality visible from land between 1991 and 2114 is not a marketing line. It is an astronomical fact. We built a company around it.",
    body: [
      "Totality at Luxor on August 2, 2027 runs about 6 minutes 23 seconds. That is the longest totality visible from land between 1991 and 2114.",
      "The next total solar eclipse on U.S. soil after 2027 is March 30, 2033 — Alaska only. The contiguous United States waits until August 2044.",
      "We do not compete with that hour. Witness is a pillar because the rest of the journey exists to deliver you to the sky, unhurried and unprogrammed, and then to hold you after.",
      "The celestial event chooses the destination. We create the extraordinary journey around it.",
    ],
  },
  {
    slug: "heat-is-not-a-footnote",
    title: "Heat is not a footnote",
    date: "Field note",
    place: "Luxor",
    image: images.desertSun,
    excerpt:
      "Early August in Luxor runs 100°F to 110°F. We say so in public because trust is built by the sentences other companies bury.",
    body: [
      "This journey asks a moderate physical demand: heat, uneven ground at temple sites, early mornings. It does not ask you to be an athlete. It does ask you to be honest about August in Upper Egypt.",
      "Transparent heat disclosure filters out the wrong buyers. That is a gift to them and to the 24 people who do belong on the boat.",
      "We create the conditions for awe. Those conditions include shade, water, a medic, and a schedule that respects the sun. They also include telling you the temperature before you send an application.",
    ],
  },
] as const;

export const philosophy = {
  kicker: "In pursuit of aliveness",
  paragraphs: [
    "There is a part of us that comes alive. Not the part that performs a holiday. The part that notices. The part that goes quiet when the light changes.",
    "Most travel is a sequence of arrangements. We are not in the arrangement business. We are in the business of interrupting the ordinary — destination, hospitality, food, music, adventure, culture, and a carefully curated community, held in one frame.",
    "The philosophy is simple enough to print on a card: curate everything, script nothing. We choose the vessel, the table, the people, the hour of the sky. We do not choreograph your feeling. That belongs to you.",
    "Spain taught us the difference. On August 12, 2026, in Mallorca, the eclipse lasted for minutes. The feeling didn't. The company exists because that distinction is the whole point.",
    "Follow the Light is the annual form. The celestial event chooses the destination. We create the extraordinary journey around it. Different destination. Different journey. Same sun.",
    "We create the conditions for awe. What happens from there belongs to you.",
  ],
} as const;

export const openDecisions = [
  {
    title: "Vessel quote",
    body: "If the dahabiya charter lands above $5,200 per guest, the published rate moves to $15,900 and the group holds at 24.",
  },
  {
    title: "Group size",
    body: "20 for intimacy versus 24 for the P&L. Maximum remains 24. We will not exceed it.",
  },
  {
    title: "Founder hosting",
    body: "Four hosts at $900 per guest versus two hosts, with $450 per guest returned to margin.",
  },
  {
    title: "Totality site",
    body: "The named site will be locked on this page once the viewing location is finalized.",
  },
  {
    title: "The Afterglow talent",
    body: "FaceSoul is named in partnership. Contracted versus aspirational status will be stated plainly when signed.",
  },
] as const;

export const referralSources = [
  "A founder",
  "A previous guest",
  "A friend",
  "Instagram",
  "Press",
  "Search",
  "Other",
] as const;

export const namedContact = {
  name: "Chelsea",
  role: "Journey",
  line: "Speak with Chelsea before you apply. She is the named contact for solo travelers, couples, and groups.",
} as const;

export const spainTeaser = {
  date: "August 12, 2026",
  place: "Mallorca",
  line: "The eclipse lasted for minutes. The feeling didn't.",
} as const;
