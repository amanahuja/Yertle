import os
from flask import Flask, render_template, Response
import requests
import json
from operator import itemgetter

ROOT_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..'))
DATA_DIR = os.path.join(ROOT_DIR, 'data')

app = Flask(__name__)

'''
=== Views == 
'''
@app.route('/')
def home():
    issues = get_issue_list()
    return render_template('index.html', issues=issues)

#@app.route('/<lib>')
#def detail(lib=None):
#    return render_template('lib_details.html', lib=lib)

@app.route('/get_data_1/')
def get_data_1():
  jsonfile = os.path.join(DATA_DIR, 'libdata_2013-08-31.json')

  with open(jsonfile, 'rb') as infile: 
    ddata = json.load(infile)

  jsondata = sorted(ddata,
      key = itemgetter('repo_count'), 
      reverse = True,
      )

  jsondata = json.dumps(jsondata)

  #Construct response with JSONdata
  resp = Response (jsondata, status=200, 
      mimetype='application/json')

  return resp

@app.route('/get_data_2/')
def get_data_2():
  jsonfile = os.path.join(DATA_DIR, 'libdata_2013-08-31.json')

  with open(jsonfile, 'rb') as infile: 
    ddata = json.load(infile)

  jsondata = sorted(ddata,
      key = itemgetter('followers'), 
      reverse = True,
      )

  jsondata = json.dumps(jsondata)

  #Construct response with JSONdata
  resp = Response (jsondata, status=200, 
      mimetype='application/json')

  return resp

'''
=== Helper functions == 
Can move these to seperate file
'''

def get_issue_list():
    root_url = 'https://api.github.com'
    url = root_url + '/repos/amanahuja/Yertle/issues'

    try: 
      r = requests.get(url)
      success_flag = True
    except:
      success_flag = False
    
    #Handle failure softly. 
    if ((success_flag is False) or r.status_code == 404):
      issue_list = [{
        'title': 'Issues not available',
        'body' : 'Could not retrieve issues from github', 
        }]
      return issue_list

    #Load results and continue on success
    results = json.loads(r.content)
    
    #If list is small, get closed issues as well.
    if len(results) < 5: 
        url = url + '?state=closed'
        r = requests.get(url)
        results = results + json.loads(r.content)    
    issue_list = []
    
    #limit dictionary
    for ii in results: 
        issue = {}
        issue['title'] = ii['title']
        issue['body'] = ii['body']
        issue['url'] = ii['html_url']
        issue['state'] = ii['state']
        issue_list.append(issue)
    
    return issue_list

def get_lib_list():
  pass

if __name__ == '__main__':
  """
  todo: Not running as module, so use Test Configuration
  """
  port = int(os.environ.get('PORT', 5000))
  app.debug = True
  app.run(host='amanahuja.me', port=port)
  #app.run(port=port)

