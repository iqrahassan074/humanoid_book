# backend/app/auth/service.py
from sqlmodel import Session, select
from app.db.models import User
from app.security.security import hash_password, verify_password, create_access_token
from app.core.config import settings
from typing import Optional

def create_user(session: Session, email: str, password: str, full_name: Optional[str] = None) -> User:
    user = User(email=email, hashed_password=hash_password(password), full_name=full_name)
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

def authenticate_user(session: Session, email: str, password: str) -> Optional[User]:
    statement = select(User).where(User.email == email)
    user = session.exec(statement).first()
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user

def create_token_for_user(user: User) -> str:
    return create_access_token(subject=user.email)
