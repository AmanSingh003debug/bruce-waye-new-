import Layout from "@/components/Layout";
import BatLogo from "@/components/BatLogo";

const quotes = [
  { text: "I am vengeance. I am the night. I am Batman.", source: "Batman: The Animated Series" },
  { text: "It's not who I am underneath, but what I do that defines me.", source: "Batman Begins (2005)" },
  { text: "Why do we fall? So we can learn to pick ourselves back up.", source: "Batman Begins (2005)" },
  { text: "I have one rule.", source: "The Dark Knight (2008)" },
  { text: "The city needs me. But it can't know I exist.", source: "Batman: Year One" },
  { text: "I'm not wearing hockey pads.", source: "The Dark Knight (2008)" },
  {
    text: "Sometimes the truth isn't good enough. Sometimes people deserve more.",
    source: "The Dark Knight (2008)",
  },
  { text: "A hero can be anyone. Even a man doing something as simple as putting a coat around a young boy to let him know the world hadn't ended.", source: "The Dark Knight Rises (2012)" },
];

const suits = [
  {
    era: "Golden Age",
    years: "1939–1955",
    desc: "The original suit — grey and blue with a purple cape. Inspired by Leonardo da Vinci's drawings of a flying man. Notably featured red lips and white oval eyes.",
    emoji: "🦇",
    accent: "#6366f1",
  },
  {
    era: "Silver Age",
    years: "1956–1969",
    desc: "Brighter colors, shorter ears, and a more theatrical look. The era of Adam West's famous TV series suit — yellow belt added as a key design element.",
    emoji: "⭐",
    accent: "#eab308",
  },
  {
    era: "Bronze Age",
    years: "1970–1985",
    desc: "Return to darkness. Neal Adams redesigned the suit with longer ears, a flowing cape, and no yellow oval. The blueprint for the modern Batman aesthetic.",
    emoji: "🌙",
    accent: "#6b7280",
  },
  {
    era: "Modern Age",
    years: "1986–2000",
    desc: "Frank Miller's Dark Knight Returns and Burton's films cemented the all-black armored look. The suit became practical armor as much as symbol.",
    emoji: "⚫",
    accent: "#374151",
  },
  {
    era: "Nolan Batsuit",
    years: "2005–2012",
    desc: "Christian Bale's suit — black nomex over titanium ceramic plating. Fully functional riot gear level protection. The most 'real-world' interpretation ever put to film.",
    emoji: "🛡️",
    accent: "#1d4ed8",
  },
  {
    era: "Rebirth Era",
    years: "2016–Present",
    desc: "Tom King's run brought back the yellow oval and a classic look with modern sensibility. The suit reflects Batman's legacy while pushing into new psychological territory.",
    emoji: "✨",
    accent: "#f5c518",
  },
];

export default function Gallery() {
  return (
    <Layout
      title="Gallery — Batman Through the Ages"
      description="Explore Batman through the eras — suits, quotes, and iconic moments."
    >
      <div className="page-enter max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <BatLogo size={60} glow className="mx-auto mb-6" />
          <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-3">
            Through the Decades
          </p>
          <h1
            className="font-cinzel font-black text-5xl md:text-6xl"
            style={{ color: "#f5f5f5", letterSpacing: "0.08em" }}
          >
            The Gallery
          </h1>
          <div className="w-24 h-px mx-auto mt-6" style={{ background: "#f5c518" }} />
        </div>

        {/* Suits Through the Ages */}
        <section className="mb-24">
          <h2
            className="font-cinzel font-bold text-2xl mb-10 text-center"
            style={{ color: "#f5c518", letterSpacing: "0.12em" }}
          >
            The Suit Through the Ages
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {suits.map((suit) => (
              <div
                key={suit.era}
                className="bat-card p-7 rounded-sm transition-all duration-300 hover:scale-105 group"
                style={{
                  borderLeft: `3px solid ${suit.accent}`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{suit.emoji}</span>
                  <div>
                    <h3
                      className="font-cinzel font-bold text-sm tracking-widest"
                      style={{ color: suit.accent }}
                    >
                      {suit.era}
                    </h3>
                    <p className="font-rajdhani text-xs text-gray-700">{suit.years}</p>
                  </div>
                </div>
                <p className="font-rajdhani text-gray-500 text-sm leading-relaxed">{suit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bat Signal Visual */}
        <section
          className="mb-24 py-20 rounded-sm relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(17,17,17,0.9), rgba(26,26,26,0.9))",
            border: "1px solid rgba(245,197,24,0.15)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <BatLogo size={400} />
          </div>
          <div className="relative z-10 text-center px-6">
            <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-4">
              The Signal
            </p>
            <h2
              className="font-cinzel font-black text-4xl md:text-6xl mb-6"
              style={{
                color: "#f5c518",
                textShadow: "0 0 60px rgba(245,197,24,0.5)",
              }}
            >
              GOTHAM CALLS
            </h2>
            <p className="font-rajdhani text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
              Mounted on the roof of GCPD headquarters, the Bat-Signal has been cast across Gotham&apos;s
              cloud-covered sky since Year One. Its beam reaches 40 miles on a clear night.
            </p>
          </div>
        </section>

        {/* Quotes */}
        <section>
          <h2
            className="font-cinzel font-bold text-2xl mb-10 text-center"
            style={{ color: "#f5c518", letterSpacing: "0.12em" }}
          >
            Iconic Quotes
          </h2>
          <div className="columns-1 md:columns-2 gap-5 space-y-5">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="break-inside-avoid bat-card p-6 rounded-sm"
                style={{ borderLeft: "2px solid rgba(245,197,24,0.4)" }}
              >
                <p
                  className="font-cinzel text-base leading-relaxed mb-3"
                  style={{ color: "#e5e5e5" }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="font-rajdhani text-xs text-gray-700 tracking-widest uppercase">
                  — {q.source}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats footer */}
        <div className="mt-20 text-center">
          <div
            className="inline-block font-cinzel text-xs tracking-[0.3em] text-gray-700 uppercase py-3 px-8"
            style={{ border: "1px solid rgba(245,197,24,0.1)" }}
          >
            Batman · 85 Years of Darkness · 1939 — Present
          </div>
        </div>
      </div>
    </Layout>
  );
}
