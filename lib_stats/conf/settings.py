"""
Flask Configuration File

#http://flask.pocoo.org/docs/config/
"""
import os

class FlaskConfig(object):
  DEBUG = False

class FlaskTestConfig(FlaskConfig):
  TESTING = True
  DEBUG = True
  HOST = 'amanahuja.me'
  PORT = int(os.environ.get('PORT', 5000))

class FlaskProductionConfig(FlaskConfig):
  TESTING = False
