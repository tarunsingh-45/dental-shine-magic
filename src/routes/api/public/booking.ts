import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "ts0314979@gmail.com";

const BookingSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(20)
    .regex(/^[0-9+\s\-()]+$/, "Invalid phone number"),
  service: z.string().trim().min(1).max(60),
});

export const Route = createFileRoute("/api/public/booking")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return Response.json(
            { ok: false, error: "Email service not configured" },
            { status: 500 },
          );
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = BookingSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Invalid form data", details: parsed.error.flatten() },
            { status: 400 },
          );
        }
        const { name, phone, service } = parsed.data;

        const submittedAt = new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "short",
        });

        const esc = (s: string) =>
          s.replace(/[&<>"']/g, (c) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
          );

        const html = `
          <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#ffffff;color:#111">
            <h2 style="margin:0 0 16px;color:#0a66c2">New Patient Appointment Request</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:10px 0;color:#666;width:160px">Patient Name</td><td style="padding:10px 0;font-weight:600">${esc(name)}</td></tr>
              <tr><td style="padding:10px 0;color:#666;border-top:1px solid #eee">Phone Number</td><td style="padding:10px 0;font-weight:600;border-top:1px solid #eee"><a href="tel:${esc(phone)}" style="color:#0a66c2;text-decoration:none">${esc(phone)}</a></td></tr>
              <tr><td style="padding:10px 0;color:#666;border-top:1px solid #eee">Service</td><td style="padding:10px 0;font-weight:600;border-top:1px solid #eee">${esc(service)}</td></tr>
              <tr><td style="padding:10px 0;color:#666;border-top:1px solid #eee">Submitted</td><td style="padding:10px 0;border-top:1px solid #eee">${esc(submittedAt)} IST</td></tr>
            </table>
            <p style="margin-top:24px;font-size:13px;color:#777">Apna Dental Care — Website Booking Form</p>
          </div>
        `;

        const text = `New Patient Appointment Request

Patient Name: ${name}
Phone Number: ${phone}
Service: ${service}
Submitted: ${submittedAt} IST`;

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: "Apna Dental Care <onboarding@resend.dev>",
            to: [TO_EMAIL],
            reply_to: TO_EMAIL,
            subject: "New Patient Appointment Request",
            html,
            text,
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error("Resend send failed", res.status, body);
          return Response.json(
            { ok: false, error: "Failed to send email" },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
