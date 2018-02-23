import React, { Component } from 'react';
import '../stylesheets/SearchBar.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
      }

      onIncrementClick = () => {
        this.setState(this.active = !this.active);
      }

    render() {
        return (
        <div id="wrap">
            <form action="" autocomplete="on">
                <input id="search" name="search" type="text" placeholder="What're we looking for ?"/>
                <input id="search_submit" value="Rechercher" type="submit"/>
            </form>
        </div>
        );
    }
}

export default SearchBar;