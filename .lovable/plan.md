

## Plan: Expand Portfolio to 50 Items with Pagination and Fix Navigation Links

### What changes

**1. Portfolio data file (`src/data/portfolioApps.ts`)**
- Create a dedicated data file with 50 app entries across 10 categories (Health & Fitness, Fintech, Productivity, Education, Social, E-commerce, Travel, Entertainment, Utilities, Food & Delivery).
- Each entry: name, category, description, 3-4 bullet features, image (cycles through the 3 existing mockup images), version, size, rating.

**2. Rewrite `AppsGrid.tsx` with pagination and category filter**
- Add state for current page (9 items per page, ~6 pages) and active category filter.
- Category filter chips at the top ("All" + the 10 categories) that scroll to the section and filter results.
- Each category gets an `id` anchor (e.g., `#apps-health`, `#apps-fintech`) so nav/footer links can jump directly to filtered views.
- Pagination controls at the bottom using the existing `Pagination` UI components.
- Keep the exact same card UI: mockup image, category badge, name, description, bulleted features, version/size/rating row, View Details + Download buttons.
- Animate page transitions with Framer Motion.

**3. Update `Navbar.tsx` navigation links**
- Add a "Download" link pointing to `#download`.
- All links already use anchor hrefs -- confirm each matches the correct section id. Add tooltip-like `title` attributes describing each section for accessibility.

**4. Update `Footer.tsx` with working hyperlinks**
- Map each footer link text to its corresponding section anchor:
  - Product: "All Apps" -> `#apps`, "Pricing" -> `#pricing`, "Documentation" -> `#features`, "Changelog" -> `#download`
  - Company: "About" -> `#about`, "Blog" -> `#testimonials`, "Careers" -> `#about`, "Contact" -> `#contact`
  - Legal: "Privacy Policy", "Terms of Service", "Cookie Policy" -> `#contact` (or scroll to footer)
- Social links get `title` attributes.

### Technical details

- Portfolio images will cycle `mockupApp1`, `mockupApp2`, `mockupApp3` across all 50 items (deterministic based on index).
- Pagination resets to page 1 when category filter changes.
- Smooth scroll behavior is already handled by CSS `scroll-behavior: smooth` on `html`.
- Category filter chips use horizontal scroll on mobile to avoid wrapping issues.

### Files modified
1. **New**: `src/data/portfolioApps.ts` -- 50 app entries
2. **Edit**: `src/components/AppsGrid.tsx` -- pagination, category filter, anchors
3. **Edit**: `src/components/Navbar.tsx` -- add Download link, title attributes
4. **Edit**: `src/components/Footer.tsx` -- map all links to section anchors

