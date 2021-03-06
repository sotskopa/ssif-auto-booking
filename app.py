"""
Autobooking for SSIF slots. Checks for slots exactly one week ahead (the entire day).
"""

import requests as req
from datetime import timedelta, date
import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

login_url = "https://ssif.brpsystems.com/brponline/api/ver3/auth/login"
slots_url = "https://ssif.brpsystems.com/brponline/api/ver3/businessunits/1/groupactivities"
headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
booking_headers = headers.copy()


# Find the id using the activity name
def activity_id(data, name, book_date):
    res = {}
    num_slots = 0
    for i in range(len(data)):
        if data[i]['name'] == name:
            num_slots += 1
            res['activity_id'] = data[i]['id']
    if num_slots == 0 or num_slots > 1:
        return {'activity_id': -1}
    else:
        return res


# POST login
@app.route('/login', methods=['POST'])
def login():
    res = {'username': 'null', 'access_token': 'null'}
    with req.Session() as s:
        r = s.post(login_url, json=flask.request.get_json(), headers=headers)
        if r.status_code != 200:
            return res
        res['username'] = r.json()['username']
        res['access_token'] = f"Bearer {r.json()['access_token']}"
    return res


@app.route('/activity', methods=['POST'])
def get_activity():
    with req.Session() as s:
        # Get every slot on the day one week from today
        book_day = date.today() + timedelta(days=7, hours=1)
        start_time = book_day.strftime('%Y-%m-%dT00:00:00.000Z')
        stop_time = book_day.strftime('%Y-%m-%dT23:59:59.000Z')

        # GET activities
        params = {'period.start': start_time, 'period.stop': stop_time, 'webCategory': 21}
        r = s.get(slots_url, params=params, headers=headers)
        if r.status_code != 200:
            return {'activity_id': -1}
        return activity_id(r.json(), flask.request.get_json()['activity_name'], book_day)


# POST book
@app.route('/book', methods=['POST'])
def book_activity():
    with req.Session() as s:
        data = flask.request.get_json()
        url = f"https://ssif.brpsystems.com/brponline/api/ver3/customers/{data['username']}/bookings/groupactivities"
        payload = {'groupActivity': data['activity_id'], 'allowWaitingList': 'false'}
        booking_headers['Authorization'] = data['access_token']
        r = s.post(url, json=payload, headers=booking_headers)
        print(f"Status code {r.status_code}")
        return {'status_code': r.status_code}
