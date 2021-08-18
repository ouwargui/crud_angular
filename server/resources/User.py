from flask import json, request, Response, jsonify, make_response
from flask_restful import Resource

from models.user import UserModel

class User(Resource):
    def post(self):
        data = request.get_json(force=True)
        name = data['name']
        email = data['email']
        password = data['password']

        email_check = UserModel.find_by_email(email)
        
        if (email_check):
            response = make_response(jsonify(status=200, success=False))
            
            return response

        person = UserModel(name=name, email=email, password=password)
        person.save_to_db()

        response = make_response(jsonify(status=200, success=True))

        return response

class UserList(Resource):
    def get(self):
        user_list = UserModel.find_all()
        user_list_json = [user.to_json() for user in user_list]

        response = make_response(jsonify(status=200, success=True, user_list=user_list_json))

        return response

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
        
        response = make_response(jsonify(status=200, success=check))

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

        response = make_response(jsonify(status=200, success=check))

        return response