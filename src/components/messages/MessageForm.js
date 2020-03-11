import React, { useState } from 'react';
import MessageManager from '../../modules/MessagesManager';
import { Card, Input, Button } from 'reactstrap'
import './MessageForm.css'

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
            const stamp = new Date()
      setIsLoading(true)
      // Create the message and redirect user to Message list to see all Messages including new one
      const newMessage = {
        message: message.message,
        timestamp: stamp.toLocaleString(),
        userId: parseInt(sessionStorage.getItem("Active Id"))
      }
      MessageManager.post(newMessage)
        .then(() => props.history.push("/messages"));
    }
  };

  return (
    <>
    <div className="flex">
    <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
      <form>
        <fieldset>
          <div className="formgrid">
            <Input
              type="text"
              required
              onChange={handleFieldChange}
              id="message"
              placeholder="Message..."
            />
            {/* <Timestamp date={Date} /> */}
          </div>
          
          <div className="alignRight">
            <Button
              color="info"
              type="button"
              disabled={isLoading}
              onClick={constructNewMessage}
            >Post</Button>
          </div>
        </fieldset>
      </form>
      </Card>
      </div>
    </>
  );
};

export default MessageForm