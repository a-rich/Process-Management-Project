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

### Config database ###

#### Install MySQL Workbench ####
Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

Making alias

`alias mysql=/usr/local/mysql/bin/mysql`

`alias mysqladmin=/usr/local/mysql/bin/mysqladmin`

#### Install Python dependencies and set environment variables ####
`python3.6 -m pip install -e .`

`export FLASK_APP=pmgmt`

`export FLASK_DEBUG=true`

#### Run Flask server ####
`flask run`

### Build front end ###
Nathan, can you or someone working on frontend put the setup instructions here?
