"use client";
import { useState } from "react";

const links = [
  { label: "Kaise kaam karta hai", href: "#how" },
  { label: "Roadmap", href: "#explorer" },
  { label: "Websites", href: "#sites" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">Dev<span>Hub</span></a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu kholo"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}