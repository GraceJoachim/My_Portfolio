# Portfolio Frontend (Next.js)

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🌓 Dark mode toggle
- 📧 Contact form with validation
- ⚡ Fast performance with Next.js optimization
- 🎨 Smooth scrolling and animations
- 📱 Mobile-friendly

## Installation

1. Install Node.js 18+
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file based on `.env.local.example`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production, update this to your deployed backend URL:
```
NEXT_PUBLIC_API_URL=https://your-backend-api.onrender.com
```

## Project Structure

```
app/
├── page.tsx           # Main portfolio page
├── layout.tsx         # Root layout component
└── globals.css        # Global Tailwind styles

lib/
└── api.ts            # API client utilities

public/
└── assets/           # Images and static files
```

## Components

All components are built into `app/page.tsx`:

- **Header** - Navigation and dark mode toggle
- **Hero Section** - Introduction and CTAs
- **About Section** - Biography and impact metrics
- **Skills Section** - Technical skills showcase
- **Projects Section** - Featured project cards
- **Contact Section** - Contact form with validation
- **Footer** - Social links and copyright

## API Integration

The frontend communicates with the FastAPI backend through the `apiClient` utility in `lib/api.ts`:

- `getStatus()` - Fetch API status
- `getSkills()` - Fetch skills list
- `submitContact()` - Submit contact form

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app can be deployed to any Node.js hosting platform (Netlify, Railway, etc.)

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Font optimization with system fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
