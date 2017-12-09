import React, { Component } from 'react';
import './index.css';

/* render and handle chart headers */
class Chartheader extends Component {

  render() {
    const {rankClick, priceClick, changeClick, nameClick} = this.props;
    return (
      <div className="chartHeader">
          <div className="column0" onClick={rankClick}><p className="headText">Rank</p></div>
          <div className="column1" onClick={nameClick}><p className="headText">Currency</p></div>
          <div className="column2" onClick={priceClick}><p className="headText">Price</p></div>
          <div className="column3" onClick={rankClick}><p className="headText">Market Cap</p></div>
          <div className="column4" onClick={changeClick}><p className="headText">24 Hour Change</p></div>
      </div>
    )
  }
}

export default Chartheader;
