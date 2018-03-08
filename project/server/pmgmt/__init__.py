from flask import Flask
from flask_cors import CORS
from flask_jwt_simple import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_whooshee import Whooshee

# Create and configure Flask app
app = Flask(__name__)
app.config.from_object('pmgmt.app_config.DevelopmentConfig')

# Configure cross-origin resource sharing
CORS(app, resources=r"/api/*")
jwt = JWTManager(app)

# Initialize database
db = SQLAlchemy()
db.init_app(app)

# Initialize Marshmallow serialization object
ma = Marshmallow(app)

# Initialize Whooshee for full text search
whooshee = Whooshee(app)
whooshee.reindex()

from pmgmt.views.authentication import authentication
from pmgmt.views.search import search_blueprint

# Register views with Flask app
app.register_blueprint(authentication)
app.register_blueprint(search_blueprint)
