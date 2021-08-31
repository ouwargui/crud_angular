from flask import request, jsonify, make_response
from flask_restful import Resource
import random

from models.sneaker import SneakerModel

class SneakerList(Resource):
  def get(self):
    sneaker_list = SneakerModel.find_all()
    random.shuffle(sneaker_list)
    sneaker_list_json = [sneaker.to_json() for sneaker in sneaker_list]

    response = make_response(jsonify(status=200, success=True, sneaker_list=sneaker_list_json))

    return response

class Sneaker(Resource):
  def post(self):
    data = request.get_json(force=True)

    for sneaker in data:
      if (sneaker['brand'] and sneaker['name'] and sneaker['releaseDate'] and sneaker['image']):
        brand = sneaker['brand']
        name = sneaker['name']
        releaseDate = sneaker['releaseDate']
        retailPrice = sneaker['retailPrice']
        image = sneaker['image']
        originalImage = image['original']

        sneakers = SneakerModel(brand=brand, name=name, releaseDate=releaseDate, retailPrice=retailPrice, image=originalImage)
        sneakers.save_to_db()

    response = make_response(jsonify(status=200, success=True))

    return response

class SneakerId(Resource):
  def post(self):
    data = request.get_json(force=True)
    print(data)

    id = data["id"]

    sneaker = SneakerModel.find_by_id(id)
    sneaker_json = sneaker.to_json()

    response = make_response(jsonify(status=200, success=True, sneaker_detail=sneaker_json))

    return response
