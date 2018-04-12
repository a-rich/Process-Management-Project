import React from 'react'
import { Component } from 'react'
import '../stylesheets/Home.scss'
import ReactPlayer from 'react-player'
import MainBar from '../components/MainBar.js'
import chevron from '../assets/chevron.png'
import scrollToComponent from 'react-scroll-to-component'

class VideoPlayer extends Component {

constructor() {
  super();

  this.state = {
    video:[
      {url: 'https://gcs-vimeo.akamaized.net/exp=1523323957~acl=%2A%2F955721028.mp4%2A~hmac=07e03f87b0eabf7d5c3ca9755c3c4ccc7eb80d8421f9a4f6467b646d34173e1a/vimeo-prod-skyfire-std-us/01/2003/10/260015882/955721028.mp4'},
      {url: 'https://gcs-vimeo.akamaized.net/exp=1523323963~acl=%2A%2F375054934.mp4%2A~hmac=adf01a4a4b6e04716ebc5da9ae76d38426ec542ce883811a9da82257a16e2470/vimeo-prod-skyfire-std-us/01/917/5/129589425/375054934.mp4'}
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
