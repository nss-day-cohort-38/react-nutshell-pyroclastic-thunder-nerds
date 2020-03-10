const remoteURL = "http://localhost:5002";

export default {
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(resp => resp.json());
  },
  get(taskId) {
    return fetch(`${remoteURL}/tasks/${taskId}`).then(resp => resp.json());
  },
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });
  },
  delete(taskId) {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  update(updatedTask, taskId) {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    });
  }
};
