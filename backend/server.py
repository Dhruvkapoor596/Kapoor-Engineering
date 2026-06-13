from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import time
import re
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone

import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ---- MongoDB ----
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

# ---- Resend ----
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "kapooreng149@gmail.com")
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# ---- App ----
app = FastAPI(title="Kapoor Engineering Works API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# =====================================================
# Models
# =====================================================
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactEnquiry(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: Optional[str] = Field(default="", max_length=200)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(default="", max_length=40)
    service: str = Field(min_length=2, max_length=80)
    message: str = Field(min_length=10, max_length=5000)
    # Honeypot field — bots fill it, humans don't (rendered hidden in frontend)
    website: Optional[str] = Field(default="", max_length=200)

    @field_validator("phone")
    @classmethod
    def phone_or_empty(cls, v: str) -> str:
        v = (v or "").strip()
        if v and not re.match(r"^[\d\s\-\+\(\)]{6,20}$", v):
            raise ValueError("Phone number contains invalid characters.")
        return v


# =====================================================
# Helpers
# =====================================================
def _escape(text: str) -> str:
    return (
        (text or "")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br/>")
    )


def _build_email(enq: ContactEnquiry) -> tuple[str, str, str]:
    subject = f"New Enquiry — {enq.service} — {enq.name}"

    # Plain text version (for clients that don't render HTML)
    plain = (
        f"New enquiry from the Kapoor Engineering Works website\n"
        f"--------------------------------------------------------\n"
        f"Name:    {enq.name}\n"
        f"Company: {enq.company or '—'}\n"
        f"Email:   {enq.email or '—'}\n"
        f"Phone:   {enq.phone or '—'}\n"
        f"Service: {enq.service}\n\n"
        f"Message:\n{enq.message}\n"
    )

    html = f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:32px;">
          <tr><td style="border-bottom:1px solid rgba(255,255,255,0.08);padding-bottom:16px;">
            <div style="color:#EAB308;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;">New Website Enquiry</div>
            <div style="color:#ffffff;font-size:22px;font-weight:bold;margin-top:6px;">{_escape(enq.service)}</div>
          </td></tr>
          <tr><td style="padding-top:24px;">
            <table cellpadding="0" cellspacing="0" width="100%" style="color:#cbd5e1;font-size:14px;line-height:1.6;">
              <tr><td style="padding:6px 0;color:#64748b;width:90px;">Name</td><td style="color:#ffffff;font-weight:600;">{_escape(enq.name)}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Company</td><td style="color:#ffffff;">{_escape(enq.company or '—')}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="color:#ffffff;">{_escape(enq.email or '—')}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="color:#ffffff;">{_escape(enq.phone or '—')}</td></tr>
            </table>
          </td></tr>
          <tr><td style="padding-top:24px;">
            <div style="color:#64748b;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Message</div>
            <div style="background:#050505;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;color:#e2e8f0;font-size:14px;line-height:1.6;">{_escape(enq.message)}</div>
          </td></tr>
          <tr><td style="padding-top:24px;border-top:1px solid rgba(255,255,255,0.08);margin-top:24px;">
            <div style="color:#64748b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Kapoor Engineering Works — Website</div>
          </td></tr>
        </table>
      </td></tr>
    </table>
    """
    return subject, plain, html


# Very small in-memory rate-limiter (per IP). Good enough for a low-traffic site.
_RATE_BUCKET: dict[str, list[float]] = {}
_RATE_WINDOW_SEC = 60 * 60  # 1 hour
_RATE_MAX = 5  # 5 enquiries per hour per IP


def _check_rate_limit(ip: str) -> None:
    now = time.time()
    bucket = _RATE_BUCKET.setdefault(ip, [])
    # prune
    cutoff = now - _RATE_WINDOW_SEC
    bucket[:] = [t for t in bucket if t > cutoff]
    if len(bucket) >= _RATE_MAX:
        raise HTTPException(
            status_code=429,
            detail="Too many enquiries from this IP. Please try again later or call us directly.",
        )
    bucket.append(now)


# =====================================================
# Routes
# =====================================================
@api_router.get("/")
async def root():
    return {"message": "Kapoor Engineering Works API", "ok": True}


@api_router.get("/health")
async def health():
    return {
        "status": "ok",
        "resend_configured": bool(RESEND_API_KEY),
        "sender": SENDER_EMAIL,
        "recipient": RECIPIENT_EMAIL,
    }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r["timestamp"], str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows


@api_router.post("/contact")
async def submit_contact(enquiry: ContactEnquiry, request: Request):
    # Honeypot — silently accept, do nothing.
    if enquiry.website:
        logger.info("Honeypot triggered, dropping enquiry")
        return {"status": "ok"}

    # Must have at least one way to reach back.
    if not enquiry.email and not (enquiry.phone or "").strip():
        raise HTTPException(
            status_code=400,
            detail="Please provide either an email or a phone number.",
        )

    # Rate limit
    client_ip = request.client.host if request.client else "unknown"
    _check_rate_limit(client_ip)

    if not RESEND_API_KEY:
        logger.error("RESEND_API_KEY missing — cannot send email")
        raise HTTPException(
            status_code=503,
            detail="Email service is not configured yet. Please contact us by phone or WhatsApp.",
        )

    subject, plain, html = _build_email(enquiry)

    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "subject": subject,
        "html": html,
        "text": plain,
        # Set reply-to so replying in Gmail goes straight to the enquirer
        "reply_to": [enquiry.email] if enquiry.email else None,
    }
    # Drop None values
    params = {k: v for k, v in params.items() if v is not None}

    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
    except Exception as e:  # pragma: no cover
        logger.exception("Resend send failed")
        raise HTTPException(
            status_code=502,
            detail="We couldn't send your enquiry right now. Please call us or try again shortly.",
        ) from e

    # Also archive the enquiry in MongoDB for record-keeping
    try:
        await db.enquiries.insert_one(
            {
                "id": str(uuid.uuid4()),
                "name": enquiry.name,
                "company": enquiry.company,
                "email": enquiry.email,
                "phone": enquiry.phone,
                "service": enquiry.service,
                "message": enquiry.message,
                "ip": client_ip,
                "resend_id": result.get("id") if isinstance(result, dict) else None,
                "created_at": datetime.now(timezone.utc).isoformat(),
            }
        )
    except Exception:  # archival is best-effort
        logger.exception("Enquiry archive failed (non-fatal)")

    return {
        "status": "sent",
        "message": "Thanks! Your enquiry has been delivered to our team.",
        "email_id": result.get("id") if isinstance(result, dict) else None,
    }


# =====================================================
# Wire-up
# =====================================================
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
