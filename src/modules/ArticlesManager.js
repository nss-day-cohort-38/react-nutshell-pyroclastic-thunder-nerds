const remoteUrl = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteUrl}/articles/${id}`).then(resp => resp.json())
    },
    getAll() {
        return fetch(`${remoteUrl}/articles`).then(resp => resp.json())
    },
    post(newArticle) {
        return fetch(`${remoteUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(data => data.json())
    },
    delete(id) {
        return fetch(`${remoteUrl}/articles/${id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
    },
    update(editedArticle) {
        return fetch(`${remoteUrl}/articles/${editedArticle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedArticle)
        }).then(resp => resp.json())
    }
}