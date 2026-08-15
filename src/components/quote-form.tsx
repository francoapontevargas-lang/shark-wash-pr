"use client";

import { useState } from "react";
import { PHONE } from "@/lib/site";

const SERVICE_OPTIONS = [
  "Driveway",
  "Acera",
  "Propiedad comercial",
  "Cancha deportiva",
  "Placas solares",
  "Zafacón",
  "Vehículo",
  "Fachada",
  "Techo",
  "Área de piscina",
  "Muro / Verja",
  "Otro - También bregamos con eso",
] as const;

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhoneVal] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function validatePhone(value: string) {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("El número debe tener 10 dígitos");
      return false;
    }
    setPhoneError("");
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validatePhone(phone)) return;

    const formData = { name, phone, email, service, details };

    // Send email in background
    setSending(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch {
      // Email failed silently, WhatsApp still works
    }
    setSending(false);
    setSent(true);

    // Open WhatsApp
    const lines = [
      `Hola, me interesa una cotización.`,
      ``,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      email ? `Email: ${email}` : "",
      `Servicio: ${service}`,
      details ? `Detalles: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/1${PHONE}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-2xl text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-espuma/20 text-marea">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-[700] text-abismo">Solicitud enviada</h3>
        <p className="text-abismo/60">Te contactamos pronto por WhatsApp o email.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-2xl"
    >
      <h2 className="font-display text-2xl font-[800] text-abismo tracking-tight">
        Solicita una cotización gratis
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-name" className="label-mono text-abismo/50">
            Nombre *
          </label>
          <input
            id="qf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-concreto/40 bg-hueso px-4 py-3 text-abismo outline-none transition-colors focus:border-marea"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qf-phone" className="label-mono text-abismo/50">
            Teléfono *
          </label>
          <input
            id="qf-phone"
            type="tel"
            required
            value={phone}
            placeholder="787-000-0000"
            onChange={(e) => {
              setPhoneVal(formatPhone(e.target.value));
              setPhoneError("");
            }}
            onBlur={() => phone && validatePhone(phone)}
            className={`rounded-lg border bg-hueso px-4 py-3 text-abismo outline-none transition-colors focus:border-marea ${
              phoneError ? "border-red-400" : "border-concreto/40"
            }`}
          />
          {phoneError && (
            <span className="text-xs text-red-500">{phoneError}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-email" className="label-mono text-abismo/50">
          Email
        </label>
        <input
          id="qf-email"
          type="email"
          value={email}
          placeholder="tu@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-concreto/40 bg-hueso px-4 py-3 text-abismo outline-none transition-colors focus:border-marea"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-service" className="label-mono text-abismo/50">
          Selecciona un servicio
        </label>
        <select
          id="qf-service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-lg border border-concreto/40 bg-hueso px-4 py-3 text-abismo outline-none transition-colors focus:border-marea appearance-none"
        >
          <option value="" disabled>
            Servicio
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="qf-details" className="label-mono text-abismo/50">
          Detalles adicionales
        </label>
        <textarea
          id="qf-details"
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe el área, tamaño aproximado, etc."
          className="rounded-lg border border-concreto/40 bg-hueso px-4 py-3 text-abismo outline-none transition-colors focus:border-marea resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-marea px-6 py-4 text-lg font-bold text-white transition-all hover:bg-abismo disabled:opacity-50"
      >
        {sending ? "Enviando..." : "Enviar cotización"}
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </form>
  );
}
