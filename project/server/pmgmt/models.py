#project/server/pmgmt/models.py
import jwt
import datetime
from project.server import app, db, bcrypt

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer,primary_key=True, autoincrement=True)
    name = db.Column(db.String(64))
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    registed_on = db.Column(db.DateTime, nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)
    

    def __init__(self, name, email, password, admin=False):
        self.email = email
        self.password_hash = bcrypt.generate_password_hash(password)
        self.name = name

    def encode_auth_token(self, user_id):
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(payload, app.config.get('JWT_SECRET_KEY'), algorithm='HS256')
        except Exception as e:
            return e
