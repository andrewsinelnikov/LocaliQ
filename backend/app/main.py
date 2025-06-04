from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, producer
from app.db.base import Base
from app.db.session import engine

app = FastAPI()

# CORS — дозвіл для фронтенду
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # або ["*"] для будь-якого домену
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Створення всіх таблиць у БД
Base.metadata.create_all(bind=engine)

# Підключення роутерів
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(producer.router, prefix="/api/producers", tags=["producers"])

# Тестовий кореневий маршрут
@app.get("/")
def root():
    return {"message": "LocaliQ API працює"}
