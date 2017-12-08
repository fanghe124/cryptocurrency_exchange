import React, { Component } from 'react';
import './index.css';

class Chartheader extends Component {

  render() {
    return (
      <div className="chartHeader">
          <div className="column1">Currency</div>
          <div className="column2">Price</div>
          <div className="column3">Market Cap</div>
          <div className="column4">24 Hour Change</div>
      </div>
    )
  }
}

export default Chartheader;
