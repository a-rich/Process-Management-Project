#!/bin/bash
python3 -m venv env
source env/bin/activate
pip3 install -e .
export FLASK_APP=pmgmt
export FLASK_DEBUG=true
cd utils
python3 sqlalchemy_insert.py
cd ..
flask run
