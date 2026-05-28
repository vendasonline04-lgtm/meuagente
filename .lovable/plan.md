Adicionar uma segunda instância do bloco `OfferCTA` logo abaixo do `Urgency` ("Agora você tem 2 opções").

## Alterações

**`src/main.tsx`** — nova ordem:
`... → Urgency → OfferCTA (repetido) → Guarantee → FAQ → Footer`

**`src/routes/index.tsx`** — já contém `OfferCTA` repetido após `Urgency`; permanece inalterado.

Sem mudanças de conteúdo, estilo ou lógica — apenas reuso do componente existente.