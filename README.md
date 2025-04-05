# Wonders.Travel Landing Page

A modern, responsive landing page for Wonders.Travel built with React and Tailwind CSS. This project showcases a sophisticated dark/light theme system, smooth animations, and modern web development practices.

## Features

- 🌓 Dynamic Dark/Light Theme System
- 📱 Fully Responsive Design
- 🎯 Modern UI with Smooth Transitions
- 📊 Mobile-first Approach
- 🎨 Consistent Design System
- ⚡ Optimized Performance
- 🔄 Client-side Routing
- 🎭 Interactive Animations

## Technologies Used

### Core Technologies
- **React 18**: For building the user interface
- **React Router v7**: For client-side routing
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For smooth animations and transitions

### Key Libraries
- **React Icons**: For consistent and scalable icons
- **PostCSS**: For processing Tailwind CSS
- **Autoprefixer**: For CSS compatibility

## Theme System Explained

Our theme system is built using React Context and CSS variables, making it easy to maintain and extend.

### How it Works

1. **Theme Context (`src/context/ThemeContext.jsx`)**
   ```jsx
   const ThemeContext = createContext();
   export const ThemeProvider = ({ children }) => {
     const [isDarkMode, setIsDarkMode] = useState(true);
     // ... theme logic
   };
   ```

2. **CSS Variables (`src/index.css`)**
   ```css
   :root {
     /* Dark mode colors (default) */
     --background-primary: #0F1C2D;
     --text-primary: #ffffff;
     --text-secondary: #CBD5E1;
     --accent-color: #FFD700;
   }

   /* Light mode colors */
   :root.light-mode {
     --background-primary: #ffffff;
     --text-primary: #0F1C2D;
     --text-secondary: #4B5563;
   }
   ```

3. **Usage in Components**
   ```jsx
   const Component = () => {
     const { isDarkMode } = useTheme();
     return (
       <div className={`${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
         // Component content
       </div>
     );
   };
   ```

### Theme Features
- Smooth transitions between themes
- Persistent theme preference
- Accessible color contrasts
- Consistent styling across components

## Design System

### Colors
- **Primary Dark**: `#0F1C2D` (Deep Navy)
- **Primary Light**: `#FFFFFF` (White)
- **Accent**: `#FFD700` (Gold)
- **Text Dark**: `#0F1C2D`
- **Text Light**: `#FFFFFF`

### Typography
- **Primary Font**: Poppins
- **Secondary Font**: Inter
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Components
- Interactive buttons with hover states
- Responsive navigation with mobile menu
- Full-screen hero section
- Animated cards and sections
- Theme-aware components

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd wonders-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
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