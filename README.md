# Tayyaba Zubaid | Portfolio

A multi-page, game-themed portfolio website for Tayyaba Zubaid, a Frontend Engineer and Computer Science student at Qarshi University. Built with plain HTML5, CSS3 and vanilla JavaScript, with no frameworks or build step.

## Live Site

**Vercel:** https://portfolio-3-seven-xi.vercel.app/

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
- Google Fonts: **Syne** (headings) and **Inter** (body)

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
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── Tayyaba_Zubaid_CV.pdf
│   └── profile.png 
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
- **Navbar and footer:** these are repeated in each HTML file, so update all five when you change them.

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

### Netlify

1. Push the project to a GitHub repository.
2. In Netlify, choose **Add new site**, then **Import an existing project**.
3. Select the repository. Leave the build command empty and set the publish directory to `/`.
4. Deploy, then paste the live URL into the **Live Site** section above.

### GitHub Pages

1. Push the project to GitHub.
2. Open **Settings**, then **Pages**.
3. Choose the `main` branch and the root folder, then save.

## Browser Support

Current versions of Chrome, Edge, Firefox and Safari.

## Contact

- Email: tayyabazubaid@gmail.com
- LinkedIn: [tayyaba-zubaid](https://www.linkedin.com/in/tayyaba-zubaid/)
- GitHub: [Tayyaba-tz](https://github.com/Tayyaba-tz)

## Prompts Used

&copy; 2026 Tayyaba Zubaid. All rights reserved.