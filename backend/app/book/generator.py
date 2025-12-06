# backend/app/book/generator.py
from typing import Optional
from app.utils.files import load_chapter_markdown

def get_chapter_content(chapter_slug: str) -> Optional[str]:
    # load markdown from filesystem (frontend docs) or DB
    return load_chapter_markdown(chapter_slug)
