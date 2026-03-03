import { NextResponse } from "next/server";
import { z } from 'zod';

export const runtime = 'nodejs';

const contactSchema = z.object({
    name: z.string().min(1, "Name is too short"),
    email: z.email("Invalid email address"),
    message: z.string().min(1, "Message is too short"),
    company: z.string().optional(), // honeypot field
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (body.company) {
            return NextResponse.json(
                { error: "Spam detected" },
                { status: 400 }
            );
        }

        const parsed = contactSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                {
                    error: parsed.error.issues.map(issue => ({
                        field: issue.path.join("."),
                        message: issue.message,
                    })),
                },
                { status: 400 }
            );
        }

        const { name, email, message } = parsed.data;
        const text = `🚀 Someone has contacted you!
        
        👤 Name: ${name}
        📧 Email: ${email}

        💬 Message:
        ${message}
        `;
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                }),
            }
        );

        if (!telegramResponse.ok) throw new Error("Telegram API failed");
        
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};