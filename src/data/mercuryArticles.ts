export interface ArticleBlock {
  type: "p" | "h2" | "blockquote" | "map-embed";
  text?: string;
  cite?: string;
  src?: string;
  title?: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  deck: string;
  outlet: string;
  author: string;
  date: string;
  originalUrl?: string;
  tags: string[];
  paywalled?: boolean;
  image?: ArticleImage;
  blocks: ArticleBlock[];
}

export const articles: ArticleData[] = [
  // ─── COMPANIES LEAVING CALIFORNIA ────────────────────────────────────────────
  {
    slug: "companies-leaving-california",
    title: "Companies That Moved Out of California in 2024 and 2025",
    deck: "Bed Bath & Beyond announced its planned return to brick-and-mortar retail will bypass the Golden State. It's not alone.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "September 12, 2025",
    originalUrl: "https://www.mercurynews.com/2025/09/12/companies-leaving-california-map/",
    tags: ["California", "Business", "Data Journalism"],
    blocks: [
      {
        type: "p",
        text: "On Aug. 20, Bed Bath & Beyond announced that its planned return to brick-and-mortar retail will bypass California. Executive Chairman Marcus Lemonis said the state's heavy regulations and high costs make it too risky for business, criticizing California for imposing steep taxes, fees, wages and regulations that he says stifle growth.",
      },
      {
        type: "p",
        text: "The retailer, which shuttered all stores after filing for bankruptcy in 2023, has since rebranded as Bed Bath & Beyond Home and launched a new store in Tennessee, with plans for about 80 more openings nationwide next year. It's not the only company that stopped their operations in California this year.",
      },
      {
        type: "p",
        text: "Realtor.com announced a shift of its headquarters from California to Texas in February. The real estate listings site, run by News Corp.'s Move Inc., is relocating from Santa Clara to Austin, where it has leased space since 2019.",
      },
      {
        type: "p",
        text: "Many companies from California — including tech, home improvement, real estate, fashion and food — have decided to relocate their headquarters to more affordable places. A report by the Public Policy Institute of California says relocation choices often hinge not only on a region's size and proximity but also on business costs tied to taxes and regulations. Companies also weigh the availability of skilled workers and hiring expenses shaped by housing costs and income tax rates.",
      },
      {
        type: "p",
        text: "According to the report, 789 companies moved their headquarters out of California from 2011 to 2021, with departures accelerating after 2017. Over the same period, the number of firms relocating into California fell sharply, dropping from 137 in 2011 to just 68 in 2021.",
      },
      {
        type: "h2",
        text: "Interactive Maps: California's Corporate Exodus",
      },
      {
        type: "map-embed",
        title: "Companies Leaving California",
        src: "/tina-chen-portfolio/map1.html",
      },
      {
        type: "map-embed",
        title: "2025 HQ Moves",
        src: "/tina-chen-portfolio/map2.html",
      },
    ],
  },

  // ─── CALIFORNIA LAYOFFS (PAYWALLED) ──────────────────────────────────────────
  {
    slug: "california-layoffs",
    title: "California Higher Education Layoffs: UC, Stanford and Cal State Universities Cut, Freeze Jobs",
    deck: "Federal funding cuts, inflation and drops in enrollment are among the reasons cited for the pink slips.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 6, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/06/layoffs-stanford-california-universities-colleges-cuts-funding/",
    tags: ["Higher Education", "Economy", "California"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/05/SJM-L-SJSUCODE-0000-2.jpg?w=1200",
      alt: "Students walk outside the Charles W. Davidson College of Engineering building at San Jose State University.",
      caption: "Dai Sugano/Bay Area News Group",
    },
    paywalled: true,
    blocks: [],
  },

  // ─── LABUBU ───────────────────────────────────────────────────────────────────
  {
    slug: "labubu",
    title: "Labubu Plush Toy Craze Sparks Creativity, Side Hustles Among Bay Area Fans",
    deck: "Collectors and vendors gather at Bubu Fest to buy, trade and build community around the viral Labubu toy.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "July 22, 2025",
    originalUrl: "https://www.mercurynews.com/2025/07/22/labubu-craze-creativity-bay-area-businesses/",
    tags: ["Pop Culture", "Small Business", "Bay Area"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/07/SJM-L-BUBUFEST-0715-8.jpg?w=1200",
      alt: "Labubu toys with permanent tattoos applied by tattoo artist Owen Smith, of Martinez, are displayed during the Labubu Fest in South San Francisco.",
      caption: "Ray Chavez/Bay Area News Group",
    },
    blocks: [
      {
        type: "p",
        text: '"They are just gorgeous right on the shelves, with cool personalities, and bring innocence and beauty to the world," said Nolan Haley, 38, a Labubu lover from Oakley, who attached several of the plush toys in colorful outfits to his crossbody bag.',
      },
      {
        type: "p",
        text: 'His favorite is his first, Sesame Bean, a gray Labubu in a plush baby shark outfit. "My youngest son is autistic, and he loves baby sharks so I have her in an outfit," Haley said.',
      },
      {
        type: "p",
        text: "Labubu lovers like Haley gathered Saturday at the South San Francisco Conference Center for the Hype Con Bubu Fest, a vibrant festival hosted by local chain Fugitive Toys. Fans and collectors came together to shop for accessories to customize their collectibles, trade them and connect with the community.",
      },
      {
        type: "p",
        text: 'Known for its signature creepy-cute grin, Labubu was created by Kasing Lung, a Hong Kong-born artist, and first appeared in Lung\'s 2015 picture book series "The Monsters." It wasn\'t until a 2019 collaboration with Chinese toy giant Pop Mart that Labubu made the leap into toy stardom, quickly gaining international popularity.',
      },
      {
        type: "p",
        text: "According to an announcement by Pop Mart, the company expects its profits to surge by more than 350% in the first half of the year, driven largely by Labubu's explosive global appeal. The popularity opened the door for entrepreneurs and small-business owners in the Bay Area to tap into a niche but thriving market, offering inspiration, innovation and opportunities to local artists and vendors.",
      },
      {
        type: "p",
        text: "Tattoo artists, cosmetologists, artisan jewelry makers and accessory retailers are among those offering Labubu-related merchandise and services. Labubu lovers are not satisfied with just collecting them; they also are looking for personal expression. Decorating their Labubus is a way to represent their identity, by getting matched tattoos, tooth gems or buying mini outfits for the toys.",
      },
      {
        type: "p",
        text: 'Brittany Briscoe, a kindergarten art teacher from Hollister, went to the Bubu Fest with her two daughters. They searched for playful and endearing Labubu outfits and accessories to compete in the upcoming Labubu Best Dressed Contest in San Jose. "We want to win," she said.',
      },
      {
        type: "p",
        text: 'Added Haley: "You can put your own personality on, by putting the clothes on them. … Being a millennial, we love our tchotchkes. It\'s fun and not weird or strange."',
      },
      {
        type: "p",
        text: 'Owen Smith, a tattoo artist in Martinez, carefully inked designs onto the Labubus\' vinyl faces using techniques typically applied to synthetic skin. "It\'s the first time I\'ve seen tattooing on a toy become part of the trend," he said.',
      },
      {
        type: "p",
        text: "Smith started tattooing Labubu faces after noticing that many fans wanted to personalize their toys. Some people came to him with Labubus for matching tattoos, while others who didn't have tattoos themselves took it as an experiment to try the tattoo arts.",
      },
      {
        type: "p",
        text: 'Sophia Nguyen, a 30-year-old live artist from San Francisco, was drawing cartoon portraits of customers for $10 each, with one playful twist: each portrait included a secret Labubu improvised on the spot for added surprise. "They feel so much joy in seeing their portrait," Nguyen said. She did almost 50 drawings in one afternoon. "I\'m just happy to see families coming together and having fun."',
      },
      {
        type: "p",
        text: 'Dominique Suber, a registered dental hygienist from Fairfield, uses dental-grade materials to apply tooth gems on Labubus, charging $10 for three gems. "I thought the only thing I could do was clean my teeth, but I see all of these people\'s creativity," Suber said. "This is another little outlet for me."',
      },
      {
        type: "p",
        text: 'Nearby, her 17-year-old daughter Alannah Howell was attaching a tooth gem on a beige Labubu diligently sitting beside a dental chair. The moment moved Suber to tears. "She\'s learning how to be an entrepreneur, finding a niche for herself," Suber said. "This is something she likes to do so it doesn\'t feel like work. I am so proud of her."',
      },
      {
        type: "p",
        text: 'Karli Griffith, an administrator coordinator, and Arta Razavi and Zachary Priddy, both software engineers, sat beside a glowing Labubu LED sign of their own making, selling handmade Labubu wing accessories for $20 each. "We put our hearts into it and try to create a little positivity. It\'s a collaborative effort," Griffith said.',
      },
      {
        type: "p",
        text: "For Skyla Mendivil, a 31-year-old local airbrush artist from San Jose, the Bubu Fest was a chance to serve the community of Labubu fans. With an arsenal of stencils, she offered free facepaint for Labubu lovers of all ages. Throughout the event, her booth remained one of the busiest.",
      },
      {
        type: "blockquote",
        text: "It helps us connect, builds community and gives us inspiration to make things. I really like how Labubu makes a positive impact on people, bringing different generations together over a little cute doll.",
        cite: "Karli Griffith, Trippy Bunnies",
      },
    ],
  },

  // ─── VALKYRIES DATA (PAYWALLED) ───────────────────────────────────────────────
  {
    slug: "valkyries-data",
    title: "How Does Golden State Valkyries' Violet Compare to Other WNBA Mascots?",
    deck: "Ellie, Skye, Sparky and more: Meet the other mascots and find out more about their quirky personalities.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 20, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/20/violet-valkyries-compares-wnba-mascots/",
    tags: ["Sports Business", "WNBA", "Data"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/08/BNG-L-VALKYRIES-0812-10.jpg?w=1200",
      alt: "The Golden State Valkyries mascot Violet is unveiled at halftime at Chase Center in San Francisco.",
      caption: "Nhat V. Meyer/Bay Area News Group",
    },
    paywalled: true,
    blocks: [],
  },

  // ─── WRONGED RETAILER ─────────────────────────────────────────────────────────
  {
    slug: "wronged-retailer",
    title: "Wronged at a Retailer in the Bay Area? There's a Way to Complain",
    deck: "Civil cases and class action lawsuits are a common means to protect consumers' rights amid false advertising, price discrepancies and other violations.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 12, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/12/wronged-at-a-retailer-in-the-bay-area-theres-a-way-to-complain/",
    tags: ["Consumer Rights", "Bay Area", "Business"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2024/09/Consumer_Prices_88533.jpg?w=1200",
      alt: "Shoppers pause in the produce section at a Walmart Superstore in Secaucus, New Jersey.",
      caption: "AP Photo/Eduardo Munoz Alvarez",
    },
    blocks: [
      {
        type: "p",
        text: "Government civil cases and class action lawsuits are common means to protect consumers' rights when encountering false advertising, price discrepancies and other violations.",
      },
      {
        type: "p",
        text: "Walmart recently agreed to a $5.6 million settlement in a Bay Area lawsuit that accused the retailer of overcharging customers by selling baked goods and produce that weighed less than the amount on the label. Santa Clara County was among those that accused Walmart of violating California's False Advertising and Unfair Competition Laws, which require retailers to charge customers the lowest advertised price.",
      },
      {
        type: "p",
        text: "Last year, a class action lawsuit, Kukorinis v. Walmart Inc., claimed customers paid more for bagged citrus than the lowest in-store advertised price. In that case, Walmart agreed to a $45 million national settlement.",
      },
      {
        type: "p",
        text: "As a customer, here's what you can do if you think your rights have been violated, according to Congress.gov, Consumer Action and the Federal Trade Commission.",
      },
      {
        type: "h2",
        text: "1. Civil enforcement of consumer rights",
      },
      {
        type: "p",
        text: "Legal actions initiated by government agencies, such as district attorneys or state attorneys general, are aimed at stopping unlawful behavior, imposing penalties and enforcing compliance. Settlement funds usually go toward government penalties, compliance programs and other costs. That's why there is no compensation for customers in the government's civil case against Walmart.",
      },
      {
        type: "p",
        text: 'Class action lawsuits are filed by people and their lawyers on behalf of a group ("class") of affected consumers. The primary purpose is to recover monetary damages for those affected, and settlement funds typically are distributed directly to those in the class. Consumers can choose to participate or opt out.',
      },
      {
        type: "h2",
        text: "2. File a complaint",
      },
      {
        type: "p",
        text: "Problems can be reported to government authorities, who may then investigate and take legal action. Consumer complaints to the California attorney general about businesses violating consumer laws in California can be submitted online at oag.ca.gov. Fraud or scams can be reported to the Federal Trade Commission, which reviews unfair or deceptive business practices across the U.S. Such complaints also can be filed directly with your local district attorney's Consumer Protection Office.",
      },
      {
        type: "h2",
        text: "3. Join a class action lawsuit",
      },
      {
        type: "p",
        text: 'Check if there\'s already an existing class action by reviewing whether lawyers have already filed a similar case on websites such as Consumer Action, Top Class Actions, Class Actions, and the California attorney general\'s website. If a case already exists and is "open to claims," you can usually submit proof of purchase or a sworn statement of impact to join.',
      },
    ],
  },

  // ─── LEGIONNAIRES ─────────────────────────────────────────────────────────────
  {
    slug: "legionnaires",
    title: "Legionnaires' Disease: What It Is, and How to Prevent It",
    deck: "An outbreak in New York City has resulted in two deaths and 58 reported illnesses since late July.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 5, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/05/legionnaires-disease-what-it-is-and-how-to-prevent-it/",
    tags: ["Public Health", "Bay Area", "Explainer"],
    blocks: [
      {
        type: "p",
        text: "A Legionnaires' disease outbreak in New York City has resulted in two deaths and 58 reported illnesses since late July.",
      },
      {
        type: "p",
        text: "The city's health department reported that the bacteria that causes Legionnaires' disease was found in 11 cooling towers in the Central Harlem area of Manhattan. Those towers are mainly used to cool buildings by evaporating water, which helps reduce the temperature of the building's cooling system.",
      },
      {
        type: "p",
        text: "While there are no recent cases indicating an outbreak of Legionnaires' disease in California — the most recent death in the state was in 2023, when two people died after contracting the Legionella bacteria in a Richmond spa — it is useful to know what provokes and how to avoid the disease.",
      },
      {
        type: "p",
        text: "In June 2024, the Legionella bacteria was detected in a state office complex in midtown Sacramento, just as over 200,000 state employees began returning to the workplace at least two days a week.",
      },
      {
        type: "h2",
        text: "What is Legionnaires' disease?",
      },
      {
        type: "p",
        text: "According to the World Health Organization, Legionnaires' disease is a severe type of pneumonia caused by the bacteria Legionella pneumophila, first identified after an outbreak at a Philadelphia convention center in 1976. The Legionella bacteria is naturally found in freshwater environments, but it can become a health hazard in human-made settings.",
      },
      {
        type: "p",
        text: "The disease usually spreads through inhalation of contaminated water aerosols, such as mist or spray from showers, cooling towers or fountains. In hospital settings, it can also be contracted by aspirating contaminated water or ice. Legionnaires' disease is not transmissible from person to person.",
      },
      {
        type: "p",
        text: "People most vulnerable to infection include those 50 or older, individuals who smoke or have smoked in the past, and those with chronic lung conditions or compromised immune systems.",
      },
      {
        type: "h2",
        text: "1. Manage your home water system",
      },
      {
        type: "p",
        text: "Drain garden hoses and don't leave water sitting in them in the sun. Use the right water for medical devices like humidifiers, and clean them as instructed. Change water filters regularly, and check chlorine levels in pools or hot tubs to keep bacteria down. People more at risk should avoid decorative fountains that recirculate water.",
      },
      {
        type: "p",
        text: "Setting your water heater to 130–140°F can kill bacteria, but be careful to avoid burns. Flush your water heater twice a year, and think about using a water softener to stop scale buildup in pipes. Shower before and after using a hot tub, avoid swallowing its water, and don't use the hot tub if you or someone else has diarrhea.",
      },
      {
        type: "h2",
        text: "2. Know the symptoms",
      },
      {
        type: "p",
        text: "Legionnaires' disease usually begins with flu-like symptoms similar to other types of bacterial pneumonia, including headache, muscle aches, fever up to 104 degrees, shortness of breath, cough and fatigue. Within two or three days, the illness fully sets in, and patients typically experience a more severe cough and difficulty breathing, which may be accompanied by nausea, diarrhea, chills and confusion.",
      },
      {
        type: "h2",
        text: "3. Protect your employees",
      },
      {
        type: "p",
        text: "For business owners, ensure that building water systems are properly maintained. Use pipe insulation to keep hot and cold water at the right temperatures — hot water above 120°F and cold water below 77°F — and recirculate water when possible. Place mixing valves close to taps to prevent burns while keeping water hot enough. Choose water tanks that are the right size and use pumps to keep water moving and flush unused pipes and fixtures weekly. The CDC has a toolkit to guide building owners and managers in reducing the risk of Legionella growth and spread.",
      },
    ],
  },

  // ─── VALKYRIES UNVEILED ───────────────────────────────────────────────────────
  {
    slug: "valkyries-unveiled",
    title: "Valkyries Unveil Their Bespectacled Mascot, With a Tie to Norse Mythology",
    deck: "At halftime of their game against the Connecticut Sun, the Valkyries unveiled Violet — a bustling purple raven — to delighted fans.",
    outlet: "The Mercury News",
    author: "Andrew Zeng, with Tina Chen",
    date: "August 12, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/12/valkyries-unveil-their-bespectacled-mascot-with-a-tie-to-norse-mythology/",
    tags: ["WNBA", "Bay Area", "Sports"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/08/BNG-L-VALKYRIES-0812-9.jpg?w=1200",
      alt: "The Golden State Valkyries mascot Violet is unveiled at halftime during the game against the Connecticut Sun at Chase Center.",
      caption: "Nhat V. Meyer/Bay Area News Group",
    },
    blocks: [
      {
        type: "p",
        text: "As thousands of fans looked on Monday night, the Golden State Valkyries unveiled their new mascot: a bespectacled purple raven named Violet, who cartwheeled her way onto the court and into the hearts of the Valkyries faithful.",
      },
      {
        type: "p",
        text: 'Violet\'s halftime entrance came as the culmination of a saga that began on Thursday, when the Valkyries announced that a "mysterious, unusually large, violet egg" from an "undetermined bird species" had appeared in Thrive City, the area outside Chase Center. The organization set up a livestream cam and designated Monday night\'s game against the Connecticut Sun as "Bird Watchers Night."',
      },
      {
        type: "p",
        text: 'As fans gathered both inside and outside the arena, everyone seemed to have their own theory for what creature might hatch from "the egg." "I think it\'s going to be a raven," said Sophia, an 18-year-old from Menlo Park who cited connections from Norse mythology. "They\'re very closely associated with valkyries, and I\'ve seen them on the screen during past games."',
      },
      {
        type: "p",
        text: 'Chloe, a 13-year-old from Fairfield, agreed it would be a purple raven. "There\'s just a lot of feathers, and the egg\'s purple for the Valkyries," she said. Her cousin Bryce, a 9-year-old from Daly City, begged to differ. "I think it\'s going to be a pterodactyl. I don\'t know, I just think it is."',
      },
      {
        type: "p",
        text: "When Violet strutted and somersaulted her way onto the court, she was met with near-universal acclaim from the Valkyries' latest sellout crowd of 18,064 fans. She immediately attempted several layups with the help of Golden State Warriors center Quinten Post, and ultimately sank one during a break in the fourth quarter.",
      },
      {
        type: "p",
        text: '"They were great, very Bay Area, so you love to see the Bay being represented," said Samantha Howard, a fan who has lived in San Francisco for the past 13 years. "The dance group was certainly much better than the attempts to make a basket." As for Violet herself: "You know, adorable, but I was expecting a more powerful warrior bird, like a black raven screeching across the ground. Very cute, but she was just born, so maybe she\'ll evolve into a more powerful bird."',
      },
      {
        type: "p",
        text: 'Alba Barreto, a senior citizen from San Francisco, said she thought the reveal was "wonderful." "I\'m so glad Violet was with us this evening, and I think she\'s going to be an asset to the Valkyries," she said.',
      },
      {
        type: "p",
        text: "As for the Valkyries, Violet's arrival onto the basketball court may have lit something of a fire beneath them. After leading by just six points at halftime, they sank a succession of 3-point baskets — including five in the third quarter alone — to balloon their lead over the Sun to 20 points. They never looked back, winning 74–57.",
      },
    ],
  },

  // ─── GARDENING LATE SUMMER ────────────────────────────────────────────────────
  {
    slug: "gardening-late-summer",
    title: "Here's What You Can Do for Your Garden in Late Summer in the Bay Area",
    deck: "Proper planning in late summer — from planting cool-season vegetables to pruning trees and controlling pests — can bring healthy growth and a plentiful autumn harvest.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 15, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/15/late-summer-gardening-bay-area-pruning-fruit-trees-plants/",
    tags: ["Bay Area", "Gardening", "Lifestyle"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/03/Gardening_-_Houseplant_Vacation_46353.jpg?w=1200",
      alt: "Houseplants vacationing outdoors over summer, needing a gradual transition back into the home to avoid shock.",
      caption: "Jessica Damiano via AP",
    },
    blocks: [
      {
        type: "p",
        text: "As summer nears its end and cooler temperatures hint at an arrival, garden lovers in the Bay Area have an ideal window to prepare for a successful fall season. Proper planning in late summer, ranging from planting cool-season vegetables to pruning trees and controlling pests, can bring healthy growth and a plentiful harvest for your garden. The following tips from University of California Agriculture and Natural Resources, Sloat Garden Center and Garden Design are a good start for a great fall harvest.",
      },
      {
        type: "h2",
        text: "Plan and plant your fall vegetable garden",
      },
      {
        type: "p",
        text: "Starting in September, you can plant broccoli, cabbage, lettuce, celery, kale, collards, peas and chard in the East Bay. Rotate crops to avoid planting the same varieties in the same location for consecutive seasons. Choose drought-tolerant plants that attract butterflies. Include nectar sources, such as lantana for adults, and host plants like native milkweed, California lilacs, buckwheat or dill for caterpillars.",
      },
      {
        type: "p",
        text: "Begin planting cool-season crops, including cole crops such as broccoli, mustard and cabbage, along with beets, carrots, lettuce, green onions, potatoes and peas. In hotter climates, the UC Master Gardener Program of Alameda County recommends delaying planting until September.",
      },
      {
        type: "p",
        text: "Start seeds of cool-season annuals, such as calendula and stock. Continue adding cool-season plants throughout fall. Set out cool-season annuals, including pansies, primrose and stock, but wait until cooler months in warmer regions. Support tall and vining vegetables with cages, stakes or trellises to prevent crop loss. Continue harvesting summer crops and add plant debris to compost unless it is diseased.",
      },
      {
        type: "h2",
        text: "Pruning and plant maintenance",
      },
      {
        type: "p",
        text: "Prune fruit trees in summer to control height, maintain shape and remove suckers. Cut back tropical milkweed to about 6 inches to encourage monarch butterfly migration. Remove foliage after cutting.",
      },
      {
        type: "p",
        text: "Repot indoor plants that have outgrown their containers to allow them to adjust before winter. Signs that your plants need repotting include soil that dries out too quickly and roots that grow out of the drainage holes. Refresh container plantings with new plants and feed with a balanced fertilizer. Maintain regular plant care routines, including fertilizing, watering and deadheading spent blooms.",
      },
      {
        type: "h2",
        text: "Soil, mulching and water management",
      },
      {
        type: "p",
        text: "Apply a slow-release fertilizer to vegetables and flowers to sustain growth and prevent your plants from burning. Mulch vegetable and flower beds to conserve soil moisture. Check mature plants for signs of water stress, especially on specimens more than 30 years old.",
      },
      {
        type: "p",
        text: "Inspect and adjust irrigation systems to ensure they meet the needs of your garden, using a water-needs calculator as a guide. Check Aggie Horticulture for more detailed guidance on watering schedules for Bay Area plants.",
      },
    ],
  },

  // ─── LABOR DAY STORES ─────────────────────────────────────────────────────────
  {
    slug: "labor-day-stores",
    title: "What Bay Area Stores Are Open on Labor Day?",
    deck: "Holiday hours for Trader Joe's, Target, Safeway and other retailers on Sept. 1, 2025.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 25, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/25/labor-day-stores-open/",
    tags: ["Bay Area", "Retail", "Service Journalism"],
    blocks: [
      {
        type: "p",
        text: "Most of the big retailers in the Bay Area will be open on Labor Day, which this year falls on Sept. 1. Celebrated on the first Monday of September, Labor Day recognizes the achievements of workers across the United States. It is also one of the major shopping weekends in the U.S., with many retailers offering special deals and back-to-school promotions.",
      },
      {
        type: "p",
        text: "Here are many stores' hours in the Bay Area on Labor Day. Store hours may vary by location. The following information was confirmed with store staff on Aug. 19.",
      },
      {
        type: "h2",
        text: "Bay Area store hours on Labor Day, Sept. 1",
      },
      {
        type: "p",
        text: "Walmart: 6 a.m.–11 p.m. · Trader Joe's: 8 a.m.–9 p.m. · Whole Foods Market: 8 a.m.–10 p.m. · Safeway: 5 a.m.–midnight · Costco: Closed · Target: 8 a.m.–10 p.m. · Macy's: 10 a.m.–9 p.m. · Home Depot: 6 a.m.–10 p.m. · Lowe's: 6 a.m.–10 p.m.",
      },
    ],
  },

  // ─── NEW WORLD SCREWWORM ──────────────────────────────────────────────────────
  {
    slug: "new-world-screwworm",
    title: "What Is New World Screwworm and How Can You Prevent It",
    deck: "The U.S. confirmed its first travel-related human case of the flesh-eating parasite, detected in a traveler returning from El Salvador.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "August 25, 2025",
    originalUrl: "https://www.mercurynews.com/2025/08/25/new-world-screwworm-everything-you-need-to-know/",
    tags: ["Agriculture", "Public Health", "California"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/08/Screwworm_52359-1.jpg?w=1200",
      alt: "An adult New World screwworm fly sits at rest.",
      caption: "Denise Bonilla/U.S. Department of Agriculture via AP",
    },
    blocks: [
      {
        type: "p",
        text: "The U.S. Department of Health and Human Services on Sunday confirmed the country's first travel-related human case of New World screwworm (NWS), a flesh-eating parasite, according to Reuters. The infection, detected in a traveler returning from El Salvador, was verified by the Centers for Disease Control and Prevention on Aug. 4 after an investigation by Maryland health authorities.",
      },
      {
        type: "p",
        text: "The risk to public health in the United States from this introduction is very low, according to NBC News. According to the CDC, NWS typically is found in South America and the Caribbean. Infestations start when female flies deposit eggs in open wounds or on other vulnerable areas of living, warm-blooded animals. While livestock are the main hosts, birds and humans also can be affected.",
      },
      {
        type: "p",
        text: "U.S. Agriculture Secretary Brooke L. Rollins opened an $8.5 million facility in South Texas for releasing sterile New World screwworm flies and introduced a comprehensive five-part plan to strengthen the USDA's efforts to detect, control, and eradicate this pest.",
      },
      {
        type: "p",
        text: "The best defense against myiasis — a parasitic infection caused by fly larvae — is prevention. According to the USDA Animal and Plant Health Inspection Service and the CDC, here are steps to reduce the risk.",
      },
      {
        type: "h2",
        text: "If you are traveling or living in tropical regions",
      },
      {
        type: "p",
        text: "Keep any cuts or wounds clean and properly covered. Wear long, loose clothing and socks to reduce exposed skin. Treat clothing and gear with 0.5% permethrin products. Stay indoors at night or in screened rooms to avoid insect exposure.",
      },
      {
        type: "h2",
        text: "If you have pets at home or livestock on a ranch",
      },
      {
        type: "p",
        text: "Monitor pets and livestock for symptoms of infection. Ensure pets returning from overseas travel are checked for screwworm. Manage livestock gently and remove sharp objects from pens and equipment that could cause injuries. If your pets or livestock have wounds, apply approved insecticides promptly to the wounds and to umbilical cords of newborn animals. Check your dogs after a walk — summer is tick season in California, and ticks can create openings for infestation.",
      },
    ],
  },

  // ─── YOSEMITE TRAVEL ──────────────────────────────────────────────────────────
  {
    slug: "yosemite-travel",
    title: "What Visitors Need to Know Before Traveling to Yosemite This Summer",
    deck: "Following a three-year closure for a major upgrade, Tuolumne Meadows Campground will reopen Aug. 1, and demand is high.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "July 25, 2025",
    originalUrl: "https://www.mercurynews.com/2025/07/25/yosemite-summer-travel/",
    tags: ["Travel", "California", "Outdoors"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2025/03/SJM-L-YOSEMITE-0318-2_8da50b.jpg?w=1200",
      alt: "Tourists walk out to Glacier Point with a background view of Half Dome at Yosemite National Park.",
      caption: "FREDERIC J. BROWN/AFP via Getty Images",
    },
    blocks: [
      {
        type: "p",
        text: "Summer is well under way in Yosemite, one of the only two national parks in the U.S. on the UNESCO World Heritage list. Now that the snow has melted, it's a good time to explore the Sierra in warm and dry weather.",
      },
      {
        type: "p",
        text: "Late summer also marks the beginning of the blooming season for subalpine wildflowers in Tuolumne Meadows, the largest campground at Yosemite. Following a three-year closure for a major upgrade, Tuolumne Meadows Campground will reopen Aug. 1, and demand is high. Most of the campsites have been reserved for August, with only a dozen spots left, according to Recreation.gov.",
      },
      {
        type: "p",
        text: "Even if you're not camping, Yosemite is well worth a visit. Aug. 4 is an excellent time to go because there will be free admission after reservation on the Anniversary of the Great American Outdoors Act.",
      },
      {
        type: "h2",
        text: "1. Make your reservation",
      },
      {
        type: "p",
        text: "Travelers planning to enter Yosemite between 6 a.m. and 2 p.m. from Memorial Day weekend, June 15 to Aug. 15, or Labor Day weekend will need to make a reservation in advance. This rule also applies to drivers passing through the park without stopping during peak hours.",
      },
      {
        type: "p",
        text: "Each reservation costs $2 and is non-refundable; it is valid for three consecutive days, starting the day of arrival. Only one reservation per vehicle is needed, covering all passengers. For each vehicle entering the park, a $35 standard park entrance fee is required. For visitors entering on bicycle or on foot, the fee is $20 per person for those 16 and older. There is no cash in the park, so be prepared to pay with credit or debit card only.",
      },
      {
        type: "h2",
        text: "2. Check the weather",
      },
      {
        type: "p",
        text: "August is Yosemite's warmest and sunniest month, with valley highs around 89°F and cool mornings ideal for hiking or swimming. Higher elevations like Tuolumne Meadows stay much cooler, averaging 70°F during the day and dropping to 37°F at night. Thundershowers occur more frequently in the afternoons at high elevation. Be prepared with breathable shirts for the sun and a windbreaker for the storms.",
      },
      {
        type: "h2",
        text: "3. Arrive early",
      },
      {
        type: "p",
        text: "Summer is the year's busiest season. During this time, delays at entrance stations are common. Estimated wait times: South Entrance (Hwy 41 via Oakhurst): 1–2 hours; Arch Rock Entrance (Hwy 140 via Mariposa): ~30 minutes; Big Oak Flat Entrance (Hwy 120 via Groveland): ~30 minutes; Hetch Hetchy Entrance: up to 2 hours if parking is full; Tioga Pass Entrance (Hwy 120 via Lee Vining): ~30 minutes.",
      },
      {
        type: "p",
        text: "To avoid long waits, plan to arrive before 8 a.m., early afternoon, or after 5 p.m. Call 209-372-0200 (press 1, then 1 again) for the most up-to-date conditions. The phone is in service from 9 a.m. to 4 p.m. PDT.",
      },
    ],
  },

  // ─── UNESCO CALIFORNIA ────────────────────────────────────────────────────────
  {
    slug: "unesco-california",
    title: "Which Places in California Are Designated a UNESCO World Heritage Site?",
    deck: "Trump administration intends to withdraw the U.S. from UNESCO, just two years after it rejoined following a five-year absence.",
    outlet: "The Mercury News",
    author: "Tina Chen",
    date: "July 22, 2025",
    originalUrl: "https://www.mercurynews.com/2025/07/22/unesco-california-national-parks-trump/",
    tags: ["California", "Environment", "Policy"],
    image: {
      src: "https://www.mercurynews.com/wp-content/uploads/2022/10/SJM-L-TRAVTOPTEN-1030-01.jpg?w=1200",
      alt: "Sunrise illuminates Yosemite Valley, seen from the Tunnel View vista point.",
      caption: "Getty Images",
    },
    blocks: [
      {
        type: "p",
        text: "Every time California comes to mind, so do its iconic landscapes: the towering redwoods along the coast, and the awe-inspiring glacial valleys carved deep into the Sierra Nevada. Redwood and Yosemite national parks, which boast many of these breathtaking scenes, are the only two places in the state designated as UNESCO World Heritage sites.",
      },
      {
        type: "p",
        text: "On Tuesday, the Trump administration again declared its intention to withdraw the United States from membership in the United Nations Educational, Scientific and Cultural Organization, citing allegations that the agency promotes anti-Israel bias. The move comes two years after the Biden administration rejoined UNESCO, ending a five-year absence that began during Trump's first term.",
      },
      {
        type: "p",
        text: "The latest withdrawal is expected to take effect in December 2026; after that point, the U.S. would retain observer status but no longer hold full membership. UNESCO, which oversees the World Heritage program, is an agency known for preserving natural and cultural heritage of global significance. Famous sites that are part of the World Heritage Program include the Great Wall of China, the Taj Mahal in India, the Acropolis in Greece and Yellowstone National Park.",
      },
      {
        type: "p",
        text: "There are currently 26 sites in the United States inscribed on the UNESCO World Heritage List. Among them, only two are located in California: Redwood National Park and Yosemite National Park.",
      },
      {
        type: "p",
        text: "Redwood National Park was added to the list in 1980. It encompasses a region of coastal mountains blanketed by magnificent forest of coastal redwoods, the tallest trees in the world. The park is also notable for its rich diversity of marine and terrestrial life.",
      },
      {
        type: "p",
        text: "Yosemite National Park, one of California's most popular vacation destinations, was designated a World Heritage Site in 1984. It is renowned for its unique breathtaking natural beauty, characterized by dramatic granite formations shaped by glaciation.",
      },
      {
        type: "p",
        text: "However, even before Trump took office, the National Park Service was underfunded, operating on a lean $3 billion budget. Since January, staffing has dropped by 13%, and Trump proposed slashing the budget by 30%, according to the New York Times.",
      },
      {
        type: "p",
        text: "After the withdrawal action takes effect, the U.S. is ineligible to serve on the World Heritage Committee without paying dues to the World Heritage Fund, but it remains a party to the convention and retains the ability to nominate sites for World Heritage designation.",
      },
      {
        type: "p",
        text: "The current U.S. Tentative List includes 19 properties or groups of properties. The one in California is the California Current Conservation Complex, which includes Cordell Bank, Monterey Bay, Greater Farallones, Farallon Islands National Wildlife Refuge, Point Reyes National Seashore and Golden Gate National Recreation Area.",
      },
    ],
  },

  // ─── SNAKES ───────────────────────────────────────────────────────────────────
  {
    slug: "snakes",
    title: "Here's What to Know if You Encounter a Snake in the Bay Area",
    deck: "An animal expert says 18 types of snakes are found in the region, but only one — the rattlesnake — is dangerous to humans.",
    outlet: "East Bay Times",
    author: "Tina Chen",
    date: "August 22, 2025",
    originalUrl: "https://www.eastbaytimes.com/2025/08/22/snakes-bay-area-what-to-do/",
    tags: ["Bay Area", "Nature", "Public Safety"],
    image: {
      src: "https://www.eastbaytimes.com/wp-content/uploads/2025/05/OCR-L-SNAKE-WRANGLER-11-PB.jpg?w=1200",
      alt: "A Southwestern speckled rattlesnake lies on the desert floor near Landers, California.",
      caption: "Paul Bersebach/Orange County Register/SCNG",
    },
    blocks: [
      {
        type: "p",
        text: "As summer temperatures climb, wildlife activity is on the rise — and snake encounters are drawing attention nationwide. Recent reports from Tennessee and South Carolina detailed dramatic snake sightings; in California, Walnut Creek police released video on Aug. 7 of a rattlesnake found inside a resident's kitchen cabinet.",
      },
      {
        type: "p",
        text: "Audra Barrios, the founder and executive director at Things That Creep, an educational organization focusing on hands-on programs with reptiles and amphibians in the Bay Area, said that temperature is the biggest factor in the probability of snake encounters in the region. In terms of species, gopher snakes are usually the most common because they like basking on trails and roads, and residents might encounter garter snakes in urban areas.",
      },
      {
        type: "blockquote",
        text: "It is very uncommon for rattlesnakes to make it into the house. They tend to be in rockier areas, so they're very common in the Mount Diablo area, which is probably why in Walnut Creek you did find those snakes.",
        cite: "Audra Barrios, founder, Things That Creep",
      },
      {
        type: "p",
        text: 'If you encounter a snake in the wild, according to Barrios, the best thing you can do is leave it alone. "Humans are the predator for reptiles, so snakes are actually very afraid of people. Better give them space to run away." Snakes rely on their camouflage to not be seen, so most likely they would stay still and hope humans don\'t see them.',
      },
      {
        type: "p",
        text: '"You can even sit and watch it. Watching snakes in the wild is really cool," said Barrios. "People don\'t see snakes that often because they\'re pretty good at camouflage and staying safe." Which means that if you see a snake, you could be considered very lucky — but you should leave it alone so it won\'t bother you.',
      },
      {
        type: "p",
        text: "According to Barrios, 18 types of snakes are found in the Bay Area; only the rattlesnake is dangerous to humans. The rest of them are harmless. Snakes only bite if people try to move them, pick them up or accidentally step on them. So it's important to know \"where your hands and your feet are going\" and always stay on trails.",
      },
      {
        type: "p",
        text: 'She also recommends being mindful when sitting in the wild, and says to always step on a log rather than over it, in case snakes are underneath it. "If you are bitten by a snake, except for a rattlesnake, the rest of them you can just put a Band-Aid on it and call it a day. You\'ll be totally fine," Barrios said.',
      },
      {
        type: "h2",
        text: "If you're bitten by a rattlesnake",
      },
      {
        type: "p",
        text: "Rattlesnake bites require immediate medical attention. Remove rings, watches or tight clothing from the affected area to prevent circulation problems from swelling, and seek professional care promptly. Common signs near the wound include puncture marks, bleeding, redness, swelling, bruising, blistering and intense pain.",
      },
      {
        type: "h2",
        text: "What NOT to do",
      },
      {
        type: "p",
        text: "Do not cut into the bite wound. Do not apply a tourniquet or otherwise restrict blood flow. Do not place ice on the wound. Do not attempt to suck out the venom with your mouth. These actions can worsen the injury. In fact, the most severe complications, such as amputations, are linked to the use of ice or tourniquets.",
      },
      {
        type: "h2",
        text: "What to do",
      },
      {
        type: "p",
        text: "Stay as calm as possible. Call 911 or radio dispatch immediately. If possible, gently wash the bite with soap and water. Remove jewelry, watches or anything that could constrict swelling. Keep the affected limb still and positioned below heart level. Get the victim to the nearest medical facility as quickly and safely as possible.",
      },
    ],
  },

  // ─── TEMU SHIPPING HUBS ───────────────────────────────────────────────────────
  {
    slug: "temu-shipping-hubs",
    title: "Inside the Bay Area's Hidden Temu Shipping Hubs",
    deck: "When shoppers order from Temu, few know their packages may be sorted and shipped from a Bay Area garage. Inside the Chinese immigrant networks quietly powering a new logistics economy.",
    outlet: "UC Berkeley Graduate School of Journalism",
    author: "Tina Chen",
    date: "2025",
    tags: ["E-Commerce", "Immigration", "Bay Area", "Investigative"],
    blocks: [
      {
        type: "p",
        text: '"I have two girls to raise, so I have to figure something else to do." Marston Lin, an Uber driver in his forties, says while standing in a 20-square-meter garage in San Francisco, surrounded by scattered delivery boxes and a shipping label printer. Outside of the small storage units, his old silver Corolla was parked on the driveway, which took him from his two-floored house in El Cerrito to the city every day and enabled him to stay 24/7 on call to pick up passengers at the airport.',
      },
      {
        type: "p",
        text: 'When shoppers across the U.S. order a $1.29 phone case or a $3.49 set of kitchen sponges from Temu, few know that their packages may be sorted, labeled, and shipped from the living room or garage of a home in Fremont or El Cerrito. In garages turned shipping hubs, Chinese immigrants — many of them parents, part-time workers, or retirees — are quietly powering a growing economy: the "home warehouse."',
      },
      {
        type: "p",
        text: "As a first-generation Chinese immigrant, Lin moved to the U.S. a year ago with his wife and two kids. He used to work in e-commerce in Shenzhen, China, selling electronic accessories. After moving to the U.S., he joined his friends' home warehouse business as a part-time job to cope with financial pressure. Lin labeled about 100 boxes of electronic accessories per day, including screen protectors and phone cases, and handed them to USPS for shipping. Every order earned him 80 cents, accumulating $80–100 in profit per day.",
      },
      {
        type: "p",
        text: 'The concept of the "family warehouse" began in earnest in the U.S. in late 2023, when platforms like Temu and TikTok began encouraging merchants from China to use local inventory to speed up delivery. Temu, a Boston-based online marketplace operated by Chinese e-commerce giant PDD Holdings, has rapidly become a major force in U.S. e-commerce, ranking third in the discount retail market and rivaling giants like Amazon with its low-priced offerings and vast product selection.',
      },
      {
        type: "p",
        text: 'Before shifting to the local inventory model, Temu relied on a "full-managed" system, where sellers shipped bulk goods to warehouses in China, while Temu handled everything from pricing to shipping in the U.S. In 2023, anticipating potential changes to the T86 de minimis rule — which allowed any imported goods valued under $800 to enter the U.S. duty-free with expedited customs clearance — Temu shifted from a "full-managed" to a "semi-managed" model, requiring sellers to manage U.S. inventory, pricing and local fulfillment.',
      },
      {
        type: "p",
        text: "By adopting this model, Temu effectively shifts the burden of extended customs clearance times onto the sellers. After the rule's termination in 2025, Temu introduced an $8-per-order penalty for delayed deliveries, posing a significant financial burden for small-goods sellers.",
      },
      {
        type: "p",
        text: 'This opened the door for Bay Area-based Chinese immigrants to offer a new service: affordable, flexible, and unregulated warehousing and order fulfillment from home. Sellers ship thousands of units in bulk to the U.S., where "home warehouses" repackage and forward orders locally using prepaid USPS labels. For each item handled, the home warehouse earns a cut — typically around $1 per order. "It\'s simple work, but time-sensitive," says Lin. "I sort, pack, print labels, and hand everything to USPS within 48 hours."',
      },
      {
        type: "p",
        text: "However, on April 9, 2025, Trump announced the imposition of 145% tariffs on Chinese imports, set to take effect in May. The rising costs will inevitably have a bigger impact on small manufacturers, while large sellers will be relatively less affected. Most sellers relying on family warehouses are small-scale vendors, and they remain cautious, holding off for the moment.",
      },
      {
        type: "blockquote",
        text: "The tariffs can be an opportunity for family warehouses since the customs clearance time will be longer, and this is pushing many sellers to ship goods to the U.S. in advance to minimize the impact.",
        cite: "Jiahao Yang, founder of SSEEAA (海海), Foster City, CA",
      },
      {
        type: "p",
        text: '"The most significant advantage of choosing a family warehouse is the low price," said Yang. Many people flooded into the market to run home warehouses after Temu\'s model changed, leading to a price war. Large commercial warehouses charge about $1.50 per order, while some home warehouses charge as low as $0.30–$0.80 per order — about a third of the pre-2023 price. "Many are still operating at a loss," Yang says.',
      },
      {
        type: "p",
        text: 'The disadvantages of home warehouses are also apparent. Most of these partnerships begin informally, often through introductions on WeChat or referrals from friends. Now, most sellers and warehouse owners are using RedNote to search for potential clients and reach agreements. "There are no legal contracts, and no business license is needed," Lin admits. "At the beginning, we were all testing each other to see if we could trust one another." Since one party is in China and the other is in the U.S., it would be difficult to hold anyone accountable if something went wrong.',
      },
      {
        type: "p",
        text: "At the same time, Temu's policy has also drawn controversy and rage among sellers. Sellers must set the price of their products at no more than 85% of the price on Amazon, minus a $2.99 delivery compensation, to list them on Temu, according to Cheng Gao, a sales manager at Guangzhou Qianyuan Trading who has sold television accessories for five years.",
      },
      {
        type: "blockquote",
        text: "The freedom of pricing in this semi-fulfillment model is fake. We can't scale up due to Temu's unreasonable rules.",
        cite: "Cheng Gao, sales manager, Guangzhou Qianyuan Trading",
      },
      {
        type: "blockquote",
        text: "Most merchants with some real capabilities don't really like working with Temu. The way they run things isn't very healthy, and a lot of people are taking big risks just to be on the platform. So those with a bit of scale usually stay away. We don't want to use family warehouses either because it's not protected by law.",
        cite: "Diyu Xie, owner of a music instrument export business",
      },
      {
        type: "p",
        text: 'In fact, home warehouses like Lin\'s only take on one or two clients at a time to keep operations manageable. "Big warehouses are too expensive for small sellers," he explains. "We\'re cheaper, more flexible, and we understand how the system works."',
      },
    ],
  },
];

export function getArticle(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug);
}
