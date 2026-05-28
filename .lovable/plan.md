## Objetivo
Fazer o botão CTA dos blocos OfferCTA (oferta 1 e oferta 2) pulsar continuamente — escalando para cima e para baixo de forma rápida — para chamar mais atenção.

## Mudanças

**1. `src/styles.css`** — adicionar keyframe `cta-pulse` e a classe utilitária `.animate-cta-pulse`:

```css
@keyframes cta-pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
}
.animate-cta-pulse {
  animation: cta-pulse 0.9s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}
```

Pulso rápido (~0.9s) com aumento/diminuição visível (~6%), suave (ease-in-out) e infinito.

**2. `src/components/sales/OfferCTA.tsx`** — envolver o `<CTAButton>` (linha 251) numa `div` com `className="animate-cta-pulse inline-block"` para o efeito ser aplicado em todas as instâncias de `<OfferCTA />` (oferta 1 e oferta 2 já reutilizam o mesmo componente, então uma única alteração cobre os dois).

## Detalhes
- Escala 1 → 1.06 → 1 dá o efeito "respirando" sem deslocar o layout.
- `transform-origin: center` mantém o botão centralizado durante o pulso.
- Não altera cor, sombra nem texto do botão — apenas adiciona o movimento.
- Não toca em `CTAButton.tsx` para não afetar usos do botão fora da seção de oferta.