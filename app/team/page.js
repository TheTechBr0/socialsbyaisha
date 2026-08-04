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

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {members.map((member, index) => {
            const isFeatured = member.featured;
            return (
              <article
                key={`${member.name}-${index}`}
                className={`rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${isFeatured ? "md:col-span-2 md:mx-auto md:w-full md:max-w-sm xl:col-span-1 xl:mx-0 xl:max-w-none" : ""}`}
              >
                <div className={`mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg ${isFeatured ? "h-36 w-36 md:h-40 md:w-40" : "h-24 w-24"}`}>
                  <Image src={member.image} alt={member.name} width={180} height={180} className="h-full w-full object-cover" />
                </div>
                <div className={`mt-5 rounded-[1.25rem] p-4 ${member.accent}`}>
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className={`mt-1 text-sm font-medium ${isFeatured ? "text-[#fff8f0]" : "text-[#28c1a1]"}`}>{member.role}</p>
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
