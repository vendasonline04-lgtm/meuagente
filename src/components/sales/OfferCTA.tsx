import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck, Clock, Diamond, Lock } from "lucide-react";

function Countdown() {
  const [time, setTime] = useState({ h: 0, m: 30, s: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (h === 0 && m === 0 && s === 0) return prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="mb-3 flex flex-col items-center gap-2">
      {/* Countdown box */}
      <div
        className="relative w-full overflow-hidden rounded-2xl px-6 py-4 text-center"
        style={{
          background: "linear-gradient(135deg, #FF7A00 0%, #E85D04 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,122,0,0.3), 0 0 40px rgba(255,122,0,0.45), 0 10px 40px rgba(232,93,4,0.4)",
        }}
      >
        {/* Internal shine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 75%)",
          }}
        />

        {/* Left glow pulse */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,210,120,0.55) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        {/* Right glow pulse */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 h-24 w-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,210,120,0.55) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* Header */}
        <div className="relative mb-2 flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-white/90" />
          <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.15em] text-white/90">
            OFERTA TERMINA EM:
          </span>
        </div>

        {/* Digits */}
        <div className="relative flex items-end justify-center gap-1">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span
              className="font-mono tabular-nums text-white leading-none"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
                fontWeight: 900,
                letterSpacing: "0.04em",
                textShadow: "0 3px 14px rgba(0,0,0,0.25)",
              }}
            >
              {pad(time.h)}
            </span>
            <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">
              HORAS
            </span>
          </div>

          <span
            className="text-white leading-none mb-6"
            style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: 900, opacity: 0.9 }}
          >
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span
              className="font-mono tabular-nums text-white leading-none"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
                fontWeight: 900,
                letterSpacing: "0.04em",
                textShadow: "0 3px 14px rgba(0,0,0,0.25)",
              }}
            >
              {pad(time.m)}
            </span>
            <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">
              MINUTOS
            </span>
          </div>

          <span
            className="text-white leading-none mb-6"
            style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: 900, opacity: 0.9 }}
          >
            :
          </span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span
              className="font-mono tabular-nums text-white leading-none"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
                fontWeight: 900,
                letterSpacing: "0.04em",
                textShadow: "0 3px 14px rgba(0,0,0,0.25)",
              }}
            >
              {pad(time.s)}
            </span>
            <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">
              SEGUNDOS
            </span>
          </div>
        </div>
      </div>

      {/* 85% OFF badge — sobreposto ao cronômetro */}
      <div
        className="inline-flex items-center gap-2 rounded-xl px-7 py-2.5 -mt-5 relative z-10"
        style={{
          background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
          boxShadow: "0 4px 18px rgba(255,165,0,0.45), 0 1px 0 rgba(255,255,255,0.3) inset",
        }}
      >
        <span className="text-sm font-black uppercase tracking-widest text-amber-900">
          🔥 85% OFF HOJE!
        </span>
      </div>
    </div>
  );
}

