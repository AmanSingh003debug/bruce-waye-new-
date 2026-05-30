"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BatLogo from "./BatLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/arsenal", label: "Arsenal" },
  { href: "/rogues", label: "Rogues Gallery" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 100%)",
        borderBottom: "1px solid rgba(245,197,24,0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <BatLogo size={40} glow />
          <span
            className="font-cinzel text-xl font-bold tracking-widest"
            style={{ color: "#f5c518", letterSpacing: "0.2em" }}
          >
            BATMAN
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-rajdhani font-semibold text-sm tracking-widest uppercase transition-colors ${
                router.pathname === link.href
                  ? "text-yellow-400 active"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-yellow-400 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(10,10,10,0.98)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-cinzel text-sm tracking-widest uppercase py-2 border-b transition-colors ${
                router.pathname === link.href
                  ? "text-yellow-400 border-yellow-400/40"
                  : "text-gray-400 border-gray-800 hover:text-yellow-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
