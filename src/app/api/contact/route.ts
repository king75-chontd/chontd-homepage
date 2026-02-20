import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Contact form not configured. Set Supabase env vars." },
      { status: 503 }
    );
  }
  try {
    const body = await req.json();
    const { name, email, company, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || null,
        message: message.trim(),
      });

    if (error) {
      console.error("Supabase contact insert error:", error);
      return NextResponse.json(
        { error: "Failed to save inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
