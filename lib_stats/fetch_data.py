
import requests
from datetime import datetime
import os, csv
import json

from celery import Celery

celery = Celery(
  'tasks',
  broker='amqp://guest@localhost//',
  backend='mongodb://localhost',
  )

ROOT_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..'))
DATA_DIR = os.path.join(ROOT_DIR, 'data')

@celery.task(name = 'fetch.github')
def get_counts_from_github(libs = None):
  api_url = 'https://api.github.com/legacy/repos/search/'
  base_params = {}
  base_params['access_token'] = 'a42e699448514e8416403911667d30a8ca3179c7'

  if libs is None:  
    libs = get_list_of_libraries()

  lib_data = []

  for lib in libs:
    datum = get_lib_counts_from_api(api_url, lib, base_params = base_params, source='github')
    lib_data.append(datum)

  outfile = write_data_to_file(lib_data)

  return outfile

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

def get_list_of_libraries(file_path = None, size=None):
  if file_path is None:
    file_path = os.path.join(DATA_DIR, 'library_list.csv')

  list_of_libs = []
  
  instream = csv.reader(open(file_path, 'rb'))

  for row in instream: 
    list_of_libs.append(row[0].strip())

  if size is None: 
    return list_of_libs
  else:
    assert isinstance(size, int)
    return list_of_libs[:size]

def write_data_to_file(data):
  TIMESTAMP = get_timestamp()
  filename = 'libdata_{}.json'.format(TIMESTAMP)  
  filepath = os.path.join(DATA_DIR, filename)

  with open(filepath, 'wb') as outfile: 
    json.dump(data, outfile)

  return filepath
