import _ from 'lodash';
import React, { Component } from 'react';

export default class GameTable extends Component {
  constructor(props) {
    super(props);
  }

  renderGames() {
    const collection = this.props.collection;
    return _.map(collection, game => {
      return (
        <tr key={game.gameId}>
          <td>{game.name}</td>
          <td>{game.yearPublished}</td>
          <td>{game.minPlayers} - {game.maxPlayers}</td>
          <td>{game.playingTime} mins</td>
          <td>{game.averageRating.toFixed(2)}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Players</th>
            <th>Time</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {this.renderGames()}
        </tbody>
      </table>
    )
  }
}
