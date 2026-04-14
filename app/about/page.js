import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SiteShell from "../../components/site-shell";
import { experiences, skillGroups } from "../../lib/site-data";

export const metadata = {
    title: "About | Harsh Kashyap",
    description: "Learn more about Harsh Kashyap's background in DevOps, QA, and cloud automation.",
};

export default function AboutPage() {
    return (
        <SiteShell>
            <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-200">About Me</p>
                        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                            A delivery-focused engineer blending automation, quality discipline, and cloud infrastructure thinking.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            My path into DevOps was shaped by quality engineering and delivery discipline. That mix helps me think not only about how to deploy systems, but also how to make them safer, more observable, and easier for teams to operate.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                "CI/CD pipelines that reduce release friction",
                                "Infrastructure as code for repeatable environments",
                                "Kubernetes and container workflows for modern apps",
                                "Monitoring and alerting for production confidence",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-amber-200" />
                                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                        <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Career Snapshot</p>
                        <div className="mt-6 grid gap-4">
                            {experiences.map((role) => (
                                <div key={role.title} className="rounded-3xl border border-white/10 bg-[#0e1828]/60 p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-sky-200">{role.period}</p>
                                    <h2 className="mt-2 text-xl font-semibold text-white">{role.title}</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{role.summary}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Capabilities</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">The stack I use to support shipping and scaling.</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
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

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.18),rgba(14,165,233,0.1),rgba(255,255,255,0.05))] p-6 sm:p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-amber-100">Next Step</p>
                            <h2 className="mt-3 text-3xl font-semibold text-white">Want to talk about infrastructure, automation, or an open role?</h2>
                        </div>
                        <Link
                            href="/get-in-touch"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                        >
                            Get in Touch
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
