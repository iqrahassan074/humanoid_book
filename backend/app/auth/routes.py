# backend/app/auth/routes.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session
from app.security.deps import get_db
from app.auth.schemas import UserCreate, Token, UserOut
from app.auth.service import create_user, authenticate_user, create_token_for_user

router = APIRouter()

@router.post("/register", response_model=UserOut)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing = db.exec(select_user_by_email(user_in.email)).first()
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    user = create_user(db, email=user_in.email, password=user_in.password, full_name=user_in.full_name)
    return UserOut(id=user.id, email=user.email, full_name=user.full_name)

# helper select to avoid circular import
def select_user_by_email(email: str):
    from sqlmodel import select
    from app.db.models import User
    return select(User).where(User.email == email)

@router.post("/login", response_model=Token)
def login(form_data: UserCreate, db: Session = Depends(get_db)):
    # We reuse UserCreate schema (email/password)
    user = authenticate_user(db, email=form_data.email, password=form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_token_for_user(user)
    return Token(access_token=token)
