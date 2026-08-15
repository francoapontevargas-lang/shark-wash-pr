import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, details } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Shark Wash PR <onboarding@resend.dev>",
      to: "sharkwashpr@gmail.com",
      subject: `Nueva cotización: ${service} - ${name}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email || "No proporcionado"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Servicio</td><td style="padding:8px">${service}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Detalles</td><td style="padding:8px">${details || "Ninguno"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
