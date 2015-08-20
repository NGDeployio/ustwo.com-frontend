'use strict';

import React from 'react';
import map from 'lodash/collection/map';

import Flux from '../flux';

import SearchResultListItem from '../components/search-result-list-item';
import BlogControls from '../components/blog-controls';

export default class PageSearchResults extends React.Component {
  render() {
    const props = this.props;
    let outcomeText;
    let searchText;

    outcomeText = props.searchQuery;

    if (props.page) {
      if (Object.keys(props.page).length) {
        searchText = 'Clear search';
      } else {
        outcomeText = `No results found for ${props.searchQuery}`;
        searchText = 'Search again';
      }
    }

    return (
      <article className="page-search-results">
        <div className="search-results-header">
          <h1>{outcomeText}</h1>
          <BlogControls blogCategory={props.blogCategory}/>
        </div>
        <div className="clear-search"><button onClick={this.onClickReSearch}>{searchText}</button></div>
        <ul>{this.renderSearchResults(props.page)}</ul>
      </article>
    );
  }
  renderSearchResults(posts) {
    return map(posts, (post, index) => {
      return <SearchResultListItem data={post} />;
    });
  }
  onClickReSearch = (event) => {
    Flux.showSearch();
  }
};
