import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CurrToggle extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
      <Select
        name="form-field-name"
        className="currMenu"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        options={[
          { value: 'USD', label: 'USD' },
          { value: 'BTC', label: 'BTC' },
        ]}
      />
    );
  }
}

export default CurrToggle;
