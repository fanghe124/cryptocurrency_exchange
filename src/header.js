import React, { Component } from 'react';
import './index.css';
import CurrToggle from './currToggle';

class Header extends Component {
  render() {
    return(
      <div className='head_row'>
        <CurrToggle  />
        CryptXchange
      </div>
    );
  }
}

export default Header;
