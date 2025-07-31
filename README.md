# Sumon Ray - Personal Portfolio

A premium, interactive personal portfolio website built with React, Next.js, Tailwind CSS, and GSAP animations.

## 🚀 Project Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <your-repo-url>
   cd sumon-ray-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Features

- **Advanced GSAP Animations**: Smooth, professional animations throughout
- **Dynamic Background Effects**: Floating particles and morphing shapes
- **Custom Cursor**: Interactive cursor with magnetic effects
- **Responsive Design**: Works perfectly on all devices
- **Component-Based Architecture**: Clean, maintainable code structure
- **Loading Screen**: Cinematic 3-second loading experience
- **Smooth Scrolling**: Buttery smooth navigation between sections

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── page.jsx                 # Main page component
│   ├── layout.jsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── animations/             # Animation components
│   │   ├── BackgroundEffects.jsx
│   │   ├── TextReveal.jsx
│   │   ├── CounterAnimation.jsx
│   │   └── MorphingShape.jsx
│   ├── layout/                 # Layout components
│   │   └── Navigation.jsx
│   ├── sections/               # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── OriginsSection.jsx
│   │   ├── JourneySection.jsx
│   │   ├── ActivitiesSection.jsx
│   │   └── ContactSection.jsx
│   └── ui/                     # UI components
│       ├── LoadingScreen.jsx
│       ├── CustomCursor.jsx
│       ├── MagneticButton.jsx
│       └── FloatingActionButton.jsx
├── hooks/                      # Custom React hooks
│   ├── useLoading.js
│   └── useScrollSections.js
├── utils/                      # Utility functions
│   └── scrollTo.js
└── package.json
\`\`\`

## 🎯 Technologies Used

- **React 18** - Modern React with hooks
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI components

## 🎪 Animation Features

- **Loading animations** with progress bars
- **Text reveal** with character-by-character animation
- **Magnetic buttons** that follow mouse movement
- **Scroll-triggered animations** using ScrollTrigger
- **Floating particles** background system
- **Morphing shapes** with continuous transformations
- **Counter animations** for statistics
- **Timeline animations** for journey section

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Color Scheme

- **Primary**: Cyan (#06B6D4) to Purple (#9333EA)
- **Secondary**: Pink (#EC4899) to Blue (#3B82F6)
- **Background**: Dark slate with gradient overlays
- **Text**: White with various opacity levels

## 🚀 Performance

- **Optimized animations** with 60fps performance
- **Lazy loading** for smooth initial load
- **Efficient GSAP** timeline management
- **Minimal bundle size** with tree shaking

## 📞 Contact

- **Email**: sumon.ray@email.com
- **LinkedIn**: /in/sumon-ray-dev
- **Portfolio**: [Your Portfolio URL]

---

Built with ❤️ by Sumon Ray
