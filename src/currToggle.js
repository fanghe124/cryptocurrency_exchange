import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class CurrToggle extends Component {



  handleChange = (select) => {
    this.setState({ select });
    console.log(`Selected: ${select.label}`);
  }
  render() {
    const { select, changeOption } = this.props;
    console.log(select);
    return (

      <Select
        name="form-field-name"
        className="currMenu"
        value={select}
        onChange={() => {this.props.changeOption(select)}}
        options={[
          { value: 'USD', label: 'USD' },
          { value: 'BTC', label: 'BTC' },
        ]}
      />
    );
  }
}

export default CurrToggle;
