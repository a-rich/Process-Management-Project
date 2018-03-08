from sqlalchemy import Column, ForeignKey, Integer, String, Float, SmallInteger, DateTime, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from pmgmt import db, ma, whooshee

class User(db.Model):
    __tablename__ = 'user'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)

    class UserSchema(ma.ModelSchema):
        class Meta:
            def __init__(self):
                model = self.Outer.Outer

@whooshee.register_model('location')
class Hotel(db.Model):
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    hid = Column(String(250), nullable=False)
    name = Column(Text)
    image_url = Column(Text)
    rating = Column(Float)
    coordinates = Column(String(250))
    price = Column(Float)
    tiers = Column(String(250))
    location = Column(String(250))
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
    tiers = Column(String(250))
    location = Column(String(250))
    phone = Column(String(250))

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