export function OfferCTA() {
  return (
    <section id="oferta" className="bg-background px-4 py-8 text-foreground sm:py-10">
      <div className="mx-auto max-w-3xl">
        <div
          className="relative overflow-hidden rounded-3xl border-2 border-accent/20 bg-card p-3 text-center sm:p-6 md:p-8"
          style={{ boxShadow: "var(--shadow-cta)" }}
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-alert/10 blur-3xl" />

          <div className="relative">
            <Countdown />

            {/* Price block */}
            <div
              className="mx-auto mt-2 w-full rounded-2xl px-4 py-3 sm:px-6 sm:py-4"
              style={{
                background: "#FFFFFF",
                boxShadow:
                  "0 0 0 1px rgba(109,28,195,0.08), 0 8px 32px rgba(109,28,195,0.12), 0 0 60px rgba(109,28,195,0.06)",
              }}
            >
              {/* "De R$ 445 por apenas:" */}
              <p
                className="text-sm font-medium"
                style={{ color: "#7B6F8C", letterSpacing: "0.01em" }}
              >
                De{" "}
                <span
                  className="line-through"
                  style={{ color: "#9E8FB5", textDecorationColor: "#9E8FB5" }}
                >
                  R$ 445
                </span>{" "}
                por apenas:
              </p>

              {/* 10x de + preço principal */}
              <div className="mt-2 flex flex-nowrap items-baseline justify-center gap-2">
                <span
                  className="shrink-0 font-sans text-sm font-semibold"
                  style={{ color: "#9E8FB5" }}
                >
                  10x de
                </span>
                <span
                  className="whitespace-nowrap font-display leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 9vw, 4.2rem)",
                    fontWeight: 900,
                    color: "#6D1CC3",
                    textShadow: "0 2px 24px rgba(109,28,195,0.22)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  R$ 8,12
                </span>
              </div>

              {/* Separador OU */}
              <div className="my-2 flex items-center gap-4">
                <div
                  className="h-px flex-1 rounded-full"
                  style={{ background: "linear-gradient(to right, transparent, rgba(109,28,195,0.15))" }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: "#9E8FB5" }}
                >
                  OU
                </span>
                <div
                  className="h-px flex-1 rounded-full"
                  style={{ background: "linear-gradient(to left, transparent, rgba(109,28,195,0.15))" }}
                />
              </div>

              {/* À vista */}
              <p
                className="whitespace-nowrap font-display text-2xl font-bold"
                style={{ color: "#531790", letterSpacing: "-0.01em" }}
              >
                R$ 67,00 à vista
              </p>
            </div>

            <div className="mt-4">
              <div className="animate-cta-pulse">
                <CTAButton variant="purple" href="https://pay.cakto.com.br/qjujfnv_871799">Quero meu agente de IA agora</CTAButton>
              </div>
            </div>

            {/* Trust — linha única, ícone + texto */}
            <div className="mt-3 flex flex-nowrap items-start justify-center gap-x-3 sm:gap-x-6">
              {(
                [
                  { Icon: Zap,         title: "Acesso imediato",    sub: "Comece agora mesmo"       },
                  { Icon: ShieldCheck, title: "Garantia de 7 dias", sub: "Risco zero para você"     },
                  { Icon: Diamond,     title: "Acesso vitalício",   sub: "Atualizações para sempre" },
                ] as const
              ).map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-1">
                  <Icon className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold leading-tight text-foreground sm:text-xs">{title}</p>
                    <p className="hidden text-[9px] leading-tight text-foreground/50 sm:block">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagamentos */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="flex items-center gap-1 rounded-md border border-border bg-muted px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground/60">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current text-accent" aria-label="Pix">
                  <path d="M12 2L6.5 7.5 2 12l4.5 4.5L12 22l5.5-5.5L22 12l-4.5-4.5L12 2zm0 3.5l3.5 3.5-3.5 3.5L8.5 9 12 5.5zm-6.5 6.5L9 8.5 12 11.5 9 14.5 5.5 11zm6.5 6.5L8.5 13l3.5-3.5 3.5 3.5L12 18.5zM14.5 9l3.5 3.5-3.5 3.5L11 12.5l3.5-3.5z"/>
                </svg>
                PIX
              </span>
              <span className="rounded-md border border-border bg-muted px-1.5 py-1" aria-label="Visa">
                <svg viewBox="0 0 38 24" className="h-4 w-7">
                  <rect width="38" height="24" rx="3" fill="#1A1F71"/>
                  <text x="6" y="17" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">VISA</text>
                </svg>
              </span>
              <span className="rounded-md border border-border bg-muted px-1.5 py-1" aria-label="Mastercard">
                <svg viewBox="0 0 38 24" className="h-4 w-7">
                  <rect width="38" height="24" rx="3" fill="#252525"/>
                  <circle cx="14" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="24" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00"/>
                </svg>
              </span>
            </div>

            {/* Compra segura */}
            <div className="mt-2 flex items-center justify-center gap-1">
              <Lock className="h-3 w-3 text-foreground/30" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/30">
                Compra 100% Segura e Protegida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
