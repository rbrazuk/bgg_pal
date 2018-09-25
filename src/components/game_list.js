import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCollection } from '../actions';

class GameList extends Component {
  componentDidMount() {
    this.props.requestCollection();
  }

  renderGames() {
    return _.map(this.props.collection, game => {
      return (
        <li className="list-group-item" key={game.gameId}>{game.name}</li>
      );
    })
  }

  render() {
    console.log(this.props.collection);
    return (
      <div className="container">
      <ul className="list-group">
        {this.renderGames()}
      </ul>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {collection: state.collection};
}

export default connect(mapStateToProps, { requestCollection })(GameList);
