import React, { Component } from 'react';
import './App.scss';

import Piano from './Components/Piano';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{'Virtual Piano'}</h1>
        <Piano startingNote="C"/>
      </div>
    );
  }
}

export default App;
