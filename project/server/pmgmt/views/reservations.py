from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template, jsonify
from flask_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import Marshmallow
from pmgmt.models import db, User, Reservation, Hotel, Room

reservation = Blueprint('reservation', __name__)

requestLogInMsg = ''


@reservation.route('/api/reservation/new/', methods=['POST'])
# @jwt_required
def new_reservation():

	req = request.get_json()
	#roomId = request.form['room_ID']
	roomId = req['room_ID']
	startDate = req['start_date']
	endDate = req['end_date']

	# try:
	# 	# user = User.query.filter(email==get_jwt_identity()).first()
	#
	# 	# if user:
	# 		# res = Reservation.query.filter(room_id=roomId)
	# 		# room = Room.query.filter(id=res.room_id)
	# 		print(roomId)
	# 		try_create_res = db.session.query(Reservation).filter(Reservation.room_id==roomId).filter(Reservation.start_date.between(startDate, endDate|Reservation.end_date.between(startDate, endDate))
	# 			# .filter(startDate>=start_date, startDate<=end_date)|(endDate>=start_date, endDate<=end_date))
	# 		#print(try_create_res)
	#
	# 		if room:
	# 			hotel = Hotel.query.join(Room).filter(Hotel.id==Room.hotel_id).filter(Room.id==roomId).first()
	#
	# 			if hotel:
	# 				try:
	# 					new_reservation = Reservation(user_id=user.id, hotel_id=hotel.id, room_id=roomId, active=1, start_date=startDate, end_date=endDate)
	# 					db.session.add(Reservation)
	# 				except Exception as e:
	# 					return jsonify({'msg': str(e)})
	#
	# 		else:
	# 			return jsonify({'msg': 'Sorry! This room is not available!'})
	#
	# 		return jsonify({'msg': 'Reservation is been made!'})
	# 	# else:
	# 	# 	return jsonify({'msg': requestLogInMsg})
	#
	# except Exception as e:
	# 	return jsonify({'msg': str(e)})


@reservation.route('/api/reservation/update/', methods=['POST'])
@jwt_required
def update_reservation():

	req = request.get_json()
	resId = req['reservation_ID']
	startDate = req['start_date']
	endDate = req['end_date']

	try:
		user = User.query.filter(email==get_jwt_identity()).first()

		if user:
			res = Reservation.query.filter(id=resId)

			if res:
				"""i need to filter the starting date if conflict with end date whthin the same room"""
				room = Room.query.filter(id=res.room_id)
				try_update_res = Reservation.query().filter(id!=res.id, room_id=res.room_id) \
					.filter((startDate>=start_date, startDate<=end_date)|(endDate>=start_date, endDate<=end_date))

				if not try_update_res:
					res.start_date = start_date
					res.end_date = end_date
					db.session.commit()
				else:
					return jsonify({'msg': 'Can not reserve the room due to time conflict!'})

			else:
				return jsonify({'msg': 'Sorry! Can not find this reservation!'})

			return jsonify({'msg': 'Reservation is been updated!'})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})


@reservation.route('/api/reservation/cancel/', methods=['POST'])
@jwt_required
def cancel_reservation():

	req = request.get_json()
	resId = req['reservation_ID']

	try:
		user = User.query.filter(email==get_jwt_identity()).first()

		if user:
			res = Reservation.query.filter(id=resId)

			if res:
				res.active = -1
				db.session.commit()
			else:
				return jsonify({'msg': 'Sorry! Can not find this reservation!'})

			return jsonify({'msg': 'Reservation is been canceled!'})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})
