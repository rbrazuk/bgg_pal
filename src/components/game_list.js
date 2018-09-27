import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCollection, setCurrentUser } from '../actions';
import UserInfo from './user_info';
import FilterButton from './filter_button';
import GameTable from './game_table';

import '../style/game_list.css';

class GameList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const collection = this.props.collection;
    if (collection === undefined || collection.length === 0) {
      return <div>No colletion found for {this.props.user}!</div>
    }

    return (
      <div>
        <div className="row">
          <UserInfo user={this.props.currentUser} displayedCount={collection.length}/>
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
    collection: state.collection,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { requestCollection, setCurrentUser })(GameList);
