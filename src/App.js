import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameList from './components/game_list';

class App extends Component {
  render() {
    return (
      <GameList />
    );
  }
}

export default App;
