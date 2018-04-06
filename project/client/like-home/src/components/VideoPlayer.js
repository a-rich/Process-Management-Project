import React from 'react'
import { Component } from 'react'
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'
import MainBar from '../components/MainBar.js'

class VideoPlayer extends Component {

constructor() {
  super();

  this.state = {
    video:[
      {url: 'https://player.vimeo.com/external/260015882.hd.mp4?s=a1321e6df42f072dc1a0c62018580a2b2387f402&profile_id=174'},
      {url: 'https://player.vimeo.com/external/129589425.hd.mp4?s=31aae396844ad80fad322d9ccc29e9bd&profile_id=113'}
    ]
  }
}

  render() {
  return (
<div class="aspect-ratio-box">
    <div class="flexbox-centering">
          <ReactPlayer
          className='react-player'
          url= {this.state.video[0].url}
          height='100%'
          width='100%'
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
