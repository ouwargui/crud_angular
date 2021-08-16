import logging
from flask import Flask, jsonify, make_response, request
from flask_restful import Resource, Api
from models.models import db, PeopleModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///people.db'
app.config['SQLACLHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
api = Api(app)

@app.before_first_request
def create_table():
    db.create_all()

class Insert(Resource):
    def post(self):
        data = request.get_json(force=True)
        name = data['name']
        email = data['email']
        password = data['password']

        person = PeopleModel(name=name, email=email, password=password)

        db.session.add(person)
        db.session.commit()
        return {'success': 200}

class Retrieve(Resource):
    def get(self):
        persons = PeopleModel.query.all()
        logging.error(persons)
        return jsonify(persons)

api.add_resource(Insert, '/')
api.add_resource(Retrieve, '/users')

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=False)