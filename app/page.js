import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import ProjectGrid from "../components/project-grid";
import SiteShell from "../components/site-shell";
import { contact, experiences, highlights, projects, skillGroups, stats } from "../lib/site-data";

export default function HomePage() {
    return (
        <SiteShell>
            <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
                <div className="max-w-3xl">
                    <div className="mb-6 inline-flex max-w-full rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase leading-5 tracking-[0.24em] text-amber-100 sm:text-xs">
                        DevOps Engineer • AWS • Kubernetes • Terraform
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[4.2rem]">
                        Modern cloud delivery with sharper automation, calmer operations, and infrastructure that feels built to last.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        I build DevOps systems that turn deployment friction into reliable delivery, with practical work across AWS, Kubernetes, Terraform, CI/CD, Docker, and observability.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/get-in-touch"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/30 hover:bg-sky-300/10"
                        >
                            Let&apos;s Connect
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="self-start rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur">
                    <div className="rounded-[1.6rem] border border-white/10 bg-[#0d1524]/80 p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Current Focus</p>
                                <h2 className="mt-3 text-2xl font-semibold text-white">Cloud systems with production discipline.</h2>
                            </div>
                            <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100">
                                Available
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={highlight.title}
                                    className={`rounded-[1.5rem] border p-5 ${index === 0
                                        ? "border-amber-300/15 bg-amber-300/10"
                                        : "border-sky-300/15 bg-sky-300/10"}`}
                                >
                                    <p className="text-sm font-semibold text-white">{highlight.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-200">{highlight.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core Stack</p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"].map((item, index) => (
                                    <span
                                        key={item}
                                        className={`rounded-full border px-4 py-2 text-sm ${index % 2 === 0
                                            ? "border-amber-300/20 bg-amber-300/10 text-amber-50"
                                            : "border-sky-300/20 bg-sky-300/10 text-sky-50"}`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <ProjectGrid projects={projects.slice(0, 3)} />
                <div className="mt-10 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/30 hover:bg-amber-300/10"
                    >
                        Explore all projects
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Experience</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A background shaped by delivery, quality, and execution.</h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {experiences.map((role) => (
                        <div key={role.title} className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
                            <p className="text-sm uppercase tracking-[0.18em] text-amber-200">{role.period}</p>
                            <h3 className="mt-3 text-xl font-semibold text-white">{role.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{role.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Skills</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tooling shaped around cloud operations and practical delivery.</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                        A balanced mix of cloud platforms, container orchestration, automation pipelines, infrastructure as code, and observability.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl border border-white/10 bg-[#0d1524]/60 p-3">
                                        <Icon size={18} className={group.accent} />
                                    </div>
                                    <h3 className={`text-lg font-semibold ${group.accent}`}>{group.title}</h3>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(14,165,233,0.1),rgba(255,255,255,0.05))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-amber-100">Start a Conversation</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ready to improve your cloud delivery, CI/CD, or infrastructure automation?</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                                Reach out for DevOps roles, freelance work, deployment help, or platform engineering conversations.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link
                                href="/get-in-touch"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                            >
                                Get in Touch
                                <ArrowUpRight size={16} />
                            </Link>
                            <a
                                href={contact.emailHref}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-sky-300/10"
                            >
                                Email me directly
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
