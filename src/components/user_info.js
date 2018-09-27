import React from 'react';

export default (props) => {
  if (!props.user || !props.displayedCount) {
    return null;
  }

  return(
    <div className="col-sm filters-container">
      Showing {props.displayedCount} games in {props.user}&apos;s collection
    </div>
  )
}
