from fastapi import FastAPI
from app.api import producer
from app.db.session import engine
from app.db.base import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Мапа виробників",
    version="1.0.0"
)

app.include_router(producer.router, prefix="/api/producers", tags=["Producers"])
