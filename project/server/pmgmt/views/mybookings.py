from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template, jsonify
from flask_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import Marshmallow
from pmgmt.models import db, User, Reservation
from pmgmt import ma

mybookings = Blueprint('mybookings', __name__)

class ReservationSchema(ma.ModelSchema):
	class Meta:
		model = Reservation

requestLogInMsg = 'Sorry! You need to log in!'

@mybookings.route('/api/mybookings/', methods=['POST'])
# @jwt_required
def my_bookings():
	try:
		# user = User.query.filter(User.email==get_jwt_identity()).first()
		user = User.query.filter(User.email=='jiajun.wu@sjsu.edu').first()
		if user:
			openReservation = Reservation.query.filter(Reservation.user_id==user.id, Reservation.active==1).all()
			closedReservation = Reservation.query.filter(Reservation.user_id==user.id, Reservation.active==0).all()
			cancelledRerservation = Reservation.query.filter(Reservation.user_id==user.id, Reservation.active==-1).all()

			reservations = Reservation.query.filter(Reservation.user_id==user.id).all()
			for res in reservations:
				print(res.id)

			schema = ReservationSchema(many=True)
			cr = schema.dump(cancelledRerservation)
			print(cr)

			return jsonify({
				# 'openReservation': Reservation.reservation_schema.dump(openReservation).data
				# , 'closedReservation': Reservation.reservation_schema.dump(closedReservation).data
				# , 'cancelledRerservation' : Reservation.reservation_schema.dump(cancelledRerservation).data
				})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})

