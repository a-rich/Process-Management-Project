Process Management Project
=========================

Installation
-------------------------

### Clone repository ###

##### HTTPS #####
`git clone https://github.com/Aweeeezy/Process-Management-Project.git`

##### SSH #####
`git clone git@github.com:Aweeeezy/Process-Management-Project.git`

### Build back end ###

#### Create Python virtual environment ####
If you haven't already, install [Python 3.6](https://www.python.org/downloads/).

`cd Process-Management-Project/project/server/`

`python3.6 -m venv env`

`source env/bin/activate`

### Config database: option 1 (MySQL), option 2 (SQLite) ###

#### Option 1: install MySQL Workbench ####
Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

Making alias

`alias mysql=/usr/local/mysql/bin/mysql`

`alias mysqladmin=/usr/local/mysql/bin/mysqladmin`

#### Option 2: create SQLite database ####
Follow the instruction below to start the app. This will create a SQLite
database located at `/tmp/test.db`.

Shutdown the application (CTRL + C).

Open up a Python3.6 interpreter and create the schema for the database:

`python3.6`

`>>> from pmgmt import app, db`

`>>> with app.app_context():`
`...     db.create_all()`

Populate database with `hotel_data.json` file:

`python3.6 Process-Management-Project/project/utils/sqlalchemy_insert.py`

#### Install Python dependencies and set environment variables ####
`python3.6 -m pip install -e .`

`export FLASK_APP=pmgmt`

`export FLASK_DEBUG=true`

#### Run Flask server ####
`flask run`

### Build front end ###
Nathan, can you or someone working on frontend put the setup instructions here?
