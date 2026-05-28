const bad = [
  "Vai continuar perdido, por ter tanta informação e não saber mais por onde começar",
  "Vai continuar fazendo tarefas repetitivas e perdendo tempo com o que um agente poderia fazer no seu lugar",
  "Vai perder dinheiro à toa, por gastar com ferramentas que você conhece pouco",
  "Vai continuar vendo outras pessoas fazendo dinheiro com agentes, enquanto você fica para trás",
];

const good = [
  "Vai ter clareza e direção para aplicar agentes de IA no seu negócio com estratégia",
  "Vai automatizar tarefas repetitivas e ganhar tempo para focar no que realmente importa",
  "Vai reduzir custos e aumentar resultados com as ferramentas certas e bem aplicadas",
  "Vai sair na frente e construir um negócio mais inteligente, competitivo e escalável",
];

function XIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500">
      <svg viewBox="0 0 10 10" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500">
      <svg viewBox="0 0 10 10" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function Urgency() {
  return (
    <section className="bg-primary px-4 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Agora você tem 2 opções:
        </h2>
        <p className="mt-4 text-lg text-white/70">
          A escolha é sua. O futuro do seu negócio depende do que você decide agora.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Opção 1 — sem agente */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid #ef4444" }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500">
                <svg viewBox="0 0 10 10" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <p className="text-base font-bold text-red-400">Opção 1:</p>
                <p className="text-xl font-black text-white">Ficar sem Agente de IA</p>
              </div>
            </div>
            <ul className="space-y-0">
              {bad.map((item, i) => (
                <li key={i}>
                  {i > 0 && <div className="my-3 h-px bg-white/10" />}
                  <div className="flex items-center justify-center gap-3">
                    <XIcon />
                    <span className="text-sm leading-relaxed text-white/85 sm:text-base">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Opção 2 — com agente */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid #7c3aed" }}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500">
                <svg viewBox="0 0 10 10" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <p className="text-base font-bold text-violet-400">Opção 2:</p>
                <p className="text-xl font-black text-white">Ter um agente de IA</p>
              </div>
            </div>
            <ul className="space-y-0">
              {good.map((item, i) => (
                <li key={i}>
                  {i > 0 && <div className="my-3 h-px bg-white/10" />}
                  <div className="flex items-center justify-center gap-3">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-white/85 sm:text-base">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-lg font-semibold text-white sm:text-xl">
          Eu sei e você também sabe, clique já no botão abaixo e acesse agora mesmo seu{" "}
          <span className="text-alert">Agente de IA em 37 minutos</span>
        </p>
      </div>
    </section>
  );
}
