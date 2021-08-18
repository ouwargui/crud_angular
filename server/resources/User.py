from flask import json, request, Response, jsonify, make_response
from flask_restful import Resource

from models.user import UserModel

class User(Resource):
    def post(self):
        data = request.get_json(force=True)
        name = data['name']
        email = data['email']
        password = data['password']

        person = UserModel(name=name, email=email, password=password)
        person.save_to_db()

        return Response(json.dumps({'success': 200}))

class UserList(Resource):
    def get(self):
        user_list = UserModel.find_all()
        user_list_json = [user.to_json() for user in user_list]
        return Response(json.dumps(user_list_json))

class UserAuthentication(Resource):
    def post(self):
        data = request.get_json(force=True)

        email = data['email']
        password = data['password']

        person = UserModel.find_by_email(email)
        if (person):
            check = person.password_check(password)
        else:
            check = False
        
        response = make_response(jsonify(status=200, success=check).data)

        return response

class UpdateUser(Resource):
    def post(self):
        data = request.get_json(force=True)

        email = data['email']
        password = data['password']

        person = UserModel.find_by_email(email)
        if (person):
            UserModel.update_password(email, password)
            check = True
        else:
            check = False

        response = make_response(jsonify(status=200, success=check).data)

        return response