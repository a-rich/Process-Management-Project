from sqlalchemy import Column, ForeignKey, Integer, String, Float, SmallInteger, Date, DateTime, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from pmgmt import db, ma

class User(db.Model):
    __tablename__ = 'user'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
    reward = Column(Integer)


class Hotel(db.Model):
    __tablename__ = 'hotel'
    __searchable__ = ['name', 'location']
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    hid = Column(String(250), nullable=False)
    name = Column(Text)
    image_url = Column(Text)
    rating = Column(Float)
    coordinates = Column(String(250))
    price = Column(String(50))
    tiers = Column(String(250))
    location = Column(String(250))
    city = Column(String(250))
    state = Column(String(250))
    address = Column(Text)
    phone = Column(String(20))


class Room(db.Model):
    __tablename__ = 'room'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    hotel_id = Column(Integer, ForeignKey('hotel.id'))
    hotel = relationship(Hotel)
    price = Column(Float)
    tier = Column(String(250))
    vacant = Column(SmallInteger, default=0)
    created_date = Column(DateTime(timezone=True), server_default=func.now())


class Tier(db.Model):
    __tablename__ = 'tier'
    id = Column(Integer, primary_key=True)
    tier = Column(String(250))


class Reservation(db.Model):
    __tablename__ = 'reservation'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)
    hotel_id = Column(Integer, ForeignKey('hotel.id'))
    hotel = relationship(Hotel)
    room_id = Column(Integer, ForeignKey('room.id'))
    room = relationship(Room)
    active = Column(SmallInteger)
    created_date = Column(DateTime(timezone=True), server_default=func.now())
    updated_date = Column(DateTime(timezone=True), server_default=func.now())
    start_date = Column(Date)
    end_date = Column(Date)

    #class ReservationSchema(ma.ModelSchema):
        #class Meta:
            #def __init__(self):
                #model = self.Outer.Outer

    #reservations_schema = ReservationSchema(many=True)


class Reward(db.Model):
    __tablename__ = 'reward'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)
    reservation_id = Column(Integer, ForeignKey('reservation.id'))
    reservation = relationship(Reservation)
    alter = Column(Integer)
    reward = Column(Integer)
    active = Column(SmallInteger)
    created_date = Column(DateTime(timezone=True), server_default=func.now())

class State(db.Model):
    __tablename__ = 'state'
    id = Column(Integer, primary_key=True)
    name = Column(String(50))

class City(db.Model):
    __tablename__ = 'city'
    id = Column(Integer, primary_key=True)
    state_id = Column(Integer, ForeignKey('state.id'))
    state = relationship(State)
    name = Column(String(50))
