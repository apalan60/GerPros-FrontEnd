# GerPros-FrontEnd

## Demo

[Demo Page](https://main.d1hm4l1a6kz6r6.amplifyapp.com/)

## Tech stack

- Framework [Nuxt v3.13](https://nuxt.com/)
- Library
  - [Nuxt UI Community v2.18](https://ui.nuxt.com/)
  - [Tailwind v3.4.10](https://tailwindcss.com/docs/installation)


## Setup

Make sure to install the dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

### Run eslint

```bash
npx @eslint/config-inspector #scan

bun run eslint #check

bun run eslint --fix #fix
```

## Production

Build the application for production:

```bash
# bun
bun run build
```

Locally preview production build:

```bash
# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



## API fetch

- 使用 Nuxt3 的 useFetch, useAsyncData 與 $fetch來簡化開發，不須另外封裝 fetch 方法。 ref:[nuxt/ data fetching](https://nuxt.com/docs/getting-started/data-fetching)