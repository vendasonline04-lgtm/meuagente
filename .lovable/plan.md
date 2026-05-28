## Problema
O componente `DeliverySteps` existe e está no `src/routes/index.tsx`, mas não foi adicionado ao `src/main.tsx` (que é o que efetivamente carrega no preview/produção SPA Vite). Por isso o bloco "Compre agora e você vai receber tudo no seu email" não aparece.

## Mudança
Em `src/main.tsx`:
1. Importar `DeliverySteps` de `@/components/sales/DeliverySteps`.
2. Inserir `<DeliverySteps />` entre o primeiro `<OfferCTA />` e `<Urgency />`, replicando a ordem já existente em `src/routes/index.tsx`.

Ordem final:
`... → ValueStack → OfferCTA → DeliverySteps → Urgency → OfferCTA → Guarantee → FAQ → Footer`