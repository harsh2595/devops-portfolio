"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ProjectGrid({ projects, intro = true }) {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <>
            {intro && (
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Selected Work</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                            Projects built around automation, scale, and deployment confidence.
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                        Each project highlights practical DevOps work across infrastructure provisioning, CI/CD, Kubernetes operations, and monitoring.
                    </p>
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        whileHover={{ y: -6 }}
                        className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur"
                    >
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100">
                                {project.category}
                            </span>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-amber-300/30 hover:text-white"
                            >
                                Code
                                <ArrowUpRight size={14} />
                            </a>
                        </div>

                        <h3 className="min-h-[4rem] text-xl font-semibold leading-8 text-white">{project.title}</h3>
                        <p className="mt-3 min-h-[5.5rem] text-sm leading-7 text-slate-300">{project.desc}</p>

                        <div className="mt-5 p-1">
                            <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Impact</p>
                            <p className="mt-2 min-h-[3rem] text-sm leading-6 text-sky-50">{project.impact}</p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.details.split(", ").map((detail) => (
                                <span key={detail} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                    {detail}
                                </span>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition hover:text-amber-100 sm:mt-auto sm:pt-6"
                        >
                            {activeProject === project.title ? "Hide details" : "View details"}
                            <ExternalLink size={16} />
                        </button>

                        {activeProject === project.title && (
                            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#111b2d]/80 p-5">
                                <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Project Details</p>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>

                                <div className="mt-4 p-1">
                                    <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Impact</p>
                                    <p className="mt-2 text-sm leading-6 text-sky-50">{project.impact}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.details.split(", ").map((item) => (
                                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                                >
                                    View Repository
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </>
    );
}
