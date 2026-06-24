import doresMenina from "@/assets/meninapreocupadarealista.webp";

const items = [
  { emoji: "😩", text: "Faz tudo sozinho e sente que o dia nunca rende" },
  { emoji: "🔥", text: "Vive apagando incêndios e nunca consegue adiantar o trabalho" },
  { emoji: "⏳", text: "Não tem tempo para focar no que realmente gera resultado" },
  { emoji: "🔄", text: "Perde horas fazendo tarefas que poderiam ser automáticas" },
  { emoji: "💸", text: "Vê tempo e dinheiro escapando todos os dias" },
  { emoji: "🤯", text: "Está cansado de ter tudo dependendo de você" },
  { emoji: "🚀", text: "Quer produzir mais sem trabalhar mais horas" },
  { emoji: "🤖", text: "Gostaria de ter alguém trabalhando por você 24 horas por dia" },
];

export function ForWho() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          O Agente de IA do Zero em 37 minutos é para você que:
        </h2>

        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">

          {/* Bullets */}
          <ul className="flex-1 space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex gap-3 rounded-lg border-l-4 border-alert bg-muted/60 px-4 py-3">
                <span className="mt-0.5 shrink-0 text-xl leading-none">{it.emoji}</span>
                <span className="text-sm sm:text-base">{it.text}</span>
              </li>
            ))}
          </ul>

          {/* Imagem */}
          <div className="flex shrink-0 items-center justify-center md:w-72 lg:w-80">
            <img
              src={doresMenina}
              alt="Mulher frustrada tentando entender IA"
              className="w-full max-w-xs rounded-2xl shadow-lg md:max-w-none"
              width={640}
              height={1137}
              loading="lazy"
            />
          </div>

        </div>

        <p className="mt-8 text-center text-base font-semibold text-primary sm:text-lg">
          Se você se reconheceu em algum desses pontos, o Agente de IA do Zero em 37 minutos é para você!
        </p>
      </div>
    </section>
  );
}
