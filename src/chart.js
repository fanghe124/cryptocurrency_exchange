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
          return <div className="currName">{cur.name}</div>
        })}
      </div>
    );
  }
}

export default Chart;
