import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCollection, filterByOwned } from '../actions';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.filterByOwned = this.filterByOwned.bind(this);
  }
  componentDidMount() {
    this.props.requestCollection();
  }

  renderGames() {
    const collection = this.props.collection;
    return _.map(collection, game => {
      return (
        <li className="list-group-item" key={game.gameId}>{game.name}</li>
      );
    })
  }

  filterByOwned() {
    this.props.filterByOwned(this.props.collection);
    console.log("filtered - ", this.props.filteredCollection);
  }

  render() {
    const collection = this.props.collection;
    console.log("props - ", this.props);
    if (collection === undefined || collection.length === 0) {
      return <div>No games found!</div>
    }

    return (
      <div className="row">
        <div className="col-sm">
          USERNAME - Showing {collection.length} games
        </div>
        <div className="col-sm">
          Filters: <button onClick={this.filterByOwned}>Owned</button>
        </div>
        <div>
          <ul className="list-group">
            {this.renderGames()}
          </ul>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collection: state.collection,
    filteredCollection: state.filteredCollection
  };
}

export default connect(mapStateToProps, { requestCollection, filterByOwned })(GameList);
