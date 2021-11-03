export default async function getActivityId(requestOptions) {
    const data = {
        activity_name: requestOptions.activity
    }

    const response = await fetch(requestOptions.activity_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const jsonData = await response.json();
    if (jsonData.activity_id === -1) {
        requestOptions.setError("There is no such activity one week from today.")
        return
    }
    requestOptions.setError("Found activity_id.")
    requestOptions.setActivityId(jsonData.activity_id)

}