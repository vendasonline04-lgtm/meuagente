import cicloBugado from "@/assets/ruminacaoatual.webp";

export function ProblemCycle() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Você se sente sobrecarregado porque você faz tudo sozinho.
        </h2>
        <p className="mt-6 text-center text-lg text-foreground/80">
          E por isso você fica pensando:
        </p>

        <div className="mt-8 flex justify-center -mx-4 sm:mx-0">
          <img
            src={cicloBugado}
            alt="Ciclo de frustração ao tentar aprender agentes de IA sozinho"
            className="w-full max-w-2xl rounded-2xl sm:rounded-2xl"
            width={1024}
            height={884}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
