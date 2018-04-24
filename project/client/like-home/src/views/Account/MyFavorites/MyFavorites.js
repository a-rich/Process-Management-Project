import React, { Component } from 'react'
import './MyFavorites.scss'
import ListView from '../../../components/ListView'

class MyFavorites extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    }

  render() {
      return (
          <div class="MyFavoritesContainer">
              <h2>My Favorites</h2>
              <ListView />
          </div>
      );
  }
}

export default MyFavorites;
