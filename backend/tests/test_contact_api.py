"""Backend API tests for Kapoor Engineering Works contact endpoint."""
import os
import pytest
import requests

BASE_URL = os.environ.get(
    "REACT_APP_BACKEND_URL",
    "https://kapoor-portfolio-2.preview.emergentagent.com",
).rstrip("/")


def _valid_payload(**overrides):
    p = {
        "name": "Test User",
        "company": "Test Co",
        "email": "test@example.com",
        "phone": "",
        "service": "Machinery Repair",
        "message": "A valid 10+ char message for the enquiry endpoint.",
        "website": "",
    }
    p.update(overrides)
    return p


# ---------- Health ----------
class TestHealth:
    def test_health_returns_expected_shape(self):
        r = requests.get(f"{BASE_URL}/api/health", timeout=10)
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"
        assert data["resend_configured"] is False
        assert data["sender"] == "onboarding@resend.dev"
        assert data["recipient"] == "kapooreng149@gmail.com"


# ---------- Contact (validation + behaviour) ----------
class TestContactValidation:
    def test_only_name_no_email_no_phone_returns_400(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(name="OnlyName", email=None, phone=""),
            timeout=10,
        )
        assert r.status_code == 400
        assert "either an email or a phone number" in r.json()["detail"]

    def test_honeypot_returns_200_silent(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(website="http://spam.example.com"),
            timeout=10,
        )
        assert r.status_code == 200
        assert r.json() == {"status": "ok"}

    def test_name_too_short_returns_422(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(name="A"),
            timeout=10,
        )
        assert r.status_code == 422

    def test_message_too_short_returns_422(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(message="short"),
            timeout=10,
        )
        assert r.status_code == 422

    def test_invalid_email_returns_422(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(email="not-an-email"),
            timeout=10,
        )
        assert r.status_code == 422


class TestContactResendUnconfigured:
    def test_valid_payload_returns_503_when_resend_not_configured(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(),
            timeout=10,
        )
        assert r.status_code == 503
        assert "Email service is not configured" in r.json()["detail"]


# ---------- Rate limit (last; consumes the bucket) ----------
class TestContactRateLimit:
    def test_sixth_request_returns_429(self):
        # NOTE: Earlier 503 tests in this run have already consumed some slots
        # for this IP. To make the assertion deterministic regardless of order,
        # we send up to 8 requests and assert that at least one 429 appears
        # and earlier requests are 503 (Resend not configured) or 200 (honeypot).
        statuses = []
        for _ in range(8):
            r = requests.post(
                f"{BASE_URL}/api/contact",
                json=_valid_payload(),
                timeout=10,
            )
            statuses.append(r.status_code)
        assert 429 in statuses, f"Expected a 429 within 8 requests, got {statuses}"
        # All non-429 should be 503 (since Resend is unconfigured)
        for s in statuses:
            assert s in (503, 429), f"Unexpected status {s} in {statuses}"
