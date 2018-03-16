from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pmgmt import app, db
from pmgmt.models import Hotel
import json
import os

# Read in hotel data from Yelp
with open('hotel_data.json') as f:
	data = json.load(f)

# Initialize database
db.create_all(app=app)
engine = create_engine('sqlite:///../test.db')
DBSession = sessionmaker(bind=engine)
session = DBSession()

# Insert hotel data into SQLite database
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
			Hotel(hid=hid, phone=phone, name=name, image_url=image_url,
                    coordinates=coordinates, location=location, address=address)
		])
	session.flush()
session.commit()

# Move whoosh_index into the appropriate directory
if os.path.exists('whoosh_index'):
    os.rename('whoosh_index', '../whoosh_index')
else:
    print('No whoosh_index directory found.')
