import React from "react";
import "./Message.css";

const MessageCard = (props) => {
    return (
        <div className="card">
      <div className="card-content">
        <h3>Message: <span className="card-message">
            {props.message.message}
        </span></h3>
        {/* <p>Timestamp: {props.message.timestamp}</p> */}
        
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