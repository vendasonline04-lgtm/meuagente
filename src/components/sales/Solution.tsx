function WarningIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 112" className={className} aria-hidden="true">
      <polygon points="60,6 116,104 4,104" fill="#C89000" opacity="0.5" />
      <polygon points="60,10 112,102 8,102" fill="#FFD000" />
      <polygon points="60,10 8,102 20,102 60,22" fill="#FFE033" />
      <polygon points="60,10 60,22 112,102 104,102" fill="#FFC200" />
      <polygon points="60,6 116,104 4,104" fill="none" stroke="#E6A800" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="60,18 80,54 40,54" fill="white" opacity="0.18" />
      <rect x="54.5" y="42" width="11" height="30" rx="5.5" fill="#111111" />
      <circle cx="60" cy="84" r="6.5" fill="#111111" />
    </svg>
  );
}

export function Solution() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-3xl">
        <p className="text-balance mb-10 text-center text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
          No fundo, você sabe que trabalha mais do que deveria, perde horas com tarefas repetitivas e ainda não sabe como usar a IA para ganhar tempo e dinheiro.
        </p>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-8 text-center md:flex-row md:text-center">
          <div className="shrink-0">
            <WarningIcon className="w-28 sm:w-44 md:w-60" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base text-foreground sm:text-lg font-bold">
              O problema não é falta de tempo, e sim fazer tudo sozinho...
            </p>
            <h2 className="text-balance text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-3xl">
              E se eu te dissesse que você pode ter um <span className="text-alert">agente de IA</span> que <span className="text-alert">resolve tudo pra você</span>?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
