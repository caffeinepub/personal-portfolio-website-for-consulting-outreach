# Specification

## Summary
**Goal:** Replace the 'AR' text/initials placeholder logo throughout the site with the uploaded Vayutaksha Consultancy logo image.

**Planned changes:**
- Save the uploaded logo image as a static asset at `frontend/public/assets/generated/vayutaksha-logo.png`
- Replace the 'AR' initials placeholder in the navigation bar (PortfolioNav.tsx) with an `<img>` tag pointing to the logo (~40–48px height)
- Replace the 'AR' logo mark in the hero section (HeroSection.tsx) with the logo image at an appropriate larger size
- Replace the 'AR' mark in the footer (App.tsx) with the logo image
- Set `alt="Vayutaksha Consultancy"` on all logo image elements

**User-visible outcome:** Every instance of the 'AR' placeholder is replaced by the actual Vayutaksha Consultancy logo image, sized appropriately in the nav, hero, and footer without distortion.
