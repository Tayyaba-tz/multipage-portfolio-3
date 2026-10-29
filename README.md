# Tayyaba Zubaid | Portfolio

A multi-page, game-themed portfolio website for Tayyaba Zubaid, a Frontend Engineer and Computer Science student at Qarshi University. Built with plain HTML5, CSS3 and vanilla JavaScript, with no frameworks or build step.

## Live Site

**Vercel:** https://tayyaba-portfolio-3.vercel.app/

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Home | `index.html` | Intro, role badge, location, animated stats, floating tech blocks |
| About | `about.html` | Profile card, short bio, list of focus areas |
| Skills | `skills.html` | Inventory-style skill slots in four groups (no percentages) |
| Projects | `projects.html` | Filterable project cards with GitHub and live links |
| Contact | `contact.html` | Email, LinkedIn and GitHub cards |

## Features

- **Game-style interface:** HUD navbar with hearts and a coin counter, chunky buttons that press down, a boot loading screen, and "Stage" project cards.
- **Animations:** letter-drop hero title, counting stats, floating tech blocks, inventory items that drop into place, scroll reveals, wobbling contact cards, click sparkles.
- **Collectible coins:** click the coins on any page to collect them. The total is saved in the browser with `localStorage`.
- **Project filter:** All, Web Design, Desktop App and Console-based.
- **Shared layout:** the same navbar, footer, fonts, colors and components on every page. The active nav link is set in JavaScript from the `data-page` attribute on `<body>`.
- **Responsive:** works from 360px phones up to large desktops, with a hamburger menu on small screens.
- **Accessible:** semantic HTML, visible keyboard focus, ARIA labels, and reduced-motion support that switches all animation off.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Google Fonts: **Inter** (one simple, readable font for everything)

## Color Palette

| Color | Hex | Used for |
| --- | --- | --- |
| Crimson | `#E81760` | Primary buttons and highlights |
| Amber | `#F0A01D` | Accents and badges |
| Pink | `#E6A5CD` | Soft backgrounds and decoration |
| Black | `#000000` | Text, borders and shadows |
| White | `#FFFFFF` | Backgrounds and contrast |

## Project Structure

```
portfolio/
├── index.html, about.html, skills.html, projects.html, contact.html
├── 404.html               (custom "page not found" screen)
├── css/style.css
├── js/main.js
├── assets/
│   ├── Tayyaba_Zubaid_CV.pdf
│   ├── profile.png / profile.webp   (photo + optimized copy)
│   ├── og-image.png                 (social share preview)
│   └── favicon.svg
├── partials/              (header.html and footer.html: the single source for navbar and footer)
├── tools/sync_layout.py   (copies the partials into every page)
├── robots.txt, sitemap.xml
├── vercel.json            (security and cache headers)
└── README.md
```

## Run Locally

No installation is needed.

1. Download or clone the project.
2. Open `index.html` in any modern browser.

Or serve it with a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000`.

## Customize

- **Profile photo:** add your image as `assets/profile.png`. Until then, the About page shows your initials.
- **CV:** replace `assets/Tayyaba_Zubaid_CV.pdf` and keep the same file name, or update the "Download CV" link in the navbar of every page.
- **Projects:** edit the cards in `projects.html`. Set `data-category` to one of `Web Design`, `Desktop App` or `Console-based` so the filter works.
- **Skills:** add or remove `<li class="slot">` items in `skills.html`.
- **Colors and spacing:** change the variables at the top of `css/style.css`.
- **Navbar and footer:** edit `partials/header.html` or `partials/footer.html`, then run `python3 tools/sync_layout.py` to update every page at once.

## Projects Featured

| Project | Category | Stack |
| --- | --- | --- |
| Deenify | Web Design | HTML5, CSS3 |
| FinTrack | Desktop App | Java, Java Swing, OOP |
| Pokemon Encyclopedia | Web Design | HTML5, CSS3, JS, PokeAPI |
| Weather Dashboard | Web Design | HTML5, CSS3, JS |
| Evacuation Planner | Console-based | C++, Dijkstra's, Segment Tree |
| Tomzora Image Gallery | Web Design | JS, Unsplash API |
| Hybrid Sorting | Desktop App | Python, CustomTkinter, Matplotlib |

## Deploy

### Vercel

1. Push the project to GitHub and import the repository in Vercel.
2. Leave the framework preset as **Other**, with no build command and no output directory.
3. Deploy. Vercel reads `vercel.json` for the security headers.

### Netlify

1. Push the project to a GitHub repository.
2. In Netlify, choose **Add new site**, then **Import an existing project**.
3. Select the repository. Leave the build command empty and set the publish directory to `/`.
4. Deploy, then paste the live URL into the **Live Site** section above.

### GitHub Pages

1. Push the project to GitHub.
2. Open **Settings**, then **Pages**.
3. Choose the `main` branch and the root folder, then save.

## SEO

- Unique title and description on every page, canonical URLs, Open Graph and Twitter share tags, and a Person structured-data block on the home page.
- `robots.txt` and `sitemap.xml` are included. If you change your domain, search and replace `https://portfolio-3-seven-xi.vercel.app` in the HTML files, `sitemap.xml` and `robots.txt`.
- After deploying, submit `sitemap.xml` in Google Search Console.

## Accessibility

- Skip-to-content link, one `h1` per page, labelled landmarks, visible keyboard focus and descriptive link names (for example "Deenify on GitHub").
- Text contrast meets WCAG AA. Animations switch off for visitors who prefer reduced motion.
- On touch screens, project details are always visible because there is no hover.

## Security

