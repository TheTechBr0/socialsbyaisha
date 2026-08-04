import Image from "next/image";
import SiteShell from "../components/site-shell";

const members = [
  {
    name: "Charles Ezechukwu",
    role: "Video Editor, Graphics Designer & Software Developer",
    description: "Brings visual storytelling, digital design, and technical execution together.",
    image: "/charles.jpeg",
    accent: "bg-[#fff8f0]",
  },
  {
    name: "Aisha",
    role: "Founder & Team Lead",
    description: "Leads strategy, client experience, and the overall brand vision.",
    image: "/aisha.JPEG",
    accent: "bg-[#28c1a1] text-white",
    featured: true,
  },
  {
    name: "Esther L.M.O Manor",
    role: "Marketing Assistant",
    description: "Supports brand campaigns, client communication, and campaign coordination.",
    image: "/esther.jpg",
    accent: "bg-[#fff7f2]",
  },
  {
    name: "Vivian Tetteh",
    role: "Community Manager",
    description: "Manages audience engagement, community growth, and brand conversations.",
    image: "/viviann.jpeg",
    accent: "bg-[#f8f5ef]",
  },
];

export default function TeamPage() {
  return (
    <SiteShell activePage="team">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#28c1a1]">Team</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            The people behind the work, ready to feel more personal and more human.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page can become a warm, story-led introduction to your team with bios, roles, and photos once you share the details.
          </p>
        </div>

        <div className="mt-10 hidden lg:block">
          <div className="relative mx-auto h-[520px] max-w-[760px]">
            <div aria-hidden className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#28c1a1]/25" />

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-[0_30px_70px_-18px_rgba(40,193,161,0.45)] ring-4 ring-[#f59e0b]/35">
                <Image src={members[1].image} alt={members[1].name} width={280} height={280} className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{members[1].name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#28c1a1]">Founder</p>
            </div>

            <div className="absolute left-[8%] top-[20%] text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image src={members[0].image} alt={members[0].name} width={180} height={180} className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 max-w-32 text-xs font-semibold text-slate-900">{members[0].name}</p>
            </div>

            <div className="absolute right-[8%] top-[20%] text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image src={members[2].image} alt={members[2].name} width={180} height={180} className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 max-w-32 text-xs font-semibold text-slate-900">{members[2].name}</p>
            </div>

            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image src={members[3].image} alt={members[3].name} width={180} height={180} className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 max-w-32 text-xs font-semibold text-slate-900">{members[3].name}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:hidden">
          {members.map((member, index) => {
            const isFeatured = member.featured;
            return (
              <article
                key={`${member.name}-${index}`}
                className={`rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${isFeatured ? "md:col-span-2" : ""}`}
              >
                <div className={`mx-auto flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg ${isFeatured ? "h-36 w-36 md:h-40 md:w-40" : "h-24 w-24"}`}>
                  <Image src={member.image} alt={member.name} width={180} height={180} className="h-full w-full object-cover" />
                </div>
                <div className={`mt-5 rounded-[1.25rem] p-4 ${member.accent}`}>
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className={`mt-1 text-sm font-medium ${isFeatured ? "text-[#fff8f0]" : "text-[#f59e0b]"}`}>{member.role}</p>
                  <p className={`mt-3 text-sm leading-7 ${isFeatured ? "text-slate-100" : "text-slate-600"}`}>{member.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
