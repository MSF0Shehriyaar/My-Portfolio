import { NextResponse } from "next/server";

interface InquiryPayload {
  id?: string;
  name?: string;
  email?: string;
  type?: string;
  budget?: string;
  timeline?: string;
  description?: string;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InquiryPayload;
    const id = (typeof payload?.id === "string" && payload.id) ? payload.id : crypto.randomUUID();
    const reference = "MSF-" + id.slice(0, 8).toUpperCase();

    // Log the inquiry in serverless logs (visible in Vercel project logs)
    console.log("New Project Inquiry Received:", {
      reference,
      name: payload?.name,
      email: payload?.email,
      type: payload?.type,
      budget: payload?.budget,
      timeline: payload?.timeline,
      description: payload?.description,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ reference }, { status: 200 });
  } catch (err) {
    console.error("Failed to parse project inquiry:", err);
    return NextResponse.json(
      { error: "Could not parse inquiry payload. Please check your inputs." },
      { status: 400 }
    );
  }
}
