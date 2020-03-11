const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/events?userId=${parseInt(sessionStorage.getItem("Active Id"))}`).then(response => response.json())
    },
    post(newEvent) {
        return fetch(`${baseURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${baseURL}/events/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    update(editedEvent) {
        return fetch(`${baseURL}/events/${editedEvent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(data => data.json())
    },
    get(id) {
        return fetch(`${baseURL}/events/${id}`).then(result => result.json())
    }
}