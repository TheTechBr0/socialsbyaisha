"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteShell from "./components/site-shell";

const featuredSections = [
  {
    title: "Services",
    description: "A grouped view of the support you offer, from digital growth to branding and consulting.",
    href: "/services",
  },
  {
    title: "Portfolio",
    description: "A dedicated page for your case studies, project highlights, and PDF portfolio.",
    href: "/portfolio",
  },
  {
    title: "Team",
    description: "A warm, story-led page for your team members, roles, and photos.",
    href: "/team",
  },
  {
    title: "Contact",
    description: "A focused contact page for inquiries, consultations, and new opportunities.",
    href: "/contact",
  },
];

const featuredPhotos = [
  { src: "/aisha.JPEG", alt: "Aisha, founder and team lead", label: "Founder & Team Lead" },
  { src: "/charles.jpeg", alt: "Charles Ezechukwu, video editor and designer", label: "Video & Design" },
  { src: "/esther.jpg", alt: "Esther Manor, marketing assistant", label: "Marketing Support" },
  { src: "/viviann.jpeg", alt: "Vivian Tetteh, community manager", label: "Community Management" },
];

const brandLogos = [
  { src: "/scholarhq.jpeg", name: "The ScholarHQ" },
  { src: "/sellquic.PNG", name: "SellQuic" },
  { src: "/selwilliams.PNG", name: "Selwilliam Hotel" },
  { src: "/cabmeet.jpeg", name: "CabMeet Ghana" },
  { src: "/vrplanet.PNG", name: "VR Planet" },
  { src: "/truscrenbattery.PNG", name: "Truscren Battery" },
];

const serviceCards = [
  {
    title: "Brand identity",
    description: "Visual systems, custom tone, and assets that make your brand easier to remember and trust.",
    tone: "bg-[#fff8f0]",
  },
  {
    title: "Social media growth",
    description: "Content calendars, headline structure, and campaign ideas built to keep your audience engaged.",
    tone: "bg-[#e9fbf7]",
  },
  {
    title: "Website direction",
    description: "Landing pages and digital layouts that sharpen your message and guide people to act.",
    tone: "bg-white",
  },
  {
    title: "Creative strategy",
    description: "Planning that translates business goals into a clear, consistent online presence.",
    tone: "bg-[#fff1e6]",
  },
];

const testimonials = [
  {
    quote: "Socials by Aisha gave our brand a cleaner, stronger presence and made our content easier to trust.",
    name: "Brand partner",
  },
  {
    quote: "The work felt polished, strategic, and deeply aligned with how we wanted customers to experience us.",
    name: "Client feedback",
  },
  {
    quote: "From the first concept to the final rollout, the creative direction was clear, calm, and highly effective.",
    name: "Collaborating team",
  },
];

const processSteps = [
  { step: "01", label: "Discover" },
  { step: "02", label: "Design" },
  { step: "03", label: "Launch" },
  { step: "04", label: "Grow" },
];

const stats = [
  { value: "14+", label: "services tailored to modern brands" },
  { value: "100%", label: "custom creative direction" },
  { value: "1:1", label: "supportive, strategic partnership" },
];

