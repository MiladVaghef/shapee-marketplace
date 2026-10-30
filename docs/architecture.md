# Architecture and maintenance

## Boundaries

Next.js route files resolve URL parameters, set metadata and compose shared components. CatalogPage owns storefront chrome; CategoryListing owns filtering and mobile panels; ListingCard selects the existing card design for each catalog kind. Local fixtures are normalized in src/data/catalog.ts rather than duplicated in route markup.

LocationProvider owns the selected location and picker visibility. LocationButton is the only header trigger. The picker owns its current step and restores focus and body scrolling when closed. No document-wide click handler advances its state.

Forms use StepFlow, FlowStep and FlowNavigation for staged entry, with FormNotice for validation feedback. The verification wizard has its own domain validation. Both keep field state local. Browser drafts must never be described as server persistence.

## Legacy boundary

Some original account and detail pages still contain substantial presentational markup. SiteInteractions remains an adapter for their mobile search and header actions. New behavior should use explicit React event handlers and typed props. Sliders and chart components may access DOM nodes to integrate third-party libraries; they must destroy instances on navigation.

The original HTML files and compiled styles/main.css are reference material. The live app imports styles/main.scss. Edit SCSS and TSX source; never patch .next output or regenerate pages from legacy files.

## Adding a catalog

1. Add a typed kind and fixtures in src/data/catalog.ts.
2. Add a thin route that renders CatalogPage with that kind.
3. Reuse a card in ListingCard and connect its detail URL.
4. Check filters, empty results, keyboard navigation and mobile layout.

## Conventions

- Keep route modules small and reusable components named by their purpose.
- Use links for navigation and buttons for actions. Never nest a button inside a link.
- Keep labels, image descriptions and destinations consistent with the fixture.
- Show truthful completion states; frontend confirmation must not imply a payment or publication occurred.
- Prefer existing SCSS classes and design tokens to new visual systems.
- Use Prettier and strict TypeScript. Add tests for meaningful interaction contracts, not DOM implementation details.

## Backend integration

Replace fixture providers behind the existing data boundary. Authentication, inventory availability, messages, uploads and payments require authenticated server operations and independent validation before this application can serve real transactions.

## Component ownership

- layout/ contains storefront chrome, mobile navigation, and location UI. StorefrontLayout composes the common header/footer once.
- ui/ contains individual controls and the shared DetailImage viewer. Import a control directly rather than through a client-side widget barrel.
- auth/login-form.tsx owns the local login interaction.
- forms/booking-calendar.tsx owns booking date selection; account/finance-chart.tsx owns chart integration.
- hooks/ contains reusable outside-dismiss and modal focus behavior.
- data/weekdays.ts and lib/format.ts contain shared calendar labels and Persian digit formatting.

The former numbered header/footer aliases and no-op footer are removed. New routes import descriptive components directly.
