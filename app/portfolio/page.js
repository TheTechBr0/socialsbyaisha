import Image from "next/image";
import SiteShell from "../components/site-shell";

const highlights = [
  {
    title: "Brand-led storytelling",
    description: "Content systems designed to make a business feel consistent, clear, and memorable across every touchpoint.",
  },
  {
    title: "Campaigns that convert attention",
    description: "Social, paid, and promotional work shaped around real business goals and audience behavior.",
  },
  {
    title: "Web presence that feels polished",
    description: "Thoughtful digital experiences that are easier to trust, easier to explore, and easier to act on.",
  },
  {
    title: "Growth support with context",
    description: "Strategy and reporting that help clients understand what is working and what should grow next.",
  },
];

const brandLogos = [
  { src: "/scholarhq.jpeg", name: "The ScholarHQ" },
  { src: "/sellquic.PNG", name: "SellQuic" },
  { src: "/selwilliams.PNG", name: "Selwilliam Hotel" },
  { src: "/cabmeet.jpeg", name: "CabMeet Ghana" },
  { src: "/vrplanet.PNG", name: "VR Planet" },
  { src: "/truscrenlogo.png", name: "Truscren Battery" },
];

export default function PortfolioPage() {
  return (
    <SiteShell activePage="portfolio">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            A polished portfolio showcase, now linked directly to your latest PDF document.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page keeps the same branded visual language across the site and presents your portfolio in a clean, preview-friendly layout.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-[#fff8f0] px-5 py-4 text-sm font-semibold text-[#28c1a1]">
            Portfolio PDF preview
          </div>
          <div className="p-3">
            <div className="portfolio-mobile-open rounded-[1.15rem] border border-[#28c1a1]/20 bg-[#fff8f0] p-5 sm:p-6">
              <p className="text-sm leading-7 text-slate-600">Open the portfolio in your browser for the best reading experience on mobile and desktop.</p>
              <a
                href="/ourportofolio1.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-[#28c1a1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f8f7d]"
              >
                Open portfolio PDF
              </a>
            </div>
            <iframe title="Socials by Aisha portfolio PDF" src="/ourportofolio1.pdf#view=FitH" className="portfolio-frame mt-3 hidden h-[68vh] w-full rounded-[1.15rem] border-0 bg-white lg:block" />
          </div>
          <div className="flex flex-wrap gap-3 border-t border-slate-100 px-5 py-4 text-sm">
            <a
              href="/ourportofolio1.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#28c1a1] px-5 py-3 font-semibold text-white transition hover:bg-[#1f8f7d]"
            >
              View portfolio
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Brand showcase</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Brands we have worked with and continue to celebrate.</h2>
            </div>
            <p className="text-sm text-slate-500">Logo-led brand reel.</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#fff8f0] py-5">
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
    </SiteShell>
  );
}
