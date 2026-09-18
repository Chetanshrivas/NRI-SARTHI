import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ message: "Name, email and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "tarun.gupta@nrisarthi.com";
  const from = process.env.CONTACT_FROM_EMAIL || "website@nrisarthi.com";

  if (!apiKey) {
    return NextResponse.json({ message: "Email delivery is not configured yet. Please use the direct contact details shown on this page." }, { status: 503 });
  }

  const html = `<h2>New NRI Sarthi website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(body.name)}</p><p><strong>Email:</strong> ${escapeHtml(body.email)}</p><p><strong>Phone:</strong> ${escapeHtml(body.phone || "—")}</p><p><strong>Country:</strong> ${escapeHtml(body.country || "—")}</p><p><strong>Service:</strong> ${escapeHtml(body.service || "—")}</p><p><strong>Location:</strong> ${escapeHtml(body.location || "—")}</p><p><strong>Message:</strong><br/>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: body.email, subject: `NRI Sarthi enquiry — ${body.name}`, html }),
  });

  if (!response.ok) return NextResponse.json({ message: "The enquiry could not be delivered right now. Please contact us directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char] || char));
}
