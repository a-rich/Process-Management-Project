import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'
import MainBar from '../components/MainBar.js';

class VideoPlayer extends Component {
  render() {
  return (
<h1 class="aspect-ratio-box">
    <div class="flexbox-centering">
          <ReactPlayer
          className='react-player'
          url='https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/917/5/129589425/375054934.mp4?token=1520643030-0xe2131c5be2ea4ebd18509256a50e32cfdc425c68'
          height='100%'
          width='auto'
          playing='true'
          loop='true'
          muted='true'
        />
      </div>
</h1>
    )
  }
};

export default VideoPlayer;
