import doresMenina from "@/assets/meninapreocupadarealista.png";

const items = [
  { emoji: "😵", text: "Fica perdida com tanta informação e não sai do lugar" },
  { emoji: "🤬", text: "Tenta entender por conta própria e sempre trava no mesmo ponto" },
  { emoji: "💸", text: "Vê outras pessoas ganhando dinheiro com agentes enquanto você ainda está no conteúdo" },
  { emoji: "🤔", text: "Quer criar algo real, mas quando vai ver já não sabe mais que ordem seguir" },
  { emoji: "😩", text: "Está cansada de consumir um monte de conteúdo e fica só perdendo o foco" },
  { emoji: "⏳", text: "Perde tempo e dinheiro à toa por não saber usar IA. Faz uso de ferramentas confusas com prompts ruins." },
  { emoji: "🔄", text: "Faz tarefas repetitivas e precisa ganhar tempo, para focar no que realmente importa" },
  { emoji: "⏰", text: "Vê o seu tempo sendo consumido à toa, por algo que você podia programar pra fazer no seu lugar..." },
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
