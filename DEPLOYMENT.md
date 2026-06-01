# Portfolio Deployment Guide

## Overview
Your portfolio has two separate components:
- **Frontend**: Static HTML/CSS/JS site (deploy to Vercel or Netlify)
- **Backend**: Node.js Express API (deploy to Render or Railway)

---

## Option 1: Deploy Backend to Render (Recommended)

### Step 1: Prepare Backend Repository
1. Push your `backend/` folder to a new GitHub repository:
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial backend deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
   git push -u origin main
   ```

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com) and sign up
2. Click **New** → **Web Service**
3. Connect your GitHub account and select `portfolio-backend` repository
4. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid)
5. Click **Create Web Service**
6. Wait for deployment (2-3 minutes)
7. Copy your Render URL (looks like: `https://portfolio-backend-xxxxx.onrender.com`)

---

## Option 2: Deploy Frontend to Vercel (Recommended)

### Step 1: Prepare Frontend Repository
1. Push your `frontend/` folder to a new GitHub repository:
   ```bash
   cd frontend
   git init
   git add .
   git commit -m "Initial frontend deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-frontend.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Import Project**
3. Select your `portfolio-frontend` repository
4. **Root Directory**: Set to `.` (current directory)
5. **Build Settings**: 
   - Leave empty (no build step needed)
   - **Output Directory**: Leave blank for static sites
6. **Environment Variables**:
   - Add: `VITE_API_URL` = `https://portfolio-backend-xxxxx.onrender.com` (from Render)
7. Click **Deploy**
8. Your frontend will be live at: `https://your-project-name.vercel.app`

---

## Alternative: Deploy Frontend to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect GitHub and select `portfolio-frontend`
4. **Build Settings**:
   - **Build command**: (leave empty)
   - **Publish directory**: `.` (current directory)
5. **Environment Variables**:
   - Add: `VITE_API_URL` = `https://portfolio-backend-xxxxx.onrender.com`
6. Click **Deploy site**

---

## Step-by-Step Deployment Checklist

### Before Deployment
- [ ] Backend pushed to GitHub (`portfolio-backend` repo)
- [ ] Frontend pushed to GitHub (`portfolio-frontend` repo)
- [ ] GitHub account created and connected to Vercel/Render
- [ ] Backend deployed to Render (get the URL)

### During Deployment
- [ ] Backend URL copied from Render
- [ ] Frontend environment variables updated with backend URL
- [ ] Frontend deployed to Vercel/Netlify

### After Deployment
- [ ] Visit your frontend URL in browser
- [ ] Test contact form (should connect to backend)
- [ ] Test dark/light mode toggle
- [ ] Test all GitHub project links
- [ ] Verify mobile responsiveness

---

## Environment Variables Reference

### Frontend (.env)
```
VITE_API_URL=https://portfolio-backend-xxxxx.onrender.com
```

### Backend (.env)
```
PORT=5000
NODE_ENV=production
```

---

## Updating Your Portfolio

### Update Backend Code
1. Make changes in your local `backend/` folder
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update message"
   git push
   ```
3. Render auto-deploys on git push

### Update Frontend Code
1. Make changes in your local `frontend/` folder
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update message"
   git push
   ```
3. Vercel auto-deploys on git push

---

## Custom Domain (Optional)

### With Vercel
1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain provider

### With Render
1. In Render dashboard → Web Service → Settings → Custom Domain
2. Add your custom domain
3. Update DNS records

---

## Troubleshooting

### Contact Form Not Working
- Check backend is deployed and running on Render
- Verify `VITE_API_URL` in frontend environment variables
- Check browser console for CORS errors

### Frontend Not Loading Styles
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS CDN is accessible

### Backend API Errors
- Check Render deployment logs
- Verify `npm install` ran successfully
- Ensure `server.js` has no syntax errors

---

## Ready to Deploy?
1. **Create GitHub repositories** for frontend and backend
2. **Deploy backend to Render** first
3. **Copy Render URL** and add to frontend environment variables
4. **Deploy frontend to Vercel**
5. **Test your live portfolio!**

Good luck! 🚀
