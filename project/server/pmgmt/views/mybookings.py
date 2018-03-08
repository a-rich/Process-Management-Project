from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template, jsonify
from flast_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import marshmallow
from pmgmt.models import db, User, Reservation

booking = Blueprint('mybookings', __name__)

@booking.route('/api/mybookings/', methods=['POST'])
@jwt_required
def my_bookings():
	"""showing my reservations"""

	try:
		user = User.query.filter(email==get_jwt_identity()).first()
		reserves = Reservation.query(user_id==user.id, active=1)

		


	except Exception as e:
		return jsonify.dumps({'msg': str(e)})

