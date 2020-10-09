import React from 'react';
import './SearchBoard.css';
import SearchBox from './SearchBox';

class SearchBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SearchBoard">
        <SearchBox handleSearchChange={this.props.handleSearchChange} handleSearchClick={this.props.handleSearchClick}/>
      </div>
    );
  }
}

export default SearchBoard;
