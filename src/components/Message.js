import React, { Component } from 'react';
import './Message.css';
import Timestamp from './Timestamp.js';

class Message extends Component {
  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = <Timestamp time={this.props.timeStamp}/>;

    return (
      <article>
        <h3>{sender}</h3>
        <p>{body}</p>
        <p>{timeStamp}</p>
      </article>
    );
  }
}

export default Message;
