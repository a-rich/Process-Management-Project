from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pmgmt import create_app
from pmgmt.models import Hotel
app = create_app()

import json
with open('hotel_data.json') as f:
	data = json.load(f)
#print(data)

#engine = create_engine('mysql+mysqldb://root:root@localhost:3306/test')
engine = create_engine('sqlite:////tmp/test.db')
# Bind the engine to the metadata of the Base class so that the
# declaratives can be accessed through a DBSession instance
# Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
# A DBSession() instance establishes all conversations with the database
# and represents a "staging zone" for all the objects loaded into the
# database session object. Any change made against the objects in the
# session won't be persisted into the database until you call
# session.commit(). If you're not happy about the changes, you can
# revert all of them back to the last commit by calling
# session.rollback()
session = DBSession()

# Insert a Person in the person table
#new_person = Person(name='new person')
#session.add(new_person)
#session.commit()



for location in data:
	print('location:', location)
	for hotel in data[location]:
#		print(type(hotel), len(hotel))
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

