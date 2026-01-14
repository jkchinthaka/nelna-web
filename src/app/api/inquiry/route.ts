import { NextResponse } from "next/server";

import config from "@payload-config";
import { getPayload } from "payload";

type InquiryPayload = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  interest?: string;
  message?: string;
  // recaptchaToken?: string; // add during spam-protection step
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as InquiryPayload | null;

  if (!data) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 },
    );
  }

  const payloadData = {
    company: data.company ?? "",
    name,
    email,
    phone: data.phone ?? "",
    country: data.country ?? "",
    interest: data.interest ?? "",
    message,
  };

  // TODO (next step): verify reCAPTCHA server-side, add rate limiting, send email notifications.
  // Store inquiry in Payload so staff can manage it via the admin panel.
  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "inquiries",
      data: payloadData,
    });
  } catch (err) {
    console.error("Failed to store inquiry in Payload:", err);
    return NextResponse.json(
      {
        error:
          "Inquiry received but could not be stored. Please try again shortly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
