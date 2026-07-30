import SiteShell from "../components/site-shell";

const serviceGroups = [
  {
    title: "Digital Growth",
    items: ["Marketing strategy", "Paid advertising", "SEO", "Email marketing"],
  },
  {
    title: "Social Media",
    items: ["Content creation", "Content calendars", "Posting & community management", "Performance reporting"],
  },
  {
    title: "Website & Product",
    items: ["Business websites", "Landing pages", "Website maintenance"],
  },
  {
    title: "Branding & Creative",
    items: ["Graphic design", "Logo design", "Brand identity", "Video editing"],
  },
  {
    title: "Consulting & Training",
    items: ["Digital marketing consulting", "Personal branding", "Team training", "Social media audits"],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell activePage="services">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Services</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Strategic support for brands that want to feel more visible and more intentional online.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These services are grouped to make the offering easier to understand while still matching the way the business works in real life.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((group) => (
            <article key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-[#f8f5ef] px-4 py-3">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
