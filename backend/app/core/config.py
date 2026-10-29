from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
import logging
import os

logger = logging.getLogger("uvicorn.info")


class Settings(BaseSettings):
    app_name: str = "Vectryx Backend API"
    environment: str = "development"
    mongodb_url: str = "mongodb://localhost:27017"
    database_name: str = "vectryx_db"
    jwt_secret_key: str = "CHANGE_ME_TO_A_LONG_RANDOM_SECRET"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60
    allowed_origins: str = "http://localhost:3000,http://localhost:5173,http://127.0.0.1:3000,http://127.0.0.1:5173"

    @property
    def cors_origins(self) -> list[str]:
        return [origin.strip() for origin in self.allowed_origins.split(",") if origin.strip()]

    @field_validator("jwt_secret_key")
    @classmethod
    def validate_secret_key(cls, v: str) -> str:
        if os.getenv("ENVIRONMENT") == "production" and v == "CHANGE_ME_TO_A_LONG_RANDOM_SECRET":
            raise ValueError(
                "CRITICAL SECURITY ERROR: JWT_SECRET_KEY must be set to a secure random value in production!"
            )
        if v == "CHANGE_ME_TO_A_LONG_RANDOM_SECRET":
            logger.warning(
                "WARNING: Using default JWT secret key. Change JWT_SECRET_KEY in production."
            )
        return v

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
