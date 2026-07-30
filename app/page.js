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

const industries = [
  "Restaurants & Hospitality",
  "Hotels & Airbnb",
  "Beauty & Wellness",
  "E-commerce",
  "Retail Businesses",
  "Educational Institutions",
  "Technology Companies",
  "Startups",
  "Professional Services",
  "Real Estate",
  "SMEs",
];

const brands = [
  "Selwilliam Hotel",
  "Hill view hotel",
  "Wardwave Group UK",
  "Kwaba Villa",
  "SellQuic",
  "HMB Beauty",
  "VR Planet Games and lounge",
  "CabMeet Ghana",
  "The ScholarHQ",
  "Truscren Company",
  "Emaric Homes",
  "Spichelles group of companies",
];

const featuredPhotos = [
  { src: "/aisha.JPEG", alt: "Aisha, founder and team lead", label: "Founder & Team Lead" },
  { src: "/charles.jpeg", alt: "Charles Ezechukwu, video editor and designer", label: "Video & Design" },
  { src: "/esther.jpg", alt: "Esther Manor, marketing assistant", label: "Marketing Support" },
  { src: "/viviann.jpeg", alt: "Vivian Tetteh, community manager", label: "Community Management" },
];

const stats = [
  { value: "14+", label: "services tailored to modern brands" },
  { value: "100%", label: "custom creative direction" },
  { value: "1:1", label: "supportive, strategic partnership" },
];

const founder = featuredPhotos[0];
const team = featuredPhotos.slice(1);

// Orbit positions for the desktop "founder in the middle" layout.
const teamPositions = [
  "left-[2%] top-[8%]",
  "right-[2%] top-[8%]",
  "left-1/2 bottom-0 -translate-x-1/2",
];

export default function Home() {
  return (
    <SiteShell activePage="home">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 8%, rgba(255,122,89,0.16) 0%, rgba(255,122,89,0) 60%), radial-gradient(45% 40% at 8% 92%, rgba(61,44,90,0.14) 0%, rgba(61,44,90,0) 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 -z-10 h-[420px] w-[420px] rounded-full opacity-70 blur-3xl"
          style={{ background: "linear-gradient(135deg, #ff7a59 0%, #3d2c5a 100%)", opacity: 0.12 }}
        />

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ff7a59]/30 bg-[#fff7f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7a59]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a59]" />
              Creative strategy &middot; digital presence &middot; growth
            </p>

            <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl">
              We help ambitious brands{" "}
              <span className="relative inline-block">
                <span className="relative z-10">show up</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-[0.4em] rounded-sm bg-[#ff7a59]/25"
                />
              </span>{" "}
              with confidence online.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Socials by Aisha delivers smart branding, content, web design, and digital growth support for
              businesses that want to look polished, connect better, and convert more consistently.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/233551528732?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3d2c5a] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#3d2c5a]/20 transition hover:-translate-y-0.5 hover:bg-[#2d2144] hover:shadow-xl hover:shadow-[#3d2c5a]/25"
              >
                WhatsApp us
                <span className="transition group-hover:translate-x-0.5">&rarr;</span>
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#ff7a59] hover:text-[#ff7a59]"
              >
                View our work
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition hover:border-[#ff7a59]/40 hover:shadow-md"
                >
                  <p className="text-2xl font-semibold text-[#3d2c5a]">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_-30px_rgba(15,23,42,0.35)]">
            <div className="relative h-80 w-full bg-gradient-to-br from-[#f8f5ef] to-[#f3ebe0]">
              <Image
                src="/socialsbyaishalogo.png"
                alt="Brand visual for Socials by Aisha"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="border-t border-slate-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff7a59]">What we do best</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li className="flex gap-3 rounded-2xl bg-[#f8f5ef] p-4">
                  <span className="mt-0.5 text-[#3d2c5a]">&#9679;</span>
                  Brand strategy and positioning that gives your business a stronger voice.
                </li>
                <li className="flex gap-3 rounded-2xl bg-[#f8f5ef] p-4">
                  <span className="mt-0.5 text-[#3d2c5a]">&#9679;</span>
                  Social content, campaigns, and web experiences that feel intentional and premium.
                </li>
                <li className="flex gap-3 rounded-2xl bg-[#f8f5ef] p-4">
                  <span className="mt-0.5 text-[#3d2c5a]">&#9679;</span>
                  Growth support built around clarity, consistency, and measurable momentum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + TEAM */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">About us</p>
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
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#ff7a59]/40 via-slate-200 to-transparent" />
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3d2c5a] transition hover:gap-3 hover:text-[#ff7a59]"
            >
              Start a conversation <span>&rarr;</span>
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f8f5ef] p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff7a59]">Our people</p>

            {/* Desktop: founder centered, team orbiting around her */}
            <div className="relative mt-10 hidden h-[420px] lg:block">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3d2c5a]/20"
              />

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_55px_-15px_rgba(61,44,90,0.55)] ring-4 ring-[#ff7a59]/30 transition duration-500 hover:scale-105">
                  <Image src={founder.src} alt={founder.alt} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{founder.label}</p>
              </div>

              {team.map((photo, index) => (
                <div key={photo.src} className={`absolute ${teamPositions[index]} text-center`}>
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md transition duration-300 hover:scale-105">
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                  </div>
                  <p className="mt-2 max-w-[7rem] text-xs font-semibold text-slate-900">{photo.label}</p>
                </div>
              ))}
            </div>

            {/* Mobile / tablet: stacked, founder still featured larger */}
            <div className="mt-8 lg:hidden">
              <div className="mx-auto w-fit text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_55px_-15px_rgba(61,44,90,0.55)] ring-4 ring-[#ff7a59]/30">
                  <Image src={founder.src} alt={founder.alt} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{founder.label}</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {team.map((photo) => (
                  <div key={photo.src} className="text-center">
                    <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-900">{photo.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Industries We Serve</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Flexible support for businesses across many sectors.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-[#f8f5ef] px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#ff7a59]/50 hover:bg-[#fff7f2] hover:text-[#ff7a59]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS — auto-scrolling marquee */}
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#3d2c5a] p-8 text-white shadow-[0_30px_100px_-30px_rgba(61,44,90,0.7)] sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#ff7a59]/20 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f7cfb8]">Trusted by brands</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Brands we&rsquo;ve worked with across past and present projects.
          </h2>

          <div className="relative mt-9 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#3d2c5a] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#3d2c5a] to-transparent"
            />
            <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-3 motion-reduce:animate-none">
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-slate-100 backdrop-blur-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="mx-auto max-w-6xl px-6 py-10 pb-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Explore more</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {featuredSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#ff7a59]/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">{section.title}</p>
                <span className="text-[#ff7a59] transition group-hover:translate-x-1">&rarr;</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-900">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}