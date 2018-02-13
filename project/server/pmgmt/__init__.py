from flask import Flask
from flask_cors import CORS
from flask_jwt_simple import JWTManager
from pmgmt.models import db
from pmgmt.views.fake_endpoint import fake_endpoint
from pmgmt.views.authentication import authentication

def create_app():
    """
        App factory function.
    """

    # Create and configure Flask app
    app = Flask(__name__)
    app.config.from_object('pmgmt.app_config.DevelopmentConfig')

    # Configure cross-origin resource sharing
    CORS(app, resources=r"/api/*")
    jwt = JWTManager(app)

    # Initialize database
    db.init_app(app)

    # Register views with Flask app
    app.register_blueprint(fake_endpoint)
    app.register_blueprint(authentication)

    return app

app = create_app()
