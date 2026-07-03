## Popup de "Compra Aprovada" (prova social)

Adicionar um popup animado que aparece no canto da tela mostrando nomes de possíveis compradores com a mensagem "compra aprovada!", para aumentar conversão.

### O que será construído

**Novo componente:** `src/components/sales/PurchasePopup.tsx`

- Popup fixo (position: fixed) com:
  - Ícone de check verde
  - **Nome da pessoa** (negrito)
  - Texto: **"compra aprovada!"**
  - Fundo branco, borda sutil, sombra suave, bordas arredondadas
- Animação de entrada/saída deslizando da direita (fade + slide-in-right / slide-out-right já existentes no Tailwind)
- Cada popup fica visível ~4s antes de sair

### Posicionamento

- **Desktop:** canto inferior esquerdo (padrão de prova social, não atrapalha CTAs à direita)
- **Mobile:** parte superior da tela, entrando pelo lado direito (conforme pedido)
- Controlado por classes Tailwind responsivas (`bottom-4 left-4 md:...` vs `top-4 right-4` no mobile)

### Lista de nomes

- Array com **200 nomes brasileiros**: 100 femininos + 100 masculinos, embaralhados
- Nomes completos realistas (nome + sobrenome), ex.: "Ana Carolina Silva", "Rafael Oliveira"
- Armazenado como constante no próprio componente (`NAMES`)
- Lógica garante **zero repetição**: embaralha a lista uma vez ao montar e percorre em sequência; quando esgotar os 200, reembaralha

### Intervalos entre popups

Sequência fixa e cíclica, conforme solicitado, para parecer natural:

```text
3s → 8s → 5s → 15s → 6s → 16s → 8s → 12s → 4s → 20s → 7s → 10s
```

(intercalados curtos/longos; ao terminar a sequência, reinicia)

### Integração

- Importar `<PurchasePopup />` uma única vez em `src/main.tsx`, ao final do `<main>`, para ficar disponível em toda a página

### Detalhes técnicos

- `useEffect` com `setTimeout` encadeado (não `setInterval`) para respeitar a sequência variável
- `useState` para nome atual + visibilidade
- Cleanup do timeout no unmount
- Animação via classes `animate-slide-in-right` / `animate-fade-out` já presentes no design system
- Sem dependências novas
- Sem alterações em lógica de negócio — puramente UI/apresentação
