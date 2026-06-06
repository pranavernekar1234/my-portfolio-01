# Pranav Vernekar — Portfolio

A cinematic glassmorphic portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript** using the Velorah design system.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
pranav-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, font imports, metadata
│   ├── page.tsx          # Main single-page portfolio
│   └── globals.css       # CSS variables, glass utilities, animations
├── tailwind.config.ts    # Custom fonts, colors, animations
├── next.config.ts        # Static export config for Netlify
├── netlify.toml          # Netlify build & redirect rules
├── tsconfig.json         # TypeScript config
└── package.json
```

---

## 🌐 Deploying to Netlify

### Option 1 — Netlify CLI
```bash
npm run build
npx netlify deploy --prod --dir=out
```

### Option 2 — Git Integration
1. Push this repo to GitHub/GitLab
2. Log in to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `out`
5. Click **Deploy site** ✅

The `netlify.toml` handles all redirect rules automatically — no manual configuration needed.

---

## 🎨 Design System — Velorah Cinematic

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `201 100% 13%` | Deep cinematic navy |
| `--foreground` | `0 0% 100%` | Pure white |
| `--muted-foreground` | `240 4% 66%` | Muted slate/gray |
| `--font-display` | Instrument Serif | Display/heading font |
| `--font-body` | Inter 400/500 | Body text font |

### Glass Utilities
- `.glass` — subtle glassmorphism
- `.glass-strong` — heavier blur + opacity
- `.glass-card` — card with hover transition
- `.glass-nav` — navbar with scroll effect
- `.btn-glass` — liquid glass button
- `.btn-primary` — white filled CTA

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS v3 + custom CSS utilities
- **Typography**: Instrument Serif + Inter (Google Fonts)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Netlify (static HTML export)
