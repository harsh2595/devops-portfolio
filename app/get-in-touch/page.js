import { ArrowUpRight, Mail, Phone } from "lucide-react";
import ContactForm from "../../components/contact-form";
import SiteShell from "../../components/site-shell";
import { contact } from "../../lib/site-data";

export const metadata = {
    title: "Get in Touch | Harsh Kashyap",
    description: "Send a message to Harsh Kashyap about DevOps roles, cloud projects, and collaboration opportunities.",
};

export default function GetInTouchPage() {
    return (
        <SiteShell>
            <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Get in Touch</p>
                        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                            Let&apos;s talk about DevOps roles, cloud systems, delivery pipelines, or infrastructure support.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            Use the form to send a message directly. Once SMTP is configured, Harsh will receive an email notification at <span className="text-white">{contact.email}</span>.
                        </p>

                        <div className="mt-10 grid gap-4">
                            <a
                                href={contact.emailHref}
                                className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-5 py-4 text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition hover:border-amber-300/30 hover:bg-amber-300/10"
                            >
                                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3">
                                    <Mail size={18} className="text-amber-200" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
                                    <p className="mt-1 text-sm sm:text-base">{contact.email}</p>
                                </div>
                            </a>

                            <a
                                href={contact.phoneHref}
                                className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-5 py-4 text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition hover:border-sky-300/30 hover:bg-sky-300/10"
                            >
                                <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 p-3">
                                    <Phone size={18} className="text-sky-200" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</p>
                                    <p className="mt-1 text-sm sm:text-base">{contact.phone}</p>
                                </div>
                            </a>

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-5 py-4 text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition hover:border-sky-300/30 hover:bg-sky-300/10"
                            >
                                <div className="rounded-2xl border border-sky-300/20 bg-sky-300/10 p-3">
                                    <ArrowUpRight size={18} className="text-sky-200" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">LinkedIn</p>
                                    <p className="mt-1 text-sm sm:text-base">Connect professionally</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 rounded-[1.75rem] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(245,158,11,0.08))] p-5">
                            <p className="text-sm font-semibold text-amber-100">Email setup note</p>
                            <p className="mt-2 text-sm leading-7 text-slate-200">
                                For live email delivery, add SMTP environment variables such as your Gmail SMTP details and app password. The form is already wired to send notifications to your inbox.
                            </p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </SiteShell>
    );
}
