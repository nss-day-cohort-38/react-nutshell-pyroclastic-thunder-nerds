const remoteUrl = "http://localhost:5002"

export default {
    post(newUser) {
        return fetch(`${remoteUrl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    }
}