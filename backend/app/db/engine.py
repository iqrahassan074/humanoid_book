# backend/app/db/engine.py
from sqlmodel import create_engine, SQLModel, Session
from app.core.config import settings
from app.db import models

_engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, echo=False, connect_args={"check_same_thread": False})

def get_engine():
    return _engine

def create_db_and_tables():
    SQLModel.metadata.create_all(_engine)
