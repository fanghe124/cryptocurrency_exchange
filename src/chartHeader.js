import React, { Component } from 'react';
import './index.css';

/* render and handle chart headers */
class Chartheader extends Component {

  render() {
    const {rankClick, priceClick} = this.props;
    return (
      <div className="chartHeader">
          <div className="column0" onClick={rankClick}>Rank</div>
          <div className="column1">Currency</div>
          <div className="column2" onClick={priceClick}>Price</div>
          <div className="column3">Market Cap</div>
          <div className="column4">24 Hour Change</div>
      </div>
    )
  }
}

export default Chartheader;
