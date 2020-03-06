const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/messages`).then(result => result.json())
  },
//   delete(id) {
//     return fetch(`${remoteURL}/messages/${id}`, {
//       method: "DELETE"
//     }).then(result => result.json())
//   },
  post(newMessage) {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(data => data.json())
  },
//   update(editedMessage) {
//     return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(editedMessage)
//     }).then(data => data.json());
//   }
// getRandomId() {
//   return fetch(`${remoteURL}/messages`)
//     .then(result => result.json())
//     .then(messages => {
//       const randomIndex = Math.floor(Math.random() * messages.length);
//       console.log("randomIndex:", randomIndex)
//       const randomMessage = messages[randomIndex];
//       console.log("randomMessage:", randomMessage)
//       return randomMessage.id;
//     });
//   }
}