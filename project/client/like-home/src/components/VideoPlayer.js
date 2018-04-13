import React from 'react'
import { Component } from 'react'
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'
import MainBar from '../components/MainBar.js'
import chevron from '../assets/chevron.png'
import scrollToComponent from 'react-scroll-to-component'
import video from '../LikeHome.mp4'

class VideoPlayer extends Component {

constructor() {
  super();

  this.state = {
    video:[
      {url: video},
      {url: 'https://1drv.ms/v/s!AlXqOfVdb_VBnvcl9sUnATToQtioZg'},
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
      <div class="navarrow">
            <button class="navarrowbutton bounce" ><img src= {chevron} onClick={() => scrollToComponent(this.Bottom, { offset: 0, align: 'top', duration: 500})} /></button>
      </div>
      <section className='bottom' ref={(section) => { this.Bottom = section; }}></section>
    </div>
    )
  }
};

export default VideoPlayer;
