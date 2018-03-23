import React, { Component } from 'react';
import {CollectionView} from '../../components/CollectionView.js'
import './SearchResults.scss';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div class="searchResultContainer">
            <h2>SearchResults</h2>
            <CollectionView />
          </div>
        );
    }
}

export default SearchResults;