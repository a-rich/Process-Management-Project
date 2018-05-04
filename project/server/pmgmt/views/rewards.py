import time, datetime
from itsdangerous import URLSafeTimedSerializer
from sqlalchemy import and_, or_
from flask import current_app, Blueprint, request, url_for, render_template, jsonify
from flask_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from flask_marshmallow import Marshmallow
from pmgmt.models import db, User, Reservation, Hotel, Room, Reward
from pmgmt import ma


reward = Blueprint('reward', __name__)

class RewardSchema(ma.ModelSchema):
	class Meta:
		model = Reward

requestLogInMsg = 'Sorry! You need to log in!'

@reward.route('/api/reward/my_reward/', methods=['POST'])
# @jwt_required
def my_rewards():
	try:
		# user = User.query.filter(User.email==get_jwt_identity()).first()
		user = User.query.filter(User.email=='jiajun.wu@sjsu.edu').first()

		if user:
			myRewards = Reward.query.filter(Reward.user_id==user.id).all()

			schema = RewardSchema(many=True)

			return jsonify({
				'myRewards': schema.dump(myRewards).data
				})
		else:
			return jsonify({'msg': requestLogInMsg})

	except Exception as e:
		return jsonify({'msg': str(e)})

