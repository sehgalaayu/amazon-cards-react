# Blockbuster Deals | Shop Now!

A modern React app showcasing Amazon-style product cards for blockbuster deals on computer accessories. Built with Vite for lightning-fast development and a clean, responsive UI inspired by Amazon's sale cards.

## Features

- **Amazon-style Product Cards:**
  - Blue gradient background, rounded corners, and yellow accent borders
  - Product title, offer, and a customizable features list (bullet points)
  - Bold yellow price bar with old/new price and rupee symbol
  - Small note for extra offer details
- **Responsive Layout:**
  - Cards are flex-wrapped and centered for all screen sizes
  - Section background and spacing match Amazon's sale sections
- **Easy Customization:**
  - Add or edit products and features in `Product.jsx`
  - Update styles in `Product.css` and `ProductTab.css`

## Tech Stack
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (for fast dev/build)
- CSS Modules for styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure
- `src/Product.jsx` – Product card component (edit product data/features here)
- `src/Price.jsx` – Price bar component
- `src/ProductTab.jsx` – Product grid/section
- `src/Product.css`, `src/ProductTab.css` – Styling for cards and layout

## Customization
- **Add/Edit Products:**
  - Update the `title`, `features`, `oldPrice`, and `newPrice` arrays in `Product.jsx`.
- **Change Styles:**
  - Edit `Product.css` and `ProductTab.css` for card and layout styles.

## License
This project is for educational/demo purposes and is not affiliated with Amazon.

---
