# Cubic Logistics Website

Professional logistics website with FTL, PTL & ODC services across India.

## Features

- **Multi-page Website**: Home, About, Services, Contact, Quote, Careers
- **Transportation Services**: FTL, PTL & ODC with 9 fleet types
- **WhatsApp Integration**: Direct chat button (+91 7604848540)
- **Email Notifications**: Quote requests sent to admin@cubiclogistics.net
- **Google Maps**: Office location in Ambattur, Chennai
- **Mobile Responsive**: Works on all devices

## Tech Stack

- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Email**: Resend API
- **Deployment**: Ready for Vercel, Railway, or any cloud platform

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.10+
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cubic-logistics.git
   cd cubic-logistics
   ```

2. **Setup Backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install  # or yarn install
   cp .env.example .env
   # Edit .env with your backend URL
   ```

### Running Locally

**Backend** (Terminal 1):
```bash
cd backend
uvicorn server:app --reload --port 8001
```

**Frontend** (Terminal 2):
```bash
cd frontend
npm start  # or yarn start
```

Visit: http://localhost:3000

## Environment Variables

### Backend (.env)
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=cubic_logistics
RESEND_API_KEY=your_resend_api_key
SENDER_EMAIL=your@email.com
ADMIN_EMAIL=admin@cubiclogistics.net
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

## Deployment

### Option 1: Vercel + Railway
- Deploy frontend to Vercel
- Deploy backend to Railway
- Use MongoDB Atlas (free tier)

### Option 2: Single Platform
- Render.com
- Railway.app
- Fly.io

## API Endpoints

- `POST /api/quote` - Submit quote request
- `POST /api/contact` - Submit contact form
- `POST /api/careers` - Submit career application
- `GET /api/quotes` - Get all quotes

## Contact

**Cubic Logistics**
- Address: 12/2, Munusamy Kovil Street, Ambattur, Chennai - 600053
- Phone: +91 7604848540
- Email: admin@cubiclogistics.net

## License

Private - All Rights Reserved

---

Built with ❤️ "Powered by Speed, Driven by Care"
