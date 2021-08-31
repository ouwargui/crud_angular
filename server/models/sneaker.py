from typing import List
from database.db import db

class SneakerModel(db.Model):
  __tablename__ = "sneakers"

  id = db.Column(db.Integer, primary_key=True)
  brand = db.Column(db.String())
  name = db.Column(db.String())
  releaseDate = db.Column(db.String())
  retailPrice = db.Column(db.Integer)
  image = db.Column(db.String())

  def __init__(self, brand, name, releaseDate, retailPrice, image) -> None:
    self.brand = brand
    self.name = name
    self.releaseDate = releaseDate
    self.retailPrice = retailPrice
    self.image = image

  def to_json(self):
    return {"id": self.id, "brand": self.brand, "name": self.name, "releaseDate": self.releaseDate, "retailPrice": self.retailPrice, "image": self.image}

  @classmethod
  def find_all(cls) -> List["SneakerModel"]:
    return cls.query.all()

  @classmethod
  def find_by_brand(cls, brand) -> List["SneakerModel"]:
    return cls.query.filter_by(brand=brand)

  @classmethod
  def find_by_id(cls, id) -> "SneakerModel":
    return cls.query.filter_by(id=id).first()

  def save_to_db(self) -> None:
    db.session.add(self)
    db.session.commit()

  def delete_from_db(self) -> None:
    db.session.delete(self)
    db.session.commit()