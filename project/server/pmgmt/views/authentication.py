import json
from flask import Blueprint, request
from flask_jwt_simple import create_jwt
#from pmgmt.models import User

authentication = Blueprint('authentication', __name__)

@authentication.route('/api/login/', methods=['POST'])
def login():
    """
        The following code is copied from another project that uses MongoEngine
        which is an object document mapper (ODM) as opposed to an object
        relational mapper (ORM)...the SQLAlchemy parallel to the following code
        should be very similar with minor syntax differences.
    """

    req = request.get_json()  # Get the request object as a Python dict

    try:
        # Query the User model
        user = User.objects.get(email=req['email'], password=req['password'])
        # Create a JWT to send back to the client
        token = create_jwt(identity=email)
        return json.dumps({'jwt': token, 'name': user.name})
    except Exception as e:
        return json.dumps({'error': 'Invalid credentials. Please try again.'})
