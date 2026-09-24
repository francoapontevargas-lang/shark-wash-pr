import Comparator from "@/components/comparator";
import Immersion from "@/components/immersion";
import {
  WHATSAPP_URL,
  INSTAGRAM,
  FACEBOOK,
  TAGLINE,
  MARQUEE_SERVICES,
  FOOTER_SERVICES,
  PROCESS_STEPS,
  FAQ,
  GALLERY_ITEMS,
} from "@/lib/site";

/* ---- Inline SVG icons ---- */

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.02a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.77 9.77 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.82-9.79 2.62 0 5.08 1.02 6.94 2.88a9.72 9.72 0 0 1 2.87 6.92c0 5.4-4.4 9.8-9.81 9.8m8.35-18.15A11.75 11.75 0 0 0 12.05 0C5.5 0 .18 5.32.17 11.85c0 2.09.55 4.13 1.6 5.93L.07 24l6.37-1.66a11.9 11.9 0 0 0 5.61 1.42h.01c6.54 0 11.86-5.32 11.87-11.86 0-3.17-1.24-6.15-3.48-8.39" />
    </svg>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9s.68.82.9 1.38c.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38s-.82.68-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9s-.68-.82-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38s.82-.68 1.38-.9c.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38S.93 3.35.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12s1.33 1.08 2.12 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38s1.08-1.33 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12S20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" />
    </svg>
  );
}

