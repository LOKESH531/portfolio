# Lokesh G - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and professional design with dark theme
- ✨ Smooth animations and interactive effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js App Router
- 🎭 Framer Motion animations
- 🎯 SEO optimized
- 🧩 Reusable components

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── Experience.tsx  # Experience section
│   │   ├── Contact.tsx     # Contact section
│   │   └── Footer.tsx      # Footer
│   ├── Button.tsx          # Reusable button component
│   ├── SectionTitle.tsx    # Reusable section title
│   └── Navbar.tsx          # Navigation bar
├── lib/
│   └── data.ts             # Portfolio content data
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal details (name, role, location, social links)
- About section content
- Skills and technologies
- Work experience
- Projects

### Modify Colors

Update the color scheme in `app/globals.css`:
```css
:root {
  --primary: #3b82f6;    /* Blue */
  --secondary: #8b5cf6;  /* Purple */
}
```

### Add New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify:** Connect GitHub repo and deploy
- **AWS Amplify:** Use the Amplify Console
- **Docker:** Build and deploy as container

## Performance Optimizations

- ✅ Server-side rendering with Next.js
- ✅ Optimized images and assets
- ✅ Code splitting and lazy loading
- ✅ Minimal bundle size
- ✅ Fast page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Lokesh G**
- Email: lokesh@example.com
- Location: Bangalore, India
- GitHub: [github.com/lokeshg](https://github.com/lokeshg)
- LinkedIn: [linkedin.com/in/lokeshg](https://linkedin.com/in/lokeshg)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
