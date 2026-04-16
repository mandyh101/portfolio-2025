---
name: code-review
description: Use when asked to review code, a PR, changed files, or a specific file for quality issues — especially when correctness, security, test coverage, or performance concerns are mentioned
---

# Code Review

## Overview

Three-phase review: deterministic tool checks → LLM grading (A–F across five dimensions) → external AI second opinion. Every finding includes a `file:line` reference.

## When to Use

- User says `/review`, "review my changes", "code review", or "check this file"
- Before merging a PR or shipping a feature
- When the user wants an objective quality assessment

**NOT for:** Architecture discussions, general Q&A, explaining how code works

## Process

### Phase 1 — Deterministic Checks

Run the checks script against the target scope:

```bash
# Review uncommitted changes
bash .claude/skills/code-review/checks.sh

# Review specific files
bash .claude/skills/code-review/checks.sh src/foo.ts src/bar.ts

# Review against a branch
bash .claude/skills/code-review/checks.sh --base main
```

Parse the output and include all tool findings verbatim in the report. If checks fail, note which ones — **do not skip the LLM phases**.

### Phase 2 — LLM Review (A–F Grading)

Read all changed/target files. Grade each dimension with a letter and list specific findings with `file:line` references.

#### Grading Scale

| Grade | Meaning |
|-------|---------|
| A | No significant issues |
| B | Minor issues only |
| C | Notable issues — fix before shipping |
| D | Significant problems — block merge |
| F | Critical failures or completely absent |

#### Five Dimensions

**Correctness**
- Logic errors, wrong conditions, off-by-one, incorrect assumptions
- Edge cases: empty input, null/undefined, concurrent access, large data
- API contract violations (wrong return types, missing fields)

**Readability**
- Naming clarity (variables, functions, types)
- Function/component complexity (cyclomatic, nesting depth)
- Magic numbers, unexplained conditions, missing comments on non-obvious logic

**Security**
- Injection risks: SQL, shell, template, XSS
- Auth/authz bypasses, missing input validation
- Sensitive data in logs, responses, or client bundles
- SSRF, path traversal, insecure deserialization

**Test Coverage**
- Missing tests for new code paths
- Assertions that don't actually verify behavior
- Missing error path, edge case, and boundary tests
- Tests that would pass even if the feature were broken

**Performance**
- N+1 queries, missing pagination
- Unnecessary re-renders, missing `useMemo`/`useCallback`
- Synchronous blocking in async contexts
- Large imports that should be dynamic/lazy

### Phase 3 — External AI Second Opinion

After completing the LLM review, invoke codex for a second opinion on the same scope:

```bash
# For uncommitted changes
codex review --uncommitted -c model_reasoning_effort="high"

# For a branch comparison
codex review --base main -c model_reasoning_effort="high"
```

If codex is unavailable, fall back to gemini (see call-external-ai skill for self-healing rules).

Summarize any findings from the external AI that were **not already captured** in Phase 2. Discard duplicates.

## Output Format

```markdown
## Code Review Report — <scope>

### Phase 1: Deterministic Checks
✓ TypeScript — PASS
✗ ESLint — FAIL
  src/components/Card.tsx:14:3 — no-unused-vars: 'ref' is defined but never used

### Phase 2: LLM Review

| Dimension      | Grade |
|----------------|-------|
| Correctness    | B     |
| Readability    | A     |
| Security       | D     |
| Test Coverage  | F     |
| Performance    | B     |

#### Correctness — B
- `src/utils/auth.ts:34` — Token expiry check uses `>` instead of `>=`; expires exactly at boundary will be treated as valid

#### Security — D
- `src/api/search.ts:87` — `req.query.q` interpolated directly into template string passed to database client (injection risk)
- `src/api/users.ts:12` — Password hash logged at `console.log` on line 12

#### Test Coverage — F
- No tests exist for `src/utils/auth.ts` — token validation, expiry edge cases uncovered
- `src/api/search.ts` — error path (DB failure) has no test

#### Performance — B
- `src/components/UserList.tsx:22` — fetches all users on every render; consider memoizing or moving fetch outside component

### Phase 3: External AI (Codex)
Additional findings not already captured:
- `src/hooks/useDebounce.ts:8` — closure captures stale `callback` reference; dependency array incomplete

### Overall: REQUEST CHANGES
Critical security issues must be resolved. Test coverage gaps should be addressed before shipping.
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Vague findings: "this could be improved" | Always include `file:line` and the specific problem |
| Skipping Phase 1 because "it's obviously fine" | Always run the script — type errors hide in unexpected places |
| Reporting external AI duplicates | Only surface findings that add new information |
| Inflated grades to be diplomatic | Grade honestly — D and F grades exist for a reason |
| Skipping Test Coverage because there are no tests | Grade F and list what tests are missing |
