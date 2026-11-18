# Karan Kanojiya portfolio

Single-page personal portfolio for Karan Kanojiya, Senior Software Engineer. Dark, minimal developer theme with a teal accent, smooth-scroll navigation and sections that fade in as you scroll.

Sections: About, Skills, Experience, Education and What's Next?, whose heading reads Get In Touch and links to GitHub and LinkedIn.

## Tech stack

| Layer | Used |
|---|---|
| UI | React 18, TypeScript 5, Vite 5 |
| Styling | Tailwind CSS 3 with the typography, container-queries and animate plugins |
| Icons | lucide-react and react-icons |
| Data layer | TanStack Query 5 provider only. The portfolio sections are static and fetch nothing. |
| Origin | Generated with [Caffeine](https://caffeine.ai/) for the Internet Computer, then made runnable as a plain React app |

RUN.md also has a stack table. It describes the Caffeine template under `build-template/`, which uses React 19 and Radix UI. The standalone app in `frontend/` is the table above.

## Run locally

Requires Node.js 20 or newer and npm.

```bash
cd frontend
npm install
npm run dev
```

The dev server opens http://localhost:5173 in your browser. It serves the standalone entry (`index-standalone.html`), so no Internet Computer tooling, canister or Internet Identity is needed.

## Build for production

```bash
cd frontend
npm run build
```

The build writes `frontend/dist/` with an `index.html` at its root. Deploy that folder to any static host such as Vercel or Netlify.

To check the production build locally, run `npm run preview` in `frontend/` and open http://localhost:4173.

For a GitHub Pages project site, pass the repository name as the base path when building, then publish `frontend/dist/`:

```bash
npm run build -- --base=/karan-kanojiya-portfolio/
```

## Project layout

```
frontend/                 React app. All portfolio edits happen here.
  index-standalone.html   Standalone entry. Loads src/main-standalone.tsx with a mock identity provider. Also sets the page title.
  index.html              Caffeine/Internet Computer entry. Loads src/main.tsx.
  src/components/         Navigation, Hero, Skills, Experience, Education, Footer
  src/index.css           Theme: colour variables, fonts and the fade-in animation
  src/hooks/useScrollAnimation.ts   IntersectionObserver fade-in
  public/assets/generated/karan-avatar.dim_400x400.png   Profile photo. A "K" placeholder shows if it is missing.
backend/main.mo           Empty Motoko actor from the Caffeine template. The site does not call it.
build-template/           Caffeine scaffold: Dockerfile, deploy script, canister config and a second frontend package (React 19, Radix UI). It holds no portfolio source. build.sh copies frontend/ and backend/ into it at build time.
build.sh                  Caffeine CI build script. Expects a Motoko compiler at a fixed path.
spec.md                   Original feature specification
RUN.md                    Detailed run guide, including the Docker and Internet Computer options
```

Some Caffeine files are kept in `frontend/src` for the Internet Computer pipeline: `config.ts`, `backend.ts`, `backend.d.ts`, `declarations/`, `utils/StorageClient.ts`, `hooks/useActor.ts` and `hooks/useInternetIdentity.ts`. They import `@dfinity` and `@icp-sdk` packages that `frontend/package.json` does not install. The standalone build never compiles them, so they only show as unresolved imports in an editor. `frontend/index.css` at the frontend root is unused. The live stylesheet is `frontend/src/index.css`.

## Editing content

All portfolio text lives in `frontend/src/components/`:

- `Navigation.tsx`: menu labels and section anchors
- `Hero.tsx`: name, title, summary and social links
- `Skills.tsx`: skill categories and badges
- `Experience.tsx`: roles, companies, dates and bullet points
- `Education.tsx`: degree, institute and coursework
- `Footer.tsx`: contact text and links

The browser tab title is in `frontend/index-standalone.html`. Colours, fonts and the fade-in animation are the `:root` variables and `.section-fade` rules in `frontend/src/index.css`, with the Tailwind mapping in `frontend/tailwind.config.js`. The accent colour is `--teal`.

Replace `frontend/public/assets/generated/karan-avatar.dim_400x400.png` to change the profile photo.

## Deploying on the Internet Computer

The original Caffeine pipeline is kept under `build-template/`. RUN.md option 1 builds the Docker image, whose deploy script uses the `icp` CLI. Option 2 is a manual `dfx` and pnpm flow. Both expect `frontend/` and `backend/` to be copied into `build-template/` first, which is what `build.sh` does in CI. This path is optional. The standalone React build above is enough to host the site.

## License

The portfolio source has no licence file yet, so all rights are reserved. The Caffeine template under `build-template/` ships an MIT licence text in `build-template/LICENSE`. Portfolio content and images are © Karan Kanojiya.
