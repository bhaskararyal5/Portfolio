# Bhaskar Aryal | Portfolio (guide)

A Next.js (App Router) website: Home, About, Skills, Projects (one case-study
page per project) and Contact. Every file starts with a short comment that says
what it does; this guide explains how they fit together.

## Run it
    npm install
    npm run dev          # open http://localhost:3000
    npm run build && npm start     # production version

Needs Node.js 18.18 or newer.

## The big idea (read this first)
- **Content is separate from layout.** Text, links, skills and projects live in
  ONE file: `lib/data.js`. Pages and components only *display* that data.
- **Each page is a `page.jsx` file inside `app/`.** The folder name is the web
  address (`app/about/page.jsx` is `/about`).
- **Components are reusable pieces** (menu, footer, cards) in `components/`.
- **All styling is in one file:** `app/globals.css`.
- **Pictures and videos go in `public/`.** A file at `public/profile.jpg` is
  used in code as `/profile.jpg`.

## What every file does
| File | Purpose |
|---|---|
| `lib/data.js` | All your content: name, email, links, skills, projects, About text, education. **Edit this most.** |
| `app/layout.jsx` | Frame around every page: font, tab title, background, header, footer. |
| `app/globals.css` | All colors, spacing, animations and the phone/tablet rules. |
| `app/page.jsx` | Home page: intro + photo, skills cards, featured projects. |
| `app/about/page.jsx` | About page: photo, bio, education timeline. |
| `app/skills/page.jsx` | Skills page (title); uses `SkillsExplorer`. |
| `app/projects/page.jsx` | Projects list (all projects). |
| `app/projects/[slug]/page.jsx` | One template that builds every project's case-study page. |
| `app/contact/page.jsx` | Contact page: email, social cards, message form. |
| `components/Header.jsx` | Top menu and light/dark button. |
| `components/Footer.jsx` | Four-column footer. |
| `components/Typing.jsx` | Typing headline animation. |
| `components/Avatar.jsx` | Round photo on the home page. |
| `components/ProjectCard.jsx` | Project card with hover/touch video preview. |
| `components/ProjectVideo.jsx` | Video player on a project page. |
| `components/SkillCards.jsx` | Compact skill cards on the home page. |
| `components/SkillsExplorer.jsx` | Clickable skills panel on the Skills page. |
| `components/ScrollReveal.jsx` | Fade-in-on-scroll effect. |
| `components/NeuralBackground.jsx` | Animated network background. |
| `components/icons.jsx` | Social and email icons. |
| `public/profile.jpg` | Your photo (home and About). |
| `public/projects/` | Project videos, preview pictures and the circuit picture. |
| `package.json` | Project name and the libraries it needs (Next.js, React). |
| `next.config.js`, `jsconfig.json` | Small settings files; you can ignore them. |

## Common edits
- **Change name, email or social links:** `site` in `lib/data.js`.
- **Change the headline words:** `site.tagline` in `lib/data.js`.
- **Add a skill tag:** add it to that category's `tools` list.
- **Add a project:** copy an existing entry in `projects` (`lib/data.js`), change
  the fields, and put its image/video in `public/projects/`. Its page and card appear by themselves.
- **Change your photo:** replace `public/profile.jpg` (square works best).
- **Change the main color:** `--accent` in `app/globals.css` (one value for light, one for dark).
- **Make the project preview longer:** `PREVIEW_SECONDS` in `components/ProjectCard.jsx`.
- **Add a menu item:** the `links` list in `components/Header.jsx`, plus a new folder in `app/` with a `page.jsx`.

## Putting it online (Render Static Site)
`next.config.js` is already set to static export, so `npm run build` makes a
plain website in the `out` folder.
1. Push the project to GitHub (`git init`, `git add .`, `git commit`, then push to a new repo).
2. On render.com: **New -> Static Site**, connect the repo.
3. **Build Command:** `npm install && npm run build`
4. **Publish Directory:** `out`
5. Click **Create Static Site**. Every later `git push` redeploys automatically.

Other static hosts (Netlify, Vercel, GitHub Pages) work the same way: build
command `npm run build`, publish the `out` folder.
