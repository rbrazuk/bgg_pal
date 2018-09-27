import React, { Component } from 'react';
import { requestCollection, setCurrentUser } from '../actions'
import { connect } from 'react-redux';

import '../style/search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.requestCollection(this.state.term);
    this.props.setCurrentUser(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div className="row search-container">
        <form className="form-inline search-form" onSubmit={this.onFormSubmit}>
          <input
            className="form-control"
            type="text" value={this.state.term}
            onChange={this.onInputChange}
            placeholder="enter BGG username" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    collection: state.collection
  };
}

export default connect(mapStateToProps, { requestCollection, setCurrentUser })(Search);
