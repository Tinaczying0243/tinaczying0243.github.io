export const journalist = {
  name: "Tina Chen",
  email: "ziying_chen@berkeley.edu",
  phone: "+1 (510) 682-0406",
  location: "San Francisco Bay Area",
  bio: "Tina Chen is a master's student in multimedia journalism at the UC Berkeley Graduate School of Journalism, exploring creative ways to expose structural inequality. With experience at Bay Area News Group, Oakland North, Mission Local, and Xinhua News Agency, she specializes in business and tech reporting, investigative journalism, and data storytelling — where numbers and nuance meet.",
  bioShort: "Multimedia journalist at UC Berkeley. Business & tech reporter. Data storyteller.",
  languages: ["English", "Mandarin", "Cantonese", "Teochew"],
  github: "https://github.com/username",
};

export interface WorkItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  category: "multimedia" | "writing-tech" | "writing-local" | "photography" | "news-clip";
  featured?: boolean;
  type?: string;
  /** true when the article is hosted on this site rather than linking externally */
  hosted?: boolean;
}

export const works: WorkItem[] = [
  // MULTIMEDIA
  {
    id: "fulbright",
    title: "Berkeley and Beyond: Fulbright Scholars in Limbo",
    outlet: "UC Berkeley Graduate School of Journalism",
    date: "May 2025",
    description: "Federal funding cuts left Fulbright scholars stranded — no money, no timeline, no answers. A multimedia investigation into what happens when research dreams collide with politics.",
    url: "https://readymag.website/u1929452997/5452467/",
    tags: ["Multimedia", "Higher Education", "Immigration Policy"],
    category: "multimedia",
    featured: true,
    type: "Multimedia Story",
  },
  {
    id: "deportation",
    title: "The $315 Billion Question: How Mass Deportation Could Disrupt the U.S. Economy",
    outlet: "UC Berkeley Graduate School of Journalism",
    date: "2025",
    description: "Immigrants power $315 billion of the U.S. economy. What happens when you remove them? An interactive data story built from labor and industry data.",
    url: "https://edisonyzwu.github.io/interactive/",
    tags: ["Data Visualization", "Immigration", "Economics"],
    category: "multimedia",
    featured: true,
    type: "Interactive Data Story",
  },

  // WRITING — TECH / BUSINESS
  {
    id: "california-layoffs",
    title: "California Higher Education Layoffs: UC, Stanford and Cal State Universities Cut, Freeze Jobs",
    outlet: "Bay Area News Group",
    date: "2025",
    description: "UC, Stanford, Cal State — all cutting jobs as federal dollars dry up. What's driving California's university crisis, and who gets left behind.",
    url: "https://drive.google.com/file/d/1C6biPR1V30PgwA_iECd-teMtfbBezuT3/view?usp=sharing",
    tags: ["Higher Education", "Economy", "California"],
    category: "writing-tech",
    featured: true,
    type: "News",
  },
  {
    id: "labubu",
    title: "Labubu Plush Toy Craze Sparks Creativity, Side Hustles Among Bay Area Fans",
    outlet: "The Mercury News",
    date: "July 22, 2025",
    description: "A $70 blind box from Asia is spawning Bay Area side hustles. Inside the collectors, resellers, and artists riding the Labubu wave.",
    url: "https://www.mercurynews.com/2025/07/22/labubu-craze-creativity-bay-area-businesses/",
    tags: ["Pop Culture", "Small Business", "Bay Area"],
    category: "writing-tech",
    type: "Feature",
  },
  {
    id: "valkyries",
    title: "How Does Golden State Valkyries' Violet Compare to Other WNBA Mascots?",
    outlet: "Bay Area News Group",
    date: "2025",
    description: "The Valkyries have a mascot named Violet. How does she stack up against the rest of the WNBA? The data has opinions.",
    url: "https://drive.google.com/file/d/1cSsvAb9s_L3xdoGLQIvz7OczUh2n9Z0l/view?usp=sharing",
    tags: ["Sports Business", "WNBA", "Data"],
    category: "writing-tech",
    type: "Feature",
  },

  // WRITING — LOCAL NEWS
  {
    id: "election-2024",
    title: "San Francisco Election Day 2024: Live Updates",
    outlet: "Mission Local",
    date: "November 2024",
    description: "Live from San Francisco's precincts — candidates, ballot measures, and results as they came in on Election Night 2024.",
    url: "https://missionlocal.org/2024/11/election-2024-live-updates-from-across-san-francisco-november-races/",
    tags: ["Elections", "San Francisco", "Live Coverage"],
    category: "writing-local",
    featured: true,
    type: "Live Blog",
  },
  {
    id: "booksellers",
    title: "Rising from the Ashes, East Bay Booksellers Reopens for Holiday Shopping Season",
    outlet: "Oakland North",
    date: "December 16, 2024",
    description: "After a fire gutted their store, East Bay Booksellers came back. A story about Oakland's stubborn literary community.",
    url: "https://oaklandnorth.net/2024/12/16/oakland-east-bay-booksellers-reopens-after-fire/",
    tags: ["Oakland", "Local Business", "Community"],
    category: "writing-local",
    featured: true,
    type: "Feature",
  },
  {
    id: "snakes",
    title: "Here's What to Know if You Encounter a Snake in the Bay Area",
    outlet: "East Bay Times",
    date: "August 22, 2025",
    description: "You spot a snake on the trail. Now what? An expert guide to Bay Area species, behavior, and exactly what not to do.",
    url: "https://www.eastbaytimes.com/2025/08/22/snakes-bay-area-what-to-do/",
    tags: ["Bay Area", "Nature", "Public Safety"],
    category: "writing-local",
    type: "Explainer",
  },

  // NEWS CLIPS
  {
    id: "silicon-labs-ti",
    title: "Silicon Labs Jumps 49% After Texas Instruments Acquisition",
    outlet: "Weekly Semiconductor News",
    date: "February 2025",
    description: "Texas Instruments pays $7.5B for Silicon Labs — its biggest deal since 2011 — triggering a 49% single-session stock surge as TI bets on wireless IoT to offset slowing industrial and automotive revenues.",
    url: "/news-clips/silicon-labs-ti",
    tags: ["Semiconductors", "M&A", "IoT"],
    category: "news-clip",
    hosted: true,
    type: "News Clip",
  },

  // PHOTOGRAPHY
  {
    id: "fulbright-photo",
    title: "Faces Behind the Funding Freeze: Fulbright Scholars in the Bay Area",
    outlet: "UC Berkeley Graduate School of Journalism",
    date: "May 2025",
    description: "Documentary portraits of Fulbright scholars navigating uncertainty after the federal government cut their support mid-year.",
    url: "https://readymag.website/u1929452997/5452467/",
    tags: ["Documentary", "Portraiture", "Higher Education"],
    category: "photography",
    type: "Photo Essay",
  },
  {
    id: "election-photo",
    title: "Election Night 2024: On the Ground in San Francisco",
    outlet: "Mission Local",
    date: "November 2024",
    description: "Voters, candidates, and watch parties across San Francisco — documentary photography from a night that held the city's breath.",
    url: "https://missionlocal.org/2024/11/election-2024-live-updates-from-across-san-francisco-november-races/",
    tags: ["Elections", "Documentary", "San Francisco"],
    category: "photography",
    type: "Photo Essay",
  },
  {
    id: "exhibition",
    title: "Exhibition Curation: Non-Visual Photography",
    outlet: "3rd Media Anthropology Conference",
    date: "June 2023",
    description: "Photographs taken by visually impaired artists — an exhibition exploring emotion, memory, and how we see without seeing.",
    url: "https://readymag.website/u1929452997/5452467/",
    tags: ["Curation", "Documentary", "Exhibition"],
    category: "photography",
    type: "Exhibition",
  },
];

