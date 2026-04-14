"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact, navItems } from "../lib/site-data";

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <div className="min-h-screen bg-[#07111f] text-slate-100">
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-orange-400/15 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(7,17,31,0.2),rgba(7,17,31,0.92))]" />
            </div>

            <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex flex-col text-slate-100">
                        <span className="text-sm font-semibold tracking-[0.24em]">HARSH KASHYAP</span>
                        <span className="mt-1 text-xs text-slate-400">DevOps Engineer</span>
                    </Link>

                    <div className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm transition ${active ? "text-white" : "text-slate-300 hover:text-white"}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <a
                            href={contact.emailHref}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                        >
                            <Mail size={14} className="text-cyan-200" />
                            <span className="max-w-[11rem] truncate">{contact.email}</span>
                        </a>
                        <a
                            href={contact.phoneHref}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-emerald-300/30 hover:bg-emerald-300/10 hover:text-white"
                        >
                            <Phone size={14} className="text-emerald-200" />
                            <span>{contact.phone}</span>
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </nav>

                {menuOpen && (
                    <div id="mobile-navigation" className="border-t border-white/10 px-4 py-4 md:hidden">
                        <div className="flex flex-col gap-3">
                            <a
                                href={contact.emailHref}
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                            >
                                <Mail size={16} className="text-cyan-200" />
                                <span className="truncate">{contact.email}</span>
                            </a>
                            <a
                                href={contact.phoneHref}
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                            >
                                <Phone size={16} className="text-emerald-200" />
                                <span>{contact.phone}</span>
                            </a>
                            {navItems.map((item) => {
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`rounded-2xl border px-4 py-3 text-sm ${active
                                            ? "border-cyan-300/30 bg-cyan-300/15 text-white"
                                            : "border-white/10 bg-white/5 text-slate-200"}`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <main className="relative z-10">{children}</main>

            <footer className="relative z-10 border-t border-white/10 bg-slate-950/40 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.18em] text-white">HARSH KASHYAP</p>
                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                            DevOps engineer focused on cloud infrastructure, deployment automation, observability, and reliable delivery systems.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <a
                            href={contact.emailHref}
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                        >
                            <Mail size={16} className="text-cyan-200" />
                            <span>{contact.email}</span>
                        </a>
                        <a
                            href={contact.phoneHref}
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-300/30 hover:bg-emerald-300/10 hover:text-white"
                        >
                            <Phone size={16} className="text-emerald-200" />
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
