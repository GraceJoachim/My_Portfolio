# Personal Portfolio Website

A modern, responsive portfolio website built with **Next.js** (frontend) and **FastAPI** (backend).

## 📁 Project Structure

```
Portfolio/
├── frontend-nextjs/          # Next.js + React frontend
├── backend-fastapi/          # FastAPI + Python backend
├── SETUP_GUIDE.md            # Complete setup instructions
├── MIGRATION_SUMMARY.md      # Migration details from old stack
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.9+ (for backend)

### Start Backend (FastAPI)

```bash
cd backend-fastapi
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Backend runs at: `http://localhost:5000`

### Start Frontend (Next.js)

In a new terminal:

```bash
cd frontend-nextjs
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

## 📚 Documentation

- **Complete Setup Guide:** See [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Migration Summary:** See [MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md)
- **Backend Docs:** See [backend-fastapi/README.md](backend-fastapi/README.md)
- **Frontend Docs:** See [frontend-nextjs/README.md](frontend-nextjs/README.md)

## 🌐 API Endpoints

- `GET /api` - API status
- `GET /api/skills` - Returns portfolio skills
- `POST /api/contact` - Submit contact form
- `GET /health` - Health check

Full API documentation in [backend-fastapi/README.md](backend-fastapi/README.md)

## 📦 Tech Stack

**Frontend:**
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript

**Backend:**
- FastAPI
- Uvicorn
- Pydantic
- Python 3.9+

## 🚢 Deployment

### Backend Deployment (FastAPI)

**Render.com:**
- Use provided `render-backend.yaml` configuration
- Deploy `backend-fastapi` folder

**Other Options:** Railway, PythonAnywhere, Heroku

### Frontend Deployment (Next.js)

**Vercel (Recommended):**
- Connect GitHub repository
- Deploy `frontend-nextjs` folder
- Set environment variable: `NEXT_PUBLIC_API_URL=<backend-url>`

**Other Options:** Netlify, Railway, AWS Amplify

## 🔧 Environment Variables

**Backend** (`backend-fastapi/.env`):
```
PORT=5000
```

**Frontend** (`frontend-nextjs/.env.local`):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## ⚡ Features

✅ Modern Next.js frontend  
✅ Type-safe FastAPI backend  
✅ Responsive design with Tailwind CSS  
✅ Dark mode support  
✅ Contact form with validation  
✅ CORS enabled for development and production  
✅ Production-ready configurations  
✅ Comprehensive documentation  

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 License

MIT - See LICENSE.txt

## 🤝 Need Help?

Refer to [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup instructions and troubleshooting.
