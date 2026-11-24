# 🍳 FlavorCraft – Smart Recipe Discovery

A fast, distraction-free recipe discovery web app built for **FlavorCraft Labs**.
Search, filter and save recipes – no ads, no backstories, just cooking.

🔗 **Live site:** [smart-recipe-discovery-team-beta.vercel.app]
📋 **Project board:** [https://github.com/users/aw3stm/projects/16]
🎨 **Figma:** [link to your design]

---

## 📖 About the project

FlavorCraft Labs wants to reduce "recipe fatigue" and food waste for home cooks.
Our MVP lets users discover recipes by search, category and dietary preference,
view clear step-by-step instructions, and save favourites. It's optimised for mobile
and kitchen use.

Built over 3 one-week sprints as a Noroff school project, with
**Monde Sineke** as Product Owner.

**Data source:** [Noroff Recipe Book API](https://v2.api.noroff.dev/recipe-book/recipes)

---

## Features

- [ ] Recipe feed with live API data
- [ ] Real-time (debounced) search
- [ ] Category / dietary filtering
- [ ] Recipe detail page (ingredients, steps, prep time, tags)
- [ ] Favourites saved in localStorage
- [ ] Dynamic SEO: page titles, meta descriptions, Open Graph tags
- [ ] Schema.org/Recipe JSON-LD
- [ ] Analytics & heatmaps ([Microsoft Clarity / Hotjar / Plausible])
- [ ] Lighthouse 90+ in Performance, Accessibility and SEO

---

## Team [Beta]

| Name              | Role                       |
| ----------------- | -------------------------- |
| [Anna Vestman]    | Scrum Master               |
| [Ellen Jensen]    | Lead Designer / Researcher |
| [Lene Johansen]   | Frontend Developer         |
| [Mia Stubb-Olsen] | Frontend Developer         |
| [Pål Omland]      | Frontend Developer         |
| [Ole Håvard]      | QA Lead                    |
| [Steffen Heltne]  | SEO & Analytics Specialist |

---

## Tech stack

- **Framework:** [Next.js / React + Vite]
- **Styling:** [Tailwind CSS]
- **Hosting:** [Vercel]
- **Analytics:** [Microsoft Clarity / Hotjar / Plausible]
- **Linting & formatting:** ESLint + Prettier
- **Project management:** GitHub Projects

---

## Getting started

### Prerequisites

- Node.js [version, 20+]
- npm

### Installation

```bash
git clone https://github.com/[org-or-user]/[repo-name].git
cd [repo-name]
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run lint`  | Run ESLint                   |

---

## Git workflow

We use **feature branches** and **pull requests**. Nobody pushes directly to `main`.

1. Pick an issue from the **Sprint Backlog** and move it to **In Progress**
2. Pull the latest `main` and create a branch:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/recipe-search
   ```
3. Commit using **Conventional Commits** (see below)
4. Push and open a PR. Link the issue with `Closes #12`
5. Move the issue to **In Review / QA**
6. You need **1 developer approval** and **QA sign-off** (`qa-approved` label)
7. Merge, delete the branch, move the issue to **Done**

### Branch naming

| Type    | Example                  |
| ------- | ------------------------ |
| Feature | `feature/recipe-search`  |
| Bug fix | `fix/empty-search-state` |
| Styling | `style/recipe-card`      |
| Docs    | `docs/readme-setup`      |
| Chore   | `chore/eslint-config`    |

### Commit messages

```text
feat: add debounced search input
fix: handle API error on recipe feed
style: adjust recipe card spacing
docs: add setup instructions
refactor: extract RecipeCard component
chore: install prettier
test: add manual test cases for favourites
```

---

## Definition of Done

A ticket is **Done** when:

- [ ] Code is merged into `main` via an approved PR
- [ ] Tested and approved by QA
- [ ] Works on mobile and desktop
- [ ] No console errors or leftover `console.log`
- [ ] Acceptance criteria are met
- [ ] Deployed to the live site

---

## 🤝 Working agreement

- Daily standup at **[10:00]** in **[daily-standup]** (Discord)
- Update the board **before** standup
- Stuck for more than 1 hour? Ask in the team channel
- Never merge your own PR
- Review open PRs within **[3 hours]** on workdays
- Communicate absence or delays to the Scrum Master as early as possible

---

## Daily written standup

We do a **written standup every day** (Mon–Fri) in **[daily-standup]**.
Post your update **before [10:00]**. It takes 2 minutes.

### Template

```text
**Standup – [Your name] – [Date]**

Last 24h: What did I work on?
Next 24h: What will I work on?
Blockers: Is anything stopping me, or do I need help?
```

### Example

```text
**Standup – Anna – 25 Nov**

Last 24h: Built the RecipeCard component (#14), opened PR
Next 24h: Start on category filter (#16)
Blockers: Need final colours from design before styling the filter buttons
```

### Guidelines

- Keep it short, 1–2 lines per question
- Reference issue numbers (e.g. `#14`) so we can follow progress on the board
- If you have a blocker, the Scrum Master follows up the same day
- Nothing to report? Post anyway, e.g. "Off today" or "No progress, back tomorrow"

## Sprints

| Sprint   | Dates                    | Goal                                                   |
| -------- | ------------------------ | ------------------------------------------------------ |
| Sprint 1 | [Tue 24/11] – [Tue 1/12] | Research, design and core search/display               |
| Sprint 2 | [Tue 1/12] – [Tue 8/12]  | Detail page, favourites, SEO and analytics             |
| Sprint 3 | [Tue 8/12] – [Tue 15/12] | Data-driven refinements, QA, Lighthouse and final demo |

Sprint reviews and retrospectives are documented in [`/docs/sprints`](./docs/sprints).

---

## Research & design

- **Customer interviews & personas:** [`/docs/research`](./docs/research)
- **Wireframes & design:** [Figma link]
- **QA test plan:** [`/docs/qa`](./docs/qa)

---

## Lighthouse results

| Category       | Score |
| -------------- | ----- |
| Performance    | [ ]   |
| Accessibility  | [ ]   |
| Best Practices | [ ]   |
| SEO            | [ ]   |

---

## Resources

---

## License

This project was created for educational purposes at Noroff.

## Tech stack

- **Framework:** Next.js 16.4.6 (App Router)
- **Language:** TypeScript (strict mode)
- **UI library:** React 19.3.0
- **Styling:** Tailwind CSS 4.3.3
- **Hosting:** Vercel (planned)
- **Analytics:** To be confirmed
- **Linting:** ESLint with Next.js configuration
- **Formatting:** Prettier with Tailwind CSS plugin
- **Testing:** Vitest, React Testing Library and jsdom
- **Project management:** GitHub Projects
- **Package manager:** npm

---

## Getting started

### Prerequisites

The project uses the following development environment:

- Node.js: 24.18.0 (supported major version: 24.x)
- npm: 11.16.0 (supported major version: 11.x)

The Node.js version is documented in `.nvmrc`, and the supported
versions are declared in `package.json`.

### Installation

Clone the repository:

```bash
git clone https://github.com/aw3stm/smart-recipe-discovery-team-beta.git
cd smart-recipe-discovery-team-beta
```

Install dependencies using the committed lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Create a production build                |
| `npm run start`        | Start the production server              |
| `npm run lint`         | Run ESLint                               |
| `npm run format`       | Format project files with Prettier       |
| `npm run format:check` | Check formatting without modifying files |
| `npm run typecheck`    | Check TypeScript without emitting files  |
| `npm run test`         | Run all automated tests once             |
| `npm run test:watch`   | Run tests in watch mode                  |
| `npm run check`        | Run the complete verification pipeline   |

### Project structure

```text
smart-recipe-discovery-team-beta/
├── app/                 # Routes, pages, layouts and global CSS
├── components/          # Reusable UI components
├── lib/                 # API services and shared application logic
├── types/               # Shared TypeScript definitions
├── utils/               # Pure utility functions
├── public/              # Static assets
├── docs/                # Project documentation
├── .nvmrc               # Node.js version
├── .prettierrc.json     # Shared formatting configuration
├── .prettierignore      # Formatting exclusions
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── vitest.config.mts    # Vitest configuration
├── vitest.setup.ts      # Shared test setup
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
├── package-lock.json    # Locked dependency versions
└── README.md
```

### Testing conventions

Automated testing supports the team's QA process and helps prevent
regressions throughout development.

- Use Vitest for unit tests.
- Use React Testing Library for component tests.
- Colocate tests alongside the files they test.
- Use `.test.ts` for utility tests and `.test.tsx` for component tests.
- Use the default Node environment for pure logic tests.
- Add `// @vitest-environment jsdom` to tests requiring a browser
  environment.
- Prefer accessible role and label queries when testing components.
- Focus on meaningful behaviour rather than implementation details.

DOM matchers and automatic React component cleanup are configured
in the shared test setup.

### Code quality and verification

Before submitting a pull request, run:

```bash
npm run check
```

The verification pipeline runs the following checks in order:

1. TypeScript
2. ESLint
3. Prettier
4. Automated tests
5. Production build

All checks must pass before the code is ready for review.
Automated checks complement, but do not replace, manual QA.

### Technical decisions

- ESLint 9 is retained due to peer dependency incompatibilities
  between ESLint 10 and the installed React ESLint plugin.
  Revisit this decision when compatible plugin versions are available.
- Cache Components and Partial Prefetching are disabled initially
  to simplify rendering and caching behaviour.
- The committed package lockfile ensures consistent dependency
  installation across development environments.
- Formatting is standardised using Prettier, including automatic
  Tailwind CSS class sorting.

---
