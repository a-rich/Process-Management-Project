from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pmgmt import create_app, db
from pmgmt.models import Hotel

db.create_all(app=create_app())

import json
with open('hotel_data.json') as f:
	data = json.load(f)

#engine = create_engine('mysql+mysqldb://root:root@localhost:3306/test')
engine = create_engine('sqlite:///../test.db')

DBSession = sessionmaker(bind=engine)
# A DBSession() instance establishes all conversations with the database
# and represents a "staging zone" for all the objects loaded into the
# database session object. Any change made against the objects in the
# session won't be persisted into the database until you call
# session.commit(). If you're not happy about the changes, you can
# revert all of them back to the last commit by calling
# session.rollback()
session = DBSession()

for location in data:
	print('location:', location)
	for hotel in data[location]:
		hid = hotel['id']
		phone = hotel['display_phone']
		name = hotel['name']
		image_url = hotel['image_url']
		coordinates = str(hotel['coordinates']['latitude'])+', '+str(hotel['coordinates']['longitude'])
		rating = hotel['rating']
#		price = hotel['price']
		address = ", ".join([work for work in hotel['location']['display_address']])

		session.add_all([
			Hotel(hid=hid, phone=phone, name=name, image_url=image_url, coordinates=coordinates, location=location, address=address)
		])
	session.flush()
session.commit()

