"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
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
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:p-8">
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
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
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
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
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
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                        placeholder="Optional"
                    />
                </div>

                <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" value={form.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
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
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40"
                        placeholder="Tell me about your project, team, or opportunity."
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
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
