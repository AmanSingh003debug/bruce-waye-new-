# 🦇 Batman App — The Dark Knight

A fully themed Batman fan-site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deploy in minutes to Vercel.

## 🚀 Deploy to Vercel (Fastest Method)

### Option A — Deploy via Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Keep all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy** ✅

### Option B — Deploy via CLI
```bash
npm install -g vercel
vercel
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## 🏗️ Build & Test Locally

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
batman-app/
├── src/
│   ├── pages/
│   │   ├── _app.tsx        ← App entry point
│   │   ├── _document.tsx   ← HTML document with fonts
│   │   ├── index.tsx       ← Home page
│   │   ├── about.tsx       ← Bruce Wayne origin
│   │   ├── arsenal.tsx     ← Bat-gadgets
│   │   ├── rogues.tsx      ← Villains gallery
│   │   ├── gallery.tsx     ← Quotes & suits
│   │   └── 404.tsx         ← Not found page
│   ├── components/
│   │   ├── Layout.tsx      ← Page wrapper
│   │   ├── Navbar.tsx      ← Navigation
│   │   ├── Footer.tsx      ← Footer
│   │   └── BatLogo.tsx     ← SVG Batman logo
│   └── styles/
│       └── globals.css     ← Global styles + Tailwind
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── vercel.json
└── .gitignore
```

## 🎨 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Epic hero landing with bat signal |
| About | `/about` | Bruce Wayne origin & timeline |
| Arsenal | `/arsenal` | Interactive gadgets with filters |
| Rogues | `/rogues` | Clickable villain cards |
| Gallery | `/gallery` | Quotes & suit evolution |

## 🛠️ Tech Stack

- **Next.js 14** (Pages Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Cinzel + Rajdhani)
- **Lucide React** (icons)

## ⚡ No Extra Config Needed

- No `.env` files required
- No external APIs
- Static-friendly — works on Vercel free tier
- Zero-config Vercel deploy
