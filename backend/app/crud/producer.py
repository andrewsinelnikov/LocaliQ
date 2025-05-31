from sqlalchemy.orm import Session
from app.models.producer import Producer
from app.schemas.producer import ProducerCreate

def create_producer(db: Session, data: ProducerCreate):
    producer = Producer(**data.dict())
    db.add(producer)
    db.commit()
    db.refresh(producer)
    return producer

def get_all_producers(db: Session):
    return db.query(Producer).all()

def get_producers_by_category(db: Session, category: str):
    return db.query(Producer).filter(Producer.category == category).all()
