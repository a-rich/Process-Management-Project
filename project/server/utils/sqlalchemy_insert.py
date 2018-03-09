from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pmgmt import app, db
from pmgmt.models import Hotel, Tier, Room
import random
import os

db.create_all(app=app)

import json
with open('hotel_data.json') as f:
    data = json.load(f)

#engine = create_engine('mysql+mysqldb://root:root@localhost:3306/test')
engine = create_engine('sqlite:///../test.db')

DBSession = sessionmaker(bind=engine, autocommit=False)
# A DBSession() instance establishes all conversations with the database
# and represents a "staging zone" for all the objects loaded into the
# database session object. Any change made against the objects in the
# session won't be persisted into the database until you call
# session.commit(). If you're not happy about the changes, you can
# revert all of them back to the last commit by calling
# session.rollback()
session = DBSession()

hotel_prices = ["$", "$$", "$$$", "$$$$", "$$$$$"]
states = {'ca': 'california', 'nv': 'nevada', 'il': 'illinois', 'ny':'new york', 'fl': 'florida', 'tx': 'texas', 'dc': 'washington dc'}


numbersOfRoomForEachTier = 3
#print(numbersOfRoomForEachTier)

tier = Tier(tier="Single");session.add(tier)
tier = Tier(tier="Double");session.add(tier)
tier = Tier(tier="Queen");session.add(tier)
tier = Tier(tier="King");session.add(tier)
tier = Tier(tier="Suite");session.add(tier)
session.commit()

for location in data:
    print('location:', location)
    for hotel in data[location]:
        hid = hotel['id']
        phone = hotel['display_phone']
        name = hotel['name']
        image_url = hotel['image_url']
        coordinates = str(hotel['coordinates']['latitude'])+', '+str(hotel['coordinates']['longitude'])
        rating = str(hotel['rating'])
        price = random.choice(hotel_prices)
        address = ", ".join([work for work in hotel['location']['display_address']])
        city_state = location.rsplit(' ', 1)
        city = city_state[0]
        state = city_state[1]
        if state in states:
            state = states[state]

        h = Hotel(hid=hid, rating=rating, phone=phone, name=name,
                image_url=image_url, coordinates=coordinates,
                city=city, state=state, address=address, price=price)

        session.add(h)
        session.flush()
        #print(h.id)

        for i in range(1, len(price)+1):
            #print(len(price))
            session.add_all([
                Room(hotel_id=h.id, tier=i)
                for j in range(1, numbersOfRoomForEachTier+1)
            ])
            session.flush()

session.commit()

# Move whoosh_index into the appropriate directory
if os.path.exists('whoosh_index'):
    os.rename('whoosh_index', '../whoosh_index')
else:
    print('No whoosh_index directory found.')
