import meninoSuperFeliz from "@/assets/meninosuperfeliz.png";

const baloes = [
  "Meu dia finalmente rende!",
  "Tenho alguém trabalhando por mim 24h",
  "Sobra tempo pra o que importa",
  "Acordo sem lista de pendências",
  "Trabalho menos e produzo mais",
  "Me sinto no controle da minha rotina",
];

export function MeninoFeliz() {
  return (
    <section style={{ backgroundColor: "#FF7A00" }} className="px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Imagine como seria seu dia se você tivesse um agente...
        </h2>

        <div className="mt-8 flex justify-center -mx-4 sm:mx-0">
          <img
            src={meninoSuperFeliz}
            alt="Pessoa animada com os resultados do Agente de IA do Zero"
            className="w-full max-w-2xl rounded-2xl"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {baloes.map((frase) => (
            <span
              key={frase}
              className="rounded-2xl px-5 py-3 text-sm font-bold text-white sm:text-base"
              style={{ backgroundColor: "#260452" }}
            >
              {frase}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-xl font-bold text-white sm:text-2xl">
          Você está há um passo de ter seu Agente de IA do Zero e é mais simples do que você imagina!
        </p>
      </div>
    </section>
  );
}
