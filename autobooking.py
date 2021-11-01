"""
Autobooking for SSIF slots. Checks for slots exactly one week ahead (the entire day).
Modify the credentials and activity_name variables.
"""

import requests as req
from datetime import timedelta, date
import time

credentials = {"username": "MY_USERNAME", "password": "MY_PASSWORD"}
activity_name = 'MY_ACTIVITY' #See activities.txt for correct activity_names

book_day = date.today() + timedelta(days=7)
login_url = "https://ssif.brpsystems.com/brponline/api/ver3/auth/login"
slots_url = "https://ssif.brpsystems.com/brponline/api/ver3/businessunits/1/groupactivities"
headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}
booking_headers = headers.copy()


# Make an attempt once every minute
def main():
    attempts = 1
    while try_to_book() != 201:
        print(f"Failed on attempt {attempts}")
        attempts += 1
        time.sleep(60)
    else:
        print(f"Succeeded on attempt {attempts}")


def try_to_book():
    with req.Session() as s:

        # POST login
        r = s.post(login_url, json=credentials, headers=headers)
        if r.status_code != 200:
            raise Exception("Login resulted in an error. Make sure the credentials are correct.")
        username = r.json()['username']
        token = f"Bearer {r.json()['access_token']}"

        # Get every slot on the day one week from today
        start_time = book_day.strftime('%Y-%m-%dT00:00:00.000Z')
        stop_time = book_day.strftime('%Y-%m-%dT23:59:59.000Z')

        # GET activities
        params = {'period.start': start_time, 'period.stop': stop_time, 'webCategory': 21}
        r = s.get(slots_url, params=params, headers=headers)
        assert r.status_code == 200
        if r.status_code != 200:
            raise Exception("Getting available activity slots resulted in an error.")

        # Make POST payload using activity id and token
        activity = activity_id(r.json())
        booking_url = f"https://ssif.brpsystems.com/brponline/api/ver3/customers/{username}/bookings/groupactivities"
        booking_payload = {'groupActivity': activity, 'allowWaitingList': 'false'}
        booking_headers['Authorization'] = token
        r = s.post(booking_url, json=booking_payload, headers=booking_headers)

        print(f"Status code {r.status_code}")
        return r.status_code


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
        raise Exception(f"Multiple ({num_slots}) slots found for {activity_name} on date {book_day.strftime('%Y-%m-%d')}")
    else:
        return res


if __name__ == "__main__":
    main()
