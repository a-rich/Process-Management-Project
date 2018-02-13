import json
from flask import Blueprint, request, jsonify, make_response
from flask_jwt_simple import create_jwt
# is this how you import models?
from .models import User
from .app_config import DevelopmentConfig
# may use werkzeug later
# from werkzeug.security import generate_password_hash, check_password_hash
import datetime
from functools import wraps
#from pmgmt.models import User

authentication = Blueprint('authentication', __name__)

# @authentication.route('/api/login/', methods=['POST'])
# def login():
#     """
#         The following code is copied from another project that uses MongoEngine
#         which is an object document mapper (ODM) as opposed to an object
#         relational mapper (ORM)...the SQLAlchemy parallel to the following code
#         should be very similar with minor syntax differences.
#     """
#
#     req = request.get_json()  # Get the request object as a Python dict
#
#     try:
#         # Query the User model
#         user = User.objects.get(email=req['email'], password=req['password'])
#         # Create a JWT to send back to the client
#         token = create_jwt(identity=email)
#         return json.dumps({'jwt': token, 'name': user.name})
#     except Exception as e:
#         return json.dumps({'error': 'Invalid credentials. Please try again.'})

expiration = DevelopmentConfig.JWT_EXPIRES
key =  DevelopmentConfig.JWT_SECRET_KEY

# apply this token to all endpoints that require the user by logged in
def require_token(f):
    @wraps(f)
    def decorate(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message': 'Missing token'}), 401

        try:
            data = jwt.decode(token, key)
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'Invalid token'}), 401

        return f(current_user, *args, **kwargs)
    return decorate



@authentication.route('/api/login', methods=['POST'])
def login():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login Required!"'})

    try:
        user = User.query.filter_by(name=auth.username).first()

        # since password is being hashed in user init i'm not entirely sure if this is the correct check
        if user.password_hash == auth.password:
            token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow() + expiration}, key)
            return jsonify({'token': token.decode('UTF-8')})

    except Exception as e:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login Required!"'})
