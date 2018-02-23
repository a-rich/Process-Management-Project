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

#### Install Python dependencies and set environment variables ####
`python3.6 -m pip install -e .`

`export FLASK_APP=pmgmt`

`export FLASK_DEBUG=true`

### Create database and insert Hotel data ###
Creates an SQLite3 database at `Process-Management-Project/project/server/test.db`:

`python3.6 Process-Management-Project/project/server/utils/sqlalchemy_insert.py`

#### Run Flask server ####
`flask run`

### Build front end ###
Nathan, can you or someone working on frontend put the setup instructions here?
