import React, { Component } from 'react';
import './Chatlog.css';
import Message from './Message.js';

class Chatlog extends Component {
  render() {
    const messages = this.props.messages;
    console.log(messages);

    const messageComponents = messages.map((message) => {
      return (
        <Message
          key={message.timeStamp}
          body={message.body}
          sender={message.sender}
          timeStamp={message.timeStamp}
        />
      )
    })

    return (
      <section className='chat-log'>
        {messageComponents}
      </section>
    );
  }
}

export default Chatlog;
