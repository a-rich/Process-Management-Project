import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {	
  render() {
  return (
<h1 class="aspect-ratio-box">
    <div class="flexbox-centering">
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=7A1q7v4btbk'
          width='100%'
          height='100%'
          playing='true'
          loop='true'
        />
      </div>
</h1>
    )
  }
};

export default VideoPlayer;