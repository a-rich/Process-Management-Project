import time, datetime
from itsdangerous import URLSafeTimedSerializer
from sqlalchemy import and_, or_
from flask import current_app, Blueprint, request, url_for, render_template, jsonify
from flask_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import Marshmallow
from pmgmt.models import db, User, Reservation, Hotel, Room, Reward


reservation = Blueprint('reservation', __name__)

requestLogInMsg = 'Sorry! You need to log in!'


@reservation.route('/api/reservation/new/', methods=['POST'])
# @jwt_required
def new_reservation():

#insert into user (name,email,password,reward) values ('jj','jiajun.wu@sjsu.edu','',5000);

	req = request.get_json()
	#roomId = request.form['room_ID']
	roomId = req['room_ID']
	startDate = req['start_date']
	endDate = req['end_date']
	redeem = req['redeem']

	try:
		# user = User.query.filter(User.email==get_jwt_identity()).first()
		user = User.query.filter(User.email=='jiajun.wu@sjsu.edu').first()

		if user:
			# try_create_res = db.session.query(Reservation).filter(Reservation.room_id==roomId).filter(Reservation.start_date.between(startDate, endDate)|Reservation.end_date.between(startDate, endDate))
			try_create_res = Reservation.query.filter(Reservation.room_id==roomId, Reservation.active==1) \
				.filter(or_(and_(Reservation.start_date>=startDate, Reservation.start_date<endDate), and_(Reservation.end_date>startDate, Reservation.end_date<=endDate))) \
				.first()
				# .filter(Reservation.start_date.between(startDate, endDate)|Reservation.end_date.between(startDate, endDate))
				# .filter(startDate>=start_date, startDate<end_date)|(endDate>start_date, endDate<=end_date))
			# print(try_create_res)

			if not try_create_res:
				try:
					startDate=datetime.datetime.strptime(startDate, "%Y-%m-%d").date()
					endDate=datetime.datetime.strptime(endDate, "%Y-%m-%d").date()
					room = Room.query.join(Hotel).filter(Hotel.id==Room.hotel_id, Room.id==roomId).first()
					new_reservation = Reservation(user_id=user.id, hotel_id=room.hotel_id, room_id=roomId, active=1, start_date=startDate, end_date=endDate)
					db.session.add(new_reservation)
					db.session.flush()

					roomPrice = int(room.price)

					reward = Reward(user_id=user.id, reservation_id=new_reservation.id, alter=roomPrice, reward=user.reward+roomPrice, active=1)
					db.session.add(reward)

					user.reward = user.reward+roomPrice

					db.session.commit()

					return jsonify({'msg': 'Reservation is been made!'})
				except Exception as e:
					db.session.rollback()
					return jsonify({'msg': str(e)})

			else:
				return jsonify({'msg': 'Sorry! This room is not available!'})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})


@reservation.route('/api/reservation/update/', methods=['POST'])
# @jwt_required
def update_reservation():

	req = request.get_json()
	resId = req['reservation_ID']
	startDate = req['start_date']
	endDate = req['end_date']

	try:
		# user = User.query.filter(User.email==get_jwt_identity()).first()
		user = User.query.filter(User.email=='jiajun.wu@sjsu.edu').first()

		if user:
			res = Reservation.query.filter(Reservation.id==resId).first()

			if res:
				"""i need to filter the starting date if conflict with end date whthin the same room"""
				room = Room.query.filter(Room.id==res.room_id)
				try_update_res = Reservation.query.filter(Reservation.id!=res.id, Reservation.room_id==res.room_id, Reservation.active==1) \
					.filter(or_(and_(Reservation.start_date>=startDate, Reservation.start_date<endDate), and_(Reservation.end_date>startDate, Reservation.end_date<=endDate))) \
					.first()

				if not try_update_res:
					startDate = datetime.datetime.strptime(startDate, "%Y-%m-%d").date()
					endDate = datetime.datetime.strptime(endDate, "%Y-%m-%d").date()
					res.updated_date = datetime.datetime.now()
					res.start_date = startDate
					res.end_date = endDate
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
# @jwt_required
def cancel_reservation():

	req = request.get_json()
	resId = req['reservation_ID']

	try:
		# user = User.query.filter(User.email==get_jwt_identity()).first()
		user = User.query.filter(User.email=='jiajun.wu@sjsu.edu').first()

		if user:
			res = Reservation.query.filter(Reservation.user_id==user.id, Reservation.id==resId, Reservation.active==1).first()

			if res:
				res.active = -1
				res.updated_date = datetime.datetime.now()

				user_reward = Reward.query.filter(Reward.user_id==user.id, Reward.reservation_id==resId, Reward.active==1).first()
				user_reward.active = -1
				user_reward.reward -= user_reward.alter

				user.reward -= user_reward.alter

				db.session.commit()
			else:
				return jsonify({'msg': 'Sorry! Can not find this reservation!'})

			return jsonify({'msg': 'Reservation is been canceled!'})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})
