import Layout from "@/components/Layout";
import BatLogo from "@/components/BatLogo";
import Link from "next/link";

const stats = [
  { label: "Years Protecting Gotham", value: "85+" },
  { label: "Villains Captured", value: "500+" },
  { label: "Lives Saved", value: "10,000+" },
  { label: "Gadgets in Arsenal", value: "200+" },
];

const features = [
  {
    icon: "⚡",
    title: "Peak Human Condition",
    desc: "Bruce Wayne trained for over 12 years across the globe — mastering 127 martial arts, forensic science, and criminal psychology.",
  },
  {
    icon: "🦇",
    title: "Master Detective",
    desc: "Considered the world's greatest detective. Can solve complex crimes and predict villain behavior patterns with uncanny precision.",
  },
  {
    icon: "💡",
    title: "Genius Intellect",
    desc: "An IQ estimated at 192, with mastery of engineering, chemistry, physics, and every discipline needed to fight evil.",
  },
  {
    icon: "🛡️",
    title: "The Wayne Pledge",
    desc: "A strict no-kill code that defines his identity. No matter the provocation, Batman preserves life — even for his greatest enemies.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Batman — The Dark Knight of Gotham"
      description="Enter the world of Gotham City's greatest protector. I am the night."
    >
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden page-enter"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(245,197,24,0.08) 0%, rgba(10,10,10,0) 70%), #0a0a0a",
        }}
      >
        {/* Background bat signal */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
          aria-hidden="true"
        >
          <BatLogo size={600} />
        </div>

        {/* Vertical lines decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${10 + i * 12}%`,
                background: "linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <BatLogo size={100} glow />
          </div>

          <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-sm uppercase mb-4">
            Gotham City · The Dark Knight
          </p>

          <h1
            className="font-cinzel font-black leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "#f5f5f5",
              textShadow: "0 0 80px rgba(245,197,24,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            I AM THE
            <br />
            <span
              style={{
                color: "#f5c518",
                textShadow: "0 0 40px rgba(245,197,24,0.6)",
              }}
            >
              NIGHT
            </span>
          </h1>

          <p
            className="font-rajdhani text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ letterSpacing: "0.05em" }}
          >
            Born from tragedy. Forged in darkness. Gotham&apos;s greatest protector has stood 
            between the city and chaos for over eight decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="font-cinzel text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                background: "#f5c518",
                color: "#0a0a0a",
                fontWeight: "700",
                letterSpacing: "0.2em",
              }}
            >
              The Legend
            </Link>
            <Link
              href="/arsenal"
              className="font-cinzel text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(245,197,24,0.5)",
                color: "#f5c518",
                letterSpacing: "0.2em",
              }}
            >
              The Arsenal
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-rajdhani text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
          <div
            className="w-px h-12 bg-gradient-to-b from-yellow-400 to-transparent"
            style={{ animation: "pulse 2s infinite" }}
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-12 px-6"
        style={{
          borderTop: "1px solid rgba(245,197,24,0.15)",
          borderBottom: "1px solid rgba(245,197,24,0.15)",
          background: "rgba(17,17,17,0.8)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-cinzel font-black text-3xl mb-1"
                style={{ color: "#f5c518" }}
              >
                {stat.value}
              </div>
              <div className="font-rajdhani text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-3">
              What defines him
            </p>
            <h2
              className="font-cinzel font-bold text-4xl md:text-5xl"
              style={{ color: "#f5f5f5", letterSpacing: "0.08em" }}
            >
              The Dark Knight
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bat-card p-8 rounded-sm transition-all duration-300 hover:border-yellow-400/40 group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3
                  className="font-cinzel font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors"
                  style={{ color: "#cccccc", letterSpacing: "0.1em" }}
                >
                  {f.title}
                </h3>
                <p className="font-rajdhani text-gray-500 leading-relaxed text-base">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="font-cinzel font-black text-2xl md:text-4xl leading-relaxed mb-6"
            style={{ color: "#f5c518" }}
          >
            &ldquo;It&apos;s not who I am underneath,
            <br />
            but what I do that defines me.&rdquo;
          </div>
          <p className="font-rajdhani text-gray-600 tracking-widest uppercase text-sm">
            — Bruce Wayne
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel font-bold text-3xl mb-6 text-gray-200">
            Explore Gotham&apos;s World
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { href: "/rogues", label: "Rogues Gallery" },
              { href: "/arsenal", label: "Bat Arsenal" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "The Legend" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-rajdhani font-semibold text-sm tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                style={{
                  border: "1px solid rgba(245,197,24,0.4)",
                  color: "#f5c518",
                  letterSpacing: "0.15em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
