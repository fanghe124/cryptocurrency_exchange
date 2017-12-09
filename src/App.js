import React, { Component } from 'react';
import Header from './header';
import Chart from './chart';
import axios from 'axios';
import './index.css';

class App extends Component {

  state = {
    data: [],
    priceStatus: 'a',
    changeStatus: 'a'
  }

  componentDidMount = () => {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => {
        let data = res.data.map(obj => obj);
        this.setState({data});
      });
  }
  /* reverse order of listings by rank */
  rankClick = () => {
    let data = this.state.data.reverse();
    this.setState({
      data
    });
  }
  /* rank price listings from low-high or high-low */
  priceClick = () => {
    let data = this.state.data.sort((a,b) => {
            if (this.state.priceStatus === 'a') {
              this.setState({priceStatus: 'b'});
              return a.price_usd - b.price_usd;
            }
            else {
              this.setState({priceStatus: 'a'});
              return b.price_usd - a.price_usd;
            }
    })
    this.setState({data});
  }

  changeClick = () => {
    let data = this.state.data.sort((a,b) => {
            if (this.state.changeStatus === 'a') {
              this.setState({changeStatus: 'b'});
              return a.percent_change_24h - b.percent_change_24h;
            }
            else {
              this.setState({changeStatus: 'a'});
              return b.percent_change_24h - a.percent_change_24h;
            }
    })
    this.setState({data});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Chart data={this.state} rankClick={this.rankClick} priceClick={this.priceClick} changeClick={this.changeClick}/>
      </div>
    );
  }
}

export default App;
