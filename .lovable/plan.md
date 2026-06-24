## Problema

O console do navegador mostra `[vite] server connection lost. Polling for restart...` — o preview ficou com uma conexão HMR antiga e não está recebendo as atualizações, embora o dev server esteja saudável e processando as edições normalmente (último HMR aplicado em `ProblemCycle.tsx` e `styles.css`).

Não há erro de build nem código quebrado — é puramente o cliente do preview que está com o socket HMR caído.

## Plano

1. Disparar um flush do gate HMR (`POST /__hmr_flush`) para forçar o Vite a re-emitir os módulos atuais e disparar reload no preview.
2. Confirmar nos logs que o reload foi propagado.

Se mesmo após o flush o preview continuar estagnado, a próxima etapa é reiniciar o dev server do sandbox (sem mexer em nenhum arquivo do projeto).

## Detalhes técnicos

- Nenhum arquivo do projeto será alterado.
- Comandos:
  - `curl -sf -X POST http://localhost:8080/__hmr_flush`
  - Se necessário: reiniciar o dev server via `restart_dev_server`.
