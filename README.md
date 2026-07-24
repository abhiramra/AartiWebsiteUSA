# Aarti for Girls USA — aartiforgirlsusa.org

A static recreation of the Aarti for Girls Inc. (USA) website, built with plain
HTML, CSS, and JavaScript. It reuses the shared design system from the
[AartiWebsite](https://github.com/abhiramra/AartiWebsite) (India) repository so
both sites share one brand language.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About (story, vision, mission, principles, programs) |
| `impact.html` | Impact (Care · Educate · Empower · Advocate + stats) |
| `team.html` | Team (Board of Directors with expandable bios) |
| `donate.html` | Donate (support form + ways to give) |

## How it works

- **No build step.** Open `index.html` in a browser, or serve the folder with any
  static host (GitHub Pages, Netlify, etc.).
- **Shared layout.** The nav bar and footer are defined once as template strings
  in `js/main.js` and injected into every page via `<div id="nav-placeholder">`
  and `<div id="footer-placeholder">`. Edit them in one place.
- **Design system.** All styling lives in `css/style.css` (CSS custom properties
  for colors, spacing, shadows). Brand colors: pink `#e84a7f`, teal `#1dada0`,
  yellow `#f5a623`; typeface Montserrat.
- **Interactive bits** (`js/main.js`): mobile nav, expandable board bios, the
  donation amount picker, and the impact-page anchor tabs.

## Deploying to GitHub Pages

Settings → Pages → Deploy from branch → `main` / root. The site is entirely
static, so no further configuration is needed.

## Images / content notes

- Board headshots (`team-*.jpg`) are the actual directors.
- The live site is hosted on Wix, whose image CDN could not be reached during the
  build, so a few **home-page photos are stand-ins** from the shared asset library
  and can be swapped for the real ones: `journey-sivajyothi.jpg`,
  `journey-soundarya.jpg`, `journey-chitti.jpg`, and `alumni-harshita.jpg`.
- The **donation form is not yet wired to a payment processor.** On submit it shows
  a thank-you message and an email fallback. Connect it to your provider
  (e.g. Stripe, Donorbox, PayPal) or Wix Forms to accept live payments.
- Footer links for Volunteer, Privacy Policy, Certifications, and FAQs point to the
  main `aartiforgirls.org` domain, matching the current live site.
