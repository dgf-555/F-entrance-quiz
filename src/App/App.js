import React, { Component } from 'react';
import './App.scss';
import PersonList from '../components/personlist/PersonList'

class App extends Component {
  
  render() {
    return (
      <div data-testid="app" className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
