import meninoSuperFeliz from "@/assets/meninosuperfeliz.png";

export function MeninoFeliz() {
  return (
    <section style={{ backgroundColor: "#FF7A00" }} className="px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          &nbsp;Mas se tivesse um Agente de IA você falaria...
        </h2>
        <div className="mt-8 flex justify-center -mx-4 sm:mx-0">
          <img
            src={meninoSuperFeliz}
            alt="Pessoa animada com os resultados do Agente de IA do Zero"
            className="w-full max-w-2xl rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
