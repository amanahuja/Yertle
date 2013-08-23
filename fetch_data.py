
import requests
from datetime import datetime
import os

from celery import Celery

celery = Celery(
  'tasks',
  broker='amqp://guest@localhost//',
  backend='mongodb://localhost',
  )

@celery.task
def get_counts_from_github():
  api_url = 'https://api.github.com/legacy/repos/search/'

  libs = get_list_of_libraries()

  lib_data = []

  for lib in libs:
    datum = get_lib_counts_from_api(api_url, lib, base_params = {}, source='github')
    lib_data.append(datum)

  return lib_data

def get_lib_counts_from_api(base_api_url, library, base_params = {}, source='github'):
  """
  Get data on a particular library from API
  """
 
  #Build API request
  url = os.path.join(base_api_url, library)
  params = base_params

  results = []
  page = 1
  #append data from all pages to results
  while True:
    page_results = _get_lib_info(url, params, page=page)
    results += page_results
    page = page + 1
    if len(page_results) < 100: break
    if len(results) == 1000: break #MAX search results provided by API

  #parse results
  repo_count = len(results)
  followers = 0
  for r in results:
    followers += r['followers']
  

  #Contruct and return libinfo dict
  libinfo = {}
  libinfo['library_name'] = library
  libinfo['repo_system'] = source
  libinfo['TIMESTAMP'] = get_timestamp()
  libinfo['repo_count'] = repo_count
  libinfo['followers'] = followers

  return libinfo


def _get_lib_info(url, params={}, page = 1):

  params['start_page'] = page #This will be different for non-github sources

  #Make request
  try:
    r = requests.get(url, params=params)
    results = r.json()['repositories']    #This will be different for non-github sources
  except: 
    return []

  return results

def get_timestamp():
  return datetime.now().strftime('%Y-%m-%d')

def get_list_of_libraries():
  list_of_libs = [
      'appinst',
      'apptools',
      'basemap',
      'biopython',
      'bitarray',
      'blist',
      'blockcanvas',
      'bsdiff4',
      'casuarius',
      'chaco',
      'cloud',
      'codetools',
      'configobj',
      'coverage',
      ]
  return list_of_libs
