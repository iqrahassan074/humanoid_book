# backend/app/chatbot/routes.py
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from app.chatbot import service as chatbot_service
from app.security.deps import get_current_user

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@router.post("/", response_model=ChatResponse)
def chat(req: ChatRequest, user=Depends(get_current_user)):
    try:
        result = chatbot_service.call_gemini(req.message, user_id=str(user.id))
        # "reply" extraction depends on Gemini response shape
        reply = result.get("reply") or str(result)
        return ChatResponse(reply=reply)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
