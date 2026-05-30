import { useState } from "react";
import Layout from "@/components/Layout";

const rogues = [
  {
    id: 1,
    name: "The Joker",
    alias: "Clown Prince of Crime",
    threat: 10,
    status: "At Large",
    color: "#9333ea",
    description:
      "Batman's greatest nemesis and Gotham's most dangerous criminal. The Joker is chaos incarnate — unpredictable, brilliant, and obsessed with Batman. His origins are unknown and possibly unknowable, adding to his mystique.",
    abilities: ["Master chemist (Joker Venom)", "Genius-level chaos planning", "Pain immunity", "Crowd manipulation"],
    firstAppearance: "Batman #1 (1940)",
    emoji: "🃏",
  },
  {
    id: 2,
    name: "Two-Face",
    alias: "Harvey Dent",
    threat: 8,
    status: "Arkham",
    color: "#dc2626",
    description:
      "Once Gotham's greatest DA and Bruce Wayne's closest friend, Harvey Dent was disfigured with acid and his psyche shattered. Now he makes all decisions by the flip of a scarred coin.",
    abilities: ["Expert marksman", "Criminal law expertise", "Tactical planning", "Dual personality"],
    firstAppearance: "Detective Comics #66 (1942)",
    emoji: "🪙",
  },
  {
    id: 3,
    name: "The Riddler",
    alias: "Edward Nygma",
    threat: 8,
    status: "At Large",
    color: "#16a34a",
    description:
      "A narcissistic genius who cannot help but leave clues. Edward Nygma's compulsive need to prove his intellect makes him dangerous — and occasionally solvable. His puzzles have killed hundreds.",
    abilities: ["Genius IQ", "Master trap builder", "Compulsive clue-leaving", "Technology hacking"],
    firstAppearance: "Detective Comics #140 (1948)",
    emoji: "❓",
  },
  {
    id: 4,
    name: "Penguin",
    alias: "Oswald Cobblepot",
    threat: 7,
    status: "The Iceberg Lounge",
    color: "#0891b2",
    description:
      "A sophisticated crime lord who operates the Iceberg Lounge nightclub as a front. Unlike most rogues, Penguin is sane — making him uniquely dangerous as a strategic criminal operator.",
    abilities: ["Criminal empire director", "Trick umbrellas", "Political connections", "Arms dealing"],
    firstAppearance: "Detective Comics #58 (1941)",
    emoji: "🐧",
  },
  {
    id: 5,
    name: "Mr. Freeze",
    alias: "Victor Fries",
    threat: 9,
    status: "Unknown",
    color: "#38bdf8",
    description:
      "A cryogenics genius whose wife Nora was struck by a terminal illness. After an accident, Fries can only survive in sub-zero temperatures. He commits crimes to fund her cure.",
    abilities: ["Freeze Gun (-200°C)", "Cryogenic suit", "Genius scientist", "Near-invulnerability"],
    firstAppearance: "Batman #121 (1959)",
    emoji: "❄️",
  },
  {
    id: 6,
    name: "Poison Ivy",
    alias: "Pamela Isley",
    threat: 9,
    status: "Greenhouse",
    color: "#15803d",
    description:
      "An eco-terrorist and botanist with the ability to control plant life and produce mind-controlling pheromones. Ivy views humanity as the plague and plants as the cure.",
    abilities: ["Plant control", "Pheromone toxins", "Toxic immunity", "Chlorokinesis"],
    firstAppearance: "Batman #181 (1966)",
    emoji: "🌿",
  },
  {
    id: 7,
    name: "Bane",
    alias: "The Man Who Broke the Bat",
    threat: 10,
    status: "Unknown",
    color: "#78350f",
    description:
      "Born in a prison, trained in pain, and enhanced by the super-steroid Venom. Bane is the only villain who ever broke Batman — literally. His tactical brilliance rivals Bruce Wayne's.",
    abilities: ["Superhuman strength (Venom)", "Master tactician", "Peak human base strength", "Criminal genius"],
    firstAppearance: "Batman: Vengeance of Bane #1 (1993)",
    emoji: "💪",
  },
  {
    id: 8,
    name: "Catwoman",
    alias: "Selina Kyle",
    threat: 7,
    status: "Ally / Rogue",
    color: "#a21caf",
    description:
      "Gotham's greatest thief and Batman's most complicated relationship. Selina Kyle operates on the moral grey line — sometimes Batman's greatest foe, sometimes his most trusted partner and love.",
    abilities: ["Master thief", "Peak human agility", "Whip mastery", "Expert cat burglar"],
    firstAppearance: "Batman #1 (1940)",
    emoji: "🐱",
  },
];

