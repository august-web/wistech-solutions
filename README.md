# Wistech Solutions - Modern React Homepage

A professional, responsive, multi-page React website for Wistech Solutions built with TypeScript, Vite, and React Router. Features modern design, smooth animations, and professional React Icons.

## ✨ Features

- ✅ **Multi-Page SPA** - React Router v6 with 4 pages (Home, Services, About, Contact)
- ✅ **Modern Stack** - React 18 + TypeScript + Vite + React Router
- ✅ **Professional Icons** - React Icons (Font Awesome) throughout
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Smooth Animations** - Floating elements, transitions, and scrolling effects
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Production Ready** - Clean code, type-safe, optimized builds

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation with logo
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # About section with stats
│   ├── WhyChooseUs.tsx     # Features/benefits
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer with links & social
│   └── [Component].css     # Component-scoped styles
├── pages/                  # Page components
│   ├── HomePage.tsx        # Home page (/)
│   ├── ServicesPage.tsx    # Services page (/services)
│   ├── AboutPage.tsx       # About page (/about)
│   ├── ContactPage.tsx     # Contact page (/contact)
│   └── Pages.css           # Page-level styling
├── styles/
│   └── index.css           # Global styles & CSS variables
├── App.tsx                 # Main app with Router
└── main.tsx               # React entry point

public/
├── images/
│   └── wistech-logo.svg   # Company logo
└── favicon.svg            # Browser favicon

index.html                 # React SPA entry point
```

## 🎨 Design System

### Color Palette
```css
--primary-color: #1e3c72       /* Deep Blue */
--secondary-color: #2a5298     /* Medium Blue */
--accent-color: #00d4ff        /* Cyan */
--success-color: #00b894       /* Green */
--light-bg: #f8f9fa            /* Light Gray */
--dark-text: #1a1a1a           /* Dark */
--light-text: #6b7280          /* Medium Gray */
```

### Typography
- **Font**: Inter (from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px

## 📱 Pages & Sections

### Home Page (/)
- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Eye-catching headline with CTAs
- **Services** - 4 service cards with React Icons
- **About** - Company info with animated stats and Wistech logo
- **Why Choose Us** - 4 key features with icons
- **CTA** - Full-width engagement section
- **Footer** - Comprehensive footer with links and social

### Services Page (/services)
- Page hero section
- 6 detailed service cards with icons, descriptions, and features
- CTA section

### About Page (/about)
- Company description and mission
- Company statistics
- Leadership team showcase
- Core values section
- Wistech logo integration

### Contact Page (/contact)
- Contact information (address, phone, email, hours)
- Contact form with validation
- Embedded Google Maps
- Professional icons for each contact method

## 🔧 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📦 Dependencies

### Core
- `react@18.2.0` - UI library
- `react-dom@18.2.0` - React DOM rendering
- `react-router-dom@6.20.0` - Client-side routing
- `react-icons@5.6.0` - Font Awesome icons

### Build Tools
- `vite@5.0.8` - Next generation build tool
- `typescript@5.2.2` - Type safety
- `eslint@8.54.0` - Code linting

## 🎯 Customization

### Change Company Name
Edit in:
- `src/components/Navbar.tsx` - Logo alt text
- `src/components/Footer.tsx` - Footer company name
- `index.html` - Page title

### Change Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --accent-color: #YOUR_COLOR;
  /* Update other colors as needed */
}
```

### Update Contact Information
Edit `src/components/Footer.tsx` and `src/pages/ContactPage.tsx`

### Add New Service
Edit `src/pages/ServicesPage.tsx`:
```tsx
import { FaYourIcon } from 'react-icons/fa'

const services = [
  // ... existing services
  {
    icon: FaYourIcon,
    title: 'Your Service',
    description: 'Your description'
  }
]
```

## 🌐 Deployment

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Vercel
```bash
# Connect GitHub repo to Vercel
# Automatic deployments on push
```

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` contents via FTP
3. Set root directory to `dist/`

## 🎯 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 GitHub

Repository: [august-web/wistech-solutions](https://github.com/august-web/wistech-solutions)

## 📄 License

Professional design template for Wistech Solutions.

---

**Last Updated**: April 2026 | **Version**: 2.0.0 | **Status**: Production Ready
