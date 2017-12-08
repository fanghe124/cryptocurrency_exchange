import React, { Component } from 'react';
import './index.css';
import Chartheader from './chartHeader';

class Chart extends Component {


  render() {
    const {data} = this.props;
    console.log(data);
    return (

      <div className="chart">
        <Chartheader />

        {data.data.map(cur => {
          return (
              <div>
                  <div className="currRank">{cur.rank}</div>
                  <div className="currName">{cur.name}</div>
                  <div className="currPrice">{cur.price_usd}</div>
                  <div className="currCap">{cur.market_cap_usd}</div>
                  <div className="currChange">{cur.percent_change_24h}</div>
                </div>)
        })}

      </div>
    );
  }
}

export default Chart;
