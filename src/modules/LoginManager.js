const remoteUrl = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${remoteUrl}/users`).then(resp => resp.json())
    },
    getUsers() {
        return fetch(`${remoteUrl}/users`).then(resp => resp.json())
    },
    getArticlesByUserId(userId) {
        return fetch(`${remoteUrl}/articles/${userId}`)
    }
}