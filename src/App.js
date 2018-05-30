import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chatlog from './components/Chatlog.js'


class App extends Component {
  render() {

    const messageComponents = chatMessages

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <Chatlog messages={messageComponents} />
        </main>
      </div>
    );
  }
}

export default App;
