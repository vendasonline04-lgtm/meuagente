Mover o bloco `Recap` ("Recapitulando…") para logo abaixo do bloco `ForWho` ("O Agente de IA do Zero em 37 minutos é para você que:").

## Alterações

**`src/main.tsx`** — hoje a ordem é:
`ForWho → ValueStack → OfferCTA → Urgency → Guarantee → Recap → FAQ → Footer`

Nova ordem:
`ForWho → Recap → ValueStack → OfferCTA → Urgency → Guarantee → FAQ → Footer`

**`src/routes/index.tsx`** — já está com `Recap` logo após `ForWho`, mas confirmo que permanece igual para manter consistência entre as duas entradas (SPA via `main.tsx` no deploy Hostinger e rota TanStack no preview Lovable).

Nenhuma mudança de conteúdo, estilo ou lógica — apenas reordenação de componentes.