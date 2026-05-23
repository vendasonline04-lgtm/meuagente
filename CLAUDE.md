# ai-creator-fast — Deploy no Hostinger via GitHub Actions

## Contexto do Projeto

- **Repositório:** https://github.com/vendasonline04-lgtm/ai-creator-fast
- **URL do subdomínio:** meuagentedozero.simplifica-ai.com
- **Pasta no Hostinger:** `public_html/meuagentedozero/`
- **Criado em:** Lovable (lovable.dev)
- **Stack original:** TanStack Start + React 19 + TanStack Router + Tailwind CSS + Radix UI
- **Stack final (Hostinger):** Vite SPA puro + React 19 + Tailwind CSS + Radix UI

---

## Resumo do Problema

O projeto foi criado no Lovable com **TanStack Start + Cloudflare Workers (SSR)**. Esse setup **não gera `index.html` estático** no build — o HTML é gerado em tempo de execução pelo servidor. O Hostinger é hospedagem compartilhada Apache (arquivos estáticos), então o site mostrava a página padrão da Hostinger em vez do site real.

---

## Diagnóstico Completo — Erros Encontrados e Soluções

### Erro 1 — `server-dir` incorreto no FTP deploy
**Problema:** `server-dir: /` com FTP do Hostinger faz o deploy para a raiz do account home (`/home/u707023107/`), não para a pasta do subdomínio.

**Descoberta:** A raiz do FTP do usuário JÁ É `public_html/meuagentedozero/` (o Hostinger configura o FTP do subdomínio assim). Então `server-dir: /` é o correto.

**Solução:** Manter `server-dir: /`.

---

### Erro 2 — `local-dir` errado (dist/ em vez de dist/client/)
**Problema:** O build original do TanStack Start + Cloudflare Workers gerava:
```
dist/
  client/   ← assets estáticos (JS, CSS, imagens)
  server/   ← bundle do Cloudflare Workers (inútil no Hostinger)
```
O workflow fazia `local-dir: dist/` e subia tudo, incluindo a pasta `server/`.

**Solução aplicada inicialmente:** `local-dir: dist/client/`

---

### Erro 3 — Build SSR não gera `index.html`
**Problema:** Mesmo com `local-dir: dist/client/`, não havia `index.html`. O TanStack Start com SSR/Cloudflare Workers nunca gera HTML estático — o HTML é renderizado pelo servidor a cada request.

**Diagnóstico:** Adicionado passo de diagnóstico no workflow para listar `dist/` após o build. Confirmado: `dist/client/.vite/manifest.json` não existia, sem `index.html` em nenhum lugar.

---

### Erro 4 — Geração manual de index.html não funcionou
**Tentativa:** Gerar `index.html` no workflow varrendo `assets/` e montando tags `<script>` e `<link>`. O arquivo era gerado e o site abria (página branca em vez da página da Hostinger), mas ficava **em branco**.

**Causa raiz:** TanStack Start usa `hydrateRoot(document, <StartClient />)` — espera HTML pré-renderizado pelo servidor para hidratar. Sem esse HTML, o React falha silenciosamente e não renderiza nada.

---

### Erro 5 — vite.config.ts com SSR ativo
**Problema:** `vite.config.ts` tinha:
```typescript
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" }, // ativa SSR/Cloudflare Workers
  },
});
```

**Comparação com projeto que funciona:** O projeto `simplifica-ai-ia-descomplicada` (que está no Hostinger) usa apenas:
```typescript
export default defineConfig(); // sem server entry = modo SPA
```

**Tentativa:** Remover `server: { entry: "server" }` — o build ainda não gerava `index.html` porque `@lovable.dev/vite-tanstack-config` inclui TanStack Start automaticamente de qualquer forma.

---

### Solução Final — Migrar para Vite SPA puro

**Decisão:** Substituir completamente o sistema de build por Vite React padrão, sem TanStack Start. A página de vendas é 100% estática (sem routing dinâmico, sem SSR necessário).

**Arquivos criados/modificados:**

#### `index.html` (novo, na raiz do projeto)
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu Agente do Zero — Crie seu Agente de IA em 37 Minutos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### `src/main.tsx` (novo)
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UrgencyBar } from '@/components/sales/UrgencyBar'
import { Hero } from '@/components/sales/Hero'
// ... todos os 15 componentes com named imports { }
import { Footer } from '@/components/sales/Footer'

