"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectGrid({ projects, intro = true }) {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setActiveProject(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = activeProject ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    return (
        <>
            {intro && (
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Selected Work</p>
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
                        className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur"
                    >
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                                {project.category}
                            </span>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                            >
                                Code
                                <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <h3 className="text-xl font-semibold leading-8 text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>

                        <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Impact</p>
                            <p className="mt-2 text-sm leading-6 text-emerald-50">{project.impact}</p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.details.split(", ").map((detail) => (
                                <span key={detail} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                                    {detail}
                                </span>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setActiveProject(project)}
                            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                        >
                            View details
                            <ExternalLink size={16} />
                        </button>
                    </motion.article>
                ))}
            </div>

            {activeProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#0d1728] p-6 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Project Details</p>
                                <h3 id="project-modal-title" className="mt-3 text-2xl font-semibold text-white">
                                    {activeProject.title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:text-white"
                                aria-label="Close project details"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{activeProject.desc}</p>

                        <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-300/10 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">Impact</p>
                            <p className="mt-2 text-sm leading-6 text-emerald-50">{activeProject.impact}</p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {activeProject.details.split(", ").map((item) => (
                                <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={activeProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                            >
                                View Repository
                                <ArrowUpRight size={16} />
                            </a>
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
