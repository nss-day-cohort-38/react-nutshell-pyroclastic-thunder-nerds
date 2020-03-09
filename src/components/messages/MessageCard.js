import React from "react";
import "./Message.css";

// Use of Date.now() function 

  
// Converting the number of millisecond in date string 


// Printing the current date                     
  
// const milliseconds = Date(Date.now()); 
// dateTime = milliseconds.toString()
// document.write(dateTime) 

const MessageCard = (props) => {
    return (
        <div className="message-card">
      <div className="message-card-content">
        <h3>Message: <span className="card-message">
            {props.message.message}
        </span></h3>
        <p>{props.message.timestamp}</p>

        <button type="button" onClick={() => 
        props.history.push(`/messages/${props.message.id}/edit`)}>
            Edit
        </button>

        <button type="button" onClick={() => 
        props.deleteMessage(props.message.id)}>
            Delete
        </button>
      </div>
    </div>
  );
}

export default MessageCard