export const resumeData = {
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Master of Journalism",
      period: "Aug 2024 – May 2026 (Expected)",
      location: "Berkeley, CA",
      details: ["Graduate School of Journalism", "Award: Reporting on China Fellowship"],
    },
    {
      institution: "Hong Kong Baptist University",
      degree: "Bachelor of Media and Communication Studies (Honours)",
      period: "Sep 2020 – Jun 2024",
      location: "Zhuhai, CN",
      details: [],
    },
    {
      institution: "The University of Edinburgh",
      degree: "Exchange Student",
      period: "Sep 2022 – Dec 2022",
      location: "Edinburgh, UK",
      details: [],
    },
  ],
  experience: [
    {
      company: "Bay Area News Group",
      title: "Audience Engagement & Data Reporter",
      period: "July 2025 – Sept 2025",
      location: "San Jose, CA",
      bullets: [
        "Monitored trending topics via Google Trends to identify timely, high-interest story opportunities; produced one story per day, driving over 100K page views in two months through SEO optimization.",
        "Reported on local business, pop culture, and arts events including the Labubu craze, companies leaving California, and the University Funding Freeze.",
      ],
    },
    {
      company: "Oakland North",
      title: "Business Reporter",
      period: "Sept 2024 – Dec 2024",
      location: "Oakland, CA",
      bullets: [
        "Covered local business stories, conducted data analysis on Oakland's economic development, and built data stories on Trump's second administration policies including mass deportation and Fulbright funding freeze.",
        "Built websites, covered campus news, pitched biweekly, attended community meetings, and maintained sources.",
      ],
    },
    {
      company: "Mission Local",
      title: "Freelance Reporter",
      period: "Nov 2024",
      location: "San Francisco, CA",
      bullets: [
        "Covered local election stories, followed candidates' campaigns, made live updates on election night, and created social media content.",
      ],
    },
    {
      company: "Xinhua News Agency",
      title: "Summer Intern, International New Media Operator",
      period: "July 2023 – Oct 2023",
      location: "Guangzhou, CN",
      bullets: [
        "Managed social media accounts (@Explore Zhuhai on Facebook, X, etc.), increasing followers by 20% within three months.",
        "Created and scheduled daily posts, conducted regular performance analysis, and adjusted strategies to improve key metrics.",
      ],
    },
    {
      company: "Zhen Zhu Newspaper",
      title: "Reporter",
      period: "Sept 2020 – June 2024",
      location: "Zhuhai, CN",
      bullets: [
        "Covered local community stories including China International Aviation & Aerospace Exhibition and conducted investigative reporting.",
        "Designed magazine and newspaper layouts; published commentary on BBC misquotes on HK local news site.",
      ],
    },
  ],
  skills: [
    { category: "Reporting", items: ["Investigative Journalism", "Data Journalism", "Business Reporting", "Live Coverage", "SEO Optimization"] },
    { category: "Multimedia", items: ["Interactive Storytelling", "Data Visualization", "Multimedia Production", "Social Media"] },
    { category: "Languages", items: ["English", "Mandarin", "Cantonese", "Teochew"] },
    { category: "Tools", items: ["Google Trends", "Web Development", "Content Management Systems"] },
  ],
  research: [
    {
      title: "Exhibition Curator — 3rd Media Anthropology Conference",
      date: "June 2023",
      location: "Zhuhai, CN",
      description: "Curated non-visual photography exhibitions displaying works from visually impaired people, conveying the idea of 'photos of emotions with an ethnographic method.'",
    },
    {
      title: "First Author — ICPAHD 2021 Publication",
      date: "2022",
      location: "Kunming, CN",
      description: "Chen, Z., Fan, L., & Li, S. (2022). A Literature Review of the Reasons for School Bullying in China. Proceedings of ICPAHD 2021, 430–435.",
      url: "https://doi.org/10.2991/assehr.k.220110.084",
    },
  ],
};
