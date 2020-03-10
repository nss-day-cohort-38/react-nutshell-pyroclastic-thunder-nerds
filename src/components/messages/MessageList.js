import React, { useState, useEffect } from 'react'; 
import MessageCard from './MessageCard';
import MessageManager from '../../modules/MessagesManager';
import '../messages/MessageList.css'

const MessageList = (props) => {
    const [messages, setMessages] = useState([]);    

    const getMessages = () => {
        return MessageManager.getAll().then(messagesFromAPI => {
        setMessages(messagesFromAPI)
    });
  };

  const deleteMessage = id => {
    MessageManager.delete(id)
      .then(() => MessageManager.getAll().then(setMessages));
  };

  useEffect(() => {
    getMessages();
  }, []);
  
  return (
    <>
    <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {props.history.push("/messages/new")}}>
      New Message
      </button>
    </section>
    
    <div className="message-container-cards">
      {messages.map(message =>
        <MessageCard
        key={message.id}
        message={message}
        deleteMessage={deleteMessage}
        {...props}
        />)}
        
    </div>
  </>
  );
};

export default MessageList