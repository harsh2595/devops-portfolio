"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
    name: "",
    email: "",
    company: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to send message right now.");
            }

            setForm(initialForm);
            setStatus({ type: "success", message: "Message sent successfully. Harsh will receive an email notification shortly." });
        } catch (error) {
            setStatus({ type: "error", message: error.message || "Something went wrong while sending your message." });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8"
        >
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-200">Contact Form</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Send a direct message</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                    Share your role, project, or requirement and I&apos;ll get back to you.
                </p>
            </div>

            <div className="grid gap-5">
                <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-200">
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border border-white/10 bg-[#0d1524]/60 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/40"
                        placeholder="Your name"
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl border border-white/10 bg-[#0d1524]/60 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/40"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-200">
                        Company or role
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        className="rounded-2xl border border-white/10 bg-[#0d1524]/60 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/40"
                        placeholder="Optional"
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-200">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="rounded-2xl border border-white/10 bg-[#0d1524]/60 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/40"
                        placeholder="Tell me about your project, team, or opportunity."
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {submitting ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={18} />}
                    {submitting ? "Sending..." : "Send message"}
                </button>

                {status.message && (
                    <p className={`text-sm ${status.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>
                        {status.message}
                    </p>
                )}
            </div>
        </form>
    );
}
