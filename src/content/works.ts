import type { WorkCatalogItem } from "./types";

export const worksCatalog: WorkCatalogItem[] = [
  // MULTIMEDIA
  {
    id: "fulbright",
    title: "Berkeley and Beyond: Fulbright Scholars in Limbo",
    outlet: "UC Berkeley Graduate School of Journalism",
    date: "May 2025",
    description:
      "Federal funding cuts left Fulbright scholars stranded — no money, no timeline, no answers. A multimedia investigation into what happens when research dreams collide with politics.",
    url: "https://readymag.website/u1929452997/5452467/",
    tags: ["Multimedia", "Higher Education", "Immigration Policy"],
    category: "multimedia",
    featured: false,
    type: "Multimedia Story",
  },
  {
    id: "deportation",
    title: "The $315 Billion Question: How Mass Deportation Could Disrupt the U.S. Economy",
    outlet: "UC Berkeley Graduate School of Journalism",
    date: "2025",
    description:
      "Immigrants power $315 billion of the U.S. economy. What happens when you remove them? An interactive data story built from labor and industry data.",
    url: "https://edisonyzwu.github.io/interactive/",
    tags: ["Data Visualization", "Immigration", "Economics"],
    category: "multimedia",
    featured: true,
    type: "Interactive Data Story",
  },

  // WRITING — TECH / BUSINESS
  {
    id: "companies-leaving-california",
    slug: "companies-leaving-california",
    description:
      "An interactive map tracking the ongoing corporate exodus — tech firms, retailers, and real estate companies relocating to Texas, Florida, and beyond as California's costs and regulations drive businesses out.",
    category: "writing-tech",
    featured: true,
    hosted: true,
  },
  {
    id: "labubu",
    slug: "labubu",
    description:
      "A $70 blind box from Asia is spawning Bay Area side hustles. Inside the collectors, resellers, and artists riding the Labubu wave.",
    category: "writing-tech",
    hosted: true,
  },
  {
    id: "nlight-lasr",
    slug: "nlight-lasr",
    description:
      "nLight hits a five-year high on record $175M in aerospace and defense revenue — up 60% — as U.S. government demand for directed-energy laser weapons accelerates.",
    category: "writing-tech",
    hosted: true,
  },
  {
    id: "advanced-energy-aeis",
    slug: "advanced-energy-aeis",
    description:
      "Advanced Energy Industries posts $1.8B in revenue as data-center sales surge 107% to $587M, fueled by AI infrastructure spending from Amazon, Meta, Microsoft, and Alphabet.",
    category: "writing-tech",
    hosted: true,
  },
  {
    id: "silicon-labs-ti",
    slug: "silicon-labs-ti",
    description:
      "Texas Instruments pays $7.5B for Silicon Labs — its biggest deal since 2011 — triggering a 49% single-session stock surge as TI bets on wireless IoT to offset slowing industrial and automotive revenues.",
    category: "writing-tech",
    hosted: true,
  },

  // WRITING — LOCAL NEWS
  {
    id: "election-2024",
    title: "San Francisco Election Day 2024: Live Updates",
    outlet: "Mission Local",
    date: "November 2024",
    description:
      "Live from San Francisco's precincts — candidates, ballot measures, and results as they came in on Election Night 2024.",
    url: "https://missionlocal.org/2024/11/election-2024-live-updates-from-across-san-francisco-november-races/",
    tags: ["Elections", "San Francisco", "Live Coverage"],
    category: "writing-local",
    featured: false,
    type: "Live Blog",
  },
  {
    id: "booksellers",
    title: "Rising from the Ashes, East Bay Booksellers Reopens for Holiday Shopping Season",
    outlet: "Oakland North",
    date: "December 16, 2024",
    description:
      "After a fire gutted their store, East Bay Booksellers came back. A story about Oakland's stubborn literary community.",
    url: "https://oaklandnorth.net/2024/12/16/oakland-east-bay-booksellers-reopens-after-fire/",
    tags: ["Oakland", "Local Business", "Community"],
    category: "writing-local",
    featured: false,
    type: "Feature",
  },
  {
    id: "california-layoffs",
    slug: "california-layoffs",
    description:
      "UC, Stanford, Cal State — all cutting jobs as federal dollars dry up. What's driving California's university crisis, and who gets left behind.",
    category: "writing-local",
    featured: false,
    hosted: true,
  },
  {
    id: "wronged-retailer",
    slug: "wronged-retailer",
    description:
      "From a $5.6M Walmart settlement to the state AG's office, Bay Area consumers have real options when retailers overcharge or deceive — and most people don't know about them.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "legionnaires",
    slug: "legionnaires",
    description:
      "A primer on the waterborne bacterial illness — how it spreads through cooling towers and plumbing systems, which populations are most at risk, and what Bay Area residents should know.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "valkyries-data",
    slug: "valkyries-data",
    description:
      "The Valkyries have a mascot named Violet. How does she stack up against the rest of the WNBA? A data-driven comparison of every team's brand identity.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "valkyries-unveiled",
    slug: "valkyries-unveiled",
    description:
      "Meet Violet — the Golden State Valkyries' bespectacled new mascot inspired by Norse mythology, arriving just as the Bay Area's WNBA expansion team builds its brand identity.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "gardening-late-summer",
    slug: "gardening-late-summer",
    description:
      "Late summer pruning, fruit tree care, and what to plant now to set up a plentiful Bay Area autumn harvest.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "labor-day-stores",
    slug: "labor-day-stores",
    description:
      "A rundown of which Bay Area retailers, grocery stores, and restaurants are open, closed, or running reduced hours on Labor Day 2025.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "new-world-screwworm",
    slug: "new-world-screwworm",
    description:
      "The flesh-eating parasite that ravaged livestock populations is edging toward California. What it is, how it spreads, and what agriculture officials are doing to keep it out.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "yosemite-travel",
    slug: "yosemite-travel",
    description:
      "Reservation windows, fire closures, crowd timing, and safety tips for getting the most out of a Yosemite visit during peak summer season.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "unesco-california",
    slug: "unesco-california",
    description:
      "California's UNESCO-designated sites and national parks face an uncertain future amid shifting federal policy — a look at what's protected, what's at risk, and what the designations actually mean.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "snakes",
    slug: "snakes",
    description:
      "You spot a snake on the trail. Now what? An expert guide to Bay Area species, behavior, and exactly what not to do.",
    category: "writing-local",
    hosted: true,
  },
  {
    id: "temu-shipping-hubs",
    slug: "temu-shipping-hubs",
    description:
      "When shoppers order from Temu, few know their packages may be sorted and shipped from a Bay Area garage. Inside the Chinese immigrant networks quietly powering a new logistics economy.",
    category: "writing-tech",
    featured: true,
    hosted: true,
  },
  {
    id: "memory-stocks-ai-supply",
    slug: "memory-stocks-ai-supply",
    description:
      "The Global Memory Index surged 440% as AI hyperscalers lock down chip supply — sending SK Hynix and Micron to record earnings while consumer electronics and gaming feel the squeeze.",
    category: "writing-tech",
    featured: true,
    hosted: true,
  },
  {
    id: "gaming-memory-crunch",
    slug: "gaming-memory-crunch",
    description:
      "Memory prices up 60% have priced PC builders out of upgrades and pushed Sony, Nintendo, and Valve to raise console prices — while the gaming ETF has slid 23% since October.",
    category: "writing-tech",
    featured: true,
    hosted: true,
  },
  {
    id: "finli-ai-engineers",
    slug: "finli-ai-engineers",
    description:
      "The San Marino fintech slashed its engineering team from 15 to two as AI tools cut monthly costs 80%, while revenue is on track to quintuple to about $30 million.",
    category: "writing-tech",
    hosted: true,
  },
  {
    id: "navitas-energy-chips",
    slug: "navitas-energy-chips",
    description:
      "The Torrance chip designer rose 21% after launching gallium-nitride power products for AI data centers and grid infrastructure, shifting focus from mobile to high-power markets.",
    category: "writing-tech",
    hosted: true,
  },
];
