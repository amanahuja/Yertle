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
  DOMAIN = 'amanahuja.me'
  #PORT = 5000
  PORT = int(os.environ.get('PORT', 5000))

class FlaskProductionConfig(FlaskConfig):
  TESTING = False
