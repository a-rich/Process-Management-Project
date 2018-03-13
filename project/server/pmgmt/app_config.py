from datetime import timedelta

class DevelopmentConfig():
    DEBUG = True
    SERIALIZATION_KEY = ">3cRMsB,;+0X`(Ow"
    JWT_SECRET_KEY = "sX$Uk$5yWR2.HN'F"
    JWT_EXPIRES = timedelta(days=365)
    EMAIL_AUTH = "gffk68TdPt0dttmu"
    SQLALCHEMY_DATABASE_URI = 'sqlite:///../test.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
