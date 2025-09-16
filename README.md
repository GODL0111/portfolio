# Arin Karmakar - Portfolio

A sophisticated portfolio website built with React, TypeScript, and Framer Motion featuring interactive animations, parallax scrolling effects, and day/night mode.

<!-- Add a portfolio screenshot here later -->
<!-- ![Portfolio Preview](./preview.png) -->

## ✨ Features

- **Interactive UI with smooth animations** - Using Framer Motion and GSAP for delightful user experiences
- **Day/Night Theme** - Toggle between light and dark modes with smooth transitions
- **Responsive Design** - Optimized for all device sizes
- **Parallax Scrolling** - Engaging scroll effects and animations
- **Modern Design** - Clean, elegant aesthetic with customizable color schemes
- **Interactive Project Cards** - Showcase your work with animated project cards
- **Contact Form** - Interactive form with validation and animation
- **Performance Optimized** - Fast loading and smooth performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Customization

### Personal Information

Edit your personal information in the relevant feature components:

- **Hero Section**: `src/features/home/components/Hero.tsx`
- **About Section**: `src/features/about/About.tsx`
- **Projects**: `src/features/projects/Projects.tsx` 
- **Contact**: `src/features/contact/Contact.tsx`

### Theme Colors

Customize colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      highlight: '#60A5FA', // Change primary accent color
      background: {
        DEFAULT: '#FFFFFF', // Light mode background
        alt: '#F9FAFB', // Light mode alternative background
      },
      navy: {
        DEFAULT: '#0F172A', // Dark text in light mode
        light: '#64748B', // Secondary text
      },
      // ...other colors
    },
  },
}
```

### Adding Projects

Add your projects by editing the projects array in `src/features/projects/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Description of your project...",
    tags: ["React", "TypeScript", "Other Tech"],
    image: "/path/to/image.jpg", // Add your image to public folder
    links: {
      github: "https://github.com/yourusername/project",
      live: "https://your-project-url.com",
    },
  },
  // Add more projects...
];
```

## 📦 Project Structure

```
/src
  /assets           # Static assets like images and icons
  /components       # Core components (Layout, Header)
  /features         # Feature-based components organized by domain
    /about          # About section components
    /contact        # Contact form components
    /home           # Home/hero section components
    /projects       # Project showcase components
  /shared           # Shared utilities and components
    /animations     # Animation components (FadeIn, SmoothScroll)
    /hooks          # Custom React hooks (useInView, useParallax)
    /theme          # Theme system components
    /ui             # Reusable UI components (Button, Input)
    /utils          # Utility functions
  /styles           # Global styles
  /types            # TypeScript type definitions
  App.tsx           # Main App component
  index.tsx         # Entry point
/public             # Static assets
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Laptop (992px - 1199px)
- Tablet (768px - 991px)
- Mobile (< 768px)

## 🚢 Deployment

This project is set up for easy deployment:

```bash
# Build the production version
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🧪 Development Tools

The project comes with several development tools:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Analyze bundle size
npm run analyze
```

## 🎨 Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **GSAP** - Advanced animations
- **Next-themes** - Theme management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [GSAP](https://greensock.com/gsap/)
- [Lucide Icons](https://lucide.dev/)