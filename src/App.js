import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/search';
import GameList from './components/game_list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <GameList filter='owned' />
      </div>

    );
  }
}

export default App;
