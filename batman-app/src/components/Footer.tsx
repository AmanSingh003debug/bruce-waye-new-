import BatLogo from "./BatLogo";

export default function Footer() {
  return (
    <footer
      className="mt-20 py-10 px-6"
      style={{
        borderTop: "1px solid rgba(245,197,24,0.15)",
        background: "rgba(10,10,10,0.98)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BatLogo size={32} />
          <span className="font-cinzel text-sm tracking-widest text-gray-500 uppercase">
            Gotham City · Est. 1939
          </span>
        </div>
        <p className="font-rajdhani text-gray-600 text-sm tracking-wider">
          "I AM THE NIGHT." — Batman
        </p>
        <p className="font-rajdhani text-gray-700 text-xs tracking-widest">
          DC Comics · Batman™ is a registered trademark
        </p>
      </div>
    </footer>
  );
}
