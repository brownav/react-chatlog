import React, { Component } from 'react';
import './Message.css';
import Timestamp from './Timestamp.js';

class Message extends Component {
  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = <Timestamp time={this.props.timeStamp}/>;

    this.isLocal = () => {
      return this.props.sender === 'Vladimir' ? 'local' : 'remote';
    };

    return (
      <article className={`chat-entry ${this.isLocal()}`}>
        <h3 className='entry-name'>{sender}</h3>
        <div className='entry-bubble'>
          <p className='entry-body'>{body}</p>
          <p className='entry-time'>{timeStamp}</p>
        </div>
      </article>
    );
  }
}

export default Message;
