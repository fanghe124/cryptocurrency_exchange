import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CurrToggle extends Component {

  render() {
    const { select, changeOption } = this.props;

    return (
      <Select
        name="form-field-name"
        className="currMenu"
        value={select}
        onChange={changeOption}
        options={[
          { value: 'USD', label: 'USD' },
          { value: 'BTC', label: 'BTC' },
        ]}
      />
    );
  }
}

export default CurrToggle;
