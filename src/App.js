import React, { Component } from 'react';
import Header from './header';
import Chart from './chart';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chart />
      </div>
    );
  }
}

export default App;
