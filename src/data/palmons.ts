export type PalmonRarity = "UR" | "SSR" | "SR" | "R";
export type PalmonElement = "Fire" | "Water" | "Electric" | "Earth" | "Nature" | "Normal";
export type PalmonJob = "Combat" | "Planting" | "Watering" | "Logging" | "Sawing" | "Mining" | "Smelting" | "Charging";

export interface Palmon {
  name: string;
  slug: string;
  rarity: PalmonRarity;
  element: PalmonElement;
  jobs: PalmonJob[];
  image?: string;
  bestTraits: {
    sPlusTier: string[];
    sTier: string[];
    aTier: string[];
  };
  notes?: string;
}

// Trait recommendations per job
export const traitsByJob: Record<PalmonJob, { sPlus: string[]; s: string[]; a: string[] }> = {
  Combat: {
    sPlus: ["Warlike", "Vigorous", "Heartless", "Blessed", "Diamond Skull", "Serene"],
    s: ["Belligerent", "Robust", "Ruthless", "Clear-Headed", "Steadfast"],
    a: ["Combative", "Energetic", "Brutal", "Favored"],
  },
  Planting: {
    sPlus: [],
    s: ["Supersonic", "Prodigy"],
    a: ["Industrious", "Lightspeed", "Diligent", "Fleet-Footed"],
  },
  Watering: {
    sPlus: [],
    s: ["Supersonic"],
    a: ["Lightspeed", "Industrious", "Diligent"],
  },
  Logging: {
    sPlus: [],
    s: ["Supersonic"],
    a: ["Industrious", "Lightspeed", "Diligent"],
  },
  Sawing: {
    sPlus: [],
    s: ["Plank Pro"],
    a: ["Industrious", "Diligent"],
  },
  Mining: {
    sPlus: [],
    s: ["Efficient"],
    a: ["Industrious", "Diligent"],
  },
  Smelting: {
    sPlus: [],
    s: ["Bellow Fellow"],
    a: ["Industrious", "Diligent"],
  },
  Charging: {
    sPlus: [],
    s: ["Lightning Affinity"],
    a: ["Battery Pack", "Industrious"],
  },
};

