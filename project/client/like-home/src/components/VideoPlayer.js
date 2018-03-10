import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'
import MainBar from '../components/MainBar.js';

class VideoPlayer extends Component {
  render() {
  return (
<div class="aspect-ratio-box">
    <div class="flexbox-centering">
          <ReactPlayer
          className='react-player'
          url='https://player.vimeo.com/external/129589425.hd.mp4?s=31aae396844ad80fad322d9ccc29e9bd&profile_id=113'
          height='100%'
          width='auto'
          playing='true'
          loop='true'
          muted='true'
        />
      </div>
</div>
    )
  }
};

export default VideoPlayer;
