import os
from flask import Flask
from flask import render_template
import requests
import simplejson as json

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

'''
=== Helper functions == 
Can move these to seperate file
'''
def get_issue_list():
    root_url = 'https://api.github.com'
    url = root_url + '/repos/amanahuja/lib-stats/issues'
    r = requests.get(url)
    results = json.loads(r.content)
    issue_list = []
    for ii in results: 
        issue_list.append(ii['body'])
    return issue_list

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)