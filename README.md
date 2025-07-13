# SnappyBits Website

A modern, production-ready Next.js website for SnappyBits IT consulting.

## Features
- Next.js (latest) + TypeScript
- Tailwind CSS for styling
- Fully responsive, accessible, and SEO-optimized
- Contact form (integrated with SendGrid or Netlify Forms)
- Google Analytics (GA4) or Plausible integration
- Structured data (JSON-LD) for SEO
- Modern UI inspired by Nexton.dev and Tecla.io
- LATAM Staff Augmentation section

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd snappybits-website
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Linting & Formatting
```bash
npm run lint
npm run format
```

### Build & Deploy
```bash
npm run build
npm start
```

Deploy to Vercel or AWS S3 + CloudFront (see `DEPLOYMENT.md`).

## Project Structure
- `src/app/` — Pages and layouts
- `src/components/` — Reusable UI components
- `src/lib/` — Utilities
- `public/` — Static assets

## License
MIT
