function XIcon() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500">
      <svg viewBox="0 0 10 10" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500">
      <svg viewBox="0 0 10 10" className="h-4 w-4" fill="none" aria-hidden="true">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Opção 1 — sem agente */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid #ef4444" }}
          >
            <div className="flex items-center justify-center gap-3">
              <XIcon />
              <div className="text-left">
                <p className="text-base font-bold text-red-400">Opção 1:</p>
                <p className="text-xl font-black text-white">Continuar sem um Agente de IA</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
              Você continua sobrecarregado, sugado pela rotina manual, fazendo tudo sozinho, perdendo tempo e dinheiro.
            </p>
          </div>

          {/* Opção 2 — com agente */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1.5px solid #22c55e" }}
          >
            <div className="flex items-center justify-center gap-3">
              <CheckIcon />
              <div className="text-left">
                <p className="text-base font-bold text-green-400">Opção 2:</p>
                <p className="text-xl font-black text-white">Ter um Agente de IA</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
              Coloque seu trabalho no piloto automático, recupere tempo e ganhe dinheiro, focando no que importa.
            </p>
          </div>
        </div>

        <p className="mt-12 text-lg font-semibold text-white sm:text-xl">
          Eu sei e você também sabe, a opção 2 é a mais inteligente. Clique já no botão abaixo e acesse agora mesmo seu{" "}
          <span className="text-alert">Agente de IA</span>.
        </p>
      </div>
    </section>
  );
}
