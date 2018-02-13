import json
from flask import Blueprint, render_template
from flask_jwt_simple import jwt_required, create_jwt, get_jwt_identity
from pmgmt.utils import send_email
from pmgmt.models import Hotel

fake_endpoint = Blueprint('fake_endpoint', __name__)

@fake_endpoint.route('/api/<email>', methods=['GET'])
def endpoint(email):
    """
        Some default endpoint just to test the app.
    """

    subject = 'Confirm your LikeHome email'
    html = render_template(
            'account_activation.html',
            email_url='some test link that is not real')
    try:
        send_email(email, subject, html)
        num_hotels = len(list(Hotel.query.all()))
        return json.dumps({'resp': 'Hey, you found me!', 'hotels': hotels})
    except Exception as e:
        print('FAILURE:', e)

    return json.dumps({'resp': 'Hey, you found me!', 'num_hotels': num_hotels})
