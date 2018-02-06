import json
from flask import Blueprint
from flask_jwt_simple import jwt_required, create_jwt, get_jwt_identity

landing = Blueprint('landing', __name__)

@landing.route('/api/', methods=['GET'])
def landing_page():
    """
        Some default endpoint just to test the app.
    """

    return json.dumps({'resp': 'Hey, you found me!'})
