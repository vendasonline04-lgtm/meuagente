import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Mas eu não entendo nada de tecnologia... Funciona para mim mesmo se eu estiver começando do absoluto zero?",
    a: "Com certeza! Essa aula foi desenhada pensando justamente em quem sente um frio na barriga só de pensar em abrir uma ferramenta nova. Você não precisa entender de códigos, inteligência artificial ou termos técnicos. Se você sabe abrir o seu e-mail e mandar uma mensagem no WhatsApp, você já tem todo o conhecimento necessário para criar seu agente.",
  },
  {
    q: "Eu tenho muito medo de errar ou travar na hora de \"conectar ferramentas\". É muito difícil?",
    a: "Esse é o maior medo de todo mundo, e eu te entendo perfeitamente. Por isso, quero te tranquilizar: você não vai precisar configurar integrações complexas ou criar sistemas do zero. O processo é visual e baseado em \"copiar e colar\". Tudo o que você precisa fazer é copiar os comandos que eu já te dou prontos e colar no lugar indicado que eu mostro na tela.",
  },
  {
    q: "Vou precisar pagar por alguma ferramenta de inteligência artificial?",
    a: "Sim. Nós vamos usar o Claude Code Pro, que vai assumir parte do seu trabalho no seu lugar! Isso não tem preço, né? O Claude Code é uma Inteligência Artificial extremamente simples e amigável — parece um chat de conversa normal, igual ao WhatsApp.",
  },
  {
    q: "Meu dia já é super corrido e eu faço tudo sozinha. Quanto tempo preciso para ver o resultado?",
    a: "Eu sei bem como é olhar para o relógio e sentir que o dia voou sem render. Por isso, a aula principal tem apenas 37 minutos. Você não vai precisar passar semanas estudando. Você assiste, replica o que eu faço e seu primeiro agente já estará funcionando e trabalhando por você no piloto automático. É um investimento de 37 minutos para salvar horas do seu dia.",
  },
  {
    q: "Como e quando eu recebo o acesso?",
    a: "O acesso é imediato! Assim que o seu pagamento for aprovado, um e-mail com os seus dados de acesso chega na sua caixa de entrada em menos de 2 minutos. Você já pode começar a assistir e criar seu agente hoje mesmo.",
  },
  {
    q: "E se eu comprar, tentar fazer e perceber que não é para mim?",
    a: "Não tem problema nenhum. O seu risco é zero. Você tem 7 dias de garantia incondicional para testar tudo. Se você achar que é difícil demais, ou simplesmente não gostar, basta me enviar um único e-mail. Eu devolvo 100% do seu dinheiro, sem perguntas, sem burocracia.",
  },
  {
    q: "Quanto tempo vou ter acesso?",
    a: "Acesso vitalício. Pagou uma vez, acessa para sempre — sem prazo de expiração.",
  },
  {
    q: "Tenho que pagar mensalidade?",
    a: "Não. O pagamento é único. Você paga uma vez e nunca mais precisa pagar nada para continuar tendo acesso.",
  },
  {
    q: "É seguro fazer o pagamento por aqui?",
    a: "Totalmente seguro. Nós usamos uma plataforma de pagamentos com criptografia de ponta (o mesmo sistema de segurança que os grandes bancos usam). Seus dados pessoais e de cartão estão 100% protegidos e blindados.",
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
