from pydantic import BaseModel

class ProducerBase(BaseModel):
    name: str
    description: str | None = None
    category: str
    latitude: float
    longitude: float
    city: str | None = None
    contact: str | None = None

class ProducerCreate(ProducerBase):
    pass

class ProducerOut(ProducerBase):
    id: int

    class Config:
        orm_mode = True
