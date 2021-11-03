export default async function book(requestOptions) {
    const data = {
        activity_id: requestOptions.activityId,
        access_token: requestOptions.accessToken,
        username: requestOptions.userId
    }

    const response = await fetch(requestOptions.book_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const jsonData = await response.json();
    if (jsonData.status_code === "201") {
        requestOptions.setError("Successfully booked slot.")
        requestOptions.setIsRunning(false)
        return
    } else {
        requestOptions.setError("Failed attempt to book. Attempt number: " + requestOptions.attemptNumber)
        requestOptions.setAttemptNumber(requestOptions.attemptNumber + 1)
    }


}
