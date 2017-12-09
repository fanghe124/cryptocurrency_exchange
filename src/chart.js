import React, { Component } from 'react';
import './index.css';
import Chartheader from './chartHeader';


/* render and handle chart listings */
class Chart extends Component {
  render() {
    const {data, rankClick, priceClick, changeClick, nameClick} = this.props;

    return (
      <div className="chart">
      <Chartheader rankClick={rankClick} priceClick={priceClick} changeClick={changeClick} nameClick={nameClick}/>
        {data.data.map(cur => {
          return (
              <div>
                  <div className="currRank">{cur.rank}</div>
                  <div className="currName">{cur.name}({cur.symbol})</div>
                  <div className="currPrice">${cur.price_usd}</div>
                  <div className="currCap">${cur.market_cap_usd}</div>
                  <div className="currChange">{cur.percent_change_24h}%</div>
              </div>)
        })}
      </div>
    );
  }
}

export default Chart;
