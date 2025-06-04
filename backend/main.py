from fastapi import FastAPI
from app.db.session import engine
from app.db.base import Base
from app.api import producer, auth

# Створення бази
Base.metadata.create_all(bind=engine)

# ЄДИНЕ створення FastAPI-інстансу
app = FastAPI(
    title="Мапа виробників",
    version="1.0.0"
)

# Підключення роутерів
app.include_router(producer.router, prefix="/api/producers", tags=["Producers"])
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
