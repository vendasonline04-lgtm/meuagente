import { Mail, Download, PlayCircle } from "lucide-react";

export function DeliverySteps() {
  return (
    <section className="bg-secondary px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Compre agora e você vai receber tudo no seu email
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center">
            <Mail className="h-8 w-8 text-accent" />
            <p className="text-sm font-semibold leading-snug text-foreground">
              Receba seu acesso por email
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center">
            <Download className="h-8 w-8 text-accent" />
            <p className="text-sm font-semibold leading-snug text-foreground">
              Baixe os materiais
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center">
            <PlayCircle className="h-8 w-8 text-accent" />
            <p className="text-sm font-semibold leading-snug text-foreground">
              Agora é só assistir a aula!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
