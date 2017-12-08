import React, { Component } from 'react';
import Header from './header';
import Chart from './chart';
import axios from 'axios';

import './index.css';

class App extends Component {

  state = {
    data: []
  }


  componentDidMount = () => {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => {
        let data = res.data.map(obj => obj);
        this.setState({data});
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Chart data={this.state}/>
      </div>
    );
  }
}

export default App;
