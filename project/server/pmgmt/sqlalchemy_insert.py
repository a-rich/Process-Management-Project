from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
 
from sqlalchemy_declarative import Address, Base, Person

import json
with open('testing.json') as f:
	data = json.load(f)
 
engine = create_engine('mysql+mysqldb://root:root@localhost:3306/test')
# Bind the engine to the metadata of the Base class so that the
# declaratives can be accessed through a DBSession instance
Base.metadata.bind = engine
 
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
	print("location:{0}".format(location))
#		print(type(hotel)); print(len(hotel))
	for hotel in data[location]:
#			print(type(r3)); print(r3.keys()); print(len(r3))
		hid = hotel['id']
		phone = hotel['display_phone']
		name = hotel['name']
		image_url = hotel['image_url']
		coordinates = str(hotel['coordinates']['latitude'])+', '+str(hotel['coordinates']['longitude'])
		rating = hotel['rating']
		price = hotel['price']
		address = hotel['location']['display_address']
		print(address)
session.buld_save_objects(hotels)
session.commit()

