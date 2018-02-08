#project/server/pmgmt/auth/views.py

from flask import Blueprint, request, make_response, jsonify
from flask.views import MethodView

from project.server import bcrypt, db
from project.server.pmgmt.models import User

auth_blueprint = Blueprint('auth', __name__)

class RegisterAPI(MethodView)
    
    def post(self):
        post_data = request.get_json()
        email = ('email')
        password = post_data.get('password')
        user = User.query.filter_by(email=email).first()
        if not user:
            try:
                name = post_data.get('name')

                user = User(email=email, password_hash = password, name=name)
                db.session.add(user)
                db.session.commit()
                auth_token = user.encode_auth_token(user.id)
                response_object = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                    'auth_token': auth_token.decode()
                }
                return make_response(jsonify(response_object)),201
            except Exception as e:
                response_object = {
                    'status': 'fail',
                    'message': 'An error occurred. Try again.'
                }
                return make_response(jsonify(response_object)), 401
        else:
            response_object = {
                'status': 'fail'
                'message': 'User already exists. Please log in.'
            }
            return make_response(jsonify(response_object)), 202
