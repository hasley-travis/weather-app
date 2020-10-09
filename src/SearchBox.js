import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleKeyDown.bind(this);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') this.props.handleSearchClick();
  }

  render() {
    return (
      <div className="SearchBox">
        <div className="InputContainer">
          <input className="input1" placeholder="Search by location" onChange={ this.props.handleSearchChange } onKeyPress={this.handleKeyDown}/>
          <button className="button1" onClick={this.props.handleSearchClick}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
