AuraPharm Landing Page Mockup_v1

A modern, responsive SaaS landing page built with Next.js, TypeScript, Tailwind CSS, and ShadCN components.

## Features

- **Fully Fluid Design**: Responsive layout that adapts to all screen sizes
- **Modern Navbar**: Logo, primary navigation (5 links), and CTA buttons
- **Hero Section**: 100vh height with large headline and CTA button
- **Interactive Background**: Prepared div for unicorn.studio interactive elements
- **Component-Based Architecture**: Built with reusable ShadCN UI components

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: ShadCN UI components
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Hero.tsx        # Hero section component
└── lib/                # Utility functions
    └── utils.ts        # Class name merging utility
```

## Design System

The project uses a comprehensive design system with:
- Custom CSS variables for colors, typography, and spacing
- Consistent component variants (primary, secondary, outline)
- Responsive breakpoints and fluid typography
- Accessible color contrasts and focus states

## Customization

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Edit component files in `src/components/`
- **Layout**: Adjust spacing and sizing in component classes
- **Background**: Add interactive elements to the `#unicorn-background` div

## Build

```bash
npm run build
```

## License

MIT
