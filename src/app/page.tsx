import Image from "next/image";

const urPalmons = [
  { name: "Lucidina", power: "3.17M", image: "/images/lucidina.jpg", traits: ["S Belligerent", "S Robust"] },
  { name: "Mantleray", power: "2.71M", image: "/images/mantleray.jpg", traits: ["+43 Shield", "Best Equipped"] },
  { name: "Baboom", power: "2.56M", image: "/images/baboom.jpg", traits: ["+23/+22/+21/+21", "Full Gear"] },
  { name: "Barkplug", power: "2.56M", image: "/images/barkplug.jpg", traits: ["Electric DPS", "+22/+16/+16/+25"] },
  { name: "Statchew", power: "2.43M", image: "/images/statchew.jpg", traits: ["Cyber Dog", "+20/+20/+13"] },
  { name: "Blazeal", power: "2.01M", image: "/images/blazeal.jpg", traits: ["Fire DPS", "+20/+10/+21"] },
];

const ssrPalmons = [
  { name: "Squeezel", power: "1.78M", image: "/images/squeezel.jpg", traits: ["+38 Shield!", "Top SSR"] },
  { name: "Meowdame", power: "1.16M", image: "/images/meowdame2.jpg", traits: ["Triple Type", "Full Gear"] },
  { name: "Thunderclawd", power: "547K", image: "/images/thunderclawd.jpg", traits: ["Electric", "Storm Cat"] },
  { name: "Vulcanid", power: "423K", image: "/images/vulcanid.jpg", traits: ["Fire", "Full Gear"] },
  { name: "Snowkami", power: "627K", image: "/images/snowkami.jpg", traits: ["Ice Wolf", "Full Gear"] },
  { name: "Terrastudo", power: "349K", image: "/images/terrastudo.jpg", traits: ["Tank", "+6 Weapon"] },
];

const sTraits = [
  { name: "Belligerent", effect: "+7% ATK" },
  { name: "Robust", effect: "+7% HP" },
  { name: "Steadfast", effect: "+7% DEF" },
  { name: "Sharpshooter", effect: "+5% ACC" },
  { name: "Clear-Headed", effect: "+7% Stun Resist" },
  { name: "Supersonic", effect: "+10% Move Speed" },
];

const aTraits = [
  { name: "Energetic", effect: "+4% HP" },
  { name: "Combative", effect: "+4% ATK" },
  { name: "Resolute", effect: "+4% DEF" },
  { name: "Brutal", effect: "+4% Crit DMG" },
  { name: "Favored", effect: "+2.5% Crit Rate" },
  { name: "Industrious", effect: "+15% Work Speed" },
];

const bTraits = [
  { name: "Lucky", effect: "+2% Crit Rate" },
  { name: "Temperate", effect: "-25% Food Drain" },
  { name: "Caffeinated", effect: "-25% Energy Drain" },
  { name: "Fleet-Footed", effect: "+5% Move Speed" },
];

const badTraits = [
  { name: "Sickly", effect: "-4% HP" },
  { name: "Spineless", effect: "-2% Tenacity" },
  { name: "Jinxed", effect: "-2% Crit Rate" },
  { name: "Myopic", effect: "-2% Accuracy" },
];

const combos = [
  { name: "Combat DPS", desc: "For base defense & raids", traits: ["S Belligerent", "S Robust", "A Brutal"] },
  { name: "Tank Build", desc: "For frontline Palmons", traits: ["S Robust", "S Steadfast", "A Energetic"] },
  { name: "Worker Build", desc: "For base production", traits: ["S Supersonic", "A Industrious", "A Diligent"] },
  { name: "Speed Build", desc: "For exploration & transport", traits: ["S Supersonic", "A Fleet-Footed", "B Caffeinated"] },
];

