import React, { useState } from 'react';
import MessageManager from '../../modules/MessagesManager';
// import './MessageForm.css'

const MessageForm = props => {
  const [message, setMessage] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Message 
  object, invoke the MessageManager post method, and redirect to the full Message list */
  const constructNewMessage = evt => {
    evt.preventDefault();
    if (message.message === "" ) {
      window.alert("Please input a message🤪");
    } else {
      setIsLoading(true)
      // Create the message and redirect user to Message list to see all Messages including new one
      const newMessage = {
        message: message.message,
        timestamp: Date.now(),
        userId: 1
      }
      MessageManager.post(newMessage)
        .then(() => props.history.push("/messages"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="message"
              placeholder="Message..."
            />
            {/* <Timestamp date={Date} /> */}
          </div>
          
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewMessage}
            >Post</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default MessageForm