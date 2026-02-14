# Specification

## Summary
**Goal:** Create a responsive personal portfolio website for consulting outreach with clear navigation, consistent theming, editable portfolio/contact data, and basic SEO/share metadata.

**Planned changes:**
- Build a single-page responsive layout with sections: Hero/Intro, About, Services, Work/Projects, Testimonials (supported/optional), and Contact.
- Add navigation that jumps/routes to each section and works well on desktop and mobile.
- Implement a Projects/Work section rendering from a single editable frontend data source with title, description, role/stack, and 0–2 outbound links per item.
- Implement a Contact section with a prominent mailto link, optional calendaring link placeholder, and social link placeholders; configure all links from one frontend config object and ensure external-link safety/accessibility.
- Apply a coherent visual theme (colors/typography/spacing) appropriate for consulting, avoiding blue/purple as the primary palette.
- Add basic SEO and social share metadata (title, description, Open Graph, Twitter card) with easy-to-edit placeholder values.
- Add and reference generated static images from `frontend/public/assets/generated` (no backend image serving).

**User-visible outcome:** Visitors can browse a polished, mobile-friendly portfolio with sections for services and work, view project cards with links, and contact the consultant via email/social links; the page also has shareable metadata and a consistent visual style.
