import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import VideoPlayer from '../components/VideoPlayer';
import SearchBar from '../components/SearchBar'


class MainBar extends Component {

  render() {
 return(
  <div className="videoPlayer"> 
    <VideoPlayer/>
    <div className = "mainbar">
      <SearchBar/>
    </div>
  </div>
 )
}
};

export default MainBar;