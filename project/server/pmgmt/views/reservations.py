import json
from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template
from flast_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import marshmallow
from pmgmt.models import db, User, Reservation

reservation = Blueprint('reservation', __name__)


@reservation.route('/api/new_reservation/', methods=['POST'])
@jwt_required
def my_reserves():
	"""showing my reservations"""

	req = request.get_json()

	try:
		user = User.query.filter(email==get_jwt_identity()).first()
		reserves = Reservation.query(user_id==user.id)


	except Exception as e:
		return json.dumps({'msg': str(e)})



