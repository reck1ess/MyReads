import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchBooks, clearSearchResult } from '../actions';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

class Search extends Component {
  throttledSearch = query => {
    if (query.trim() === '') {
      this.props.clearSearchResult();
    } else {
      this.props.searchBooks(query);
    }
  };

  componentWillUnmount() {
    this.props.clearSearchResult();
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar throttledSearch={this.throttledSearch} />
        <SearchResult />
      </div>
    );
  }
}

export default connect(
  null,
  { searchBooks, clearSearchResult }
)(Search);
