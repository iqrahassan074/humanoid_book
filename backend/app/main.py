# backend/app/main.py
import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from app.core.config import settings
from app.core.logging_config import configure_logging

# Routers
from app.auth import routes as auth_routes
from app.chatbot import routes as chatbot_routes
from app.book import routes as book_routes
from app.db.engine import create_db_and_tables, get_engine

# Configure logging first
configure_logging()
logger = logging.getLogger("uvicorn.error")

def create_app() -> FastAPI:
    app = FastAPI(
        title="Humanoid AI Book — Backend",
        version="1.0.0",
        description="FastAPI backend for Humanoid AI Book: auth, chatbot, book APIs",
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include routers
    app.include_router(auth_routes.router, prefix="/auth", tags=["auth"])
    app.include_router(chatbot_routes.router, prefix="/chat", tags=["chatbot"])
    app.include_router(book_routes.router, prefix="/book", tags=["book"])

    # Health check
    @app.get("/health", tags=["health"])
    async def health():
        return {"status": "ok"}

    # Validation error handler (clean JSON)
    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        logger.debug("Validation error: %s", exc)
        return JSONResponse(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            content={"detail": exc.errors(), "body": exc.body},
        )

    return app


app = create_app()

# Create DB/tables on startup (SQLite by default)
@app.on_event("startup")
async def on_startup():
    logger.info("Starting up application")
    # create DB and tables if not exist
    create_db_and_tables()


@app.on_event("shutdown")
async def on_shutdown():
    logger.info("Shutting down application")


# Allow running with `python -m uvicorn` using `app:app`
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        log_level=settings.UVICORN_LOG_LEVEL,
        reload=settings.DEBUG,  # useful during dev; set False in prod
    )
