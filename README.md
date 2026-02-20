# Sanika Surose - Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This project is a personal portfolio designed to highlight:

- About section
- Tech stack and tools
- Featured projects
- Contact section
- A dedicated `/experience` route (currently under construction)

The UI uses a soft gradient aesthetic with smooth section navigation and subtle motion interactions.

## How It Was Built

This site is built using the **Next.js App Router** architecture:

- `app/layout.tsx` defines global layout, metadata, and shared structure.
- `app/page.tsx` composes the homepage from reusable section components.
- `components/sections/*` contains each homepage section (`Hero`, `About`, `TechStack`, `ProjectsSection`, `Contact`).
- `components/layout/*` contains shared layout elements (`Navbar`, `Footer`).
- `public/` stores static assets like logos and icons.

Styling is handled with Tailwind CSS utility classes and project theme tokens.  
Navigation and smooth in-page scrolling are implemented with GSAP (`ScrollToPlugin`) in the navbar.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** React 18
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Animation / Motion:** GSAP
- **Icons:** Lucide React
- **Graphics Utility:** OGL (used for visual effects components)
- **Linting:** ESLint (Next.js config)

## Author

**Sanika Surose**

