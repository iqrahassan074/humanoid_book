# backend/app/book/routes.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.book.generator import get_chapter_content

router = APIRouter()

class ChapterOut(BaseModel):
    slug: str
    content: str

@router.get("/chapters/{slug}", response_model=ChapterOut)
def read_chapter(slug: str):
    content = get_chapter_content(slug)
    if content is None:
        raise HTTPException(status_code=404, detail="Chapter not found")
    return ChapterOut(slug=slug, content=content)
