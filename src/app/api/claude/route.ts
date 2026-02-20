import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

// Use a generic env var so the app isn't tied to a single provider's key name.
const apiKey = process.env.AI_API_KEY;

const anthropic = apiKey
  ? new Anthropic({ apiKey })
  : null;

export async function POST(req: Request) {
  if (!anthropic) {
    return NextResponse.json(
      { error: "AI API key not configured. Set AI_API_KEY in .env.local." },
      { status: 503 }
    );
  }
  try {
    const { message } = (await req.json()) as { message: string };
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [{ role: "user", content: message }],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(
              encoder.encode(
                typeof event.delta.text === "string" ? event.delta.text : ""
              )
            );
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("AI API error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to get response";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
