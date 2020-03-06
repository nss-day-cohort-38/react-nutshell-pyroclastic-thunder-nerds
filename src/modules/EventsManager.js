const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/events`).then(response => response.json())
    },
    post(newEvent) {
        return fetch(`${baseURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(data => data.json())
    }
}