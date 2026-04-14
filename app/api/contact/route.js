import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const recipientEmail = process.env.CONTACT_TO_EMAIL || "harshkashyap.hk996@gmail.com";

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

export async function POST(request) {
    try {
        const body = await request.json();
        const name = body?.name?.trim();
        const email = body?.email?.trim();
        const company = body?.company?.trim();
        const message = body?.message?.trim();
        const website = body?.website?.trim();

        if (website) {
            return NextResponse.json({ ok: true });
        }

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
        }

        if (!validateEmail(email)) {
            return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
        }

        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = Number(process.env.SMTP_PORT || 587);
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;

        if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
            return NextResponse.json(
                { error: "Contact form is not configured yet. Please add SMTP environment variables." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeCompany = escapeHtml(company || "Not provided");
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

        await transporter.sendMail({
            from: process.env.CONTACT_FROM_EMAIL || smtpUser,
            to: recipientEmail,
            replyTo: email,
            subject: `New portfolio inquiry from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Company/Role: ${company || "Not provided"}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
                    <h2>New portfolio inquiry</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Company/Role:</strong> ${safeCompany}</p>
                    <p><strong>Message:</strong></p>
                    <p>${safeMessage}</p>
                </div>
            `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ error: error.message || "Failed to send message." }, { status: 500 });
    }
}
