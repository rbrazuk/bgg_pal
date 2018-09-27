import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCollection, filterByOwned, resetFilters, filterByWishlist } from '../actions';
import FilterButton from './filter_button';
import GameTable from './game_table';

import '../style/game_list.css';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {user: ''};

    this.filterByOwned = this.filterByOwned.bind(this);
    this.filterByWishlist = this.filterByWishlist.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
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
            <FilterButton label="Owned"/>
            <FilterButton label="Wishlist"/>
            <FilterButton label="Reset"/>
          </div>
        </div>
        <div className="row">
          <GameTable collection={collection} />
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
