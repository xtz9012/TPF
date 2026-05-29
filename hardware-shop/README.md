# Hardware Shop Frontend

React + Vite frontend for Modern Tradesman Co., a construction services and hardware shop interface. The application combines service presentation, product browsing, cart management, checkout, order confirmation, and contact/quote workflows.

## Features

- Multi-page experience handled with hash routing.
- Header navigation with cart, account, search, quote CTA, and theme toggle.
- Animated dark mode switch that moves from sun to moon.
- Persistent theme preference stored in `localStorage`.
- Home, service, product, cart, checkout, confirmation, and contact screens.
- Product and service cards using local image assets.
- Responsive grids and mobile-friendly layouts.
- ESLint setup for code quality checks.

## Tech Stack

- React 19
- Vite 8
- CSS custom properties
- ESLint 10

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Vite will print the local development URL, usually:

```text
http://127.0.0.1:5173/
```

On Windows PowerShell, if script execution policy blocks `npm`, run commands with `npm.cmd` instead:

```bash
npm.cmd run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## App Routes

The app uses hash-based navigation:

```text
#/service
#/product
#/cart
#/checkout
#/confirmation
#/contact
```

The empty hash or root URL opens the homepage.

## Source Overview

```text
src/
  App.jsx      Main React application, page components, route state, cart state, theme state
  App.css      Layout, components, responsive styles, and dark mode animation
  index.css    Global CSS variables and light/dark theme tokens
  main.jsx     React entry point
  assets/      Local images used by the UI
```

## Theme Behavior

The theme is initialized from `localStorage`. If no saved preference exists, it falls back to the system color scheme using `prefers-color-scheme`.

The selected theme is applied to the document as:

```html
<html data-theme="dark">
```

or:

```html
<html data-theme="light">
```

This drives the color palette through CSS variables.
