from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.producer import ProducerCreate, ProducerOut
from app.crud.producer import create_producer, get_all_producers, get_producers_by_category
from app.db.session import get_db
from typing import List

router = APIRouter()

@router.post("/", response_model=ProducerOut)
def create(data: ProducerCreate, db: Session = Depends(get_db)):
    return create_producer(db, data)

@router.get("/", response_model=List[ProducerOut])
def get_all(db: Session = Depends(get_db)):
    return get_all_producers(db)

@router.get("/filter/", response_model=List[ProducerOut])
def filter_by_category(category: str, db: Session = Depends(get_db)):
    return get_producers_by_category(db, category)
