import React, {Component} from 'react';

export default props => {
  return (
    <div className="row">
      <div className={`grid-desktop-${props.size || 12} text-center`}>
        <i className="fa fa-spinner fa-pulse fa-3x"></i>
      </div>
    </div>
  );
}
