import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessagesManager";
// import "./MessageForm.css"

const MessageEditForm = props => {
  const [message, setMessage] = useState({ message: "", timestamp: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const updateExistingMessage = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedMessage = {
      id: props.match.params.messageId,
      message: message.message,
      timestamp: message.timestamp
    };

    MessageManager.update(editedMessage)
      .then(() => props.history.push("/messages"))
  }

  useEffect(() => {
    MessageManager.get(props.match.params.messageId)
      .then(message => {
        setMessage(message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="message">Message👇</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="message"
              value={message.message}
            />

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingMessage}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default MessageEditForm