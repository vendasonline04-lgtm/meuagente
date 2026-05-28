const items = [
  { label: "Aula de 37 minutos: do zero ao agente rodando", price: "R$ 197" },
  { label: "Checklist de configuração", price: "R$ 87" },
  { label: "Template do prompt de sistema", price: "R$ 67" },
  { label: "Lista das 5 ferramentas gratuitas", price: "R$ 47" },
  { label: "3 ideias de agentes para criar e monetizar", price: "R$ 47" },
];

export function Recap() {
  return (
    <section className="bg-secondary px-4 py-14 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Recapitulando, veja tudo que você vai receber:
        </h2>

        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-3 rounded-lg bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="flex-1 text-lg text-foreground">{it.label}</span>
              <span className="shrink-0 font-bold text-red-600 line-through">{it.price}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-4 max-w-xl rounded-xl border-2 border-white/30 bg-white px-6 py-5 text-center">
          <p className="text-base font-semibold text-foreground sm:text-lg">
            Tudo isso você pagaria um total de:{" "}
            <span className="text-4xl font-extrabold text-red-600 line-through">R$ 445</span>
          </p>
        </div>
      </div>
    </section>
  );
}