const founder = featuredPhotos[0];
const team = featuredPhotos.slice(1);
const teamPositions = ["left-[2%] top-[8%]", "right-[2%] top-[8%]", "left-1/2 bottom-0 -translate-x-1/2"];

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <SiteShell activePage="home">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(62% 52% at 85% 6%, rgba(245,158,11,0.16) 0%, rgba(245,158,11,0) 58%), radial-gradient(50% 42% at 8% 94%, rgba(40,193,161,0.14) 0%, rgba(40,193,161,0) 62%)",
          }}
        />
        <div aria-hidden className="hero-glow pointer-events-none absolute left-0 top-24 -z-10 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(245, 158, 11, 0.25)" }} />
        <div aria-hidden className="hero-glow pointer-events-none absolute right-0 top-6 -z-10 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(40, 193, 161, 0.2)" }} />

        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="home-animate max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#fff8f0] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f59e0b] sm:text-xs">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
              Creative strategy &middot; digital presence &middot; growth
            </p>

            <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Luxury brand presence
              <span className="relative inline-block px-1">
                <span className="relative z-10">for modern businesses</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-[0.38em] rounded-sm bg-[#f59e0b]/25" />
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Socials by Aisha shapes confident, polished digital identities for brands that want their content,
              visuals, and growth systems to feel elevated and memorable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#28c1a1] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#28c1a1]/20 transition hover:-translate-y-0.5 hover:bg-[#1f9a86] hover:shadow-xl hover:shadow-[#28c1a1]/25"
              >
                WhatsApp us
                <span className="transition group-hover:translate-x-0.5">&rarr;</span>
              </a>
              <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#f59e0b] hover:text-[#f59e0b]">
                View our work
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition hover:border-[#f59e0b]/40 hover:shadow-md">
                  <p className="text-2xl font-semibold text-[#28c1a1]">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-float relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_-30px_rgba(15,23,42,0.35)]">
            <div className="absolute left-4 top-4 z-10 rounded-full bg-[#28c1a1] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white shadow-lg">
              Featured hero
            </div>
            <div className="relative h-[21rem] w-full bg-linear-to-br from-[#f8f5ef] via-[#fff7f2] to-[#f3ebe0] sm:h-[26rem]">
              <Image src="/heroimg.jpeg" alt="Socials by Aisha hero imagery" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#28c1a1]/20 via-transparent to-white/10" />
            </div>
            <div className="border-t border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">What we do best</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li className="flex gap-3 rounded-2xl bg-[#fff8f0] p-4">
                  <span className="mt-0.5 text-[#28c1a1]">&#9679;</span>
                  Brand strategy and positioning that gives your business a stronger voice.
                </li>
                <li className="flex gap-3 rounded-2xl bg-[#fff8f0] p-4">
                  <span className="mt-0.5 text-[#28c1a1]">&#9679;</span>
                  Social content, campaigns, and web experiences that feel intentional and premium.
                </li>
                <li className="flex gap-3 rounded-2xl bg-[#fff8f0] p-4">
                  <span className="mt-0.5 text-[#28c1a1]">&#9679;</span>
                  Growth support built around clarity, consistency, and measurable momentum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#28c1a1] p-8 text-white shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#fff8f0]">Intro video</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A quick brand story, brought to life on-screen.</h2>
            <p className="mt-4 text-base leading-8 text-white/80">
              Our intro video gives the brand a memorable foundation and helps new visitors feel the energy,
              style, and calm confidence behind the work.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
            <video
              ref={videoRef}
              className="h-full w-full rounded-[1.4rem] bg-slate-950"
              src="/aishavid.MOV"
              autoPlay
              playsInline
              preload="metadata"
            />

            <button
              type="button"
              onClick={toggleVideo}
              className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#28c1a1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#28c1a1]/25 transition hover:bg-[#1f9a86]"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">About us</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              We build brands that feel clear, credible, and unmistakably professional.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Socials by Aisha offers strategic creative support for businesses that want stronger online
              presence, better storytelling, and a more confident digital identity.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From social media and content to branding, web design, and paid campaigns, we shape digital
              experiences that feel polished and purposeful.
            </p>
            <div className="mt-8 h-px w-full bg-linear-to-r from-[#f59e0b]/40 via-slate-200 to-transparent" />
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#28c1a1] transition hover:gap-3 hover:text-[#f59e0b]">
              Start a conversation <span>&rarr;</span>
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">Our people</p>
            <div className="relative mt-10 h-[400px] sm:h-[430px] lg:h-[460px]">
              <div aria-hidden className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#28c1a1]/25 sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px]" />

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-[0_30px_70px_-18px_rgba(40,193,161,0.45)] ring-4 ring-[#f59e0b]/35 sm:h-52 sm:w-52 lg:h-56 lg:w-56">
                  <Image src={founder.src} alt={founder.alt} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{founder.label}</p>
              </div>

              <div className="team-orbit absolute inset-0 z-10">
                <div className="team-orbit-card team-orbit-left text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:scale-105 sm:h-28 sm:w-28 lg:h-28 lg:w-28">
                    <Image src={team[0].src} alt={team[0].alt} fill className="object-cover" />
                  </div>
                  <p className="mt-2 max-w-28 text-xs font-semibold text-slate-900">{team[0].label}</p>
                </div>

                <div className="team-orbit-card team-orbit-right text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:scale-105 sm:h-28 sm:w-28 lg:h-28 lg:w-28">
                    <Image src={team[1].src} alt={team[1].alt} fill className="object-cover" />
                  </div>
                  <p className="mt-2 max-w-28 text-xs font-semibold text-slate-900">{team[1].label}</p>
                </div>

                <div className="team-orbit-card team-orbit-bottom text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:scale-105 sm:h-28 sm:w-28 lg:h-28 lg:w-28">
                    <Image src={team[2].src} alt={team[2].alt} fill className="object-cover" />
                  </div>
                  <p className="mt-2 max-w-28 text-xs font-semibold text-slate-900">{team[2].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Brand showcase</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">The brands we have worked with and continue to celebrate.</h2>
            </div>
            <p className="text-sm text-slate-500">Scroll-ready, logo-led, mobile-friendly showcase.</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#f8f5ef] py-5">
            <div className="brand-marquee flex min-w-max items-center gap-4">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="brand-card flex h-32 w-44 shrink-0 items-center justify-center rounded-[1.25rem] border border-white/70 bg-white px-4 shadow-sm">
                  <div className="relative h-14 w-28">
                    <Image src={brand.src} alt={brand.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">Brand momentum</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Tools and creative direction built to help brands look stronger and move with clarity.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredSections.map((section) => (
                <Link key={section.title} href={section.href} className="rounded-[1.25rem] border border-slate-200 bg-[#f8f5ef] p-4 transition hover:-translate-y-0.5 hover:border-[#f59e0b]/60">
                  <p className="text-base font-semibold text-slate-900">{section.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">What we offer</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Smart creative support shaped around growth, identity, and digital presence.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[1.4rem] border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-[#f59e0b]/50 hover:shadow-md ${card.tone}`}
              >
                <p className="text-base font-semibold text-slate-900">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-[#fff8f0] p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">Client proof</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Trusted by teams who want a brand that feels premium and purposeful.
              </h2>
            </div>
            <p className="text-sm text-slate-500">Creative momentum that turns attention into confidence.</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[#28c1a1]">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              A simple, focused process to move from idea to polished digital presence.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[1.4rem] border border-slate-200 bg-[#f8f5ef] p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">{item.step}</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,_rgba(61,44,90,0.06),_rgba(255,122,89,0.08))] p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Ready to build your next brand moment?</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Let’s shape a stronger online presence for your business.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:socialsbyaisha7@gmail.com" className="inline-flex rounded-full bg-[#28c1a1] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1f9a86]">
                Email us
              </a>
              <a href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-[#f59e0b] hover:text-[#f59e0b]">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}