# FastAPI Backend

A FastAPI REST API for the portfolio website providing endpoints for skills retrieval and contact form handling.

## Features

- ✅ REST API with CORS support
- ✅ Contact form submission endpoint
- ✅ Skills retrieval endpoint
- ✅ Health check endpoint
- ✅ Built with FastAPI and Uvicorn

## Installation

1. Install Python 3.9+
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server

**Development:**
```bash
python main.py
```

**Production with Gunicorn:**
```bash
pip install gunicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
```

The server will start on `http://localhost:5000`

## API Endpoints

### GET /api
Returns API status information.

**Response:**
```json
{
  "message": "Portfolio API is running",
  "author": "Grace Joachim",
  "status": "success"
}
```

### GET /api/skills
Returns list of skills.

**Response:**
```json
{
  "skills": [
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "Pandas",
    "Data Visualization",
    "Statistics",
    "Stakeholder Communication"
  ]
}
```

### POST /api/contact
Submits a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Thanks John Doe, your message has been received."
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy"
}
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
PORT=5000
```

## Dependencies

- **fastapi** - Modern web framework for building APIs
- **uvicorn** - ASGI server for Python
- **pydantic** - Data validation using Python type annotations

## Deployment

### Render.com
```yaml
services:
  - type: web
    name: portfolio-api
    env: python
    buildCommand: "pip install -r requirements.txt"
    startCommand: "uvicorn main:app --host 0.0.0.0 --port $PORT"
```

### Other Platforms
The app can be deployed to any platform that supports Python/ASGI servers (Heroku, Railway, PythonAnywhere, etc.)

## License

MIT
