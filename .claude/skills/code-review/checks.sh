#!/usr/bin/env bash
# Deterministic pre-review checks
# Runs linting, type checking, tests, and git diff — outputs structured results for LLM review
#
# Usage:
#   bash checks.sh              # check uncommitted changes
#   bash checks.sh --base main  # check diff against a branch

BASE="${2:-}"  # optional --base <branch>

echo "==== CODE REVIEW: DETERMINISTIC CHECKS ===="
echo ""

# ── Git diff summary ──────────────────────────────────────────────────────────
echo "## GIT DIFF SUMMARY"
if [[ -n "$BASE" && "$1" == "--base" ]]; then
  git diff "$BASE"...HEAD --stat
  echo ""
  git diff "$BASE"...HEAD
else
  git diff HEAD --stat
  echo ""
  git diff HEAD
fi
echo ""

# ── TypeScript ────────────────────────────────────────────────────────────────
echo "## TYPESCRIPT"
if [[ -f "tsconfig.json" ]]; then
  npx tsc --noEmit 2>&1 || true
else
  echo "SKIP: no tsconfig.json"
fi
echo ""

# ── ESLint ────────────────────────────────────────────────────────────────────
echo "## ESLINT"
if npx eslint --version &>/dev/null 2>&1; then
  npx eslint . --format=unix 2>&1 || true
else
  echo "SKIP: eslint not available"
fi
echo ""

# ── Tests ─────────────────────────────────────────────────────────────────────
echo "## TESTS"
if [[ -f "package.json" ]] && grep -q '"test"' package.json; then
  npm test --if-present 2>&1 || true
else
  echo "SKIP: no test script configured"
fi
echo ""

echo "==== END CHECKS ===="
