import setaLaranja from "@/assets/seta-laranja.png";
import configuraambiente from "@/assets/configuraambiente.png";
import defineoambiente from "@/assets/defineoambiente.png";
import conecta from "@/assets/conecta.png";
import funcionando from "@/assets/funcionando.png";

const steps = [
  { n: "01", title: "Configura o ambiente", desc: "", icon: configuraambiente },
  { n: "02", title: "Define o objetivo e o comportamento do agente", desc: "", icon: defineoambiente },
  { n: "03", title: "Conecta as ferramentas e testa ao vivo", desc: "", icon: conecta },
  { n: "04", title: "Seu agente está rodando. Você criou.", desc: "", icon: funcionando },
];

function StepCard({ n, title, desc, icon }: { n: string; title: string; desc: string; icon: string }) {
  return (
    <div
      className="group relative flex-1 rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img src={icon} alt="" aria-hidden="true" className="h-12 w-12 object-contain" />
      <h3 className="mt-3 text-xl font-bold text-primary">
        Passo {parseInt(n)} → {title}
      </h3>
      {desc && <p className="mt-2 text-foreground/70">{desc}</p>}
    </div>
  );
}

function Arrow() {
  return (
    <img
      src={setaLaranja}
      alt=""
      aria-hidden="true"
      className="h-14 w-14 shrink-0 rotate-90 self-center md:h-28 md:w-28 md:rotate-0"
    />
  );
}

export function FourSteps() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Em 4 passos você segue, executa, e termina com o agente funcionando.
        </h2>

        <div className="mt-12 space-y-6">
          <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            <StepCard {...steps[0]} />
            <Arrow />
            <StepCard {...steps[1]} />
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            <StepCard {...steps[2]} />
            <Arrow />
            <StepCard {...steps[3]} />
          </div>
        </div>

        <div className="mt-10 text-center text-lg">
          <p className="font-semibold">Sem enrolação. Sem teoria desnecessária.</p>
          <p className="mt-2 text-foreground/80">
            <span className="font-bold text-accent">37 minutos</span> do zero ao agente funcionando, pronto pra usar!
          </p>
        </div>
      </div>
    </section>
  );
}
