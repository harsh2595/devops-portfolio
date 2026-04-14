"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Mail, Phone } from "lucide-react";
import { contact, navItems } from "../lib/site-data";

export default function SiteShell({ children }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#0f1828] text-slate-100">
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
                <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
                <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-rose-300/10 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,31,0.24),rgba(10,17,31,0.94))]" />
            </div>

            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c1422]/80 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="shrink-0 text-slate-100">
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold tracking-[0.3em] text-white sm:text-base">HARSH KASHYAP</span>
                                <span className="mt-1 text-xs text-slate-400">DevOps Engineer</span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                            <div className="flex flex-wrap items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur">
                                {navItems.map((item) => {
                                    const active = pathname === item.href;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`px-3 text-sm whitespace-nowrap transition ${active ? "text-amber-200" : "text-slate-300 hover:text-white"}`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                            <a
                                href={contact.emailHref}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-amber-300/30 hover:bg-amber-300/10 hover:text-white"
                            >
                                <Mail size={14} className="text-amber-200" />
                                <span className="max-w-[11rem] truncate">{contact.email}</span>
                            </a>
                            <a
                                href={contact.phoneHref}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white"
                            >
                                <Phone size={14} className="text-sky-200" />
                                <span>{contact.phone}</span>
                            </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </div>
                </nav>
            </header>

            <main className="relative z-10">{children}</main>

            <footer className="relative z-10 border-t border-white/10 bg-[#0c1422]/75 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.24em] text-white">HARSH KASHYAP</p>
                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                            DevOps engineer focused on cloud infrastructure, deployment automation, observability, and reliable delivery systems.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <a
                            href={contact.emailHref}
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-amber-300/30 hover:bg-amber-300/10 hover:text-white"
                        >
                            <Mail size={16} className="text-amber-200" />
                            <span className="break-all">{contact.email}</span>
                        </a>
                        <a
                            href={contact.phoneHref}
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/30 hover:bg-sky-300/10 hover:text-white"
                        >
                            <Phone size={16} className="text-sky-200" />
                            <span>{contact.phone}</span>
                        </a>
                    </div>
                </div>

                <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-5 text-center text-sm text-slate-500 lg:text-left">
                    <p>© {new Date().getFullYear()} Harsh Kashyap • DevOps Engineer</p>
                </div>
            </footer>
        </div>
    );
}
