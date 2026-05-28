import procomputador from "@/assets/procomputador.png";
import prochecklist from "@/assets/prochecklist.png";
import propromt from "@/assets/propromt.png";
import proferramentas from "@/assets/logodasferramentas.png";
import proagente from "@/assets/proagente.png";

const items = [
  {
    image: procomputador,
    imagePosition: "left" as const,
    title: "Aula de 37 minutos",
    desc: "Em menos de 37 minutos você cria seu primeiro agente de IA do zero",
    premium: true,
  },
  {
    image: prochecklist,
    imagePosition: "right" as const,
    title: "Checklist de configuração",
    desc: "Configure tudo sem travar, mesmo que nunca tenha criado um agente antes",
    premium: true,
  },
  {
    image: propromt,
    imagePosition: "left" as const,
    title: "Template de comando de sistema",
    desc: "Copia, e cola. Não precisa criar do zero na próxima vez.",
    premium: true,
  },
  {
    image: proferramentas,
    imagePosition: "right" as const,
    title: "Lista das 5 ferramentas gratuitas mais usadas para criar agentes",
    desc: "As ferramentas gratuitas que estão acelerando quem entrou cedo no mercado de IA.",
    premium: false,
  },
  {
    image: proagente,
    imagePosition: "left" as const,
    title: "3 ideias de agentes prontos para criar e monetizar na sequência",
    desc: "Terminou o primeiro? Então você já pode fazer o próximo!",
    premium: false,
  },
];

export function Deliverables() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-center text-2xl font-bold sm:text-3xl">
          Veja tudo que você vai receber para criar o seu <span className="text-alert">agente em 37 minutos</span>:
        </h2>

        <ul className="mt-12 space-y-4">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-stretch rounded-xl overflow-hidden min-h-[220px] bg-muted"
            >
              {it.imagePosition === "left" && (
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-2/5 shrink-0 object-cover rounded-xl"
                />
              )}
              <div className="flex flex-1 flex-col justify-center p-5">
                <h3 className="text-base font-bold text-foreground sm:text-xl">{it.title}</h3>
                <p className="mt-2 text-base text-muted-foreground sm:text-lg">{it.desc}</p>
              </div>
              {it.imagePosition === "right" && (
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-2/5 shrink-0 object-cover rounded-xl"
                />
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
