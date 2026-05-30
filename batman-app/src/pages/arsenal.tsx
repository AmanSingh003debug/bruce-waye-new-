import { useState } from "react";
import Layout from "@/components/Layout";
import BatLogo from "@/components/BatLogo";

const arsenal = [
  {
    id: 1,
    name: "Batarang",
    category: "Projectile",
    description:
      "Batman's iconic bat-shaped throwing weapon. Used for disarming, tripping, and pinning enemies at range. Returns like a boomerang when thrown correctly. Comes in standard, explosive, and remote-controlled variants.",
    specs: ["Range: 60ft", "Material: Titanium alloy", "Weight: 4oz", "Returns on throw"],
    emoji: "🦇",
  },
  {
    id: 2,
    name: "Batmobile",
    category: "Vehicle",
    description:
      "The ultimate pursuit vehicle. Armored, turbine-powered, and packed with weapons, ejection seats, and an AI interface linked to the Batcomputer. Can hit 0–60 in 3 seconds.",
    specs: ["0-60 mph in 3s", "Jet turbine", "Armor plating", "AI-linked navigation"],
    emoji: "🚗",
  },
  {
    id: 3,
    name: "Grappling Gun",
    category: "Mobility",
    description:
      "Fires a claw-tipped titanium wire that can support 400lbs. Batman's primary tool for vertical movement across Gotham's skyline. A retraction motor pulls him up at 60mph.",
    specs: ["Wire length: 200ft", "Load: 400lbs", "Ascent speed: 60mph", "Titanium claw"],
    emoji: "🪝",
  },
  {
    id: 4,
    name: "Batsuit",
    category: "Armor",
    description:
      "Kevlar-weave bodysuit with ceramic plating on vital areas. Heat-resistant, acid-resistant, and capable of stopping a 9mm round. The cape doubles as a glider. Latest versions include sonar display and electrical insulation.",
    specs: ["Bulletproof ceramic", "Kevlar weave", "Cape glider", "Sonar vision"],
    emoji: "🦺",
  },
  {
    id: 5,
    name: "Explosive Gel",
    category: "Tactical",
    description:
      "A fast-hardening chemical compound that can be detonated remotely. Used to breach walls, create distractions, and disable vehicles. Applied via a pressurized canister.",
    specs: ["Remote detonation", "Adhesive on contact", "1kg blast radius: 2m", "Fast-setting"],
    emoji: "💥",
  },
  {
    id: 6,
    name: "Smoke Pellets",
    category: "Tactical",
    description:
      "Compressed smoke grenades that create instant cover in a 20-foot radius. Batman uses these to disappear mid-conversation and to escape overwhelming numbers.",
    specs: ["20ft radius", "Instant deploy", "60 second duration", "Also: teargas variant"],
    emoji: "💨",
  },
  {
    id: 7,
    name: "Batcomputer",
    category: "Technology",
    description:
      "The most powerful private computer system on Earth. Located in the Batcave, it has access to every major criminal database, real-time satellite imagery, and predictive crime analytics.",
    specs: ["Real-time satellite", "Criminal database", "Predictive AI", "Global network"],
    emoji: "💻",
  },
  {
    id: 8,
    name: "Bat-Wing",
    category: "Vehicle",
    description:
      "Batman's personal jet-powered aircraft. Supersonic capable, armed, and VTOL-enabled. Used for long-range missions, aerial pursuits, and when the Batmobile simply won't cut it.",
    specs: ["Supersonic", "VTOL", "Stealth mode", "Missile systems"],
    emoji: "✈️",
  },
  {
    id: 9,
    name: "Freeze Grenades",
    category: "Projectile",
    description:
      "Liquid nitrogen grenades that instantly freeze targets in a 10-foot radius. Can disable vehicles, seal breaches, and immobilize multiple enemies simultaneously.",
    specs: ["-196°C nitrogen", "10ft freeze radius", "3 second activation", "Dissolves in 10min"],
    emoji: "🧊",
  },
];

const categories = ["All", "Projectile", "Vehicle", "Mobility", "Armor", "Tactical", "Technology"];

export default function Arsenal() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? arsenal
      : arsenal.filter((a) => a.category === activeCategory);

  const selectedItem = arsenal.find((a) => a.id === selected);

  return (
    <Layout
      title="Batman's Arsenal — Gear & Technology"
      description="Explore the complete Bat-arsenal: gadgets, vehicles, and technology of the Dark Knight."
    >
      <div className="page-enter max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-3">
            Prepared for anything
          </p>
          <h1
            className="font-cinzel font-black text-5xl md:text-6xl"
            style={{ color: "#f5f5f5", letterSpacing: "0.08em" }}
          >
            The Arsenal
          </h1>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: "#f5c518" }} />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-rajdhani font-semibold text-xs tracking-widest uppercase px-5 py-2 transition-all duration-200"
              style={{
                background:
                  activeCategory === cat ? "#f5c518" : "transparent",
                color: activeCategory === cat ? "#0a0a0a" : "#888",
                border: activeCategory === cat
                  ? "1px solid #f5c518"
                  : "1px solid rgba(245,197,24,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className="bat-card p-6 rounded-sm text-left transition-all duration-300 hover:border-yellow-400/50 group"
              style={{
                border:
                  selected === item.id
                    ? "1px solid rgba(245,197,24,0.6)"
                    : undefined,
                boxShadow:
                  selected === item.id
                    ? "0 0 20px rgba(245,197,24,0.15)"
                    : undefined,
              }}
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="font-cinzel font-bold text-base group-hover:text-yellow-400 transition-colors"
                  style={{ color: selected === item.id ? "#f5c518" : "#cccccc", letterSpacing: "0.08em" }}
                >
                  {item.name}
                </h3>
              </div>
              <span
                className="font-rajdhani text-xs tracking-widest uppercase"
                style={{ color: "rgba(245,197,24,0.5)" }}
              >
                {item.category}
              </span>

              {selected === item.id && (
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(245,197,24,0.15)" }}>
                  <p className="font-rajdhani text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.specs.map((spec) => (
                      <div
                        key={spec}
                        className="font-rajdhani text-xs text-gray-600 py-1 px-2"
                        style={{ background: "rgba(245,197,24,0.05)", border: "1px solid rgba(245,197,24,0.1)" }}
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Batcave footer note */}
        <div className="mt-16 text-center">
          <p className="font-rajdhani text-gray-700 text-sm tracking-widest italic">
            &ldquo;I prepare for everything. That&apos;s my superpower.&rdquo; — Batman
          </p>
        </div>
      </div>
    </Layout>
  );
}
