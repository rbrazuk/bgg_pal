import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-inline row">
        <input className="form-control" type="text" />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

    )
  }
}

function mapStateToProps(state) {
  return {collection: state.collection};
}

export default Search;
