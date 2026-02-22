from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend API configuration
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@cubiclogistics.net')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Models
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    origin: str
    destination: str
    cargo_type: str
    weight: str
    service_type: str
    additional_info: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    origin: str
    destination: str
    cargo_type: str
    weight: str
    service_type: str
    additional_info: Optional[str] = None

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class CareerApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    position: str
    experience: str
    cover_letter: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class CareerApplicationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    position: str
    experience: str
    cover_letter: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Cubic Logistics API"}

@api_router.post("/quote", response_model=QuoteRequest)
async def create_quote(input: QuoteRequestCreate):
    quote_dict = input.model_dump()
    quote_obj = QuoteRequest(**quote_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = quote_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    # Save to database
    await db.quotes.insert_one(doc)
    
    # Send email notification
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #1A1A1A; color: #C9A961; padding: 20px; text-align: center; }}
            .content {{ background: #f4f4f4; padding: 20px; }}
            .detail {{ margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #C9A961; }}
            .label {{ font-weight: bold; color: #1A1A1A; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Quote Request</h1>
            </div>
            <div class="content">
                <div class="detail"><span class="label">Name:</span> {quote_obj.name}</div>
                <div class="detail"><span class="label">Email:</span> {quote_obj.email}</div>
                <div class="detail"><span class="label">Phone:</span> {quote_obj.phone}</div>
                <div class="detail"><span class="label">Company:</span> {quote_obj.company or 'N/A'}</div>
                <div class="detail"><span class="label">Service Type:</span> {quote_obj.service_type}</div>
                <div class="detail"><span class="label">Origin:</span> {quote_obj.origin}</div>
                <div class="detail"><span class="label">Destination:</span> {quote_obj.destination}</div>
                <div class="detail"><span class="label">Cargo Type:</span> {quote_obj.cargo_type}</div>
                <div class="detail"><span class="label">Weight:</span> {quote_obj.weight}</div>
                <div class="detail"><span class="label">Additional Info:</span> {quote_obj.additional_info or 'N/A'}</div>
            </div>
        </div>
    </body>
    </html>
    """
    
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"New Quote Request from {quote_obj.name}",
            "html": html_content
        }
        await asyncio.to_thread(resend.Emails.send, params)
        logging.info(f"Quote email sent to {ADMIN_EMAIL}")
    except Exception as e:
        logging.error(f"Failed to send quote email: {str(e)}")
    
    return quote_obj

@api_router.get("/quotes", response_model=List[QuoteRequest])
async def get_quotes():
    quotes = await db.quotes.find({}, {"_id": 0}).to_list(1000)
    for quote in quotes:
        if isinstance(quote['created_at'], str):
            quote['created_at'] = datetime.fromisoformat(quote['created_at'])
    return quotes

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input: ContactMessageCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    
    # Send email notification
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #1A1A1A; color: #C9A961; padding: 20px; text-align: center; }}
            .content {{ background: #f4f4f4; padding: 20px; }}
            .detail {{ margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #C9A961; }}
            .label {{ font-weight: bold; color: #1A1A1A; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Message</h1>
            </div>
            <div class="content">
                <div class="detail"><span class="label">Name:</span> {contact_obj.name}</div>
                <div class="detail"><span class="label">Email:</span> {contact_obj.email}</div>
                <div class="detail"><span class="label">Phone:</span> {contact_obj.phone}</div>
                <div class="detail"><span class="label">Subject:</span> {contact_obj.subject}</div>
                <div class="detail"><span class="label">Message:</span> {contact_obj.message}</div>
            </div>
        </div>
    </body>
    </html>
    """
    
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"Contact Form: {contact_obj.subject}",
            "html": html_content
        }
        await asyncio.to_thread(resend.Emails.send, params)
        logging.info(f"Contact email sent to {ADMIN_EMAIL}")
    except Exception as e:
        logging.error(f"Failed to send contact email: {str(e)}")
    
    return contact_obj

@api_router.post("/careers", response_model=CareerApplication)
async def create_career_application(input: CareerApplicationCreate):
    career_dict = input.model_dump()
    career_obj = CareerApplication(**career_dict)
    
    doc = career_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.careers.insert_one(doc)
    
    # Send email notification
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #1A1A1A; color: #C9A961; padding: 20px; text-align: center; }}
            .content {{ background: #f4f4f4; padding: 20px; }}
            .detail {{ margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #C9A961; }}
            .label {{ font-weight: bold; color: #1A1A1A; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Career Application</h1>
            </div>
            <div class="content">
                <div class="detail"><span class="label">Name:</span> {career_obj.name}</div>
                <div class="detail"><span class="label">Email:</span> {career_obj.email}</div>
                <div class="detail"><span class="label">Phone:</span> {career_obj.phone}</div>
                <div class="detail"><span class="label">Position:</span> {career_obj.position}</div>
                <div class="detail"><span class="label">Experience:</span> {career_obj.experience}</div>
                <div class="detail"><span class="label">Cover Letter:</span> {career_obj.cover_letter}</div>
            </div>
        </div>
    </body>
    </html>
    """
    
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [ADMIN_EMAIL],
            "subject": f"Career Application: {career_obj.position} - {career_obj.name}",
            "html": html_content
        }
        await asyncio.to_thread(resend.Emails.send, params)
        logging.info(f"Career application email sent to {ADMIN_EMAIL}")
    except Exception as e:
        logging.error(f"Failed to send career email: {str(e)}")
    
    return career_obj

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()