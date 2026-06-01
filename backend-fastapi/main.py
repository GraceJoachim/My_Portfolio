from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Portfolio API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (adjust in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

class SkillsResponse(BaseModel):
    skills: list[str]

class StatusResponse(BaseModel):
    message: str
    author: str
    status: str

# Routes
@app.get("/api")
async def get_status() -> StatusResponse:
    """Get API status"""
    return StatusResponse(
        message="Portfolio API is running",
        author="Grace Joachim",
        status="success"
    )

@app.get("/api/skills")
async def get_skills() -> SkillsResponse:
    """Get list of skills"""
    return SkillsResponse(
        skills=[
            "SQL",
            "Power BI",
            "Tableau",
            "Python",
            "Pandas",
            "Data Visualization",
            "Statistics",
            "Stakeholder Communication"
        ]
    )

@app.post("/api/contact")
async def contact(request: ContactRequest):
    """Handle contact form submissions"""
    logger.info(f"New contact request: name={request.name}, email={request.email}")
    
    return {
        "status": "success",
        "message": f"Thanks {request.name}, your message has been received."
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
