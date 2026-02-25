# Karan Kanojiya Portfolio – Tech Stack & Run Guide

## Tech stack

This project was generated with **[Caffeine](https://caffeine.ai/)**, a platform that builds apps from natural language and deploys them on the **Internet Computer (ICP)**.

| Layer | Technology |
|-------|------------|
| **Frontend** | **React 19**, TypeScript, **Vite**, Tailwind CSS, Radix UI, TanStack Query, Lucide React |
| **Backend** | **Motoko** (on Internet Computer) – currently an empty actor; the site is effectively static |
| **Auth / ICP** | Internet Identity, `@dfinity/*` and `@icp-sdk/*` (used by the template; your portfolio pages do not call the backend) |
| **Build / Deploy** | Caffeine/DFinity template: pnpm, Docker, ICP canisters |

So: **the UI is already React**. The “Caffeine” part is the ICP/Motoko backend, the Internet Identity wiring, and the deploy pipeline. Your portfolio content is static React components (Navigation, Hero, Skills, Experience, Education, Footer).

---

## How to run

### Option 1: Docker (full Caffeine/ICP build)

From the **project root** (where `build-template/` and `build.sh` live):

```bash
cd build-template
docker build -t app .
docker run -it --network host app
```

This builds the Motoko backend and frontend and runs whatever is configured in the image (see `build-template/Dockerfile` and `deploy.sh`).

### Option 2: Local dev with Caffeine/ICP tooling

You need the [ICP/DFinity toolchain](https://internetcomputer.org/docs/current/developer-docs/setup/install/) (e.g. `dfx` / `icp`), then:

1. From project root, run the build script so the template is populated:
   - The repo’s `build.sh` is intended for Caffeine’s CI and expects a specific Motoko install path; for local use you’d typically copy your app into `build-template` and then work inside `build-template`.
2. From `build-template`:
   - `pnpm install`
   - Create/configure backend canister and generate bindings: `dfx canister create backend && dfx generate backend` (or your project’s equivalent).
   - Start frontend: `pnpm --filter '@caffeine/template-frontend' start` (or `cd src/frontend && pnpm start`).
   - Frontend runs at **http://localhost:3000** (see `build-template/src/frontend/package.json`).

Exact steps depend on your `dfx`/`icp` setup and how you inject canister IDs (e.g. `env.json`).

### Option 3: Standalone React (no Internet Computer)

Your portfolio is static and does not use the backend or auth in the page components. You can run it as a **plain React + Vite** app and host it anywhere (Vercel, Netlify, GitHub Pages, etc.).

From the **project root**:

```bash
cd frontend
npm install
npm run dev
```

Then open **http://localhost:5173** (the dev server opens it automatically; the root URL now serves the standalone app so you won’t see the `@dfinity/auth-client` error).

To build for production (e.g. for Vercel/Netlify):

```bash
cd frontend
npm run build
```

Output is in `frontend/dist/`. Deploy the contents of `dist/` as a static site.

This uses a standalone Vite setup and a mock identity provider so the app runs without `dfx`, canisters, or Internet Identity. See “Standalone React vs Caffeine” below.

**npm commands (standalone app — use these instead of pnpm):**

| If you used pnpm…   | Use npm instead…   |
|---------------------|---------------------|
| `pnpm install`      | `npm install`       |
| `pnpm run dev`      | `npm run dev`       |
| `pnpm run build`    | `npm run build`     |
| `pnpm run preview`  | `npm run preview`   |
| `pnpm audit`        | `npm audit`         |
| `pnpm add <pkg>`    | `npm install <pkg>` |

Run these from the `frontend/` directory for the standalone portfolio.

---

## Converting to “just React”

- **Already React:** The frontend is React (with TypeScript, Vite, Tailwind, Radix). No conversion from another framework is needed.
- **Removing Caffeine/ICP:** To turn it into a normal React SPA and host it off the Internet Computer:
  1. Use the **standalone** run above (`frontend/` with its own `package.json` and `vite.config.ts`).
  2. Build: `npm run build` in `frontend/`.
  3. Deploy the `frontend/dist` output to any static host.

The standalone setup avoids `@dfinity/*` and `@icp-sdk/*` and uses a mock auth provider so no backend or canister is required. You can later replace the mock with your own auth (e.g. NextAuth, Clerk) or remove auth entirely if the site stays static.

---

## Project layout (summary)

- **`frontend/`** – React app source (components, hooks, styles). This is what you edit for the portfolio.
- **`backend/`** – Motoko backend (e.g. `main.mo`); currently empty.
- **`build-template/`** – Caffeine/ICP template: merges frontend + backend, adds canister config, Docker, and deploy scripts. The built frontend and backend are consumed by this pipeline.

The Caffeine build process copies your `frontend/` and `backend/` into `build-template` and then builds/deploys from there.

---

## Glossary & safety

### What is **pnpm**? (Standalone app uses **npm**)
**pnpm** (Performant Node Package Manager) is a package manager for JavaScript/Node, like npm or yarn. This project's Caffeine/build-template expects pnpm. The **standalone** `frontend/` app uses **npm** instead: run `npm install` and `npm run dev` there.

### What is **Motoko**?
**Motoko** is a programming language from the DFINITY Foundation, used to write **canisters** (smart contracts / backend services) on the Internet Computer. Your repo has a small Motoko backend (`backend/main.mo`); for this portfolio it's an empty actor, so the site is static and doesn't rely on it for content.

### What is **ICP** (Internet Computer)?
The **Internet Computer** is a decentralized blockchain-based network run by the DFINITY Foundation. Apps can run on it instead of a single cloud provider: frontend and backend (canisters) are hosted on the network. **ICP** often refers to the protocol or the network itself.

### What is **Caffeine**?
[Caffeine](https://caffeine.ai/) is a platform (by DFINITY) that builds apps from natural-language prompts and deploys them on the Internet Computer. Your project was generated with Caffeine, so it includes ICP tooling, Motoko, and Internet Identity. You can still run the same React app locally or on Vercel/Netlify without using ICP (see Option 3 above).

### Is this all safe?
- **pnpm / Node / Vite / React:** Standard, open-source tooling; safe when you install from official sources and keep dependencies updated.
- **Internet Computer / DFINITY / Caffeine:** DFINITY is a known foundation; ICP and Caffeine are used in production. As with any deployment target, safety depends on your code, how you handle secrets, and which canisters you trust. This repo doesn't hardcode secrets; it uses env/config. For a static portfolio, the main risk is normal web security (HTTPS, dependency audits). Run `npm audit` periodically (in `frontend/` for the standalone app).

---

## Profile image (avatar)

The Hero section expects a profile image at **`/assets/generated/karan-avatar.dim_400x400.png`**. For the standalone app, put your image in:

**`frontend/public/assets/generated/karan-avatar.dim_400x400.png`**

Vite serves files from `public/` at the site root, so that path will work. If the file is missing, the page shows a fallback "K" initial so the layout doesn't break.
