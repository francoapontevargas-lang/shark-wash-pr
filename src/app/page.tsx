import Comparator from "@/components/comparator";
import FadeIn from "@/components/fade-in";
import QuoteForm from "@/components/quote-form";
import {
  WHATSAPP_URL,
  INSTAGRAM,
  TAGLINE,
  SERVICES,
  PROCESS_STEPS,
  FAQ,
  GALLERY_ITEMS,
  HERO_COMPARATOR,
} from "@/lib/site";

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Shark Wash PR"
      className={className}
      draggable={false}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* ---- HEADER ---- */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-abismo/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
          <a href="#" className="flex items-center gap-2">
            <Logo className="h-9 w-auto sm:h-12" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#galeria" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Galería
            </a>
            <a href="#proceso" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Proceso
            </a>
            <a href="#faq" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              FAQ
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-espuma px-4 py-2 text-xs font-bold text-abismo transition-all hover:bg-white hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <WhatsAppIcon className="size-3.5 sm:size-4" />
            Cotización gratis
          </a>
        </div>
      </header>

      <main>
        {/* ---- HERO ---- */}
        <section className="relative min-h-dvh flex items-center overflow-hidden bg-abismo">
          {/* Background: dark blue with shark watermark */}
          <div className="absolute inset-0 bg-abismo">
            <img
              src="/shark.png"
              alt=""
              className="absolute left-1/2 top-[45%] h-[200%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-20 sm:top-[70%] sm:h-[130%] sm:opacity-10"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 pt-28 sm:px-6 sm:py-32 sm:pt-40">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <h1
                  className="hidden lg:block font-display text-7xl font-[800] leading-[1.05] tracking-tight text-white"
                  style={{ fontStretch: "expanded" }}
                >
                  Dirty surfaces
                  <br />
                  become
                  <br />
                  <span className="text-espuma">our prey.</span>
                </h1>
              </div>

              {/* Quote form */}
              <QuoteForm />
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hueso to-transparent sm:h-32" />
        </section>

        {/* ---- GALLERY (Before & After) ---- */}
        <section id="galeria" className="bg-hueso py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  className="mt-4 font-display text-3xl font-[800] tracking-tight sm:text-4xl lg:text-5xl"
                  style={{ fontStretch: "expanded" }}
                >
                  This is what we do
                </h2>
                <p className="mt-4 text-lg text-abismo/50">
                  Results speak for themselves.
                </p>
              </div>
            </FadeIn>

            <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_ITEMS.map((item) => (
                <FadeIn key={item.id}>
                  <Comparator
                    before={item.before}
                    after={item.after}
                    alt={item.alt}
                    className="rounded-2xl shadow-lg ring-1 ring-concreto/20"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ---- PROCESS ---- */}
        <section id="proceso" className="bg-abismo py-16 text-white sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <span className="label-mono text-espuma">Proceso</span>
                <h2
                  className="mt-4 font-display text-4xl font-[800] tracking-tight sm:text-5xl"
                  style={{ fontStretch: "expanded" }}
                >
                  Así de fácil
                </h2>
              </div>
            </FadeIn>

            <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
              {PROCESS_STEPS.map((step) => (
                <FadeIn key={step.step}>
                  <div className="step-connector flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-marea to-espuma">
                      <span className="font-display text-2xl font-[800] text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-[700] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-16 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-espuma px-8 py-4 text-lg font-bold text-abismo transition-all hover:bg-white hover:shadow-xl"
              >
                <WhatsAppIcon className="size-5" />
                Comenzar ahora
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section id="faq" className="bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <FadeIn>
              <div className="text-center">
                <span className="label-mono text-marea">Preguntas frecuentes</span>
                <h2
                  className="mt-4 font-display text-4xl font-[800] tracking-tight sm:text-5xl"
                  style={{ fontStretch: "expanded" }}
                >
                  FAQ
                </h2>
              </div>
            </FadeIn>

            <FadeIn className="mt-12">
              <div className="divide-y divide-concreto/20 rounded-2xl border border-concreto/20 bg-hueso">
                {FAQ.map((item, i) => (
                  <details key={i} className="group px-7 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-[600] leading-snug [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span className="ml-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-marea/10 text-marea transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 pb-2 text-base leading-relaxed text-abismo/60">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ---- CLOSING CTA ---- */}
        <section className="relative overflow-hidden bg-abismo py-16 sm:py-24 lg:py-32">
          {/* Background glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[500px] w-[500px] rounded-full bg-marea/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <FadeIn>
              <Logo className="mx-auto h-20 w-auto mb-8" />
              <h2
                className="font-display text-4xl font-[800] tracking-tight text-white sm:text-5xl"
                style={{ fontStretch: "expanded" }}
              >
                ¿Listo para limpiar?
              </h2>
              <p className="mt-4 text-lg text-espuma/80">
                Mándanos fotos por WhatsApp y te damos precio fijo en minutos.
                Sin sorpresas, sin cargos adicionales.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-espuma px-10 py-5 text-lg font-bold text-abismo transition-all hover:bg-white hover:shadow-xl"
              >
                <WhatsAppIcon className="size-6" />
                Escribir por WhatsApp
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className="bg-abismo border-t border-white/10 py-8 text-white/40 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:gap-8 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="text-sm italic">{TAGLINE}</p>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-espuma"
              aria-label="Instagram @sharkwashpr"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-espuma"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* ---- FLOATING WHATSAPP BUTTON (mobile only) ---- */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 sm:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