function PalmonCard({ name, power, image, traits }: { name: string; power: string; image: string; traits: string[] }) {
  return (
    <div className="group bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover object-top" />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold px-2.5 py-1 rounded text-xs">UR</span>
        <span className="absolute bottom-3 right-3 bg-black/80 text-yellow-400 font-mono font-bold px-3 py-1.5 rounded-lg text-sm">✊ {power}</span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <div className="flex flex-wrap gap-1.5">
          {traits.map((trait, i) => (
            <span key={i} className="text-xs px-2.5 py-1.5 bg-white/5 rounded border-l-2 border-yellow-400 text-yellow-400">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TraitItem({ name, effect, tier }: { name: string; effect: string; tier: "s" | "a" | "b" | "c" }) {
  const borderColors = { s: "border-l-yellow-400", a: "border-l-purple-400", b: "border-l-blue-400", c: "border-l-red-400" };
  const effectColor = tier === "c" ? "text-red-400" : "text-green-400";
  
  return (
    <div className={`flex justify-between items-center p-4 bg-[#12121a] border border-white/5 rounded-xl transition-all hover:bg-[#1a1a25] hover:translate-x-1 border-l-[3px] ${borderColors[tier]}`}>
      <span className="font-semibold">{name}</span>
      <span className={`font-mono text-sm ${effectColor}`}>{effect}{tier === "c" && " ❌"}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">
        {/* Hero */}
        <header className="text-center py-16 pb-20 relative">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Trait Guide
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Best <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Traits</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The ultimate guide to trait combinations for maximum power in Palmon Survival
          </p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded" />
        </header>

        {/* Featured Ninjump */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-black">SHOWCASE</span>
            <h2 className="text-2xl font-bold">Perfect Traits Example</h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a1a25] to-[#12121a] border-2 border-yellow-400/30 rounded-3xl p-6 md:p-10 grid md:grid-cols-[300px_1fr] gap-8 relative overflow-hidden">
            <span className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
              BEST TRAITS
            </span>
            
            <div className="relative aspect-[9/16] max-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/ninjump.jpg" alt="Ninjump" fill className="object-cover object-top" />
            </div>
            
            <div>
              <h3 className="text-4xl font-extrabold mb-2">Ninjump</h3>
              <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold px-3 py-1 rounded text-sm mb-6">
                UR • Level 226
              </span>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-black/30 rounded-2xl mb-6">
                {[
                  { value: "5.37M", label: "Power" },
                  { value: "104.6K", label: "Attack" },
                  { value: "19.4K", label: "Defense" },
                  { value: "9.44M", label: "HP" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-mono text-xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Trait Loadout</h4>
              <div className="space-y-2">
                {[
                  { tier: "S", name: "Belligerent", effect: "+7% ATK", color: "border-yellow-400 bg-yellow-400/10 text-yellow-400" },
                  { tier: "S", name: "Robust", effect: "+7% HP", color: "border-yellow-400 bg-yellow-400/10 text-yellow-400" },
                  { tier: "A", name: "Energetic", effect: "+4% HP", color: "border-purple-400 bg-purple-400/10 text-purple-400" },
                  { tier: "B", name: "Lucky", effect: "+2% Crit", color: "border-blue-400 bg-blue-400/10 text-blue-400" },
                ].map((trait) => (
                  <div key={trait.name} className={`flex items-center gap-3 p-3 rounded-lg border-l-[3px] bg-white/[0.02] ${trait.color.split(" ")[0]}`}>
                    <span className={`font-mono text-sm font-bold w-6 h-6 flex items-center justify-center rounded ${trait.color.split(" ").slice(1).join(" ")}`}>
                      {trait.tier}
                    </span>
                    <span className="font-semibold flex-1">{trait.name}</span>
                    <span className="font-mono text-sm text-green-400">{trait.effect}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-6 text-gray-400 text-sm">
                Double S-tier traits (Belligerent + Robust) are the holy grail. This Ninjump has a near-perfect offensive build with bonus survivability.
              </p>
            </div>
          </div>
        </section>

        {/* UR Collection */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-red-400 to-pink-500 text-white">S</span>
            <h2 className="text-2xl font-bold">More S-Tier Trait Builds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {urPalmons.map((p) => <PalmonCard key={p.name} {...p} />)}
          </div>
        </section>

        {/* Trait Rankings */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-black">S</span>
            <h2 className="text-2xl font-bold">S-Tier Traits (Always Keep!)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sTraits.map((t) => <TraitItem key={t.name} {...t} tier="s" />)}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-purple-400 to-purple-600 text-white">A</span>
            <h2 className="text-2xl font-bold">A-Tier Traits (Great to Have)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {aTraits.map((t) => <TraitItem key={t.name} {...t} tier="a" />)}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-blue-400 to-blue-600 text-white">B</span>
            <h2 className="text-2xl font-bold">B-Tier Traits (Decent Filler)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {bTraits.map((t) => <TraitItem key={t.name} {...t} tier="b" />)}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-red-500 text-white">C</span>
            <h2 className="text-2xl font-bold">Traits to Avoid!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {badTraits.map((t) => <TraitItem key={t.name} {...t} tier="c" />)}
          </div>
        </section>

        {/* Best Combos */}
        <section className="mb-16">
          <div className="bg-[#12121a] border border-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">🎯 Best Trait Combinations</h2>
            <div className="space-y-4">
              {combos.map((combo) => (
                <div key={combo.name} className="grid md:grid-cols-[200px_1fr] gap-5 p-5 bg-black/20 rounded-2xl items-center">
                  <div>
                    <div className="font-bold text-lg">{combo.name}</div>
                    <div className="text-xs text-gray-500">{combo.desc}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {combo.traits.map((trait) => (
                      <span key={trait} className="flex items-center gap-2 px-3 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-sm">
                        <span className="font-mono font-bold text-yellow-400">{trait.split(" ")[0]}</span>
                        <span>{trait.split(" ").slice(1).join(" ")}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSR Collection */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-red-400 to-pink-500 text-white">SSR</span>
            <h2 className="text-2xl font-bold">Strong SSR Collection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ssrPalmons.map((p) => <PalmonCard key={p.name} {...p} />)}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-sm">
          <p>Made with 🦊 by Arie • Screenshots from actual gameplay</p>
          <p className="mt-2">Palmon Survival © Theria Games</p>
        </footer>
      </div>
    </div>
  );
}
