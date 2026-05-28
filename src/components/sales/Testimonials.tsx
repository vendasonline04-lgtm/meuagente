import { Quote } from "lucide-react";
import rafaelImg from "@/assets/RafaelDep.png";
import camilaImg from "@/assets/CamilaDep.png";
import lucasImg from "@/assets/LucasDep.png";

const items = [
  {
    highlight: "Meu agente estava rodando antes da aula terminar..",
    text: "Eu ficava bugado com tanta informação. Assistia um vídeo, tentava fazer, travava. Segui essa aula do início ao fim e meu agente estava rodando antes de terminar. Primeiro que eu criei na vida.",
    author: "Rafael M.",
    role: "Coordenador de Vendas",
    img: rafaelImg,
  },
  {
    highlight: "Em 37 minutos criei meu primeiro agente...",
    text: "Achei que precisava entender tudo antes de criar. Não precisa. Em 37 minutos eu criei meu primeiro agente e já comecei a oferecer para clientes.",
    author: "Camila T.",
    role: "Consultora de Marketing",
    img: camilaImg,
  },
  {
    highlight: "Hoje eu crio e cobro por agentes",
    text: "Enquanto eu ficava perdido consumindo conteúdo, outros já estavam ganhando dinheiro com agentes. Essa aula me tirou do lugar. Hoje eu crio e cobro.",
    author: "Lucas P.",
    role: "Empreendedor Digital",
    img: lucasImg,
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary px-4 py-20 text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Veja que pessoas comuns já estão criando seus próprios agentes:
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl bg-muted p-6"
            >
              <div className="flex items-start gap-3">
                <Quote className="h-8 w-8 shrink-0 text-alert" />
                <p className="font-bold text-primary leading-snug">{t.highlight}</p>
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-foreground/10 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.author}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-primary">{t.author}</div>
                    <div className="text-sm text-foreground/70">{t.role}</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
