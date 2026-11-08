# Bhaskar Aryal | Portfolio

Next.js (App Router) portfolio: Home, About, Skills, Projects (with a case-study page per project) and Contact.
No gallery, resume, certificates or articles.

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit your content
Everything lives in `lib/data.js`: name, email, intro, skills and projects.
To add a project, add an object to `projects`; its page appears at `/projects/<slug>` automatically.
