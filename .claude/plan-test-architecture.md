# Plan: Add Test Architecture

## Context

No test suite exists. This plan sets up the minimum viable test infrastructure for the Next.js 15 + React 19 + TypeScript portfolio, then validates it works with a single unit test for `isMobile()`.

## Scope

1. Install dependencies
2. Create config files
3. Write ONE test (`utils.test.ts`) to confirm the pipeline works end-to-end

---

## Step 1: Install devDependencies

```bash
npm install --save-dev vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```

---

## Step 2: Create `vitest.config.ts` (project root)

Key settings:
- `environment: 'jsdom'`
- `setupFiles: ['./src/test/setup.ts']`
- `resolve.alias`: mirror `@/*` from `tsconfig.json`
- Plugin: `@vitejs/plugin-react`
- Include: `src/**/*.test.{ts,tsx}`
- Assets: handle `*.{png,jpg,svg}` stubs (static image imports in constants)

---

## Step 3: Create `src/test/setup.ts`

```ts
import '@testing-library/jest-dom'
```

---

## Step 4: Add npm scripts to `package.json`

```json
"test": "vitest run",
"test:watch": "vitest"
```

---

## Step 5: Write `src/lib/utils.test.ts`

Test the `isMobile()` function — two cases:
- Returns `true` when `window.innerWidth <= 1024`
- Returns `false` when `window.innerWidth > 1024`

This is a pure function with no dependencies, making it the ideal first test to confirm the entire Vitest + jsdom pipeline is wired correctly.

---

## Files to Create/Modify

| File | Action |
|---|---|
| `vitest.config.ts` | Create |
| `src/test/setup.ts` | Create |
| `src/lib/utils.test.ts` | Create |
| `package.json` | Edit — add test scripts |

---

## Verification

Run `npm test` — should show 2 passing tests with no errors or warnings.

---

## Future Tests (out of scope for this PR)

Once testing suite is set up, some ideas for what to add next:
- Data integrity tests for `projects`, `navlinks`, `timeline` constants
- Component tests for `Heading`, `Paragraph`, `Badge`, `WorkHistory`, `Sidebar`
- Framer Motion mock setup at `src/test/mocks/framer-motion.ts`