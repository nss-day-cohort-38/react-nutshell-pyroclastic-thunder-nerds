import React, { useState, useEffect } from 'react'; 
import MessageCard from './MessageCard';
import MessageManager from '../../modules/MessagesManager';
import { Button } from 'reactstrap'
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
      <Button type="button"
      color="primary"
      className="btn3"
      onClick={() => {props.history.push("/messages/new")}}>
      New Message
      </Button>
    </section>
    
    {/* vvv Pulls in Card to display in List vvv */}
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