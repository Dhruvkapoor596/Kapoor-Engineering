"""Backend API tests for Kapoor Engineering Works contact endpoint (iter 3 — Resend LIVE)."""
import os
import pytest
import requests

BASE_URL = os.environ.get(
    "REACT_APP_BACKEND_URL",
    "https://kapoor-portfolio-2.preview.emergentagent.com",
).rstrip("/")


def _valid_payload(**overrides):
    p = {
        "name": "AUTOMATED PYTEST",
        "company": "Test Co (ignore)",
        "email": "test@example.com",
        "phone": "",
        "service": "Machinery Repair",
        "message": "AUTOMATED PYTEST RUN — please ignore. Iteration 3 backend smoke.",
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
        assert data["resend_configured"] is True
        assert data["sender"] == "onboarding@resend.dev"
        assert data["recipient"] == "kapooreng149@gmail.com"


# ---------- Contact validation (these do NOT consume rate-limit slots when they 4xx before rate check) ----------
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


# ---------- Contact end-to-end (Resend LIVE — sends ONE real email) ----------
class TestContactLiveSend:
    def test_single_valid_submission_returns_200_and_email_id(self):
        """Resend is configured — one valid submission should succeed.
        Reset rate-limit by restarting backend before running tests if needed.
        """
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json=_valid_payload(),
            timeout=15,
        )
        # Accept 200 (sent) or 429 (rate-limited from prior runs)
        assert r.status_code in (200, 429), f"Unexpected: {r.status_code} {r.text}"
        if r.status_code == 200:
            data = r.json()
            assert data["status"] == "sent"
            assert "email_id" in data
        else:
            pytest.skip("Rate-limited from prior tests — restart backend to reset bucket.")
