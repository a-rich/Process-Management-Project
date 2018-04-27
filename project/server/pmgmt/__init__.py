from flask import Flask
from flask_cors import CORS
from flask_jwt_simple import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# Create and configure Flask app
app = Flask(__name__)
app.config.from_object('pmgmt.app_config.DevelopmentConfig')

# Configure cross-origin resource sharing
CORS(app, resources=r"/api/*")
jwt = JWTManager(app)

# Initialize database
db = SQLAlchemy()
db.init_app(app)
ma = Marshmallow(app)

from pmgmt.views.authentication import authentication
from pmgmt.views.reservations import reservation
from pmgmt.views.mybookings import mybookings
from pmgmt.views.rewards import reward
from pmgmt.views.search import search

# Register views with Flask app
app.register_blueprint(authentication)
app.register_blueprint(search)
app.register_blueprint(reservation)
app.register_blueprint(mybookings)
app.register_blueprint(reward)
