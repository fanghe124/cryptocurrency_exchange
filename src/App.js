import React, { Component } from 'react';
import Header from './header';
import Chart from './chart';
import axios from 'axios';
import './index.css';

class App extends Component {

  state = {
    data: [],
    priceStatus: 'a',
    changeStatus: 'a',
    nameStatus: 'a',
    selectedOption: 'USD'
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
  /* rank listings based on 24 change */
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
  /* implement feature to sort currency name by alphabetical order/reverse */
    nameClick = () => {
      let data = this.state.data.sort((a,b) => {
          const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();

            if (this.state.nameStatus === 'a') {
              this.setState({nameStatus:'b'});
              if (nameA < nameB)
                return -1;
              if (nameA > nameB)
                return 1;
            }
            else {
                this.setState({nameStatus:'a'});
                if (nameA > nameB)
                  return -1;
                if (nameA < nameB)
                  return 1;
            }
          return 0;
      });
      this.setState({data});
    }

    changeOption = (data) => {
      if (data === 'USD') {
        this.setState({
          selectedOption: 'BTC'
        });
      }
      else {
        this.setState({
          selectedOption: 'USD'
        });
      }

    }
  render() {
    console.log(this.state.selectedOption);
    return (
      <div className="App">
        <Header select={this.state.selectedOption} changeOption={this.changeOption}/>
        <Chart data={this.state} rankClick={this.rankClick}
          priceClick={this.priceClick} changeClick={this.changeClick} nameClick={this.nameClick}/>
      </div>
    );
  }
}

export default App;
