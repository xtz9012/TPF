# Modern Tradesman Co. UI

Frontend project for a construction and hardware shop website. The app presents renovation services, painting products, a shopping cart, checkout flow, order confirmation, and a contact/quote page.

The main application is located in `hardware-shop`.

## Project Structure

```text
TPF/
  hardware-shop/     React + Vite frontend application
  reference/         PDF reference screens and design materials
  readme.md          Project overview
```

## Features

- Homepage for services, products, projects, advice, and call-to-action sections.
- Service page for painting and renovation work.
- Product page with related products and FAQ.
- Cart, checkout, and order confirmation views.
- Contact and quote request page.
- Responsive layout for desktop and mobile.
- Dark mode with an animated sun-to-moon toggle and saved user preference.

## Tech Stack

- React
- Vite
- CSS custom properties
- ESLint

## Getting Started

Go to the application folder:

```bash
cd hardware-shop
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If PowerShell blocks `npm.ps1` on Windows, use:

```bash
npm.cmd run dev
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Useful Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

The app uses hash-based navigation, so pages are selected with URLs such as `#/product`, `#/cart`, and `#/contact`. Theme preference is saved in `localStorage` under the `theme` key.