export const palmons: Palmon[] = [
  // UR Palmons
  {
    name: "Ninjump",
    slug: "ninjump",
    rarity: "UR",
    element: "Water",
    jobs: ["Combat"],
    image: "/images/ninjump.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Heartless", "Blessed"],
      sTier: ["Belligerent", "Robust", "Ruthless", "Clear-Headed"],
      aTier: ["Combative", "Energetic", "Brutal"],
    },
    notes: "Top-tier combat Palmon. Prioritize offensive S+ traits.",
  },
  {
    name: "Lucidina",
    slug: "lucidina",
    rarity: "UR",
    element: "Water",
    jobs: ["Combat"],
    image: "/images/lucidina.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Blessed", "Diamond Skull"],
      sTier: ["Belligerent", "Robust", "Steadfast", "Clear-Headed"],
      aTier: ["Combative", "Energetic", "Resolute"],
    },
    notes: "Balanced combat Palmon with good survivability.",
  },
  {
    name: "Mantleray",
    slug: "mantleray",
    rarity: "UR",
    element: "Electric",
    jobs: ["Combat"],
    image: "/images/mantleray.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Heartless", "Blessed", "Deadeye"],
      sTier: ["Belligerent", "Ruthless", "Fortunate", "Sharpshooter"],
      aTier: ["Combative", "Brutal", "Favored", "Crack Shot"],
    },
    notes: "Highest ATK in game but fragile. Go full offensive traits.",
  },
  {
    name: "Barkplug",
    slug: "barkplug",
    rarity: "UR",
    element: "Electric",
    jobs: ["Charging", "Combat"],
    image: "/images/barkplug.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Lightning Affinity", "Belligerent", "Robust"],
      aTier: ["Battery Pack", "Industrious", "Combative"],
    },
    notes: "Best charging Palmon. Lightning Affinity is essential.",
  },
  {
    name: "Baboom",
    slug: "baboom",
    rarity: "UR",
    element: "Nature",
    jobs: ["Logging", "Combat"],
    image: "/images/baboom.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Supersonic", "Belligerent", "Robust"],
      aTier: ["Industrious", "Lightspeed", "Diligent"],
    },
    notes: "Excellent for logging. Speed traits maximize efficiency.",
  },
  {
    name: "Statchew",
    slug: "statchew",
    rarity: "UR",
    element: "Electric",
    jobs: ["Combat"],
    image: "/images/statchew.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Heartless", "Shadow"],
      sTier: ["Belligerent", "Robust", "Ruthless", "Elusive"],
      aTier: ["Combative", "Energetic", "Brutal", "Slippery"],
    },
    notes: "Strong combat unit with evasion potential.",
  },
  {
    name: "Blazeal",
    slug: "blazeal",
    rarity: "UR",
    element: "Fire",
    jobs: ["Combat"],
    image: "/images/blazeal.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Heartless", "Blessed"],
      sTier: ["Belligerent", "Ruthless", "Fortunate"],
      aTier: ["Combative", "Brutal", "Favored"],
    },
    notes: "Fire DPS. Stack crit traits for maximum damage.",
  },
  {
    name: "Magmolin",
    slug: "magmolin",
    rarity: "UR",
    element: "Fire",
    jobs: ["Mining", "Combat"],
    image: "/images/magmolin.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Efficient", "Belligerent", "Robust"],
      aTier: ["Industrious", "Diligent", "Combative"],
    },
    notes: "Best mining Palmon. Efficient trait is key.",
  },
  {
    name: "Dolphriend",
    slug: "dolphriend",
    rarity: "UR",
    element: "Water",
    jobs: ["Logging", "Watering"],
    image: "/images/dolphriend.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Industrious", "Lightspeed", "Diligent"],
    },
    notes: "Versatile worker. Speed and efficiency traits.",
  },
  {
    name: "Hoofrit",
    slug: "hoofrit",
    rarity: "UR",
    element: "Fire",
    jobs: ["Combat"],
    image: "/images/hoofrit.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Heartless"],
      sTier: ["Belligerent", "Robust", "Ruthless"],
      aTier: ["Combative", "Energetic", "Brutal"],
    },
    notes: "Fire combat unit with cannon attacks.",
  },
  {
    name: "Limudroid",
    slug: "limudroid",
    rarity: "UR",
    element: "Electric",
    jobs: ["Charging", "Combat"],
    image: "/images/limudroid.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Lightning Affinity", "Belligerent"],
      aTier: ["Battery Pack", "Industrious", "Combative"],
    },
    notes: "Robot charging unit. Lightning Affinity preferred.",
  },
  {
    name: "Surveilynx",
    slug: "surveilynx",
    rarity: "UR",
    element: "Nature",
    jobs: ["Combat"],
    image: "/images/surveilynx.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Blessed", "Shadow", "Deadeye"],
      sTier: ["Belligerent", "Fortunate", "Elusive", "Sharpshooter"],
      aTier: ["Combative", "Favored", "Slippery", "Crack Shot"],
    },
    notes: "Ninja cat. Crit and evasion focused.",
  },
  {
    name: "Fingenue",
    slug: "fingenue",
    rarity: "UR",
    element: "Water",
    jobs: ["Combat", "Watering"],
    image: "/images/fingenue.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Blessed"],
      sTier: ["Belligerent", "Robust", "Fortunate"],
      aTier: ["Combative", "Energetic", "Favored"],
    },
    notes: "Mermaid Palmon. Balanced combat traits.",
  },
  // SSR Palmons
  {
    name: "Squeezel",
    slug: "squeezel",
    rarity: "SSR",
    element: "Water",
    jobs: ["Watering"],
    image: "/images/squeezel.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Lightspeed", "Industrious", "Diligent"],
    },
    notes: "Best watering Palmon. Speed traits essential.",
  },
  {
    name: "Meowdame",
    slug: "meowdame",
    rarity: "SSR",
    element: "Water",
    jobs: ["Watering", "Combat"],
    image: "/images/meowdame.jpg",
    bestTraits: {
      sPlusTier: ["Vigorous", "Blessed"],
      sTier: ["Supersonic", "Robust", "Fortunate"],
      aTier: ["Lightspeed", "Industrious", "Energetic"],
    },
    notes: "Elegant triple-type. Good for watering or backup combat.",
  },
  {
    name: "Thunderclawd",
    slug: "thunderclawd",
    rarity: "SSR",
    element: "Electric",
    jobs: ["Charging", "Combat"],
    image: "/images/thunderclawd.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Lightning Affinity", "Belligerent"],
      aTier: ["Battery Pack", "Industrious", "Combative"],
    },
    notes: "Storm cat. Great for charging stations.",
  },
  {
    name: "Vulcanid",
    slug: "vulcanid",
    rarity: "SSR",
    element: "Fire",
    jobs: ["Smelting", "Combat"],
    image: "/images/vulcanid.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Bellow Fellow", "Belligerent", "Robust"],
      aTier: ["Industrious", "Diligent", "Combative"],
    },
    notes: "Fire lion. Bellow Fellow for smelting efficiency.",
  },
  {
    name: "Terrastudo",
    slug: "terrastudo",
    rarity: "SSR",
    element: "Earth",
    jobs: ["Mining", "Combat"],
    image: "/images/terrastudo.jpg",
    bestTraits: {
      sPlusTier: ["Vigorous", "Unshakeable", "Diamond Skull"],
      sTier: ["Efficient", "Robust", "Steadfast", "Steel Skull"],
      aTier: ["Industrious", "Diligent", "Energetic", "Resolute"],
    },
    notes: "Tank Palmon. Defensive traits make it unkillable.",
  },
  {
    name: "Bruiseberry",
    slug: "bruiseberry",
    rarity: "SSR",
    element: "Nature",
    jobs: ["Mining", "Logging"],
    image: "/images/bruiseberry.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Efficient", "Supersonic"],
      aTier: ["Industrious", "Diligent", "Lightspeed"],
    },
    notes: "Green berry. Versatile mining/logging worker.",
  },
  {
    name: "Snowkami",
    slug: "snowkami",
    rarity: "SSR",
    element: "Water",
    jobs: ["Combat"],
    image: "/images/snowkami.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Heartless"],
      sTier: ["Belligerent", "Robust", "Ruthless"],
      aTier: ["Combative", "Energetic", "Brutal"],
    },
    notes: "Ice wolf. Full offensive build recommended.",
  },
  {
    name: "Voltbolt",
    slug: "voltbolt",
    rarity: "SSR",
    element: "Electric",
    jobs: ["Charging", "Combat"],
    image: "/images/voltbolt.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Lightning Affinity", "Belligerent"],
      aTier: ["Battery Pack", "Industrious", "Combative"],
    },
    notes: "Electric bird. Lightning Affinity is key.",
  },
  {
    name: "Axollium",
    slug: "axollium",
    rarity: "SSR",
    element: "Nature",
    jobs: ["Planting"],
    image: "/images/axollium.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Industrious", "Lightspeed", "Diligent", "Fleet-Footed"],
    },
    notes: "Axolotl. Speed traits for efficient planting.",
  },
  {
    name: "Maximito",
    slug: "maximito",
    rarity: "SSR",
    element: "Water",
    jobs: ["Watering"],
    image: "/images/maximito.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Lightspeed", "Industrious", "Diligent"],
    },
    notes: "Blue elephant. Super Builder for watering.",
  },
  {
    name: "Platyputz",
    slug: "platyputz",
    rarity: "SSR",
    element: "Water",
    jobs: ["Sawing"],
    image: "/images/platyputz.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Plank Pro"],
      aTier: ["Industrious", "Diligent"],
    },
    notes: "Platypus. Plank Pro trait is essential for sawing.",
  },
  {
    name: "Incineraptor",
    slug: "incineraptor",
    rarity: "SSR",
    element: "Fire",
    jobs: ["Smelting"],
    image: "/images/incineraptor.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Bellow Fellow"],
      aTier: ["Industrious", "Diligent"],
    },
    notes: "Phoenix. Bellow Fellow maximizes smelting output.",
  },
  {
    name: "Wyvierno",
    slug: "wyvierno",
    rarity: "SSR",
    element: "Fire",
    jobs: ["Smelting", "Combat"],
    image: "/images/wyvierno.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous"],
      sTier: ["Bellow Fellow", "Belligerent"],
      aTier: ["Industrious", "Diligent", "Combative"],
    },
    notes: "Small dragon. Good for smelting or backup combat.",
  },
  {
    name: "Lendanear",
    slug: "lendanear",
    rarity: "SSR",
    element: "Normal",
    jobs: ["Planting"],
    image: "/images/lendanear.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Industrious", "Lightspeed", "Diligent", "Fleet-Footed"],
    },
    notes: "Pink bear. Only SSR planting Palmon.",
  },
  {
    name: "Cerverdant",
    slug: "cerverdant",
    rarity: "SSR",
    element: "Nature",
    jobs: ["Logging"],
    image: "/images/cerverdant.jpg",
    bestTraits: {
      sPlusTier: [],
      sTier: ["Supersonic"],
      aTier: ["Industrious", "Lightspeed", "Diligent"],
    },
    notes: "Crystal deer. Speed traits for logging efficiency.",
  },
  {
    name: "Rotorlotor",
    slug: "rotorlotor",
    rarity: "SSR",
    element: "Electric",
    jobs: ["Combat"],
    image: "/images/rotorlotor.jpg",
    bestTraits: {
      sPlusTier: ["Warlike", "Vigorous", "Blessed"],
      sTier: ["Belligerent", "Robust", "Fortunate"],
      aTier: ["Combative", "Energetic", "Favored"],
    },
    notes: "Electric raccoon. Balanced combat traits.",
  },
];

export function getPalmonBySlug(slug: string): Palmon | undefined {
  return palmons.find((p) => p.slug === slug);
}

export function getPalmonsByJob(job: PalmonJob): Palmon[] {
  return palmons.filter((p) => p.jobs.includes(job));
}

export function getPalmonsByRarity(rarity: PalmonRarity): Palmon[] {
  return palmons.filter((p) => p.rarity === rarity);
}
