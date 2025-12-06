from pydantic_settings import BaseSettings
from pydantic import AnyUrl, field_validator


class Settings(BaseSettings):
    PROJECT_NAME: str = "Humanoid AI"
    BACKEND_CORS_ORIGINS: list[str] = ["*"]

    @field_validator("BACKEND_CORS_ORIGINS", mode="before")
    def split_origins(cls, v):
        if isinstance(v, str):
            return [i.strip() for i in v.split(",")]
        return v


settings = Settings()
