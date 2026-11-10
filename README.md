# Cardápio

Site estático (React) para escolher um prato, uma ou mais bebidas e um dia, e abrir o WhatsApp com a mensagem pronta. Sem preços. Nada fica salvo no navegador.

O link para divulgar é o do **site**, não o da página do repositório:

**https://victooliv.github.io/Cardapio/**

## Como rodar no computador

```bash
npm install
npm run dev
```

Abra `http://localhost:5173/Cardapio/` (a barra `/Cardapio/` é a mesma do GitHub Pages).

Para ver a versão de produção:

```bash
npm run build
npm run preview
```

## Como alterar o cardápio

- Número do WhatsApp, antecedência mínima e nome opcional: `src/config.ts`
- Pratos e bebidas: `src/data/menu.ts` (copie um objeto da lista)
- Fotos novas: `public/img/pratos/` ou `public/img/bebidas/` + uma linha em `CREDITS.md`

## Como publicar no GitHub Pages

1. No GitHub, em **Settings → Pages**, escolha **GitHub Actions**.
2. Faça o primeiro envio para a branch `main` deste repositório: https://github.com/VictoOliv/Cardapio.git
3. Espere o workflow **Deploy to GitHub Pages** terminar.
4. Use o endereço `https://victooliv.github.io/Cardapio/` — não o `github.com/VictoOliv/Cardapio`.

O repositório é público: o número do WhatsApp fica visível no código.

## Outras hospedagens

Na Vercel ou na Cloudflare Pages, conecte o mesmo repositório. Comando de build: `npm run build`. Pasta publicada: `dist`. Se a URL **não** for um subcaminho (`/Cardapio/`), mude `base` em `vite.config.ts` para `'/'`.
