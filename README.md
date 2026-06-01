# Personal Portfolio Website

This repository contains a portfolio website frontend and a small backend API.

## Frontend
- Static site served from `index.html` and the `assets/` folder.
- Deploy the frontend using Vercel by connecting the repository and selecting the project root.

## Backend
- Simple Express API in `api/server.js`.
- Deploy the backend using Render as a separate service.

### API Endpoints
- `GET /api` - API status
- `GET /api/skills` - Returns portfolio skills as JSON
- `POST /api/contact` - Accepts a contact request payload

### Local development
1. Install dependencies:
   ```bash
   cd api
   npm install
   ```
2. Start the backend:
   ```bash
   npm start
   ```

### Deployment notes
- Vercel: deploy the root folder as a static site. The project includes `vercel.json` for a simple static build.
- Render: deploy the `api` folder as a Node web service. The repository includes `render.yaml` with root set to `api`, `npm install`, and `npm start`.

### Backend configuration
- Update `index.html` and replace `https://YOUR_RENDER_SERVICE.onrender.com` with your Render service URL.
- The frontend contact form sends POST requests to `/api/contact` on the backend.