function App() {
  return (
    <main>
      <UrgencyBar />
      <Hero />
      {/* ... todos os componentes */}
      <Footer />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
)
```

> **Atenção:** Todos os componentes Lovable usam **named exports** (`export function X` / `export const X`), não `export default`. Usar `import X from '...'` causa erro de build. Sempre usar `import { X } from '...'`.

#### `vite.config.ts` (substituído)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

**Output do build:** `dist/index.html` + `dist/assets/` (Vite SPA padrão).

---

### Erro 6 — FTP timeout com `protocol: ftps`
**Problema:** `protocol: ftps` (FTP com TLS explícito) causava timeout de conexão com o Hostinger no GitHub Actions.

**Solução:** Mudar para `protocol: ftp` (FTP simples na porta 21).

---

## Configuração Final do Workflow

Arquivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy Lovable via FTP na Hostinger

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "22"

      - run: npm install --legacy-peer-deps

      - run: npm run build

      - name: Criar SPA .htaccess
        run: |
          cat > dist/.htaccess << 'EOF'
          <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
          </IfModule>
          EOF

      - uses: SamKirkland/FTP-Deploy-Action@v4.3.6
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASS }}
          protocol: ftp
          port: 21
          local-dir: dist/
          server-dir: /
          timeout: 120000
          dangerous-clean-slate: false
          exclude: |
            **/.git*
            **/.git*/**
            **/.github/**
            **/node_modules/**
```

---

## Secrets do GitHub (Settings → Secrets and variables → Actions)

| Secret | Valor | Onde encontrar |
|--------|-------|----------------|
| `FTP_HOST` | Endereço FTP do Hostinger | Hostinger → Hosting → FTP Accounts |
| `FTP_USER` | Usuário FTP | Hostinger → Hosting → FTP Accounts |
| `FTP_PASS` | Senha FTP | Hostinger → Hosting → FTP Accounts |

> **Importante:** A raiz FTP do usuário JÁ É a pasta do subdomínio. Então `server-dir: /` mapeia diretamente para `public_html/NOME_SUBDOMINIO/`.

---

## Estrutura do Hostinger

```
public_html/
  meuagentedozero/    ← raiz do FTP → server-dir: /
  seuagentedeiadozero/
  pro/
  curso/
  assets/
  .htaccess
```

Cada subdomínio tem sua própria conta FTP cujo root é a pasta dele.

---

## Replicando para Outros Subdomínios

Para cada novo projeto Lovable que quiser hospedar no Hostinger, siga este checklist:

### 1. Verificar se o projeto usa TanStack Start SSR
Se `vite.config.ts` tiver `@lovable.dev/vite-tanstack-config`, o projeto usa TanStack Start e **não gera `index.html`**. Precisa da migração abaixo.

### 2. Migrar para Vite SPA puro
Faça as mesmas 3 mudanças:

**a) Criar `index.html` na raiz** com o título do produto e fontes (Google Fonts conforme o projeto).

**b) Criar `src/main.tsx`** importando todos os componentes da página:
- Verificar quais componentes existem em `src/routes/index.tsx`
- Todos os imports devem ser **named** (`import { X } from '...'`)
- Usar `ReactDOM.createRoot(document.getElementById('root')!).render(...)`

**c) Substituir `vite.config.ts`:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
})
```

### 3. Criar conta FTP para o subdomínio no Hostinger
- Hostinger → Hosting → FTP Accounts → Create
- O root da conta será automaticamente a pasta do subdomínio

### 4. Adicionar secrets no GitHub
- No repositório: Settings → Secrets → Actions
- Adicionar `FTP_HOST`, `FTP_USER`, `FTP_PASS` com os dados da nova conta FTP

### 5. Adicionar o workflow
Copiar `.github/workflows/deploy.yml` deste projeto. Não precisa mudar nada — `server-dir: /` sempre funciona pois o root FTP já é a pasta do subdomínio.

### 6. Limpar pasta do subdomínio no Hostinger (se houver lixo)
Se já houve deploys errados anteriores, deletar manualmente as pastas `client/`, `server/`, `public_html/` dentro da pasta do subdomínio antes do primeiro deploy correto.

---

## Lições Aprendidas

1. **Projetos Lovable com `@lovable.dev/vite-tanstack-config` são SSR** — não hospedam direto no Hostinger sem migração.
2. **`server-dir: /` é correto** — o Hostinger configura a raiz FTP do subdomínio como root do usuário.
3. **Named exports** — todos os componentes Lovable usam `export function X`, nunca `export default`.
4. **`protocol: ftp`** funciona melhor que `ftps` no Hostinger com GitHub Actions.
5. **Vite SPA puro** resolve tudo: gera `index.html`, funciona no Apache, sem servidor necessário.
