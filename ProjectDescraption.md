# Task Website

A colorful, child-friendly website built with Next.js and Bootstrap, showcasing educational products for children.

## 🎨 Features

- **Bento Grid Layout** - Modern asymmetrical card layout with responsive design
- **Interactive Elements** - Hover animations and smooth transitions
- **Colorful Design** - Child-friendly color scheme with playful elements
- **SVG Decorations** - Cute animals and nature elements scattered throughout
- **Wave Footer** - Beautiful wave pattern with scattered decorative elements

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Task_Website/
├── app/
│   ├── components/
│   │   ├── HighQualityProducts.js    # Main products section with bento grid
│   │   ├── ProductCard.js            # Reusable product card component
│   │   ├── MediaUpdates.js           # Media section container
│   │   ├── NewsSection.js            # News section component
│   │   └── BlogSection.js            # Blog section component
│   ├── layout.js                     # Root layout with Bootstrap imports
│   ├── page.js                       # Main homepage component
│   └── globals.css                   # Custom styling and animations
├── public/
│   └── assets/
│       ├── SVG/                      # SVG decorative elements
│       │   ├── Decorative1.svg       # Curved line background
│       │   ├── Decorative2.svg           # Decorative elements
│       │   └── ...                   # Additional SVG assets  
│       ├── DoughImg.png              # Dough product image
│       ├── CrayonsImg.png            # Crayons product image
│       ├── MouldsImg.png             # Moulds product image
│       ├── ChalksImg.png             # Chalks product image
│       ├── ModelingClayImg.png       # Modeling clay product image
│       ├── NewsImg.png               # Additional product image
│       ├── BlogImg.png               # Children image
│       └── Footer.png                # Wave footer background
├── package.json
├── next.config.js
└── README.md
```

## 🎯 Sections

### High Quality Products

- **Chalks** - Interactive chalk drawing scene (large card)
- **Modeling Clay** - Volcano with flowing lava (medium card)
- **Dough** - Play dough with "Explore Products" badge
- **Crayons** - Children coloring activities  
- **Moulds** - Colorful modeling molds

### Media & Updates

- **News Section** - Latest educational news with blue accent
- **Blog Section** - Activity blogs with orange accent

### Footer

- Wave pattern background (`Footer.png`)
- Scattered decorative elements from SVG assets
- Animated floating elements

## 🛠️ Technologies Used

- **Next.js 14.2.30** - React framework with App Router
- **React 18** - UI library
- **Bootstrap 5.3.7** - Responsive CSS framework
- **Custom CSS** - Animations and child-friendly styling
- **SVG Graphics** - Scalable vector illustrations
- **ESLint** - Code linting and formatting


## 🎨 Component Architecture

- **Modular Design** - Each section is a separate component
- **Reusable Components** - ProductCard component for consistent styling
- **Responsive Grid** - Bootstrap-based responsive layout
- **Custom Styling** - Tailored CSS for child-friendly aesthetics
