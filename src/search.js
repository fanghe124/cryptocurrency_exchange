import React, { Component } from 'react';

class Search extends Component {

    handleChange = event => {
      const { searchChange } = this.props;
      const value = event.target.value;
      searchChange(value);
    }

    render() {
      const { searchTerm } = this.props;
      return (
        <form className="searchLabel">
          Search
          <input value={searchTerm} className="searchBox" onChange={this.handleChange}></input>
        </form>
      )
    }
}

export default Search;
