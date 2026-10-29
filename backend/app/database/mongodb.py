from contextlib import asynccontextmanager
from fastapi import FastAPI
from pymongo import AsyncMongoClient
import logging
from app.core.config import settings

logger = logging.getLogger("uvicorn.info")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Connecting to MongoDB...")
    client = AsyncMongoClient(settings.mongodb_url)
    app.state.mongodb_client = client
    app.state.db = client[settings.database_name]
    try:
        await client.admin.command("ping")
        # Ensure unique index on email to avoid race-condition duplicate accounts
        await app.state.db["users"].create_index("email", unique=True)
        logger.info("Connected to MongoDB successfully and ensured indexes")
    except Exception as exc:
        logger.error("Failed to connect to MongoDB: %s", exc)
    
    yield

    # Shutdown
    logger.info("Closing MongoDB connection...")
    await client.close()
    logger.info("MongoDB connection closed.")
