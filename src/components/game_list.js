import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCollection, filterByOwned, resetFilters, filterByWishlist } from '../actions';

import '../style/game_list.css';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {user: ''};

    this.filterByOwned = this.filterByOwned.bind(this);
    this.filterByWishlist = this.filterByWishlist.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
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

  filterByOwned() {
    this.props.filterByOwned(this.props.collection);
    console.log("filtered - ", this.props.filteredCollection);
  }

  filterByWishlist() {
    this.props.filterByWishlist(this.props.collection);
  }

  resetFilters() {
    //this.props.resetFilters(this.props.collection);
    this.props.requestCollection();
  }

  render() {
    const collection = this.props.collection;
    console.log(collection);
    if (collection === undefined || collection.length === 0) {
      return <div>No games found!</div>
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm filters-container">
            {this.state.user} - Showing {collection.length} games
          </div>
          <div className="col-sm filters">
            <span>Filters:</span>
            <button className="btn btn-outline-secondary filters-button" onClick={this.filterByOwned}>Owned</button>
            <button className="btn btn-outline-secondary filters-button" onClick={this.filterByWishlist}>Wishlist</button>
            <button className="btn btn-outline-secondary filters-button" onClick={this.resetFilters}>reset</button>
          </div>
        </div>
        <div className="row">
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
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    collection: state.collection
  };
}

export default connect(mapStateToProps, { requestCollection, filterByOwned, filterByWishlist, resetFilters })(GameList);
