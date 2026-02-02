import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { palmons, getPalmonBySlug } from "@/data/palmons";

// Generate static params for all palmons
export function generateStaticParams() {
  return palmons.map((palmon) => ({
    slug: palmon.slug,
  }));
}

// Generate metadata
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const palmon = getPalmonBySlug(slug);
    if (!palmon) return { title: "Palmon Not Found" };
    return {
      title: `${palmon.name} Best Traits - Palmon Survival Guide`,
      description: `Best trait combinations for ${palmon.name} in Palmon Survival. ${palmon.rarity} ${palmon.element} type.`,
    };
  });
}

function getAdjacentPalmons(slug: string) {
  const index = palmons.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  
  const prev = index > 0 ? palmons[index - 1] : null;
  const next = index < palmons.length - 1 ? palmons[index + 1] : null;
  
  return { prev, next };
}

const elementColors: Record<string, string> = {
  Fire: "from-orange-500 to-red-500",
  Water: "from-blue-400 to-cyan-500",
  Electric: "from-yellow-400 to-amber-500",
  Earth: "from-amber-600 to-yellow-700",
  Nature: "from-green-400 to-emerald-500",
  Normal: "from-gray-400 to-gray-500",
};

const elementBg: Record<string, string> = {
  Fire: "bg-orange-500/10 border-orange-500/30",
  Water: "bg-blue-500/10 border-blue-500/30",
  Electric: "bg-yellow-500/10 border-yellow-500/30",
  Earth: "bg-amber-500/10 border-amber-500/30",
  Nature: "bg-green-500/10 border-green-500/30",
  Normal: "bg-gray-500/10 border-gray-500/30",
};

function TraitBadge({ name, tier }: { name: string; tier: "S+" | "S" | "A" }) {
  const colors = {
    "S+": "bg-gradient-to-r from-orange-500 to-red-500 text-white",
    S: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
    A: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${colors[tier]}`}>
      <span className="font-mono text-xs font-bold">{tier}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default async function PalmonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const palmon = getPalmonBySlug(slug);

  if (!palmon) {
    notFound();
  }

  const { prev, next } = getAdjacentPalmons(slug);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-10">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            ← Back to All Traits
          </Link>
          
          <div className="flex items-center gap-2">
            {prev ? (
              <Link
                href={`/palmon/${prev.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors"
              >
                ← {prev.name}
              </Link>
            ) : (
              <span className="px-4 py-2 text-gray-600 text-sm">← Previous</span>
            )}
            {next ? (
              <Link
                href={`/palmon/${next.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors"
              >
                {next.name} →
              </Link>
            ) : (
              <span className="px-4 py-2 text-gray-600 text-sm">Next →</span>
            )}
          </div>
        </div>

        {/* Hero Card */}
        <div className={`rounded-3xl border-2 p-6 md:p-8 ${elementBg[palmon.element]}`}>
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Image */}
            {palmon.image && (
              <div className="relative aspect-[9/16] max-h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={palmon.image}
                  alt={palmon.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-bold bg-gradient-to-r ${elementColors[palmon.element]} text-white`}
                >
                  {palmon.rarity}
                </span>
                <span className="px-3 py-1 rounded-lg text-sm font-medium bg-white/10">
                  {palmon.element}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-4">{palmon.name}</h1>

              {/* Jobs */}
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Jobs</h3>
                <div className="flex flex-wrap gap-2">
                  {palmon.jobs.map((job) => (
                    <span
                      key={job}
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-sm font-medium"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {palmon.notes && (
                <p className="text-gray-400 mb-6 p-4 bg-black/20 rounded-xl">{palmon.notes}</p>
              )}
            </div>
          </div>
        </div>

        {/* Best Traits Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6">🎯 Best Traits for {palmon.name}</h2>

          {/* S+ Tier */}
          {palmon.bestTraits.sPlusTier.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  S+ TIER
                </span>
                <span className="text-gray-400 text-sm">God-tier (Ultra Rare)</span>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-5">
                <div className="flex flex-wrap gap-2">
                  {palmon.bestTraits.sPlusTier.map((trait) => (
                    <TraitBadge key={trait} name={trait} tier="S+" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* S Tier */}
          {palmon.bestTraits.sTier.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                  S TIER
                </span>
                <span className="text-gray-400 text-sm">Excellent</span>
              </div>
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-5">
                <div className="flex flex-wrap gap-2">
                  {palmon.bestTraits.sTier.map((trait) => (
                    <TraitBadge key={trait} name={trait} tier="S" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* A Tier */}
          {palmon.bestTraits.aTier.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold px-3 py-1.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  A TIER
                </span>
                <span className="text-gray-400 text-sm">Great to have</span>
              </div>
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5">
                <div className="flex flex-wrap gap-2">
                  {palmon.bestTraits.aTier.map((trait) => (
                    <TraitBadge key={trait} name={trait} tier="A" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Ideal Build */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6">⚡ Ideal Build</h2>
          <div className="bg-[#12121a] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 mb-4">
              For the perfect {palmon.name}, aim for these trait combinations:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg">
                <span className="text-orange-400 font-bold">Dream Build:</span>
                <span className="text-gray-300">
                  {palmon.bestTraits.sPlusTier.slice(0, 2).join(" + ") ||
                    palmon.bestTraits.sTier.slice(0, 2).join(" + ")}
                  {palmon.bestTraits.sPlusTier.length > 0 &&
                    palmon.bestTraits.sTier.length > 0 &&
                    ` + ${palmon.bestTraits.sTier[0]}`}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg">
                <span className="text-yellow-400 font-bold">Realistic Build:</span>
                <span className="text-gray-300">
                  {palmon.bestTraits.sTier.slice(0, 2).join(" + ")}
                  {palmon.bestTraits.aTier.length > 0 && ` + ${palmon.bestTraits.aTier[0]}`}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg">
                <span className="text-purple-400 font-bold">Budget Build:</span>
                <span className="text-gray-300">{palmon.bestTraits.aTier.slice(0, 3).join(" + ")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          {prev ? (
            <Link
              href={`/palmon/${prev.slug}`}
              className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors max-w-[45%]"
            >
              <span className="text-2xl">←</span>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Previous</div>
                <div className="font-semibold group-hover:text-yellow-400 transition-colors truncate">{prev.name}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/palmon/${next.slug}`}
              className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors max-w-[45%] text-right"
            >
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Next</div>
                <div className="font-semibold group-hover:text-yellow-400 transition-colors truncate">{next.name}</div>
              </div>
              <span className="text-2xl">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-500 text-sm">
          <Link href="/" className="text-yellow-400 hover:underline">
            ← View All Traits Guide
          </Link>
        </footer>
      </div>
    </div>
  );
}
