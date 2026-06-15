import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como vou receber o produto?",
    a: "Imediatamente após o pagamento. Acesso por e-mail em menos de 2 minutos.",
  },
  {
    q: "E se eu não gostar? Tem garantia?",
    a: "7 dias de garantia incondicional. Pediu reembolso, devolvemos. Sem perguntas.",
  },
  {
    q: "Funciona para mim mesmo sem saber nada sobre programação ou IA?",
    a: "Sim. A aula foi feita exatamente para quem nunca criou um agente. Você não precisa saber programar.",
  },
  {
    q: "Quanto tempo vou ter acesso?",
    a: "Acesso vitalício. Pagou uma vez, acessa para sempre.",
  },
  {
    q: "É seguro comprar aqui?",
    a: "Sim. Pagamento processado com criptografia SSL. Seus dados estão protegidos.",
  },
  {
    q: "Não sei usar nada de N8N. Qual ferramenta de IA usaremos?",
    a: "Não se preocupe pois não usaremos N8N. Faremos seu agente de forma simples e prática usando o Claude Code Pro, além de várias ferramentas gratuitas.",
  },
];

export function FAQ() {
  return (
    <section className="bg-background px-4 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
