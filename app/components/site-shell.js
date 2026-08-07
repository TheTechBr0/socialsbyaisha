"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function SiteShell({ children, activePage = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = window.localStorage.getItem("socials-by-aisha-theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", isDark);
    window.localStorage.setItem("socials-by-aisha-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="site-shell min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(40,193,161,0.18),transparent_24%)] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#f8f5ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <div className="flex items-center justify-center rounded-full p-1">
              <Image src="/socialsbyaishalogo.png" alt="Socials by Aisha logo" width={140} height={140} priority className="h-auto w-20 sm:w-24" />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-3.5 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => {
              const isActive = activePage === item.label.toLowerCase();
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-[#28c1a1] ${isActive ? "text-[#28c1a1]" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            </nav>
            <button
              type="button"
              onClick={() => setIsDark((value) => !value)}
              className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-[#28c1a1] hover:text-[#28c1a1]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span aria-hidden className="text-base">{isDark ? "☀" : "☾"}</span>
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-slate-950/40 transition ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => setIsOpen(false)} />

      <aside className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col border-l border-slate-200 bg-[#f8f5ef] p-6 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Menu</p>
          <button type="button" onClick={() => setIsOpen(false)} className="rounded-full border border-slate-300 bg-white p-2 text-slate-700" aria-label="Close navigation">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activePage === item.label.toLowerCase();
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-[#28c1a1] text-white" : "bg-white text-slate-700 hover:bg-[#fff8f0]"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Need a quick reply?</p>
          <a href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-semibold text-[#28c1a1] hover:text-[#f59e0b]">
            Chat on WhatsApp
          </a>
        </div>
      </aside>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">© 2026 Socials by Aisha</p>
            <p className="mt-1">Crafted for thoughtful digital growth and lasting brand presence.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:socialsbyaisha7@gmail.com" className="transition hover:text-[#28c1a1]">Email</a>
            <a href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noreferrer" className="transition hover:text-[#28c1a1]">WhatsApp</a>
            <a href="/portfolio" className="transition hover:text-[#28c1a1]">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
