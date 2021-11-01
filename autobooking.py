"""
Autobooking for SSIF slots. Checks for slots exactly one week ahead (the entire day).
Modify the credentials and activity_name variables.
"""

import requests as req
from datetime import timedelta, date
import time

credentials = {"username": "MY_USERNAME", "password": "MY_PASSWORD"}
activity_name = 'MY_ACTIVITY' # See activities.txt for correct activity_name

book_day = date.today() + timedelta(days=7)
login_url = "https://ssif.brpsystems.com/brponline/api/ver3/auth/login"
slots_url = "https://ssif.brpsystems.com/brponline/api/ver3/businessunits/1/groupactivities"
headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}


# Make an attempt once every minute
def main():
    with req.Session() as s:
        attempts = 1
        login_res = login(s)
        username = login_res['username']
        token = login_res['token']

        activity = get_activity(s)

        booking_url = f"https://ssif.brpsystems.com/brponline/api/ver3/customers/{username}/bookings/groupactivities"
        booking_payload = {'groupActivity': activity, 'allowWaitingList': 'false'}
        booking_headers = headers.copy()
        booking_headers['Authorization'] = token

        while book_activity(s, booking_url, booking_payload, booking_headers) != 201:
            print(f"Failed on attempt {attempts}...")
            attempts += 1
            time.sleep(60)
        else:
            print(f"Succeeded on attempt {attempts}.")


# Find the id using the activity name
def activity_id(data):
    res = -1
    num_slots = 0
    for i in range(len(data)):
        if data[i]['name'] == activity_name:
            num_slots += 1
            res = data[i]['id']
    if num_slots == 0:
        raise Exception(f"No slots found for {activity_name} on date {book_day.strftime('%Y-%m-%d')}")
    elif num_slots > 1:
        raise Exception(
            f"Multiple ({num_slots}) slots found for {activity_name} on date {book_day.strftime('%Y-%m-%d')}")
    else:
        return res


# POST login
def login(s):
    res = {}
    with req.Session() as s:
        r = s.post(login_url, json=credentials, headers=headers)
        if r.status_code != 200:
            raise Exception("Login resulted in an error. Make sure the credentials are correct.")
        res['username'] = r.json()['username']
        res['token'] = f"Bearer {r.json()['access_token']}"
    return res


def get_activity(s):
    # Get every slot on the day one week from today
    start_time = book_day.strftime('%Y-%m-%dT00:00:00.000Z')
    stop_time = book_day.strftime('%Y-%m-%dT23:59:59.000Z')

    # GET activities
    params = {'period.start': start_time, 'period.stop': stop_time, 'webCategory': 21}
    r = s.get(slots_url, params=params, headers=headers)
    assert r.status_code == 200
    if r.status_code != 200:
        raise Exception("Getting available activity slots resulted in an error.")
    return activity_id(r.json())


# Make POST payload using activity id and token
def book_activity(s, url, payload, booking_headers):
    r = s.post(url, json=payload, headers=booking_headers)
    print(f"Status code {r.status_code}")
    return r.status_code


if __name__ == "__main__":
    main()
