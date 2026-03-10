# Landing Multi-Produto

Projeto em Next.js com App Router, TypeScript e CSS global para páginas de vendas multi-produto.

## Como rodar

```bash
npm install
npm run dev
```

Abra:

- http://localhost:3000
- http://localhost:3000/produto-a
- http://localhost:3000/produto-b
- http://localhost:3000/produto-c

## Estrutura

- `src/app` -> rotas do Next.js
- `src/products` -> dados e metadados de cada produto
- `src/templates` -> templates reutilizáveis
- `src/components` -> layout, seções e ui
- `public/images` -> imagens dos produtos

## Variáveis opcionais

Crie um `.env.local` com:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
```
