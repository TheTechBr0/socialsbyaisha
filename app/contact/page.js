import SiteShell from "../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell activePage="contact">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3d2c5a]">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Let’s create a digital presence that feels clear, confident, and worth remembering.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you need help with branding, content, a website, or a digital growth plan, this is the right place to start.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <a href="mailto:socialsbyaisha@gmail.com" className="block rounded-2xl bg-[#f8f5ef] px-4 py-3 font-semibold text-[#3d2c5a] transition hover:text-[#ff7a59]">
                socialsbyaisha@gmail.com
              </a>
              <a href="tel:+233551528732" className="block rounded-2xl bg-[#f8f5ef] px-4 py-3 font-semibold text-[#3d2c5a] transition hover:text-[#ff7a59]">
                0551528732
              </a>
              <p className="rounded-2xl border border-slate-200 px-4 py-3">
                Prefer a quick intro? Share your goals, timeline, and the kind of support you need and I will help shape the next step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
