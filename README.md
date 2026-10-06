# TR3C3 Coffee & Brunch

A multilingual website for a specialty coffee and brunch restaurant in Miami Platja, Spain. It brings the restaurant's menus, story, team, and visit information into one fast, responsive experience.

[Live website](https://trecemiami.com/es/) · [Spanish project guide](README.es.md)

## Overview

This real business website serves local customers and international visitors. Its static pages are designed for quick browsing and local search discovery.

## Features

- Menus and content in Spanish, Catalan, English, French, German, Dutch, Italian, and Simplified Chinese.
- Responsive restaurant, team, menu, and local search pages.
- Canonical URLs, structured data, sitemap, redirects, and internal link audits.
- Optimized local images, accessible navigation, and a custom 404 page.

## Tech Stack

Astro 5, TypeScript, CSS, `@astrojs/sitemap`, Node.js, and npm.

## Architecture

Astro generates static pages. Shared components and layouts provide navigation and metadata; `src/data/` and `src/i18n/` hold menus and localized content. Scripts in `tools/` audit the generated site.

## Getting Started

### Prerequisites

Node.js and npm.

### Installation and local run

```bash
git clone https://github.com/EDGAR0407267/tr3c3.git
cd tr3c3
npm ci
npm run dev
```

Astro prints the local URL. No environment variables are required for local development. To check types, build, and audit SEO and links, run `npm run validate`. `npm run build` creates `dist/`; `npm run preview` serves the build locally.

## Project Structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Localized routes and local search pages |
| `src/components/`, `src/layouts/` | Reusable UI and page metadata |
| `src/data/`, `src/i18n/` | Menus, translations, and locale configuration |
| `public/` | Static brand, font, and image assets |
| `tools/`, `docs/` | Audits, design, SEO, and deployment notes |

## Status

**Production.** The site is available at [trecemiami.com](https://trecemiami.com/es/).

## Author

Edgar Pedret Girones · [GitHub](https://github.com/EDGAR0407267)

The restaurant's brand and visual assets remain part of the TR3C3 project; see the [usage note](README.es.md#licencia-y-uso).
