from flask import Flask, Blueprint, jsonify
from flask_restful import Api
from werkzeug.routing import ValidationError
from db import db

from resources.User import User, UserList

app = Flask(__name__)
bluePrint = Blueprint('api', __name__, url_prefix='/api')
api = Api(bluePrint)
app.register_blueprint(bluePrint)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(User, '/user')
api.add_resource(UserList, '/users')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)