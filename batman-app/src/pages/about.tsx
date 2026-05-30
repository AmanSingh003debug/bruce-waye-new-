import Layout from "@/components/Layout";
import BatLogo from "@/components/BatLogo";

const timeline = [
  {
    year: "Age 8",
    event: "The Promise",
    desc: "Thomas and Martha Wayne are murdered in Crime Alley by mugger Joe Chill. Young Bruce swears an oath to avenge their deaths and war on all criminals.",
  },
  {
    year: "Age 14–26",
    event: "Global Training",
    desc: "Bruce travels the world training under the world's greatest masters — Henri Ducard, Kirigi, and others in martial arts, forensics, escape artistry, and criminology.",
  },
  {
    year: "Age 26",
    event: "The Bat Symbol",
    desc: "Returning to Gotham, a bat crashes through a window of Wayne Manor — a symbol of fear. Bruce adopts the mantle of the Bat.",
  },
  {
    year: "Year One",
    event: "First Patrol",
    desc: "Batman takes to the streets of Gotham for the first time, striking terror into the criminal underworld.",
  },
  {
    year: "Year Three",
    event: "The Batfamily Begins",
    desc: "Dick Grayson, the first Robin, joins Batman after his parents are murdered at Haly's Circus — mirroring Bruce's own tragedy.",
  },
  {
    year: "Present",
    event: "The Legend Continues",
    desc: "After decades of protecting Gotham, Batman stands as its eternal guardian — with allies, legacy heroes, and a Bat-family spanning the globe.",
  },
];

const skills = [
  { name: "Martial Arts Mastery", level: 99 },
  { name: "Detective Skills", level: 97 },
  { name: "Engineering & Tech", level: 94 },
  { name: "Stealth", level: 98 },
  { name: "Willpower", level: 100 },
  { name: "Tactical Planning", level: 96 },
];

export default function About() {
  return (
    <Layout
      title="About Batman — The Origin"
      description="The origin and legend of Bruce Wayne, the Dark Knight of Gotham."
    >
      <div className="page-enter max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <BatLogo size={60} glow className="mx-auto mb-6" />
          <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-3">
            The Man Behind the Mask
          </p>
          <h1
            className="font-cinzel font-black text-5xl md:text-6xl"
            style={{ color: "#f5f5f5", letterSpacing: "0.08em" }}
          >
            Bruce Wayne
          </h1>
          <div
            className="w-24 h-px mx-auto mt-6"
            style={{ background: "#f5c518" }}
          />
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2
              className="font-cinzel font-bold text-2xl mb-6"
              style={{ color: "#f5c518", letterSpacing: "0.1em" }}
            >
              The Man
            </h2>
            <div className="space-y-4 font-rajdhani text-gray-400 text-base leading-relaxed">
              <p>
                Bruce Thomas Wayne was born to Thomas and Martha Wayne — Gotham&apos;s most beloved philanthropists. Raised in Wayne Manor with every privilege the world could offer, his life was shattered in a single moment in Crime Alley.
              </p>
              <p>
                The loss forged something unbreakable in the boy. A cold, relentless determination. Not for revenge — but for justice. So that no child would ever again kneel in a puddle of their parents&apos; blood.
              </p>
              <p>
                Today Bruce Wayne is two things at once: Gotham&apos;s most eligible billionaire playboy — and its most feared guardian, hidden in shadow.
              </p>
            </div>
          </div>

          <div>
            <h2
              className="font-cinzel font-bold text-2xl mb-6"
              style={{ color: "#f5c518", letterSpacing: "0.1em" }}
            >
              The Mission
            </h2>
            <div className="space-y-4">
              {[
                ["Real Name", "Bruce Thomas Wayne"],
                ["Age", "38 (varies by continuity)"],
                ["Height", "6'2\" / 188 cm"],
                ["Weight", "210 lbs / 95 kg"],
                ["Base", "Wayne Manor / The Batcave"],
                ["Allies", "Alfred, Robin, Oracle, Nightwing"],
                ["No-Kill Rule", "Absolute"],
              ].map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between py-2"
                  style={{ borderBottom: "1px solid rgba(245,197,24,0.1)" }}
                >
                  <span className="font-rajdhani text-gray-600 text-sm tracking-widest uppercase">
                    {key}
                  </span>
                  <span className="font-rajdhani font-semibold text-gray-300 text-sm">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2
            className="font-cinzel font-bold text-2xl mb-8 text-center"
            style={{ color: "#f5c518", letterSpacing: "0.1em" }}
          >
            Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-rajdhani font-semibold text-gray-300 text-sm tracking-wider">
                    {skill.name}
                  </span>
                  <span className="font-cinzel text-yellow-400 text-sm">
                    {skill.level}/100
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(245,197,24,0.15)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${skill.level}%`,
                      background: "linear-gradient(90deg, #d4a017, #f5c518)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2
            className="font-cinzel font-bold text-2xl mb-12 text-center"
            style={{ color: "#f5c518", letterSpacing: "0.1em" }}
          >
            The Origin Timeline
          </h2>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "rgba(245,197,24,0.2)" }}
            />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div
                    className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                    style={{
                      background: "#0a0a0a",
                      borderColor: "#f5c518",
                      boxShadow: "0 0 10px rgba(245,197,24,0.4)",
                    }}
                  />
                  <div className="bat-card p-6 rounded-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-cinzel text-xs tracking-widest"
                        style={{ color: "#f5c518" }}
                      >
                        {item.year}
                      </span>
                      <div className="w-8 h-px" style={{ background: "rgba(245,197,24,0.3)" }} />
                      <h3 className="font-cinzel font-bold text-gray-200 text-sm tracking-wider">
                        {item.event}
                      </h3>
                    </div>
                    <p className="font-rajdhani text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
