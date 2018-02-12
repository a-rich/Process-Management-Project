import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Float, SmallInteger, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from sqlalchemy.sql import func
 
Base = declarative_base()
 
class User(Base):
    __tablename__ = 'user'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    password = Column(String(250), nullable=False)
 
class Hotel(Base):
    __tablename__ = 'hotel'
    # Here we define columns for the table address.
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    hid = Column(String(250), nullable=False)
    name = Column(Text, nullable=False)
    image_url = Column(Text)
    rating = Column(Float, nullable=False)
    coordinates = Column(String(250))
    price = Column(Float)
    tiers = Column(String(250))
    location = Column(String(250))
    address = Column(Text)
    phone = Column(String(20))

class Room(Base):
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

class Tier(Base):
    __tablename__ = 'tier'
    id = Column(Integer, primary_key=True)
    tier = Column(String(250))

class Reservation(Base):
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

# Create an engine that stores data in the local directory's
# sqlalchemy_example.db file.
engine = create_engine('mysql+mysqldb://root:root@localhost:3306/test', echo=True)
 
# Create all tables in the engine. This is equivalent to "Create Table"
# statements in raw SQL.
Base.metadata.create_all(engine)


