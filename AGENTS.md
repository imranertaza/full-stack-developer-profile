# AGENTS.md

This repository contains a static website.  The key points that an agent should know are:

- **Run the dev server**: `npx http-server .` or use the `serve` package.  The default command is documented in `package.json`.
- **Build**: The site is built with a simple `npm run build` script that outputs to `dist/`.
- **Test**: No automated tests are defined.
- **Lint/Format**: This project uses ESLint and Prettier.  Run `npm run lint` to lint and `npm run format` to format.
- **Deployment**: The `gh-pages` branch is used.  To deploy just run `npm run deploy`.
- **Assets**: Images are in `assets/images/`.  All CSS is in `css/style.css`.  No CSS preprocessors are used.
- **No special environment variables** are required.
- **No monorepo structure** – the root is the only package.
- **No code generation or migrations**.

These are the only actions an agent would need to understand to work in this repo.
