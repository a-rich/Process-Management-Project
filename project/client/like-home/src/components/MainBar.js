import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import { Player } from 'video-react';


class MainBar extends Component {	
  render() {
  return (
    <Player>
     <source src ="/assets/Turkey.mp4"/>
    </Player>
  );
}
};
	