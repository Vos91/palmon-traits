import Image from "next/image";

// Best traits per job/role
const jobBuilds = [
  {
    job: "Combat",
    icon: "⚔️",
    description: "Base defense & raids",
    bestPalmons: ["Ghillant", "Mantieray", "Ninjump"],
    idealTraits: [
      { tier: "S+", name: "Warlike", effect: "+10% ATK" },
      { tier: "S+", name: "Vigorous", effect: "+10% HP" },
      { tier: "S+", name: "Blessed", effect: "+8% Crit Rate" },
      { tier: "S", name: "Belligerent", effect: "+7% ATK" },
      { tier: "S", name: "Clear-Headed", effect: "+7% Stun Resist" },
    ],
    images: ["/images/ninjump.jpg", "/images/mantleray.jpg"],
  },
  {
    job: "Planting & Harvesting",
    icon: "🌱",
    description: "Crop production",
    bestPalmons: ["Lendanear", "Spinchilla", "Graffitty"],
    idealTraits: [
      { tier: "S", name: "Supersonic", effect: "+10% Move Speed" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Fleet-Footed", effect: "+5% Move Speed" },
      { tier: "A", name: "Lightspeed", effect: "+15% Move Speed" },
    ],
    images: ["/images/lendanear.jpg"],
  },
  {
    job: "Watering",
    icon: "💧",
    description: "Crop irrigation",
    bestPalmons: ["Squeezel", "Maximito", "Meowdame"],
    idealTraits: [
      { tier: "A", name: "Lightspeed", effect: "+15% Move Speed" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Diligent", effect: "+10% Job Efficiency" },
    ],
    images: ["/images/squeezel.jpg", "/images/maximito.jpg", "/images/meowdame.jpg"],
  },
  {
    job: "Logging",
    icon: "🪓",
    description: "Wood collection",
    bestPalmons: ["Baboom", "Cerverdant", "Dolphriend"],
    idealTraits: [
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Lightspeed", effect: "+15% Move Speed" },
      { tier: "A", name: "Diligent", effect: "+10% Job Efficiency" },
    ],
    images: ["/images/baboom.jpg", "/images/cerverdant.jpg", "/images/dolphriend.jpg"],
  },
  {
    job: "Sawing",
    icon: "🪚",
    description: "Plank production",
    bestPalmons: ["Platyputz", "Herculeaf", "Graffitty"],
    idealTraits: [
      { tier: "S", name: "Plank Pro", effect: "+3% Sawing Output" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Diligent", effect: "+10% Job Efficiency" },
    ],
    images: ["/images/platyputz.jpg"],
  },
  {
    job: "Mining",
    icon: "⛏️",
    description: "Ore extraction",
    bestPalmons: ["Magmolin", "Bruiseberry", "Terrastudo"],
    idealTraits: [
      { tier: "S", name: "Efficient", effect: "+Mining Output" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Diligent", effect: "+10% Job Efficiency" },
    ],
    images: ["/images/magmolin.jpg", "/images/bruiseberry.jpg", "/images/terrastudo.jpg"],
  },
  {
    job: "Smelting",
    icon: "🔥",
    description: "Metal processing",
    bestPalmons: ["Vulcanid", "Incineraptor", "Wyvierno"],
    idealTraits: [
      { tier: "S", name: "Bellow Fellow", effect: "+5% Smelting Output" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
      { tier: "A", name: "Diligent", effect: "+10% Job Efficiency" },
    ],
    images: ["/images/vulcanid.jpg", "/images/wyvierno.jpg"],
  },
  {
    job: "Charging",
    icon: "⚡",
    description: "Power generation",
    bestPalmons: ["Barkplug", "Thunderclawd", "Kilohopp"],
    idealTraits: [
      { tier: "S", name: "Lightning Affinity", effect: "+5% Charging Output" },
      { tier: "A", name: "Battery Pack", effect: "+3% Charging Output" },
      { tier: "A", name: "Industrious", effect: "+18% Job Efficiency" },
    ],
    images: ["/images/barkplug.jpg", "/images/thunderclawd.jpg"],
  },
];

// All traits organized by tier - Complete data from Ferro s12
const allTraits = {
  "S+": [
    // Offensive
    { name: "Warlike", effect: "Attack +10%", role: "Offensive" },
    { name: "Heartless", effect: "Crit Damage +15%", role: "Offensive" },
    { name: "Blessed", effect: "Crit Rate +8%", role: "Offensive" },
    { name: "Deadeye", effect: "Accuracy +8%", role: "Offensive" },
    // Defensive
    { name: "Vigorous", effect: "HP +10%", role: "Defensive" },
    { name: "Unshakeable", effect: "Defense +10%", role: "Defensive" },
    { name: "Diamond Skull", effect: "Crit Defense +15%", role: "Defensive" },
    { name: "Iron Will", effect: "Tenacity +8%", role: "Defensive" },
    { name: "Shadow", effect: "Evasion +8%", role: "Defensive" },
    { name: "Serene", effect: "Stun Resist +12%", role: "Defensive" },
  ],
  S: [
    // Offensive
    { name: "Belligerent", effect: "Attack +7%", role: "Offensive" },
    { name: "Ruthless", effect: "Crit Damage +8%", role: "Offensive" },
    { name: "Fortunate", effect: "Crit Rate +5%", role: "Offensive" },
    { name: "Sharpshooter", effect: "Accuracy +5%", role: "Offensive" },
    // Defensive
    { name: "Robust", effect: "HP +7%", role: "Defensive" },
    { name: "Steadfast", effect: "Defense +7%", role: "Defensive" },
    { name: "Steel Skull", effect: "Crit Defense +8%", role: "Defensive" },
    { name: "Unyielding", effect: "Tenacity +5%", role: "Defensive" },
    { name: "Elusive", effect: "Evasion +5%", role: "Defensive" },
    { name: "Clear-Headed", effect: "Stun Resist +7%", role: "Defensive" },
    // Work
    { name: "Prodigy", effect: "Research -900s", role: "Work" },
    { name: "Supersonic", effect: "Move Speed +10%", role: "Work" },
  ],
  A: [
    // Offensive
    { name: "Combative", effect: "Attack +4%", role: "Offensive" },
    { name: "Brutal", effect: "Crit Damage +4%", role: "Offensive" },
    { name: "Favored", effect: "Crit Rate +2.5%", role: "Offensive" },
    { name: "Crack Shot", effect: "Accuracy +2.5%", role: "Offensive" },
    // Defensive
    { name: "Energetic", effect: "HP +4%", role: "Defensive" },
    { name: "Resolute", effect: "Defense +4%", role: "Defensive" },
    { name: "Iron Skull", effect: "Crit Defense +4%", role: "Defensive" },
    { name: "Hardy", effect: "Tenacity +2.5%", role: "Defensive" },
    { name: "Slippery", effect: "Evasion +2.5%", role: "Defensive" },
    { name: "Steady", effect: "Stun Resist +5%", role: "Defensive" },
    // Work
    { name: "Industrious", effect: "Job Efficiency +18%", role: "Work" },
    { name: "Lightspeed", effect: "Move Speed +15%", role: "Work" },
    { name: "Diligent", effect: "Job Efficiency +10%", role: "Work" },
    { name: "Fleet-Footed", effect: "Move Speed +5%", role: "Work" },
  ],
  B: [
    // Offensive
    { name: "Hostile", effect: "Attack +2%", role: "Offensive" },
    { name: "Mean", effect: "Crit Damage +3%", role: "Offensive" },
    { name: "Lucky", effect: "Crit Rate +1.5%", role: "Offensive" },
    { name: "Gunner", effect: "Accuracy +1.5%", role: "Offensive" },
    // Defensive
    { name: "Durable", effect: "HP +2%", role: "Defensive" },
    { name: "Rooted", effect: "Defense +2%", role: "Defensive" },
    { name: "Stone Skull", effect: "Crit Defense +3%", role: "Defensive" },
    { name: "Stubborn", effect: "Tenacity +1.5%", role: "Defensive" },
    { name: "Nimble", effect: "Evasion +1.5%", role: "Defensive" },
    { name: "Calm", effect: "Stun Resist +2%", role: "Defensive" },
  ],
  C: [
    { name: "Fabergé Jaw", effect: "Crit Defense -3%", role: "❌" },
    { name: "Softie", effect: "Crit Damage -3%", role: "❌" },
    { name: "Spineless", effect: "Tenacity -2%", role: "❌" },
    { name: "Jinxed", effect: "Crit Rate -2%", role: "❌" },
    { name: "Fumbling", effect: "Evasion -2%", role: "❌" },
    { name: "Myopic", effect: "Accuracy -2%", role: "❌" },
    { name: "Sickly", effect: "HP -4%", role: "❌" },
  ],
};

// Job-specific traits
const specialTraits = [
  { name: "Lightning Affinity", effect: "+5% Charging Output", job: "Charging" },
  { name: "Battery Pack", effect: "+3% Charging Output", job: "Charging" },
  { name: "Bellow Fellow", effect: "+5% Smelting Output", job: "Smelting" },
  { name: "Plank Pro", effect: "+3% Sawing Output", job: "Sawing" },
  { name: "Efficient", effect: "+Mining Output", job: "Mining" },
];

function JobCard({ job, icon, description, bestPalmons, idealTraits, images }: typeof jobBuilds[0]) {
  return (
    <div className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold">{job}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Palmon images */}
      <div className="flex gap-2 p-4 bg-black/20 overflow-x-auto">
        {images.map((img, i) => (
          <div key={i} className="relative w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <Image src={img} alt="" fill className="object-cover object-top" />
          </div>
        ))}
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Best Palmons</h4>
          <div className="flex flex-wrap gap-2">
            {bestPalmons.map((p) => (
              <span key={p} className="text-sm px-3 py-1.5 bg-white/5 rounded-lg font-medium">{p}</span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Ideal Traits</h4>
          <div className="space-y-2">
            {idealTraits.map((t) => (
              <div key={t.name} className={`flex items-center justify-between p-2.5 rounded-lg border-l-2 bg-white/[0.02] ${
                t.tier === "S+" ? "border-orange-500" : t.tier === "S" ? "border-yellow-400" : "border-purple-400"
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                    t.tier === "S+" ? "bg-orange-500/20 text-orange-400" : t.tier === "S" ? "bg-yellow-400/20 text-yellow-400" : "bg-purple-400/20 text-purple-400"
                  }`}>{t.tier}</span>
                  <span className="font-medium text-sm">{t.name}</span>
                </div>
                <span className="font-mono text-xs text-green-400">{t.effect}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TraitRow({ name, effect, role }: { name: string; effect: string; role: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg hover:bg-white/[0.04] transition-colors">
      <div>
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500 ml-2">({role})</span>
      </div>
      <span className="font-mono text-sm text-green-400">{effect}</span>
    </div>
  );
}

function BadTraitRow({ name, effect }: { name: string; effect: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
      <span className="font-medium">{name}</span>
      <span className="font-mono text-sm text-red-400">{effect} ❌</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">
        {/* Hero */}
        <header className="text-center py-16 pb-20 relative">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Complete Guide
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Best <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Traits</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The ideal trait combinations for every Palmon and every job in Palmon Survival
          </p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded" />
        </header>

        {/* Quick Reference */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">🎯 Quick Reference: Best Traits by Role</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-xl p-4">
                <h3 className="font-bold text-orange-400 mb-2">⚔️ Combat Palmons (S+ Tier)</h3>
                <p className="text-sm text-gray-300">Warlike + Vigorous + Blessed + Diamond Skull</p>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <h3 className="font-bold text-cyan-400 mb-2">🔧 Worker Palmons</h3>
                <p className="text-sm text-gray-300">Industrious + Diligent + Lightspeed/Supersonic</p>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <h3 className="font-bold text-purple-400 mb-2">⚡ Specialist Jobs</h3>
                <p className="text-sm text-gray-300">Lightning Affinity (Charging) / Bellow Fellow (Smelting)</p>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <h3 className="font-bold text-green-400 mb-2">🏠 Base Efficiency</h3>
                <p className="text-sm text-gray-300">Prodigy (Research) / Coach (Training) / Temperate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Traits Per Job */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-black">JOBS</span>
            <h2 className="text-2xl font-bold">Best Traits Per Job</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            {jobBuilds.map((job) => <JobCard key={job.job} {...job} />)}
          </div>
        </section>

        {/* Job-Specific Traits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-purple-400 to-purple-600 text-white">SPECIAL</span>
            <h2 className="text-2xl font-bold">Job-Specific Traits</h2>
          </div>
          
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-4">These traits only work for specific jobs — prioritize them for those Palmons!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {specialTraits.map((t) => (
                <div key={t.name} className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.job}</div>
                  </div>
                  <span className="font-mono text-sm text-green-400">{t.effect}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S+ Tier Traits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-orange-500 to-red-500 text-white">S+ TIER</span>
            <h2 className="text-2xl font-bold">God-Tier Traits (Ultra Rare!)</h2>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-2xl p-6">
            <p className="text-orange-300 text-sm mb-4">⭐ These are the BEST traits — extremely rare, not generally available. NEVER release a Palmon with these!</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-orange-400 mb-3">⚔️ Offensive</h4>
                <div className="space-y-2">
                  {allTraits["S+"].filter(t => t.role === "Offensive").map((t) => <TraitRow key={t.name} {...t} />)}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-orange-400 mb-3">🛡️ Defensive</h4>
                <div className="space-y-2">
                  {allTraits["S+"].filter(t => t.role === "Defensive").map((t) => <TraitRow key={t.name} {...t} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All S-Tier Traits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-black">S-TIER</span>
            <h2 className="text-2xl font-bold">Excellent Traits</h2>
          </div>
          
          <div className="bg-[#12121a] border border-yellow-400/20 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-3">
              {allTraits.S.map((t) => <TraitRow key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* All A-Tier Traits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-purple-400 to-purple-600 text-white">A-TIER</span>
            <h2 className="text-2xl font-bold">Great to Have</h2>
          </div>
          
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allTraits.A.map((t) => <TraitRow key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* All B-Tier Traits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white">B-TIER</span>
            <h2 className="text-2xl font-bold">Decent Filler</h2>
          </div>
          
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allTraits.B.map((t) => <TraitRow key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* C-Tier - Avoid! */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-red-500 text-white">AVOID</span>
            <h2 className="text-2xl font-bold">Never Keep These!</h2>
          </div>
          
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <p className="text-red-300 text-sm mb-4">⚠️ These traits have negative effects — replace Palmons with these ASAP!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allTraits.C.map((t) => <BadTraitRow key={t.name} name={t.name} effect={t.effect} />)}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#1a1a25] to-[#12121a] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">💡 Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">Trait Stacking</h3>
                <p className="text-sm text-gray-400">Traits like Move Speed, Job Efficiency, and Crit stack. Aim for multiple synergistic traits on one Palmon.</p>
              </div>
              <div>
                <h3 className="font-bold text-cyan-400 mb-2">Role Assignment</h3>
                <p className="text-sm text-gray-400">Put Prodigy Palmons in Analysis, Coach in Training Hall, and Lightning Affinity in Charging stations.</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-400 mb-2">Breeding</h3>
                <p className="text-sm text-gray-400">Use the Nursery to breed better traits. Offspring can inherit parent traits — aim for S-tier combinations.</p>
              </div>
              <div>
                <h3 className="font-bold text-green-400 mb-2">Prioritize Combat</h3>
                <p className="text-sm text-gray-400">Combat traits (Belligerent, Vigorous) are hardest to replace. Save your best combat-traited Palmons!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-sm">
          <p>Made with 🦊 by Arie • Data from Theria Games & GamingOnPhone</p>
          <p className="mt-2">Palmon Survival © Lilith Games</p>
        </footer>
      </div>
    </div>
  );
}
