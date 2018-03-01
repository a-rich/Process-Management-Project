import json
from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template
from pmgmt.models import db, User, Reservation


app.route('/api/myreserves', methods=['GET'])
def my_reserves():
	"""showing my reservations"""

	try:
		ts = URLSafeTimedSerializer(current_app.config['SERIALIZATION_KEY'])
		token = ts.loads(token, salt='account_recovery_key', max_age=21600)
		email = token['email']
		password = token['password']
		user = User.query.filter(and_(email==email, password==password)).first()
		reserves = Reservation.query(user_id==user.id)
	except Exception as e:
		return json.dumps({'msg': str(e)})


	if not Reservation.query.