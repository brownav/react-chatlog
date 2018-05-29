import React, { Component } from 'react';
import './Message.css';
import Timestamp from './Timestamp.css';

class Message extends Component {
  render() {
    const person = this.props.person;
    const status = this.props.status;
    const time = this.props.time;

    return (
      <article>
        <h3>{person}</h3>
        <p>{status}</p>
        <p>{time}</p>
      </article>
    );
  }
}

export default Message;
