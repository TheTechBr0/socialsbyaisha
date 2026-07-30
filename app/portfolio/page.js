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

export default function PortfolioPage() {
  return (
    <SiteShell activePage="portfolio">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            A portfolio page ready for your case studies, project highlights, and PDF upload.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This space can become a full project gallery once you share the PDF, screenshots, and client stories you want to feature.
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

        <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#ff7a59]/50 bg-[#fff7f2] p-6 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">Portfolio PDF</p>
          <p className="mt-2">View or download our portfolio document directly below.</p>
          <a
            href="/portfolio.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-[#3d2c5a] px-5 py-3 font-semibold text-white transition hover:bg-[#2d2144]"
          >
            Open portfolio PDF
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
