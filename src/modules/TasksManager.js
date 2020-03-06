const remoteURL = "http://localhost:5002";

export default {
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(resp => resp.json());
  },
  post(entry) {
    return fetch(`${remoteURL}/tasks`).then(resp => resp.json());
  }
};