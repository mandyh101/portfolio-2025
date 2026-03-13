# CLAUDE.md

## Project Overview

Refer to `README.md` for project overview.

## Styling and Theming

For frontend tasks that require style or theme changes refer to `.claude/agent-docs/styling-and-theming.md`

### Content Management
When creating new projects or

**Projects**: All project data is defined in `src/constants/projects.tsx` as a static array.

**Blog Posts**: Each blog post lives in its own directory under `src/app/blog/[slug]/`:
- `content.mdx` - The blog post content
- `page.tsx` - Wrapper that imports and renders the MDX

**Navigation**: Links defined in `src/constants/navlinks.tsx` using Tabler Icons

## Important Notes

- No test suite is currently configured
- Deployed on Vercel (production URL: https://mandy-hale-dev-portfolio.vercel.app), see deployment instructions in `README.md`
- The blog page is currently commented out in navigation (see `src/constants/navlinks.tsx`)
- Project content can include videos using standard HTML5 `<video>` tags with autoPlay, muted, and loop attributes
