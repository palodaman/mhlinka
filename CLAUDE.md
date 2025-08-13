# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack marketing website template built with:
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Strapi v5 headless CMS
- **Database**: SQLite (default), supports MySQL/PostgreSQL
- **Internationalization**: Multi-language support (English and French)

## Development Commands

### Full Project Setup and Development
```bash
# Initial setup (copies env files for both apps)
yarn setup

# Run both Strapi and Next.js concurrently  
yarn dev

# Seed Strapi with initial data
yarn seed

# Export current Strapi data
yarn export
```

### Next.js Commands (from `/next` directory)
```bash
yarn dev        # Start development server (port 3000)
yarn build      # Build production bundle
yarn start      # Start production server
yarn lint       # Run ESLint
```

### Strapi Commands (from `/strapi` directory)
```bash
yarn develop    # Start development server (port 1337)
yarn build      # Build admin panel
yarn start      # Start production server
yarn strapi import -f ./data/export_20250116105447.tar.gz  # Import data
```

## Architecture

### Next.js Structure
- **App Router**: Uses `/app/[locale]/(marketing)` for localized routes
- **Data Fetching**: `fetchContentType()` utility in `/next/lib/strapi/` handles all Strapi API calls
- **Dynamic Content**: `DynamicZoneManager` in `/next/components/dynamic-zone/manager.tsx` renders Strapi dynamic zones
- **Metadata**: SEO metadata is generated dynamically from Strapi content
- **Image Handling**: Custom `StrapiImage` component handles Strapi media with null checks

### Strapi Configuration
- **Custom Middleware**: Deep population middleware in `/strapi/src/middlewares/deepPopulate.ts` automatically populates nested relations
- **Content Types**: Article, Product, Page, Blog, FAQ, Testimonial, etc.
- **Dynamic Zones**: Hero, Features, Pricing, Testimonials, CTA, FAQ, etc.
- **API Structure**: RESTful endpoints at `/api/{content-type}`

## Key Implementation Details

### API Integration
- Base URL: `NEXT_PUBLIC_API_URL` (default: http://localhost:1337)
- All API calls use the `fetchContentType` helper with automatic draft mode support
- Query string building with `qs` library for complex filters

### Dynamic Zone Components
Components are dynamically loaded based on `__component` field from Strapi:
- Mapped in `/next/components/dynamic-zone/manager.tsx`
- Each zone component receives locale prop for i18n support

### Environment Variables
Required for both apps:
- `PREVIEW_SECRET`: Must match between Next.js and Strapi for preview mode
- `CLIENT_URL` (Strapi): Frontend URL for CORS
- `NEXT_PUBLIC_API_URL` (Next.js): Strapi backend URL

### Custom Features
- Deep population middleware eliminates need for complex populate queries
- Automatic UUID regeneration on Strapi install for analytics
- Prefilled login fields script for demo purposes
- Custom image component with built-in error handling for deleted Strapi images

## Testing Approach
Check package.json for test scripts. Currently no test framework is configured - verify with project maintainers for testing requirements.

## Common Development Tasks

### Adding a New Dynamic Zone Component
1. Create component in `/strapi/src/components/dynamic-zone/`
2. Add corresponding schema to Strapi
3. Create React component in `/next/components/dynamic-zone/`
4. Register in `/next/components/dynamic-zone/manager.tsx` component mapping

### Creating New Content Types
1. Use Strapi admin to create content type
2. Export TypeScript types will be auto-generated in `/strapi/types/generated/`
3. Create corresponding Next.js pages/components
4. Update fetchContentType calls with appropriate filters

### Handling Localization
- Content is filtered by locale parameter in API calls
- Use `params.locale` from Next.js route params
- Localizations are fetched automatically via deep populate middleware