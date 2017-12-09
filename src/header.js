import React, { Component } from 'react';
import './index.css';
import CurrToggle from './currToggle';

class Header extends Component {
  render() {
    const {select, changeOption} = this.props;

    return(
      <div className='head_row'>
        <CurrToggle  select={select} changeOption={changeOption}/>
        CryptXchange
      </div>
    );
  }
}

export default Header;
