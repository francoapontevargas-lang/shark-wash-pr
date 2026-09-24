"use client";

import { useEffect } from "react";

/**
 * Boots the immersion engine: scroll-driven reveals, split text, header
 * condense/hide, marquee physics, accordion, magnetic buttons, mobile menu,
 * scroll spy, grime canvas, and bubbles.
 *
 * Ported from the friend's vanilla immersion.js — every module is independent
 * and no-ops if its hooks are absent.
 */
export default function Immersion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const raf = window.requestAnimationFrame.bind(window);
    const clamp = (v: number, a: number, b: number) =>
      v < a ? a : v > b ? b : v;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    root.classList.add("sw-motion");

    /* ---- Split text ---- */
    function splitText() {
      document
        .querySelectorAll<HTMLElement>("[data-split-words]")
        .forEach((el) => {
          if (el.dataset.splitDone) return;
          const words = el.textContent!.trim().split(/\s+/);
          el.textContent = "";
          words.forEach((w, i) => {
            const s = document.createElement("span");
            s.className = "sw-w";
            s.textContent = w;
            s.style.setProperty("--wd", i * 55 + "ms");
            el.appendChild(s);
            if (i < words.length - 1)
              el.appendChild(document.createTextNode(" "));
          });
          el.dataset.splitDone = "1";
        });

      document
        .querySelectorAll<HTMLElement>("[data-split-lines]")
        .forEach((el) => {
          el.querySelectorAll<HTMLElement>(".word").forEach((w, i) => {
            w.style.setProperty("--wd", 120 + i * 95 + "ms");
          });
        });
    }

    /* ---- Reveals ---- */
    function reveals() {
      const targets = document.querySelectorAll<HTMLElement>(
        "[data-reveal],[data-split-lines],[data-split-words]"
      );
      if (!targets.length) return;

      targets.forEach((el) => {
        const d = el.getAttribute("data-reveal-delay");
        if (d) el.style.setProperty("--rv-delay", d + "ms");
      });

      if (reduced || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-in"));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const el = e.target as HTMLElement;
            if (e.isIntersecting) {
              el.classList.add("is-in");
              el.classList.remove("is-out");
            } else if (e.boundingClientRect.top < 0) {
              el.classList.add("is-out");
              el.classList.remove("is-in");
            } else {
              el.classList.remove("is-in", "is-out");
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );

      targets.forEach((el) => io.observe(el));
    }

    /* ---- Scroll engine ---- */
    function scrollEngine() {
      const bar = document.querySelector<HTMLElement>(".scroll-progress i");
      const header = document.querySelector<HTMLElement>("[data-header]");
      const fab = document.querySelector<HTMLElement>("[data-fab]");
      const cue = document.querySelector<HTMLElement>(".scroll-cue");
      const parallaxEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]")
      );
      const track = document.querySelector<HTMLElement>(
        "[data-marquee] .marquee-track"
      );
      let rowW = 0;

      function measure() {
        const row =
          track && track.querySelector<HTMLElement>(".marquee-row");
        if (row) rowW = row.getBoundingClientRect().width;
      }

      let last = window.scrollY;
      let vel = 0,
        smoothVel = 0,
        mq = 0,
        t0 = performance.now();
      let running = false;

      function frame(now: number) {
        const dt = Math.min(64, now - t0);
        t0 = now;
        const y = window.scrollY;
        const vh = window.innerHeight;
        const max = Math.max(
          1,
          document.documentElement.scrollHeight - vh
        );

        vel = y - last;
        last = y;
        smoothVel = lerp(smoothVel, vel, 0.12);

        if (bar)
          bar.style.transform = "scaleX(" + clamp(y / max, 0, 1) + ")";

        if (header) {
          header.classList.toggle("is-stuck", y > 24);
          header.classList.toggle(
            "is-hidden",
            y > 620 &&
              vel > 4 &&
              !header.classList.contains("menu-open")
          );
        }
        if (fab) fab.classList.toggle("is-visible", y > 420);
        if (cue) cue.classList.toggle("is-gone", y > 110);

        if (!reduced) {
          parallaxEls.forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.bottom < -200 || r.top > vh + 200) return;
            const speed =
              parseFloat(el.getAttribute("data-parallax")!) || 0.1;
            const centre = r.top + r.height / 2 - vh / 2;
            el.style.setProperty(
              "--py",
              (-centre * speed).toFixed(2) + "px"
            );
            const rot = parseFloat(
              el.getAttribute("data-parallax-rotate") || "0"
            );
            if (rot)
              el.style.setProperty(
                "--pr",
                ((-centre / vh) * rot).toFixed(2) + "deg"
              );
          });

          if (track && rowW) {
            mq -= dt * 0.035 + smoothVel * 0.35;
            if (mq <= -rowW) mq += rowW;
            if (mq > 0) mq -= rowW;
            track.style.setProperty("--mq", mq.toFixed(2) + "px");
            track.style.setProperty(
              "--mq-skew",
              clamp(smoothVel * -0.16, -7, 7).toFixed(2) + "deg"
            );
          }
        }

        const ticking = Math.abs(smoothVel) > 0.05 || !!track;
        if (ticking) raf(frame);
        else running = false;
      }

      function kick() {
        if (!running) {
          running = true;
          t0 = performance.now();
          raf(frame);
        }
      }

      measure();
      kick();
      window.addEventListener("scroll", kick, { passive: true });
      window.addEventListener("resize", () => {
        measure();
        kick();
      });
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) kick();
      });
    }

    /* ---- Grime ---- */
    function grime() {
      const canvasEl = document.querySelector<HTMLCanvasElement>("[data-grime]");
      const heroEl = document.querySelector<HTMLElement>("[data-hero]");
      if (!canvasEl || !heroEl || reduced) return;

      // Assign to non-nullable locals so TS narrows inside nested closures
      const canvas = canvasEl;
      const hero = heroEl;
      const ctx = canvas.getContext("2d")!;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      let w = 0,
        h = 0,
        painted = false;
      const hint = document.querySelector<HTMLElement>("[data-hero-hint]");
      let cleaned = 0;
      let autoRunning = false;

      function paint() {
        const r = hero.getBoundingClientRect();
        w = Math.round(r.width);
        h = Math.round(r.height);
        if (!w || !h) return;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "rgba(54,51,39,0.88)";
        ctx.fillRect(0, 0, w, h);

        const blobs = Math.round((w * h) / 17000);
        for (let i = 0; i < blobs; i++) {
          const x = Math.random() * w,
            y = Math.random() * h;
          const rad = 26 + Math.random() * 180;
          const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
          const dark = Math.random() > 0.42;
          g.addColorStop(
            0,
            dark ? "rgba(22,24,18,0.52)" : "rgba(126,114,80,0.34)"
          );
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, 6.2832);
          ctx.fill();
        }

        const streaks = Math.round(w / 26);
        for (let k = 0; k < streaks; k++) {
          const sx = Math.random() * w;
          const top = Math.random() * h * 0.7;
          const len = h * (0.18 + Math.random() * 0.5);
          const sw = 8 + Math.random() * 46;
          const sg = ctx.createLinearGradient(sx, top, sx, top + len);
          sg.addColorStop(0, "rgba(18,20,15,0)");
          sg.addColorStop(
            0.35,
            "rgba(18,20,15," +
              (0.12 + Math.random() * 0.16).toFixed(3) +
              ")"
          );
          sg.addColorStop(1, "rgba(18,20,15,0)");
          ctx.fillStyle = sg;
          ctx.fillRect(sx - sw / 2, top, sw, len);
        }

        ctx.fillStyle = "rgba(16,18,13,0.45)";
        for (let s = 0; s < blobs * 12; s++) {
          ctx.fillRect(
            Math.random() * w,
            Math.random() * h,
            1.5,
            1.5
          );
        }
        ctx.fillStyle = "rgba(12,14,10,0.38)";
        for (let t = 0; t < blobs * 2; t++) {
          ctx.fillRect(
            Math.random() * w,
            Math.random() * h,
            2.5 + Math.random() * 2,
            2.5 + Math.random() * 2
          );
        }
        painted = true;
        cleaned = 0;
        if (hint) hint.classList.remove("is-done");
      }

      let lx: number | null = null,
        ly: number | null = null;

      function brush(x: number, y: number, radius: number) {
        const k = 1;
        ctx.globalCompositeOperation = "destination-out";
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, "rgba(0,0,0," + k + ")");
        g.addColorStop(0.55, "rgba(0,0,0," + 0.85 * k + ")");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 6.2832);
        ctx.fill();
        for (let i = 0; i < 5; i++) {
          const a = Math.random() * 6.2832,
            d = radius * (0.75 + Math.random() * 0.85);
          const sx = x + Math.cos(a) * d,
            sy = y + Math.sin(a) * d,
            sr = 3 + Math.random() * 9;
          const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
          sg.addColorStop(0, "rgba(0,0,0," + 0.7 * k + ")");
          sg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = sg;
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, 6.2832);
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
        if (!autoRunning) {
          cleaned++;
          if (hint && cleaned > 14) hint.classList.add("is-done");
        }
      }

      function washTo(x: number, y: number, radius: number) {
        if (lx !== null && ly !== null) {
          const dist = Math.hypot(x - lx, y - ly);
          const steps = Math.ceil(dist / (radius * 0.35));
          for (let i = 1; i <= steps; i++) {
            brush(
              lerp(lx, x, i / steps),
              lerp(ly, y, i / steps),
              radius
            );
          }
        }
        brush(x, y, radius);
        lx = x;
        ly = y;
      }


      const LANES = 5;
      function autoSweep() {
        if (!painted) return;
        autoRunning = true;
        lx = ly = null;
        const start = performance.now(),
          dur = 1900;
        const radius = Math.max(90, h * 0.19);
        (function step(now: number) {
          const t = clamp((now - start) / dur, 0, 1);
          const span = t * LANES;
          const lane = Math.min(LANES - 1, Math.floor(span));
          const p = easeInOut(span - lane);
          const ltr = lane % 2 === 0;
          const x = ltr
            ? -radius + p * (w + radius * 2)
            : w + radius - p * (w + radius * 2);
          const y = (-0.08 + t * 1.16) * h;
          washTo(x, y, radius);
          if (t < 1) {
            raf(step);
            return;
          }
          ctx.globalCompositeOperation = "destination-out";
          ctx.fillStyle = "rgba(0,0,0,1)";
          ctx.fillRect(0, 0, w, h);
          ctx.globalCompositeOperation = "source-over";
          autoRunning = false;
          lx = ly = null;
          if (hint) hint.classList.add("is-done");
        })(start);
      }

      let readyTimer: ReturnType<typeof setTimeout> | null = null;
      let sweepTimer: ReturnType<typeof setTimeout> | null = null;
      function cancelCycle() {
        if (readyTimer) clearTimeout(readyTimer);
        if (sweepTimer) clearTimeout(sweepTimer);
        readyTimer = sweepTimer = null;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              if (painted) return;
              paint();
              cancelCycle();
              readyTimer = setTimeout(() => {
                hero.classList.add("grime-ready");
                sweepTimer = setTimeout(autoSweep, 400);
              }, 200);
            } else if (e.boundingClientRect.top < 0) {
              cancelCycle();
              autoRunning = false;
              painted = false;
              hero.classList.remove("grime-ready");
              ctx.clearRect(0, 0, w, h);
            }
          });
        },
        { threshold: 0.05 }
      );
      io.observe(hero);

      let rt: ReturnType<typeof setTimeout>;
      window.addEventListener("resize", () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
          if (painted) {
            paint();
            hero.classList.add("grime-ready");
          }
        }, 220);
      });
    }

    /* ---- Bubbles ---- */
    function bubbles() {
      if (reduced) return;
      document
        .querySelectorAll<HTMLCanvasElement>("[data-bubbles]")
        .forEach((canvas) => {
          const host = canvas.parentElement!;
          const ctx = canvas.getContext("2d")!;
          const dpr = Math.min(2, window.devicePixelRatio || 1);
          let parts: {
            x: number;
            y: number;
            r: number;
            v: number;
            a: number;
            p: number;
            s: number;
          }[] = [];
          let w = 0,
            h = 0,
            live = false,
            id = 0;

          function size() {
            const r = host.getBoundingClientRect();
            w = Math.round(r.width);
            h = Math.round(r.height);
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const n = clamp(Math.round(w / 46), 12, 34);
            parts = [];
            for (let i = 0; i < n; i++) {
              parts.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: 1 + Math.random() * 2.8,
                v: 0.18 + Math.random() * 0.5,
                a: 0.1 + Math.random() * 0.3,
                p: Math.random() * 6.28,
                s: 0.4 + Math.random() * 1.1,
              });
            }
          }

          function tick() {
            if (!live) return;
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < parts.length; i++) {
              const p = parts[i];
              p.y -= p.v;
              p.p += 0.015;
              if (p.y < -8) {
                p.y = h + 8;
                p.x = Math.random() * w;
              }
              const x = p.x + Math.sin(p.p) * p.s * 6;
              ctx.beginPath();
              ctx.arc(x, p.y, p.r, 0, 6.2832);
              ctx.fillStyle = "rgba(110,198,232," + p.a + ")";
              ctx.fill();
            }
            id = raf(tick);
          }

          const io = new IntersectionObserver(
            (e) => {
              const vis = e[0].isIntersecting && !document.hidden;
              if (vis && !live) {
                live = true;
                id = raf(tick);
              } else if (!vis && live) {
                live = false;
                cancelAnimationFrame(id);
              }
            },
            { threshold: 0 }
          );

          size();
          io.observe(host);
          window.addEventListener("resize", size);
          document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
              live = false;
              cancelAnimationFrame(id);
            }
          });
        });
    }

    /* ---- Accordion ---- */
    function accordion() {
      const box = document.querySelector<HTMLElement>("[data-accordion]");
      if (!box) return;
      box.addEventListener("click", (e) => {
        const btn = (e.target as HTMLElement).closest(".acc-trigger");
        if (!btn) return;
        const item = btn.parentElement!;
        const open = item.classList.contains("is-open");
        box.querySelectorAll(".acc-item.is-open").forEach((o) => {
          o.classList.remove("is-open");
          o.querySelector(".acc-trigger")!.setAttribute(
            "aria-expanded",
            "false"
          );
        });
        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    }

    /* ---- Magnetic buttons + ripple ---- */
    function buttons() {
      document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
        btn.addEventListener("pointerdown", (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const size = Math.hypot(r.width, r.height) * 2;
          const s = document.createElement("span");
          s.className = "ripple";
          s.style.width = s.style.height = size + "px";
          s.style.left = e.clientX - r.left + "px";
          s.style.top = e.clientY - r.top + "px";
          btn.appendChild(s);
          setTimeout(() => s.remove(), 700);
        });

        if (!fine || reduced || !btn.classList.contains("magnetic"))
          return;
        btn.addEventListener(
          "pointermove",
          (e: PointerEvent) => {
            const r = btn.getBoundingClientRect();
            const mx = (e.clientX - r.left - r.width / 2) * 0.28;
            const my = (e.clientY - r.top - r.height / 2) * 0.38;
            btn.style.setProperty(
              "--mx",
              clamp(mx, -14, 14).toFixed(1) + "px"
            );
            btn.style.setProperty(
              "--my",
              clamp(my, -9, 9).toFixed(1) + "px"
            );
            btn.style.setProperty("--ms", "1.04");
          },
          { passive: true }
        );
        btn.addEventListener("pointerleave", () => {
          btn.style.setProperty("--mx", "0px");
          btn.style.setProperty("--my", "0px");
          btn.style.setProperty("--ms", "1");
        });
      });
    }

    /* ---- Mobile menu ---- */
    function mobileMenu() {
      const header = document.querySelector<HTMLElement>("[data-header]");
      const btn = document.querySelector<HTMLElement>(
        "[data-menu-toggle]"
      );
      const panel = document.querySelector<HTMLElement>("[data-menu]");
      if (!header || !btn || !panel) return;

      function setOpen(open: boolean) {
        btn!.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) {
          panel!.hidden = false;
          void panel!.offsetHeight;
          header!.classList.add("menu-open");
          document.body.style.overflow = "hidden";
        } else {
          header!.classList.remove("menu-open");
          document.body.style.overflow = "";
          setTimeout(() => {
            if (!header!.classList.contains("menu-open"))
              panel!.hidden = true;
          }, 380);
        }
      }

      btn.addEventListener("click", () => {
        setOpen(btn!.getAttribute("aria-expanded") !== "true");
      });

      panel.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest("a")) setOpen(false);
      });

      document.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          btn!.getAttribute("aria-expanded") === "true"
        ) {
          setOpen(false);
          btn!.focus();
        }
      });

      window.addEventListener("resize", () => {
        if (
          window.innerWidth >= 900 &&
          btn!.getAttribute("aria-expanded") === "true"
        )
          setOpen(false);
      });
    }

    /* ---- Scroll spy ---- */
    function scrollSpy() {
      const links = Array.from(
        document.querySelectorAll<HTMLElement>("[data-spy]")
      );
      if (!links.length || !("IntersectionObserver" in window)) return;

      const ids: string[] = [];
      links.forEach((l) => {
        const id = l.getAttribute("data-spy")!;
        if (!ids.includes(id)) ids.push(id);
      });

      const visible: Record<string, number> = {};
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            visible[(e.target as HTMLElement).id] = e.isIntersecting
              ? e.intersectionRatio
              : 0;
          });
          let best: string | null = null,
            bestRatio = 0;
          ids.forEach((id) => {
            if ((visible[id] || 0) > bestRatio) {
              bestRatio = visible[id];
              best = id;
            }
          });
          links.forEach((l) => {
            l.classList.toggle(
              "is-active",
              best !== null && l.getAttribute("data-spy") === best
            );
          });
        },
        { threshold: [0, 0.15, 0.35, 0.6], rootMargin: "-25% 0px -35% 0px" }
      );

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }

    /* ---- Quote form -> WhatsApp ---- */
    function quoteForm() {
      const form = document.querySelector<HTMLFormElement>(
        "[data-quote-form]"
      );
      if (!form) return;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const d = new FormData(form);
        const parts = [
          "Saludos, me interesan sus servicios.",
          "Nombre: " + (d.get("nombre") || ""),
          "Teléfono: " + (d.get("telefono") || ""),
        ];
        if (d.get("email")) parts.push("Email: " + d.get("email"));
        if (d.get("servicio"))
          parts.push("Servicio: " + d.get("servicio"));
        if (d.get("detalles"))
          parts.push("Detalles: " + d.get("detalles"));
        window.open(
          "https://wa.me/17875293156?text=" +
            encodeURIComponent(parts.join("\n")),
          "_blank",
          "noopener"
        );
      });
    }

    /* ---- Boot ---- */
    splitText();
    reveals();
    scrollEngine();
    accordion();
    buttons();
    mobileMenu();
    scrollSpy();
    quoteForm();
    grime();
    bubbles();
  }, []);

  return null;
}
