export default async function login(requestOptions) {
    const data = {
        username: requestOptions.name,
        password: requestOptions.password
    }

    const response = await fetch(requestOptions.login_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const jsonData = await response.json();
    if (jsonData.username === "null" || jsonData.access_token === "null") {
        requestOptions.setError("Invalid email or password")
        return
    }
    requestOptions.setUserId(jsonData.username)
    requestOptions.setAccessToken(jsonData.access_token)
    document.getElementById("go-button").style.transition = "0.2s";
    document.getElementById("go-button").style.opacity = '0';
    requestOptions.setError("Successfully logged in.")
    setTimeout(() => {
        document.getElementById("go-button").style.opacity = '1';
        requestOptions.setIsRunning(true)
    }, 500)
}
