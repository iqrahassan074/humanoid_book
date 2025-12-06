# backend/app/chatbot/service.py
import os
import requests
from typing import Dict, Any, Optional
from app.core.config import settings

def call_gemini(prompt: str, user_id: Optional[str] = None) -> Dict[str, Any]:
    """
    Minimal Gemini call wrapper. Uses GEMINI_API_URL and GEMINI_API_KEY from env.
    Adjust request body depending on actual Gemini API contract.
    """
    api_url = settings.GEMINI_API_URL
    api_key = settings.GEMINI_API_KEY
    if not api_url or not api_key:
        # Fail cleanly: service unavailable until user configures keys
        raise RuntimeError("Gemini API is not configured. Set GEMINI_API_URL and GEMINI_API_KEY in .env")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "prompt": prompt,
        "user": user_id,
        # add any other Gemini-specific parameters here
    }
    resp = requests.post(api_url, json=payload, headers=headers, timeout=30)
    resp.raise_for_status()
    return resp.json()
