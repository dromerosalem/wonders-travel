# Wonders.Travel Landing Page

A modern, responsive landing page for Wonders.Travel built with React and Tailwind CSS.

## Features

- Responsive design
- Modern UI with smooth transitions
- Mobile-first approach
- Semantic HTML
- Optimized performance

## Prerequisites

- Node.js 14.0.0 or later
- npm 6.0.0 or later

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add the required images to the `public/images` directory:
   - `logo.png` - The Wonders.Travel logo
   - `hero-bg.jpg` - The hero section background image

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
wonders-travel/
├── public/
│   └── images/
│       ├── logo.png
│       └── hero-bg.jpg
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Built With

- React
- Tailwind CSS
- Google Fonts (Poppins & Inter)

## Design System

- Colors:
  - Primary (Deep Navy): #0F1C2D
  - Accent (Golden Yellow): #F7C948
  - Light (Off-white): #FFF8E7
- Typography:
  - Primary Font: Poppins
  - Secondary Font: Inter
- Components:
  - Buttons with hover effects
  - Responsive navigation
  - Full-screen hero section 