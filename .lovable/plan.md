## Problema

O bloco `MeninoFeliz` (headline "Com o Agente de IA do Zero você vai:" + imagem do menino) existe em `src/routes/index.tsx`, mas o preview do Lovable e o build de produção usam `src/main.tsx` — e nesse arquivo o componente **não está importado nem renderizado**. Por isso a seção não aparece.

## Correção

Editar apenas `src/main.tsx`:

1. Adicionar o import:
   ```tsx
   import { MeninoFeliz } from '@/components/sales/MeninoFeliz'
   ```
2. Renderizar `<MeninoFeliz />` logo depois de `<ProblemCycle />`, na mesma posição em que aparece no `routes/index.tsx`.

Nenhum outro arquivo é alterado. Sem mudanças de cor, preço, texto ou estrutura de outros componentes.

## Validação

- Preview mostra a seção laranja com a headline "Com o Agente de IA do Zero você vai:" e a imagem `meninosuperfeliz.png` abaixo, entre `ProblemCycle` e `Solution`.
- Build continua passando.
