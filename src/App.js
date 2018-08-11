import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MailCard from './components/mailcard/MailCard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MailCard />
      </div>
    );
  }
}

export default App;
