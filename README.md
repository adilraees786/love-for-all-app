# Love for All App

A mobile-first web application built with React and TypeScript. The UI is optimized for phone-sized viewports (centered column, max width ~480px) and covers onboarding, discovery, chat, events, profile, wellness-related sections, and settings.

> **Note:** This repository is primarily a **frontend application**. Screens use local demo data and client-side navigation. Connect your own API and auth when you are ready for production.

---

## Features (by route)

| Area | Path | Purpose |
|------|------|---------|
| Entry | `/` | Redirects to splash |
| Splash | `/splash` | Launch screen |
| Onboarding | `/onboarding` | First-run introduction |
| Authentication | `/auth` | Sign-in / sign-up style UI |
| User type | `/user-type` | Role or audience selection |
| Profile setup | `/profile-setup` | Initial profile configuration |
| Home | `/home` | Card-based discovery with swipe-style interactions |
| Discover | `/discover` | Browse / search experience |
| Chat | `/chat` | Messaging UI |
| Events | `/events` | Events listing / calendar-style UI |
| Profile (tab) | `/profile` | Main profile hub from bottom navigation |
| Language | `/language` | Language preferences |
| Match filters | `/filters` | Matching preferences |
| Video profile | `/video-profile` | Video profile concept screen |
| Coaching | `/coaching` | Coaching content / entry |
| Mental health | `/mental-health` | Mental health resources UI |
| Education | `/education` | Educational content UI |
| Safety | `/safety` | Safety information / tools UI |
| Subscription | `/subscription` | Plans / paywall style UI |
| Likes | `/likes` | Liked profiles or matches |
| My profile | `/my-profile` | Detailed own profile |
| Settings | `/settings` | Settings hub |
| Account | `/settings/account` | Account details |
| Notifications | `/settings/notifications` | Notification preferences |
| Privacy | `/settings/privacy` | Privacy controls |
| Appearance | `/settings/appearance` | Theme / display options |
| Help & support | `/settings/help` | Help and support |
| Not found | `*` | 404 page |

**Bottom navigation** (Home, Discover, Chat, Events, Profile) is implemented in `src/components/BottomNav.tsx` and aligns with the main tab routes above.

---

## Tech stack

- **Build tool:** [Vite](https://vitejs.dev/) 5
- **UI:** [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router](https://reactrouter.com/) 6
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3
- **Component primitives:** [Radix UI](https://www.radix-ui.com/) via shadcn-style components in `src/components/ui/`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & validation:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Server state (ready for APIs):** [TanStack Query](https://tanstack.com/query/latest) — provider is wired in `src/App.tsx`; add `useQuery` / `useMutation` when you connect backends
- **Icons:** [Lucide React](https://lucide.dev/)
- **Toasts:** Sonner and the shadcn toaster
- **Tests:** [Vitest](https://vitest.dev/), Testing Library, jsdom
- **E2E (dev dependency):** Playwright

---

## Requirements

- **Node.js** 18+ recommended (matches modern Vite / tooling expectations)
- **npm** (or use `pnpm` / `yarn` if you prefer — lockfile in repo is npm)

---

## Getting started

Clone or copy the project, then from the project root:

```bash
npm install
npm run dev
```

The dev server is configured to listen on **port 8080** (see `vite.config.ts`). Open the URL shown in the terminal (typically `http://localhost:8080`).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Project structure

```
src/
├── App.tsx              # Routes, providers (Query, tooltips, toasts)
├── main.tsx             # React root
├── index.css            # Global styles / Tailwind layers
├── components/
│   ├── ui/              # Reusable UI primitives (buttons, dialogs, etc.)
│   ├── MobileLayout.tsx # Centered mobile column wrapper
│   └── BottomNav.tsx    # Main tab bar
├── pages/               # Screen components (one file per route)
│   └── settings/        # Settings sub-screens
├── hooks/               # Shared hooks
└── lib/utils.ts         # Utilities (e.g. `cn` for class names)
```

Path alias: imports from `@/` resolve to `src/` (configured in Vite and TypeScript).

---

## Deployment

1. Run `npm run build`.
2. Upload or serve the contents of the **`dist/`** folder with any static host (NGINX, Apache, object storage + CDN, etc.).

For client-side routing, configure the host to **fallback to `index.html`** for unknown paths so deep links (e.g. `/home`) work.

---

## Contributing / next steps

- Replace demo data in pages with real API calls and auth.
- Align `index.html` metadata (title, description, social preview) with your product name.
- Add environment variables for API base URLs and use TanStack Query for caching and loading states.

---

## License

This project is private (`"private": true` in `package.json`). Add a `LICENSE` file if you intend to distribute it.
