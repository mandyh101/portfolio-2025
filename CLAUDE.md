# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Mandy Hale's personal portfolio website built with Next.js 13 (App Router), React, TypeScript, and Tailwind CSS. The site showcases projects, work experience, and blog posts using a sidebar navigation layout based on the Sidefolio template from Aceternity UI.

## Common Commands

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Build & Deploy
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Deployment (Vercel)
vercel               # Deploy preview version
vercel --prod        # Deploy to production
```

## Architecture & Key Patterns

### App Structure (Next.js 13 App Router)

The application uses Next.js 13's App Router with the following structure:

- `src/app/` - Pages and routes
  - `layout.tsx` - Root layout with Sidebar and Footer
  - `page.tsx` - Homepage
  - `projects/[slug]/page.tsx` - Dynamic project detail pages
  - `blog/[slug]/` - Blog posts as MDX files in individual directories
- `src/components/` - Reusable React components
- `src/constants/` - Static data (projects, navlinks, socials, timeline)
- `src/types/` - TypeScript type definitions

### Content Management

**Projects**: All project data is defined in `src/constants/projects.tsx` as a static array. Each project includes:
- Basic metadata (title, description, href, slug)
- Images (thumbnail and gallery images)
- Tech stack array
- Content as JSX (rendered in detail page)
- Optional flags (showGithubLink, hidePreview)

**Blog Posts**: Each blog post lives in its own directory under `src/app/blog/[slug]/`:
- `content.mdx` - The blog post content
- `page.tsx` - Wrapper that imports and renders the MDX

**Navigation**: Links defined in `src/constants/navlinks.tsx` using Tabler Icons

### Styling & Theming

**Custom Color Palette** (defined in `tailwind.config.ts`):
- Primary: `sea-green` (50-950 scale, default 500: #04c8c1)
- Accent: `tropical-indigo` (50-950 scale, default 500: #a09be7)
- Background: `seasalt-white` (#F7F6F6)
- Text: Uses CSS variables `--neutral-700` (primary) and `--neutral-500` (secondary)

**Fonts**:
- Headings: Raleway (variable: `--font-raleway`, class: `font-heading`)
- Body: Inter (variable: `--font-inter`, class: `font-sans`)

### MDX Configuration

**What is MDX**: MDX allows writing JSX (React components) inside Markdown files, combining the simplicity of Markdown for content with the power of React components for interactive elements.

**Current Status**: MDX is configured but not actively used. Example blog posts exist in `src/app/blog/` directories and will be utilized when the blog feature is fully implemented.

**Configuration** (`next.config.mjs`):
- `remark-gfm` - Adds GitHub Flavored Markdown support (tables, strikethrough, etc.)
- `rehype-prism` - Provides syntax highlighting for code blocks
- Custom components can be defined in `mdx-components.tsx` to override default Markdown element rendering

**How It Works**: Blog posts are written as `.mdx` files where you can:
- Write regular Markdown content
- Import and use React components (e.g., `<CodeWindow>`, `<BlogLayout>`)
- Define metadata in a `meta` object
- Wrap content in layout components for consistent styling

### Layout System

The app uses a fixed sidebar layout:
- `Sidebar` component is always visible (collapsible on mobile)
- Main content area with rounded corners on desktop (`lg:rounded-tl-xl`)
- Mobile responsive with margin adjustments (`ml-[3rem] md:ml-[2rem] lg:ml-0`)

### Dynamic Routes

**Project Details**: `/projects/[slug]`
- Reads from `src/constants/projects.tsx`
- Generates metadata dynamically
- Redirects to `/projects` if slug not found

**Blog Posts**: `/blog/[slug]`
- Each post is a separate directory with `content.mdx` and `page.tsx`
- No dynamic generation currently implemented

## Important Notes

- No test suite is currently configured
- Deployed on Vercel (production URL: https://mandy-hale-dev-portfolio.vercel.app)
- Images are hosted on Unsplash and Cloudinary (configured in next.config.mjs)
- The blog page is currently commented out in navigation (see `src/constants/navlinks.tsx`)
- Project content can include videos using standard HTML5 `<video>` tags with autoPlay, muted, and loop attributes
