from sqlalchemy import Column, Integer, String, Float
from app.db.base import Base

class Producer(Base):
    __tablename__ = "producers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    category = Column(String)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    city = Column(String)
    contact = Column(String)