function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="size-4" aria-hidden="true">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ---- Marquee row (duplicated for seamless loop) ---- */
function MarqueeRow() {
  return (
    <span className="marquee-row">
      {MARQUEE_SERVICES.map((s) => (
        <span key={s}><b>{s}</b><i></i></span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Immersion />

      {/* ---- SCROLL PROGRESS ---- */}
      <div className="scroll-progress" aria-hidden="true"><i></i></div>

      {/* ---- HEADER ---- */}
      <header className="site-header" data-header>
        {/* Utility bar */}
        <div className="header-utility">
          <div className="shell utility-inner">
            <div className="utility-left"></div>
            <ul className="utility-facts">
              <li>Disponibles los 7 días</li>
              <li>Área metro</li>
            </ul>
            <div className="utility-right">
              <a className="utility-phone" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon className="utility-icon" />
                <span>(787) 529-3156</span>
              </a>
              <a className="utility-social" href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon className="utility-icon" />
              </a>
              <a className="utility-social" href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon className="utility-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="shell header-inner">
          <div className="hidden min-[900px]:block" aria-hidden="true"></div>

          <nav className="hidden gap-8 items-center min-[900px]:flex" aria-label="Principal">
            <a href="#galeria" className="nav-link" data-spy="galeria"><span>Galería</span></a>
            <a href="#proceso" className="nav-link" data-spy="proceso"><span>Proceso</span></a>
            <a href="#faq" className="nav-link" data-spy="faq"><span>FAQ</span></a>
          </nav>

          <div className="header-actions">
            <button className="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu-panel">
              <span className="sr-only">Menú</span>
              <span className="menu-bar" aria-hidden="true"></span>
              <span className="menu-bar" aria-hidden="true"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className="menu-panel" id="menu-panel" data-menu hidden>
          <nav className="menu-nav" aria-label="Menú">
            <a href="#galeria" data-spy="galeria"><span className="menu-idx">01</span>Galería</a>
            <a href="#proceso" data-spy="proceso"><span className="menu-idx">02</span>Proceso</a>
            <a href="#faq" data-spy="faq"><span className="menu-idx">03</span>FAQ</a>
          </nav>
          <div className="menu-foot">
            <a className="btn btn-wa btn-block magnetic" href={WHATSAPP_URL} target="_blank" rel="noopener">
              <WhatsAppIcon />
              <span>Cotización gratis</span>
            </a>
            <p className="menu-meta">Disponibles los 7 días · Área metro</p>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---- HERO ---- */}
        <section className="hero" data-hero data-theme="dark">
          <div className="hero-bg" aria-hidden="true"></div>
          <img
            className="hero-shark"
            src="/logo.webp"
            alt=""
            aria-hidden="true"
            data-parallax="0.18"
            data-parallax-rotate="3"
          />
          <canvas className="grime" data-grime aria-hidden="true"></canvas>

          <div className="shell hero-inner">
            <div className="hero-copy" aria-hidden="true"></div>

            {/* Quote form */}
            <form className="quote-card" data-quote-form data-reveal="zoom" data-reveal-delay="200">
              <h2 className="quote-title font-display">Solicita una cotización gratis</h2>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="q-nombre">Nombre *</label>
                  <input id="q-nombre" name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" />
                </div>
                <div className="field">
                  <label htmlFor="q-tel">Teléfono *</label>
                  <input id="q-tel" name="telefono" type="tel" required autoComplete="tel" placeholder="787-000-0000" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="q-email">Email (opcional)</label>
                <input id="q-email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" />
              </div>
              <div className="field">
                <label htmlFor="q-servicio">Selecciona un servicio</label>
                <div className="select-wrap">
                  <select id="q-servicio" name="servicio" defaultValue="">
                    <option value="">Servicio</option>
                    <option>Driveway</option>
                    <option>Acera</option>
                    <option>Propiedad comercial</option>
                    <option>Cancha deportiva</option>
                    <option>Placas solares</option>
                    <option>Zafacón</option>
                    <option>Vehículo</option>
                    <option>Fachada</option>
                    <option>Techo</option>
                    <option>Área de piscina</option>
                    <option>Muro / Verja</option>
                    <option>Otro - También bregamos con eso</option>
                  </select>
                  <ChevronIcon />
                </div>
              </div>
              <div className="field">
                <label htmlFor="q-detalles">Detalles adicionales</label>
                <textarea id="q-detalles" name="detalles" rows={3} placeholder="Describe el área, tamaño aproximado, etc."></textarea>
              </div>
              <button type="submit" className="btn btn-wa btn-block magnetic">
                <span>Enviar cotización</span>
                <WhatsAppIcon />
              </button>
            </form>
          </div>

          <a className="scroll-cue" href="#galeria" aria-label="Bajar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-8" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </section>

        {/* ---- GALLERY ---- */}
        <section id="galeria" className="bg-hueso py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow eyebrow-tide" data-reveal="up">Galería</p>
              <h2 className="section-title font-display" data-split-words>Nuestro trabajo</h2>
              <p className="section-sub" data-reveal="up" data-reveal-delay="160">
                Antes y después. Desliza para ver el resultado completo.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_ITEMS.map((item) => (
                <div key={item.id} data-reveal="up">
                  <Comparator
                    before={item.before}
                    after={item.after}
                    alt={item.alt}
                    className="rounded-2xl shadow-lg ring-1 ring-concreto/20"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- PROCESS ---- */}
        <section id="proceso" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" data-theme="dark">
          <canvas className="bubbles" data-bubbles aria-hidden="true"></canvas>
          <div className="shell relative z-2">
            <div className="section-head">
              <p className="eyebrow eyebrow-foam" data-reveal="up">Proceso</p>
              <h2 className="section-title font-display text-white" data-split-words>Así de fácil</h2>
            </div>

            <ol className="steps">
              {PROCESS_STEPS.map((s, i) => (
                <li
                  key={s.step}
                  className={`step${i === PROCESS_STEPS.length - 1 ? " step-last" : ""}`}
                  data-reveal="up"
                  data-reveal-delay={String(i * 90)}
                >
                  <div className="step-rail" aria-hidden="true">
                    <span className="step-num"><b>{s.step}</b></span>
                    <span className="step-line"></span>
                  </div>
                  <div className="step-body">
                    <h3 className="font-display">{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="process-facts" data-reveal="up" data-reveal-delay="120">
              <li>Disponibles los 7 días</li>
              <li>Área metro</li>
            </ul>

            <div className="text-center mt-12" data-reveal="up" data-reveal-delay="200">
              <a className="btn btn-wa btn-lg magnetic" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon />
                <span>Comenzar ahora</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section id="faq" className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="shell shell-narrow">
            <div className="section-head">
              <p className="eyebrow eyebrow-tide" data-reveal="up">Preguntas frecuentes</p>
              <h2 className="section-title font-display" data-split-words>FAQ</h2>
            </div>

            <div className="accordion" data-accordion>
              {FAQ.map((item, i) => (
                <div key={i} className="acc-item" data-reveal="up" data-reveal-delay={String(i * 60)}>
                  <button className="acc-trigger" type="button" aria-expanded="false">
                    <span>{item.question}</span>
                    <span className="acc-icon" aria-hidden="true"></span>
                  </button>
                  <div className="acc-panel">
                    <div className="acc-inner"><p>{item.answer}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" data-theme="dark">
          <canvas className="bubbles" data-bubbles aria-hidden="true"></canvas>
          <div className="shell relative z-2">
            <div className="text-center max-w-[38rem] mx-auto">
              <img className="h-20 w-auto mx-auto mb-8" src="/logo.webp" alt="" aria-hidden="true" data-reveal="zoom" />
              <h2 className="section-title font-display text-white !mt-0" data-split-words>¿List@ para limpiar?</h2>
            </div>

            <div className="mt-12 flex flex-col items-stretch gap-3.5 sm:flex-row sm:justify-center sm:items-center sm:gap-4" data-reveal="up" data-reveal-delay="220">
              <a className="btn btn-wa btn-xl magnetic" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon />
                <span>Escribir por WhatsApp</span>
              </a>
              <a className="btn btn-ghost btn-xl magnetic" href={INSTAGRAM} target="_blank" rel="noopener">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a className="btn btn-ghost btn-xl magnetic" href={FACEBOOK} target="_blank" rel="noopener">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </div>
            <p className="mt-7 text-center font-mono text-[0.66rem] tracking-[0.14em] uppercase text-white/40" data-reveal="up" data-reveal-delay="640">
              Disponibles los 7 días · Área metro
            </p>
          </div>
        </section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-col footer-brand-col">
              <img className="footer-logo" src="/logo.webp" alt="Shark Wash PR" width="440" height="440" />
              <p className="footer-blurb">Servicio profesional de lavado a presión en el área metro.</p>
              <div className="footer-social">
                <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram" className="social">
                  <InstagramIcon />
                </a>
                <a href={FACEBOOK} target="_blank" rel="noopener" aria-label="Facebook" className="social">
                  <FacebookIcon />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" className="social">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h2 className="footer-head">Sobre nosotros</h2>
              <p className="footer-about">
                Somos los #1 en limpieza de exteriores en Puerto Rico. Ofrecemos servicio en toda el área metro y áreas limítrofes. En propiedades residenciales limpiamos driveways, aceras, zafacones, placas solares, techos, patios, paredes y ventanas. También ofrecemos lavado a presión y limpieza de exteriores para propiedades comerciales. Escríbenos y te damos un estimado.
              </p>
            </div>

            <div className="footer-col">
              <h2 className="footer-head">Sitio</h2>
              <ul className="footer-list footer-links">
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#proceso">Proceso</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener">Cotización gratis</a></li>
              </ul>

              <h2 className="footer-head footer-head-gap">Horario</h2>
              <ul className="footer-list">
                <li>Disponibles los 7 días de la semana</li>
              </ul>
            </div>

            <div className="footer-col">
              <h2 className="footer-head">Contacto</h2>
              <ul className="footer-list footer-contact">
                <li>
                  <span className="footer-label">WhatsApp</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener">(787) 529-3156</a>
                </li>
                <li>
                  <span className="footer-label">Instagram</span>
                  <a href={INSTAGRAM} target="_blank" rel="noopener">@sharkwashpr</a>
                </li>
                <li>
                  <span className="footer-label">Facebook</span>
                  <a href={FACEBOOK} target="_blank" rel="noopener">Shark Wash PR</a>
                </li>
              </ul>

              <h2 className="footer-head footer-head-gap">Cobertura</h2>
              <p className="footer-coverage">Área metro.</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Shark Wash PR</p>
            <p>Puerto Rico</p>
          </div>
        </div>
      </footer>

      {/* ---- FLOATING WHATSAPP ---- */}
      <a className="wa-fab" data-fab href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
        <span className="fab-ping" aria-hidden="true"></span>
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