- Content Security Policy (meta tag in every page and the full version in `vercel.json`), plus `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and HSTS headers.
- External links use `rel="noopener noreferrer"`. No inline scripts or styles, and no user data is collected. Only the coin total is stored locally in the browser.

## Maintenance

- Colors, spacing and the font live in the variables at the top of `css/style.css`.
- Add a new project by copying an existing project card in `projects.html` and editing it. Projects live on one page, so `sitemap.xml` does not change.
- Files use LF line endings (`.gitattributes`, `.editorconfig`).

## Browser Support

Current versions of Chrome, Edge, Firefox and Safari.

## Contact

- Email: tayyabazubaid@gmail.com
- LinkedIn: [tayyaba-zubaid](https://www.linkedin.com/in/tayyaba-zubaid/)
- GitHub: [Tayyaba-tz](https://github.com/Tayyaba-tz)

## Prompts Used

**Prompt 1:** Multi-Page Portfolio Website

Build a complete, fully coded multi-page portfolio website for Tayyaba Zubaid using only HTML5, CSS3, and vanilla JavaScript. Each section of the portfolio lives on its own separate HTML page.

Color scheme: 
#E6A5CD, 
#E81760, 
#F0A01D, 
#000000, 
#FFFFFF

Font: Syne for headings, Inter for body text. Load both from Google Fonts.

File structure:

index.html
about.html
skills.html
projects.html
contact.html
css/style.css
js/main.js
assets/ (for images, icons, CV)

Design requirements:

Modern, clean, and visually appealing look consistent across all pages.
Every page must feel like part of the same website. Same fonts, colors, spacing, and component styles throughout.
Use the color scheme meaningfully. 
#E81760 for primary buttons and highlights, 
#F0A01D for accents and badges, 
#E6A5CD for soft backgrounds and decorative elements, 
#000000 and 
#FFFFFF for text and contrast.

Shared elements across all pages:

The exact same navbar on every page. Active nav link highlighted based on which page is open, handled in JS using a data-page attribute on the body or a per-page class.
The exact same footer on every page.
All pages link to the same css/style.css and js/main.js.

Pages to build:

index.html — Home
Badge “Frontend Engineer”. Large bold heading “TAYYABA ZUBAID”. Description about being a Frontend Engineering Intern at FlyRank and CS student at Qarshi University, building AI-assisted full-stack apps. Location badge: Lahore, Pakistan. Get In Touch button linking to contact.html. 4 animated stats on load: Projects (8+), Experience (2+), Certificates (3+), Technologies (10+). Floating tech logo blobs in the background.

about.html — About
Two column layout. Left: profile image with decorative blob and experience badge “2+ Years”. Right: label “About Me”, heading “Who I am?”, two short paragraphs, checklist: Frontend development with React and HTML/CSS, Responsive and accessible UI design, REST API with Node.js and Express, AI-assisted development workflows, Algorithms and data structures.

skills.html — Skills
Label “Expertise”, heading “Technical Skills”. Skill bars organized into 4 groups with category headings. All bars animate by filling left to right on page load. No percentage numbers anywhere on any bar.

Languages: JavaScript, Python, C++, Java, SQL
Frontend: HTML5, CSS3, React, Vite, React Router, Responsive Design
Backend: Node.js, Express.js, JWT Authentication, REST API Design
Tools: Git, GitHub, VS Code, Vercel, Render

projects.html — Projects
Label “Portfolio”, heading “Featured Projects”. Filter buttons: All, Web Design, Desktop App, Console-based. Responsive project card grid. On hover, smooth overlay shows: category tag, title, description, tech stack, GitHub button, and Live View button where available. All 7 projects included with correct categories and tech stacks as listed in the table below.

Project	Category	Tech	GitHub	Live
Deenify	Web Design	HTML5, CSS3	Yes	Yes
FinTrack	Desktop App	Java, Java Swing, OOP	Yes	No
Pokemon Encyclopedia	Web Design	HTML5, CSS3, JS, PokeAPI	Yes	Yes
Weather Dashboard	Web Design	HTML5, CSS3, JS	Yes	Yes
Evacuation Planner	Console-based	C++, Dijkstra’s, Segment Tree	Yes	No
Tomzora Image Gallery	Web Design	JS, Unsplash API	Yes	Yes
Hybrid Sorting	Desktop App	Python, CustomTkinter, Matplotlib	Yes	No

contact.html — Contact
Label “Contact”, heading “Let’s Work Together”. 3 contact cards: Email (tayyabazubaid@gmail.com), LinkedIn (tayyaba-zubaid), GitHub (Tayyaba-tz). Footer below.

JavaScript functionality:

Active nav link detection per page on load.
Hamburger menu works on all pages.
Smooth fade-in animation on every page load.
Project filter buttons on projects.html show and hide cards by category.
Stat counter animation on index.html on page load.
Skill bars animate on skills.html page load. No numbers shown.
All internal links point to the correct .html files.

Standards:

Fully responsive on mobile (360px and above), tablet, and desktop.
Semantic HTML5 throughout.
No inline styles. All styling in style.css.
Clean, well-commented code in all files.

Deliver the complete working code for all 5 HTML files, css/style.css, and js/main.js.

**Prompt 2:**

Add animations and make the portfolio look like a game as perfect as possible

**Prompt 3:**

Fix the issue in the hero-title so that it could display in 2 lines

**Prompt 4:**

Do the following fixes and edits in the uploaded edited zip:

1. Change font style. Use simple font and increase font size. Decrease the font size of the hero title and increase the remaining font size as they are too small to read
2. In backend section, the JWT is not fitting in the box. Fix it
3. Check complete responsiveness, SEO optimization, accessibility, security, maintenance

--------

&copy; 2026 Tayyaba Zubaid. All rights reserved.