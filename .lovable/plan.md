## Objetivo
Adicionar o link de checkout do Cakto no botão CTA da oferta.

## Mudanças

**1. `src/components/sales/OfferCTA.tsx`** — passar o href para o `<CTAButton>`:

```tsx
<CTAButton variant="purple" href="https://pay.cakto.com.br/qjujfnv_871799">
  Quero meu agente de IA agora
</CTAButton>
```

O componente `CTAButton` já aceita a prop `href` (default: `"#oferta"`). Apenas adicionar o link de checkout no botão da oferta.

## Detalhes
- Apenas 1 botão CTA na oferta (linha 252 de `OfferCTA.tsx`).
- O componente `CTAButton` já renderiza um `<a>` com a prop `href`, então não precisa de alteração no componente base.
- O link abrirá o checkout do Cakto em nova navegação (padrão do `<a href>`).
