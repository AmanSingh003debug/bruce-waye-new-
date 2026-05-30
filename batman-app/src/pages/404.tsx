import Layout from "@/components/Layout";
import BatLogo from "@/components/BatLogo";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="404 — Lost in Gotham">
      <div className="page-enter min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <BatLogo size={80} glow className="mb-8 opacity-40" />
        <p className="font-rajdhani text-yellow-400 tracking-[0.4em] text-xs uppercase mb-4">
          Error 404
        </p>
        <h1
          className="font-cinzel font-black text-5xl md:text-7xl mb-6"
          style={{ color: "#f5f5f5", letterSpacing: "0.05em" }}
        >
          LOST IN
          <br />
          <span style={{ color: "#f5c518" }}>GOTHAM</span>
        </h1>
        <p className="font-rajdhani text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
          Even Batman can&apos;t find this page. It may have been moved to the Batcave,
          or perhaps the Joker deleted it.
        </p>
        <Link
          href="/"
          className="font-cinzel text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:scale-105"
          style={{
            background: "#f5c518",
            color: "#0a0a0a",
            fontWeight: "700",
            letterSpacing: "0.2em",
          }}
        >
          Return to Gotham
        </Link>
      </div>
    </Layout>
  );
}
