# Sahyog Yuva Samiti — Website

React + Vite website built from the organizational profile deck.
Youth • Service • Prosperity · Registration No. JJ-6043 · Madhya Pradesh

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Node 18+ is recommended.

## Folder structure

```
sahyog-yuva-samiti/
├─ index.html              # HTML shell, fonts, meta tags
├─ vite.config.js
├─ tailwind.config.js      # colours, fonts, animations (design tokens live here)
├─ postcss.config.js
├─ public/
│  ├─ images/             # all site photography (replace these files)
│  ├─ favicon.svg
│  ├─ logo.png             # ← add the official logo here (optional)
│  └─ mp-map.png           # ← add the district map here (optional)
└─ src/
   ├─ main.jsx             # React entry
   ├─ App.jsx              # routes + page transitions
   ├─ index.css            # Tailwind layers + reusable classes (.btn, .section, …)
   ├─ data/
   │  ├─ site.js           # ALL website copy — edit here first
   │  └─ images.js         # ALL photos: paths, alt text, gallery captions
   ├─ components/
   │  ├─ Navbar.jsx        # sticky header, scroll progress bar, mobile menu
   │  ├─ Footer.jsx
   │  ├─ Logo.jsx          # uses /logo.png, falls back to an inline SVG mark
   │  ├─ PageHeader.jsx    # inner-page masthead
   │  ├─ PageTransition.jsx
   │  ├─ Reveal.jsx        # scroll-into-view animation wrapper
   │  ├─ Counter.jsx       # animated number counter
   │  ├─ MarqueeBand.jsx   # moving keyword strip
   │  ├─ SectionHeading.jsx
   │  ├─ CTASection.jsx
   │  ├─ Img.jsx           # lazy-loaded photo with fade-in and fallback
   │  ├─ PhotoGrid.jsx     # filterable gallery wall + lightbox
   │  ├─ PhotoStat.jsx
   │  ├─ EnquiryForm.jsx   # validated contact/partnership form
   │  ├─ ScrollToTop.jsx
   │  └─ accents.js        # per-program colour mapping
   └─ pages/
      ├─ Home.jsx
      ├─ About.jsx
      ├─ Programs.jsx      # anchored sections: #education, #sports, #nasha-mukti, #community
      ├─ Presence.jsx
      ├─ Gallery.jsx       # filterable photo wall with lightbox
      ├─ Partner.jsx
      ├─ Contact.jsx
      └─ NotFound.jsx
```

## Editing content

Almost everything on the site is driven by `src/data/site.js` — phone number, email,
social handles, program descriptions, district lists, partner tracks, pilot steps.
Change a value there and it updates on every page.

## Design tokens

Defined in `tailwind.config.js`:

| Token | Hex | Used for |
| --- | --- | --- |
| `ink` | `#0E2545` | Headlines, dark sections |
| `navy-700` | `#16355F` | Secondary dark |
| `saffron-500` | `#E4611F` | Primary accent, buttons, rules |
| `leaf-500` | `#1B7D48` | Sports / positive confirmations |
| `cream` | `#FBF7F0` | Page background |
| `sand` | `#EFE7DA` | Quiet panels |

Fonts: **Bricolage Grotesque** (headlines), **Instrument Sans** (body),
**Tiro Devanagari Hindi** (Hindi tagline) — loaded from Google Fonts in `index.html`.

## Photographs — read this first

The site is photo-led. Every image slot is filled with a **labelled placeholder** that
tells you what shape and subject belongs there. Replace them with real photos and the
whole site comes alive.

1. Open `public/images/` — each file is named after where it appears (`hero.jpg`,
   `education.jpg`, `gallery-01.jpg`, …) and the placeholder itself states the crop.
2. Save your photo over the file with the **same name**. Nothing else to change.
3. To use different file names, or to add more gallery photos, edit
   `src/data/images.js` — that file lists every photo, its alt text, caption,
   place and gallery tag.

Photo tips: 1600–2000px wide, JPEG, under ~400 KB each (compress at squoosh.app or
tinypng.com). Faces and action read better than empty grounds. Write real alt text —
it helps both screen readers and Google.

If a file is missing, the slot shows a clear "add a photo at …" message instead of
breaking the layout.

### Other assets

1. Save the logo as `public/logo.png` (square, transparent PNG works best).
2. Save the MP district map as `public/mp-map.png` to show it on the *Our presence* page.
   If either file is missing the site quietly falls back — nothing breaks.

## Contact form

`EnquiryForm.jsx` currently opens the visitor's mail app with a prefilled message to
`sahyog.yuva.samiti@gmail.com`. To collect submissions on a server instead, replace the
body of `handleSubmit` with a `fetch()` call to Formspree, Google Forms or your own API.

## Deploying

The build output in `/dist` is a static site — deploy to Netlify, Vercel, GitHub Pages
or any static host. On Netlify/Vercel, add a rewrite so every path serves `index.html`
(needed for React Router):

- **Netlify** — create `public/_redirects` containing: `/*  /index.html  200`
- **Vercel** — add `vercel.json` with a rewrite of `/(.*)` to `/index.html`

## Accessibility & performance notes

- Skip-to-content link, visible focus rings, semantic landmarks.
- All motion respects `prefers-reduced-motion`.
- Responsive from 360px upward; no layout depends on hover.
