import { createFileRoute } from "@tanstack/react-router";
import { UrgencyBar } from "@/components/sales/UrgencyBar";
import { Hero } from "@/components/sales/Hero";
import { Testimonials } from "@/components/sales/Testimonials";
import { ProblemCycle } from "@/components/sales/ProblemCycle";
import { Solution } from "@/components/sales/Solution";
import { FourSteps } from "@/components/sales/FourSteps";
import { Deliverables } from "@/components/sales/Deliverables";
import { ForWho } from "@/components/sales/ForWho";
import { ValueStack } from "@/components/sales/ValueStack";
import { OfferCTA } from "@/components/sales/OfferCTA";
import { Urgency } from "@/components/sales/Urgency";
import { DeliverySteps } from "@/components/sales/DeliverySteps";
import { Guarantee } from "@/components/sales/Guarantee";
import { Recap } from "@/components/sales/Recap";
import { FAQ } from "@/components/sales/FAQ";
import { Footer } from "@/components/sales/Footer";

export const Route = createFileRoute("/")(
  {
  head: () => ({
    meta: [
      { title: "Seu Agente de IA do Zero — Crie seu primeiro agente em 37 minutos" },
      {
        name: "description",
        content:
          "Pare de se perder tentando entender agentes de IA. Em 37 minutos você cria seu primeiro agente do zero — mesmo sem saber nada. Acesso imediato por R$ 67.",
      },
      { property: "og:title", content: "Seu Agente de IA do Zero — Crie seu agente em 37 minutos" },
      {
        property: "og:description",
        content:
          "Aula prática de 37 minutos. Do zero ao agente rodando. Acesso imediato e garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <main>
      <UrgencyBar />
      <Hero />
      <Testimonials />
      <ProblemCycle />
      <Solution />
      <FourSteps />
      <Deliverables />
      <ForWho />
      <Recap />
      <ValueStack />
      <OfferCTA />
      <DeliverySteps />
      <Urgency />
      <OfferCTA />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