export default function Rogues() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedRogue = rogues.find((r) => r.id === selected);

  return (
    <Layout
      title="Rogues Gallery — Batman's Enemies"
      description="Meet the villains of Gotham City — Batman's most dangerous enemies."
    >
      <div className="page-enter max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-3">
            Gotham&apos;s Most Wanted
          </p>
          <h1
            className="font-cinzel font-black text-5xl md:text-6xl"
            style={{ color: "#f5f5f5", letterSpacing: "0.08em" }}
          >
            Rogues Gallery
          </h1>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: "#f5c518" }} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rogues.map((rogue) => (
            <button
              key={rogue.id}
              onClick={() => setSelected(selected === rogue.id ? null : rogue.id)}
              className="bat-card p-6 rounded-sm text-left transition-all duration-300 hover:scale-105 group"
              style={{
                border:
                  selected === rogue.id
                    ? `1px solid ${rogue.color}80`
                    : "1px solid rgba(245,197,24,0.15)",
                boxShadow:
                  selected === rogue.id
                    ? `0 0 30px ${rogue.color}20`
                    : undefined,
              }}
            >
              <div className="text-4xl mb-3">{rogue.emoji}</div>
              <h3
                className="font-cinzel font-bold text-sm mb-1 transition-colors"
                style={{
                  color: selected === rogue.id ? rogue.color : "#cccccc",
                  letterSpacing: "0.08em",
                }}
              >
                {rogue.name}
              </h3>
              <p className="font-rajdhani text-xs text-gray-600 mb-3">{rogue.alias}</p>

              {/* Threat level */}
              <div className="flex items-center gap-2">
                <span className="font-rajdhani text-xs text-gray-700 uppercase tracking-wider">
                  Threat
                </span>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: i < rogue.threat ? rogue.color : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mt-2">
                <span
                  className="font-rajdhani text-xs tracking-widest uppercase px-2 py-1"
                  style={{
                    background: `${rogue.color}15`,
                    color: rogue.color,
                    border: `1px solid ${rogue.color}30`,
                  }}
                >
                  {rogue.status}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        {selectedRogue && (
          <div
            className="mt-8 bat-card p-8 rounded-sm"
            style={{
              border: `1px solid ${selectedRogue.color}40`,
              boxShadow: `0 0 40px ${selectedRogue.color}10`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{selectedRogue.emoji}</span>
                  <div>
                    <h2
                      className="font-cinzel font-bold text-2xl"
                      style={{ color: selectedRogue.color, letterSpacing: "0.08em" }}
                    >
                      {selectedRogue.name}
                    </h2>
                    <p className="font-rajdhani text-gray-500 text-sm">{selectedRogue.alias}</p>
                  </div>
                </div>
                <p className="font-rajdhani text-gray-400 leading-relaxed mb-4">
                  {selectedRogue.description}
                </p>
                <p className="font-rajdhani text-gray-700 text-xs tracking-widest">
                  First appearance: {selectedRogue.firstAppearance}
                </p>
              </div>
              <div>
                <h3 className="font-cinzel text-sm text-gray-400 tracking-widest uppercase mb-4">
                  Abilities
                </h3>
                <div className="space-y-3">
                  {selectedRogue.abilities.map((ability) => (
                    <div
                      key={ability}
                      className="flex items-center gap-3 font-rajdhani text-gray-300 text-sm"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: selectedRogue.color }}
                      />
                      {ability}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
