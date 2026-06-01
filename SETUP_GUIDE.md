# Portfolio Project Setup Guide

This project has been migrated to use **Next.js** for the frontend and **FastAPI** for the backend.

## 📁 Project Structure

```
Portfolio/
├── backend-fastapi/          # FastAPI backend (Python)
│   ├── main.py              # FastAPI application
│   ├── requirements.txt      # Python dependencies
│   └── .env.example         # Environment variables template
├── frontend-nextjs/          # Next.js frontend
│   ├── app/                 # Next.js app directory
│   ├── lib/                 # Utility functions
│   ├── package.json         # Node dependencies
│   └── .env.local.example   # Environment variables template
└── README.md                # This file
```

## 🚀 Quick Start

### Backend (FastAPI)

1. **Navigate to backend directory:**
   ```bash
   cd backend-fastapi
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

5. **Run the server:**
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:5000`

### Frontend (Next.js)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

## 📚 API Endpoints

- `GET /api` - Get API status
- `GET /api/skills` - Get list of skills
- `POST /api/contact` - Submit contact form
- `GET /health` - Health check endpoint

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- Tailwind CSS
- Axios

**Backend:**
- FastAPI
- Uvicorn
- Pydantic

## 📦 Deployment

### Backend Deployment (FastAPI)

For Render.com:
```yaml
services:
  - type: web
    name: portfolio-api
    env: python
    buildCommand: "pip install -r requirements.txt"
    startCommand: "uvicorn main:app --host 0.0.0.0 --port $PORT"
```

### Frontend Deployment (Next.js)

For Vercel: Deploy `frontend-nextjs` directory directly.

## 🔧 Environment Variables

### Backend
- `PORT` - Port for the FastAPI server (default: 5000)

### Frontend
- `NEXT_PUBLIC_API_URL` - URL of the FastAPI backend (default: http://localhost:5000)

## 📝 Notes

- The frontend is a client-side rendered Next.js app with dynamic form handling
- The backend provides REST API endpoints for contact form submissions and skill retrieval
- CORS is enabled on the backend to allow requests from the frontend
- Dark mode toggle is implemented using React state management

## 🤝 Contributing

Feel free to modify and enhance the project as needed.
