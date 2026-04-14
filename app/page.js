import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import ProjectGrid from "../components/project-grid";
import SiteShell from "../components/site-shell";
import { contact, experiences, highlights, projects, skillGroups, stats } from "../lib/site-data";

export default function HomePage() {
    return (
        <SiteShell>
            <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
                <div className="max-w-3xl">
                    <div className="mb-6 inline-flex max-w-full rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase leading-5 tracking-[0.24em] text-cyan-100 sm:text-xs">
                        DevOps Engineer • Cloud • Automation • Platform Delivery
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Building reliable cloud infrastructure, cleaner deployments, and production-ready automation.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        I design delivery pipelines and infrastructure that help teams ship faster, monitor better, and scale with confidence across AWS, Kubernetes, Terraform, Docker, and GitHub Actions.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/get-in-touch"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                        >
                            Let&apos;s Connect
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="self-start rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur">
                    <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-6">
                        <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Core Stack</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {highlights.map((highlight) => (
                                <div key={highlight.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-sm text-slate-400">Focus</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{highlight.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">{highlight.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <ProjectGrid projects={projects.slice(0, 3)} />
                <div className="mt-10 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        Explore all projects
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Experience</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A background shaped by delivery, quality, and execution.</h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {experiences.map((role) => (
                        <div key={role.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{role.period}</p>
                            <h3 className="mt-3 text-xl font-semibold text-white">{role.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{role.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Skills</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Tooling that supports modern infrastructure and smooth releases.</h2>
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
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
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
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(249,115,22,0.1),rgba(255,255,255,0.05))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-cyan-100">Start a Conversation</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ready to improve your cloud delivery, CI/CD, or infrastructure automation?</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                                Reach out for DevOps roles, freelance work, deployment help, or platform engineering conversations.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Link
                                href="/get-in-touch"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                            >
                                Get in Touch
                                <ArrowUpRight size={16} />
                            </Link>
                            <a
                                href={contact.emailHref}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                            >
                                Email me directly
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
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
