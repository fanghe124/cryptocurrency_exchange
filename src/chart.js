import React, { Component } from 'react';
import './index.css';
import Chartheader from './chartHeader';


/* render and handle chart listings */
class Chart extends Component {

  render() {
    const {data, rankClick, priceClick, changeClick, nameClick, selectedOption} = this.props;

    return (
      <div className="chart">
      <Chartheader rankClick={rankClick} priceClick={priceClick}
        changeClick={changeClick} nameClick={nameClick}/>
        {data.data.map(cur => {
          return (
              <div>
                  <div className="currRank">{cur.rank}</div>
                  <div className="currName">{cur.name}({cur.symbol})</div>
                  {
                    selectedOption === 'BTC' ?
                    <div className="currPrice">${cur.price_btc}</div> :
                    <div className="currPrice">${cur.price_usd}</div>
                  }

                  <div className="currCap">${cur.market_cap_usd}</div>
                  {
                    cur.percent_change_24h >= 0 ?
                    <div className="currChange">{cur.percent_change_24h}%</div> :
                    <div className="currChange2">{cur.percent_change_24h}%</div>
                  }
              </div>)
        })}
      </div>
    );
  }
}

export default Chart;
