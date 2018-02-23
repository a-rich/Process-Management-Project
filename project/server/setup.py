from setuptools import setup

setup(
    name='pmgmt',
    packages=['pmgmt'],
    include_package_data=True,
    install_requires=[
        'flask', 'flask_cors', 'flask_jwt_simple', 'pytest-flask',
        'flask-sqlalchemy', 'bcrypt',
        ],
)
