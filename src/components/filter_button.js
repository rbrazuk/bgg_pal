import React from 'react';

export default (props) => {
  return (
    <button
      className="btn btn-outline-secondary filters-button"
      onClick={this.filterByOwned}>{props.label}</button>
  )
}
