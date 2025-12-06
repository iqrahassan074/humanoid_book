# backend/app/utils/files.py
from pathlib import Path
from typing import Optional

# Assume frontend doc folder has 6 chapter markdown files at ../frontend/docs/chapters/*.md
BASE_DIR = Path(__file__).resolve().parents[2]  # backend/app -> backend
FRONTEND_DOCS = BASE_DIR / "frontend" / "docs"  # adjust if different

def load_chapter_markdown(slug: str) -> Optional[str]:
    candidates = [
        FRONTEND_DOCS / f"{slug}.md",
        FRONTEND_DOCS / "chapters" / f"{slug}.md",
    ]
    for p in candidates:
        if p.exists():
            return p.read_text(encoding="utf-8")
    return None
