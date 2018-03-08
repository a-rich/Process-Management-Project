import json
from bcrypt import gensalt, hashpw, checkpw
from itsdangerous import URLSafeTimedSerializer
from flask import current_app, Blueprint, request, url_for, render_template
from flask_jwt_simple import create_jwt, jwt_required, get_jwt_identity
from pmgmt import db
from pmgmt.models import User
from pmgmt.utils import send_email

authentication = Blueprint('authentication', __name__)

@authentication.route('/api/test_create_user/', methods=['POST'])
def simple_create_user():
    """
    """

    req = request.get_json()
    email = req['email']
    password = req['password']
    name = req['name']

    if not User.query.filter_by(email=email).first():
        new_user = User(name=name, email=email,
                password=hashpw(password.encode('utf-8'), gensalt()))
        db.session.add(new_user)
        db.session.commit()
        return json.dumps({'msg': 'User account created.'})
    return json.dumps({'msg': 'User already exists.'})

@authentication.route('/api/create_user/', methods=['POST'])
def create_user():
    """
    """

    req = request.get_json()
    email = req['email']
    password = req['password']
    name = req['name']

    if not User.query.filter_by(email=email).first():
        ts = URLSafeTimedSerializer(current_app.config['SERIALIZATION_KEY'])
        token = ts.dumps({
                    'email': email,
                    'password': password,
                    'name': name
                }, salt='account_creation_key')
        email_url = url_for(
                'authentication.confirm_account_creation',
                token=token,
                _external=True)
        subject = 'Confirm your LikeHome account'
        html = render_template(
                'account_activation.html',
                email_url=email_url)

        try:
            send_email(email, subject, html)
            return json.dumps({'msg': 'Sent account confirmation link to email.'})
        except Exception as e:
            return json.dumps({'msg': str(e)})

        return json.dumps({'msg': 'User account created.'})

@authentication.route('/api/create_user/<token>/', methods=['GET'])
def confirm_account_creation(token):
    """
    """

    try:
        ts = URLSafeTimedSerializer(current_app.config['SERIALIZATION_KEY'])
        token = ts.loads(token, salt='account_creation_key', max_age=21600)
        email = token['email']
        password = token['password']
        name = token['name']
        if not User.query.filter_by(email=email).first():
            new_user = User(name=name, email=email,
                    password=hashpw(password.encode('utf-8'), gensalt()))
            db.session.add(new_user)
            db.session.commit()
            return json.dumps({'msg': 'User account created.'})
    except Exception as e:
        return json.dumps({'msg': 'This email is already in use.'})

@authentication.route('/api/reset_password/', methods=['POST'])
def reset_password():
    """
    """

    req = request.get_json()
    email = req['email']
    password = req['password']

    if User.query.filter_by(email=email).first():
        ts = URLSafeTimedSerializer(current_app.config['SERIALIZATION_KEY'])
        token = ts.dumps({
                'email': email,
                'password': password
                }, salt='account_recovery_key')
        email_url = url_for(
                'authentication.confirm_account_recovery',
                token=token,
                _external=True)
        subject = 'Recover your LikeHome account'
        html = render_template(
                'account_recovery.html',
                email_url=email_url)

        try:
            send_email(email, subject, html)
            return json.dumps({'msg': 'Sent account recovery link to email.'})
        except Exception as e:
            return json.dumps({'msg': str(e)})

    return json.dumps({'msg': 'No account associated with this email.'})

@authentication.route('/api/reset_password/<token>/', methods=['GET'])
@jwt_required
def confirm_account_recovery(token):
    """
    """

    try:
        ts = URLSafeTimedSerializer(current_app.config['SERIALIZATION_KEY'])
        token = ts.loads(token, salt='account_recovery_key', max_age=21600)
        email = token['email']
        password = token['password']
        user = User.query.filter_by(email=email).first()
        user.password = hashpw(password.encode('utf-8'), gensalt())
        db.session.commit()
        return json.dumps({'msg': 'User successfully reset their password.'})
    except Exception as e:
        return json.dumps({'msg': str(e)})

@authentication.route('/api/login/', methods=['POST'])
def login():
    """
    """

    req = request.get_json()
    email = req['email']
    password = req['password']

    try:
        user = User.query.filter_by(email=email).first()
        schema = User.UserSchema()
        obj = schema.dump(user)
        text = obj.data
        token = create_jwt(identity=email)
        return json.dumps({
                'jwt': token,
                'name': user.name,
                'user':text
                })
    except Exception as e:
        return json.dumps({'msg': 'Invalid credentials.'})
