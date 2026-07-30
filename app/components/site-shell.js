"use client";

import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,122,89,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(61,44,90,0.18),_transparent_24%)] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#f8f5ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3d2c5a] p-1 shadow-lg shadow-[#3d2c5a]/20">
              <Image src="/socialsbyaishalogo.png" alt="Socials by Aisha logo" width={36} height={36} priority />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#3d2c5a] uppercase">Socials by Aisha</p>
              <p className="text-xs text-slate-500">Branding • Content • Growth</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => {
              const isActive = activePage === item.label.toLowerCase();
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-[#3d2c5a] ${isActive ? "text-[#3d2c5a]" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Menu</p>
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
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-[#3d2c5a] text-white" : "bg-white text-slate-700 hover:bg-[#fff7f2]"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Need a quick reply?</p>
          <a href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noreferrer" className="mt-2 inline-flex font-semibold text-[#3d2c5a] hover:text-[#ff7a59]">
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
            <a href="mailto:socialsbyaisha@gmail.com" className="transition hover:text-[#3d2c5a]">Email</a>
            <a href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noreferrer" className="transition hover:text-[#3d2c5a]">WhatsApp</a>
            <a href="/portfolio" className="transition hover:text-[#3d2c5a]">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
